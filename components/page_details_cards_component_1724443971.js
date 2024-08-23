<template>
    <!-- Summary: Contains a section with three cards with black background and white text. -->
    <section id="page-details-cards-component" style="min-height: 230px" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium text-slate-200 text-slate-400">Variety</div>
                <div class="text-slate-400">Discover a wide range of toilet paper options, from ultra-soft to eco-friendly.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="start-date-des-1" class="text-slate-200 text-slate-400">Convenience</div>
                <time class="text-slate-400" id="start-time-des-1">Order from the comfort of your home and enjoy fast, discreet delivery to your doorstep.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="end-date-des-1" class="text-slate-200 text-slate-400">Savings</div>
                <time class="text-slate-400" id="end-time-des-1">Compare prices, find bulk deals, and save money on this essential household item.</time>
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
