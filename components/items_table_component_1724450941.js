<!-- 
Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
-->

<template>
    <section id="items-table-component" class="py-8 bg-white">
        <h2 id="costs-title" class="text-lg font-semibold mb-5">Your Toilet Paper Selection</h2>
        <div id="costs-table-container" class="overflow-x-auto">
            <table id="costs-table" class="table-auto w-full text-sm">
                <thead class="sr-only">
                    <tr>
                        <th id="description-header">Description</th>
                        <th id="cost-header" scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity after:bg-slate-200 dark:after:bg-slate-800">
                            <div class="font-semibold mb-0.5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >Soft Cloud Ultra</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800">3-ply, extra soft for ultimate comfort</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_→'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$4.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg">
                            <div class="font-semibold mb-0.5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Eco-Friendly Bamboo Roll</a>
                            </div>
                            <p>Sustainable and gentle on skin</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_→'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$6.49</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg">
                            <div class="font-semibold mb-0.5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Budget Basics</a>
                            </div>
                            <p>Affordable option for everyday use</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_→'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$2.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg">
                            <div class="font-semibold mb-0.5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Quilted Comfort Plus</a>
                            </div>
                            <p>Thick and absorbent for less waste</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_→'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$5.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg">
                            <div class="font-semibold mb-0.5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Luxury 4-Ply Premium</a>
                            </div>
                            <p>Spa-like experience for discerning users</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_→'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%" id="costs-cell-cost-5 after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$8.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg">
                            <div class="font-semibold mb-0.5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Bulk Buy Bundle</a>
                            </div>
                            <p>Family-size pack for long-term savings</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_→'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$19.99</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th id="total-description" scope="row" class="relative text-left font-normal px-4 py-5">
                            <p id="total-description-text" class="italic text-slate-500">TOT in USD dollar</p>
                        </th>
                        <td id="total-cost" class="relative font-semibold text-right text-base underline px-4 py-5 w-[1%] text-emerald-500"> Total: $49.44</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: "items_table_component_1724450941",
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>
/* Add relevant styles here if needed */
</style>
