<template>
    <!-- Summary: Contains a section with three cards with glassmorphic effect and neon color scheme. -->
    <section id="page-details-cards-component" class="py-8 bg-gradient-to-br from-pink-500 to-purple-600 min-h-230px">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4 text-white">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
                <div class="font-medium text-pink-300">Variety</div>
                <div class="text-white">Discover a wide range of toilet paper options, from ultra-soft to eco-friendly.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
                <div id="start-date-des-1" class="font-medium text-pink-300">Convenience</div>
                <time id="start-time-des-1" class="text-white">Order from the comfort of your home and enjoy fast, discreet delivery to your doorstep.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
                <div id="end-date-des-1" class="font-medium text-pink-300">Savings</div>
                <time id="end-time-des-1" class="text-white">Compare prices, find bulk deals, and save money on this essential household item.</time>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
