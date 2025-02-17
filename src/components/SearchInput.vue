<template>
  <div class="relative w-full lg:w-[400px] mb-5">
    <!-- Input Field -->
    <input type="text" :placeholder="hint" :value="modelValue" @input="updateValue" @keyup.enter="handleSearch" class="w-full px-4 py-3 text-content font-normal text-gray-600
       placeholder-gray-500 bg-white border
        border-gray-200 rounded-lg shadow-sm focus:outline-none overflow-hidden truncate  pr-10 lg:pr-0
        focus:border-primary500 focus:ring-3 focus:ring-primary500" aria-label="Search" />
    <!-- Search Icon -->
    <div class="absolute right-4 top-1/2 -translate-y-1/2">
      <img :src="icSearch" alt="Search" class="cursor-pointer" @click="handleSearch" />
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
  modelValue: {
    type: String,
    default: ''
  },
});

const emit = defineEmits(['update:modelValue', 'search'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleSearch = () => {
  if (props.modelValue.trim()) {
    emit('search', props.modelValue)
  }
}
</script>