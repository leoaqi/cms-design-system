<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Approve Request'
  },
  message: {
    type: String,
    default: 'Are you sure want to approve this request? Please check carefully before approve'
  },
  okButton : {
    type: String,
    default: 'Approve'
  }
})

const emit = defineEmits(['close', 'confirm'])

const handleClose = () => {
  emit('close')
}

const handleConfirm = () => {
  emit('confirm')
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition
      enter="transition-opacity duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-200"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div v-if="isOpen" 
           class="fixed inset-0 bg-black bg-opacity-50 z-40"
           @click="handleClose">
      </div>
    </Transition>

    <!-- Dialog -->
    <Transition
      enter="transition-all duration-300"
      enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to="opacity-100 translate-y-0 sm:scale-100"
      leave="transition-all duration-200"
      leave-from="opacity-100 translate-y-0 sm:scale-100"
      leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div v-if="isOpen"
           class="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
          <!-- Header -->
          <div class="bg-primary500 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
            <h3 class="text-body-2 font-medium">{{ title }}</h3>
            <button @click="handleClose" 
                    class="text-white hover:text-gray-200 transition-colors focus:outline-none">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="px-6 py-4">
            <p class="text-body-3 text-textScondary">{{ message }}</p>
          </div>

          <div class="horizontal-divider"></div>

          <!-- Footer -->
          <div class="px-6 pb-4 flex justify-end gap-3">
            <button @click="handleClose"
                    class="px-4 py-2 border border-primary500 text-body-3 font-medium rounded-lg text-primary500 hover:bg-gray-50 
                           transition-colors focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
              Cancel
            </button>
            <button @click="handleConfirm"
                    class="px-4 py-2 bg-primary500 text-white text-body-3 font-medium rounded-lg hover:bg-primary600 
                           transition-colors focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
              {{ okButton }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Optional: Add spring-like bounce effect */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>