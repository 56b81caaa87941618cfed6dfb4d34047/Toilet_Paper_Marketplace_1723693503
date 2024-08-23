<template>
  <form class="max-w-md px-4 mx-auto mt-12">
    <div class="relative">
      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer text-black absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 text-left left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="Search" class="text-black w-full py-3 pl-12 pr-4 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 text-right right-10" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchInput', // Component name
  data() {
    return {};
  },
  delimiters: ['{', '}'] // Custom delimiters
};
</script>
