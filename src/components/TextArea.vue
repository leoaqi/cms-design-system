<template>
    <div>
        <textarea :rows="maxLine" class="w-full py-3 px-4 rounded-lg border border-natural200 resize-none
            focus:outline-none focus:border-primary500 focus:ring-3 focus:ring-primary500" :placeholder="hint"
            :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <span v-if="error" class="error-message text-red-500 text-sm mt-1">
            {{ errorMessage }}
        </span>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    hint: {
        type: String,
        default: 'Place holder'
    },
    maxLine: {
        type: Number, // Fixed type to Number
        default: 4
    },
    modelValue: {
        type: String,
        default: ''
    },
    error: {
        type: Boolean,
        default: false
    },
    errorMessage: {
        type: String,
        default: ''
    }
});

defineEmits(['update:modelValue']);
</script>
