<template>
    <div style="display: flex; justify-content: center;">
        <div id="pie-chart" style="width: 100vw; height: 50vh;"></div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tableItems: [],
            tableHeaders: [],
            SQL_statement: 'PLACEHOLDER_SQL_STATEMENT',
        };
    },

    mounted() {
        this.fetch_data_from_database(this.SQL_statement)
            .then(([tableHeaders, tableItems]) => {
                this.tableHeaders = tableHeaders;
                this.tableItems = tableItems;
                this.prepare_data_for_pie_chart(tableHeaders, tableItems)
                    .then(chartData => {
                        this.render_pie_chart(chartData);
                    });
            });
    },

    methods: {
        fetch_data_from_database(SQL_statement) {
            return axios.post('https://nl2sql-prod.azurewebsites.net/execute_sql', {query: SQL_statement})
                .then(response => {
                    const tableItems = response.data.result;
                    if (tableItems.length > 0){
                        const tableHeaders = Object.keys(tableItems[0]);
                        this.tableItems = tableItems;
                        this.tableHeaders = tableHeaders;
                        return [tableHeaders, tableItems];
                    } else {
                        return [[], []]; // Return empty arrays if no data
                    }
                })
                .catch(error => {
                    console.error("Error fetching data from database:", error);
                    return [[], []]; // Return empty arrays in case of error
                });
        },

        prepare_data_for_pie_chart(tableHeaders, tableItems) {
            return new Promise((resolve, reject) => {
                let seriesData = [];
                let xAxisCandidate = null;
                let yAxisCandidate = null;

                // Find X-axis candidate
                for (let header of tableHeaders) {
                    let hasNonEmptyStringValues = tableItems.some(item => typeof item[header] === "string" && item[header] !== "" && !item[header].startsWith('{') && !item[header].startsWith('(') && !item[header].startsWith('['));
                    if (hasNonEmptyStringValues) {
                        xAxisCandidate = header;
                        console.log('X-axis candidate:', xAxisCandidate);
                        break;
                    }
                }

                if (!xAxisCandidate) {
                    console.log('Unable to find suitable X-axis data. Returning empty chart data.');
                    resolve({ seriesData: [], xAxisCandidate: null, yAxisCandidate: null });
                    return;
                }

                // Find Y-axis candidate
                for (let header of tableHeaders) {
                    if (header !== xAxisCandidate && yAxisCandidate === null) {
                        let hasNumericOrParsableValues = tableItems.some(item => {
                            let value = item[header];
                            return typeof value === "number" || (typeof value === "string" && !isNaN(parseFloat(value)) && !value.startsWith('0x'));
                        });
                        if (hasNumericOrParsableValues) {
                            yAxisCandidate = header;
                            console.log('Y-axis candidate:', yAxisCandidate);
                            break;
                        }
                    }
                }

                if (!yAxisCandidate) {
                    console.log('Unable to find suitable Y-axis data. Returning empty chart data.');
                    resolve({ seriesData: [], xAxisCandidate: null, yAxisCandidate: null });
                    return;
                }

                // Prepare series data
                for (let header of tableHeaders) {
                    if (header !== xAxisCandidate && header === yAxisCandidate) {
                        let series = { name: header, type: 'pie', data: [] };

                        for (let item of tableItems) {
                            let yValue = item[header];
                            if (typeof yValue === "number") {
                                series.data.push({ value: yValue, name: item[xAxisCandidate] });
                                console.log(`Adding numeric value ${yValue} to series data.`);
                            } else if (typeof yValue === "string" && !isNaN(parseFloat(yValue)) && !yValue.startsWith('0x')) {
                                let parsedValue = parseFloat(yValue);
                                series.data.push({ value: parsedValue, name: item[xAxisCandidate] });
                                console.log(`Adding parsed value ${parsedValue} to series data.`);
                            } else {
                                console.log(`Skipping value ${yValue} for series data.`);
                            }
                        }

                        seriesData.push(series);
                    }
                }

                resolve({ seriesData, xAxisCandidate, yAxisCandidate });
            });
        },

        render_pie_chart(chartData) {
            if (!chartData.seriesData || chartData.seriesData.length === 0) {
                console.warn("No data available to render pie chart.");
                return;
            }

            let pieChart = echarts.init(document.getElementById('pie-chart'), 'dark');

            let option = {
                tooltip: { trigger: 'item' },
                legend: { orient: 'vertical', left: '1%', top: '20%', itemGap: 10, textStyle: { color: '#fff' } },
                series: chartData.seriesData
            };

            pieChart.setOption(option);
        }
    }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
