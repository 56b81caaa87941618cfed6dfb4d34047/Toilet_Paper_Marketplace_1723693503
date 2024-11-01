<template>
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <div id="footer-container" class="max-w-screen-xl mx-auto">
            <hr id="footer-divider" class="my-6 border-pink-300 opacity-30 sm:mx-auto lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                        <img id="footer-logo" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Toilet_Paper_Marketplace_1723693503/main/images/7f9f5371a7e84dfc9783428cd0b2f944.jpeg" class="h-8 mr-3 sm:h-10 rounded-full shadow-md" alt="Landwind Logo" />
                        RollMart
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-sm text-center text-pink-100 hover:text-white transition-colors duration-300">
                    © 2023 RollMart. Wiping away inconvenience, one square at a time.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
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
/* You may add styles here if necessary */
</style>