<template>
    <div v-if="modelValue" class="bg-white rounded-lg shadow-xl w-[500px]">
        <!-- Header -->
        <div class="bg-primary500 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
            <h3 class="text-body-2 font-medium">Delete Department</h3>
            <button @click="handleClose" class="text-white hover:text-gray-200 transition-colors focus:outline-none">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Body -->
        <div class="px-6 py-4">
            <p class="text-body-3 text-textScondary">Are you sure want to delete this department? Please check carefully before delete</p>
        </div>

        <div class="horizontal-divider"></div>

        <!-- Footer -->
        <div class="px-6 pb-4 flex justify-end gap-3">
            <button @click="handleClose"
                class="px-4 py-2 border border-primary500 text-body-3 font-medium rounded-lg text-primary500 hover:bg-gray-50 
                           transition-colors focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                Cancel
            </button>
            <button @click="handleDelete"
                class="px-4 py-2 bg-primary500 text-white text-body-3 font-medium rounded-lg hover:bg-primary600 
                           transition-colors focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                Delete
            </button>
        </div>
    </div>
</template>

<script setup>
import { integer } from '@vuelidate/validators';
import { defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    }
  })
const emit= defineEmits(['update:modelValue', 'handleDelete'])

const handleClose = () => {
    emit('update:modelValue', false)
}

const handleDelete = ()=> {
    emit('handleDelete');
}
</script>