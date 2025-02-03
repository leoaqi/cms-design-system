<template>
    <button @click="handleClick"
        class="btn-primary">
        <slot/>
    </button>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Button'
    }
})

const emit = defineEmits(['click']);

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};
</script>