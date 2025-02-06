<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useDropdown } from '../utils/use_dropdown'

const props = defineProps({
  modelValue: {
    type: Object,
    default: null
  },
  id: {
    type: String,
    required: true
  },
  header: {
    type: String,
    default: 'Header'
  },
  options: {
    type: Array,
    default: () => [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
      { id: 3, label: 'Option 3' },
      { id: 4, label: 'Option 4' }
    ]
  },
  placeholder: {
    type: String,
    default: 'Select Option'
  }
})

const emit = defineEmits(['update:modelValue'])

const dropdownRef = ref(null)
const { activeDropdown, setActiveDropdown, closeAll } = useDropdown()

const isOpen = computed(() => activeDropdown.value === props.id)
const selectedOption = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const toggleDropdown = (event) => {
  event.stopPropagation()
  setActiveDropdown(props.id)
}

const selectOption = (option) => {
  selectedOption.value = option
  closeAll()
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeAll()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative w-full" ref="dropdownRef">
    <button
      type="button"
      @click="toggleDropdown"
      class="w-full px-4 py-3 text-left bg-white rounded-lg shadow-sm input-border"
    >
      <span class="block text-gray-700">
        {{ selectedOption ? selectedOption.label : placeholder }}
      </span>
      <span 
        class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'transform rotate-180': isOpen }"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    <div
      v-show="isOpen"
      class="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg"
    >
      <div class="py-2">
        <h3 class="px-4 py-2  text-lg font-medium">{{ header }}</h3>
        <div
          v-for="option in options"
          :key="option.id"
          @click="selectOption(option)"
          class="px-4 py-3 mx-4 rounded-lg flex items-center space-x-3 text-textScondary hover:bg-primary50 cursor-pointer"
          :class="{'bg-primary500 text-white': option.id === selectedOption?.id}"
        >
          <span class="text-content ">{{ option.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>