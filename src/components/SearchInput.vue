<template>
    <div class="relative w-[400px] mb-5">
      <!-- Input Field -->
      <input
        type="text"
        :placeholder="hint"
        class="w-full px-4 py-3 text-content font-normal text-gray-600 placeholder-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-primary500 focus:ring-3 focus:ring-primary500"
        aria-label="Search"
      />
      <!-- Search Icon -->
      <div class="absolute right-4 top-1/2 -translate-y-1/2">
        <img :src="icSearch" alt="Search" />
      </div>
    </div>
  </template>
  
  <script setup>
  import icSearch from '@/assets/icons/ic_search.svg';
  
  // Define props
  const props = defineProps({
    hint: {
      type: String,
      default: 'Search...', // Default placeholder text
    },
  });
  </script>