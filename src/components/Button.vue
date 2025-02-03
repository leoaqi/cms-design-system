<template>
    <button @click="handleClick"
        class="text-body font-medium bg-primary500 hover:bg-primary400 text-white py-[12px] px-[12px] rounded-[10px] w-full">
        {{ title }}
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