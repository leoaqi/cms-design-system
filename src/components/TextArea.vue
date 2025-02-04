<template>
    <textarea type="text" :rows="maxLine" class="w-full py-3 px-4 rounded-lg border border-natural200 
    resize-none focus:outline-none focus:border-primary500 focus:ring-3 focus:ring-primary500"
    :placeholder="hint" />
</template>

<script setup>
const props = defineProps({
    hint: {
        type: String,
        default: 'Place holder'
    },
    maxLine: {
        type: String,
        default: "4"
    }
})
</script>