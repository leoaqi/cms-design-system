<template>
    <div>
        <input :type="type" class="w-full py-3 px-4 rounded-lg input-border" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" :placeholder="hint" />
        <span v-if="error" class="error-message text-error400 text-sm mt-1">
            {{ errorMessage }}
        </span>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    hint: {
        type: String,
        default: 'Place holder'
    },
    type: {
        type: String,
        default: 'text'
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
})

defineEmits(['update:modelValue']);
</script>