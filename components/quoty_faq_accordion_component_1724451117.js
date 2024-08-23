<!--
Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
-->

<template>
  <section class="py-8 bg-white pl-4">
    <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions About Our Toilet Paper Marketplace</h2>
    <!-- Accordion -->
    <div class="space-y-3">
      <!-- Accordion item -->
      <div
        v-for="(term, index) in terms"
        :key="index"
        :class="['text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900', { 'expanded': term.expanded }]"
      >
        <h3>
          <button
            type="button"
            class="flex items-center justify-between w-full text-left font-medium px-5 py-3"
            @click="toggle(index)"
            :aria-expanded="term.expanded"
            :aria-controls="'terms-text-' + index"
          >
            <span>{{ term.title }}</span>
            <svg
              class="shrink-0 ml-8 fill-slate-400 dark:fill-slate-500"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
              <rect
                y="5"
                width="12"
                height="2"
                rx="1"
                class="transform origin-center rotate-90 transition duration-200 ease-out"
                :class="{ '!rotate-180': term.expanded }"
              />
            </svg>
          </button>
        </h3>
        <div
          :id="'terms-text-' + index"
          role="region"
          :aria-labelledby="'terms-title-' + index"
          class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out"
          :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]"
        >
          <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
            <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
              {{ term.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuotyFaqAccordionComponent",
  data() {
    return {
      terms: [
        { title: "How does the toilet paper marketplace work?", description: "Our marketplace connects toilet paper buyers with sellers. Users can browse listings, compare prices, and purchase various types of toilet paper from different vendors all in one convenient platform.", expanded: false },
        { title: "What types of toilet paper are available?", description: "We offer a wide range of toilet paper options, including recycled, ultra-soft, quilted, scented, and bulk packages. Our sellers provide products to suit every preference and budget.", expanded: false },
        { title: "How is shipping handled?", description: "Shipping is managed by individual sellers. Each listing includes shipping information and costs. Many sellers offer free shipping on bulk orders or purchases over a certain amount.", expanded: false },
        { title: "What if I'm not satisfied with my purchase?", description: "We have a customer satisfaction guarantee. If you're not happy with your purchase, contact the seller within 14 days for a refund or exchange. Our support team is also available to assist with any issues.", expanded: false }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.terms[index].expanded = !this.terms[index].expanded;
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>