<template>
    <input :type="type"
        class="w-full py-3 px-4 rounded-lg input-border"
        :placeholder="hint" />
</template>

<script setup>
const props = defineProps({
    hint: {
        type: String,
        default: 'Place holder'
    },
    type: {
        type: String,
        default: 'text'
    }
})
</script>