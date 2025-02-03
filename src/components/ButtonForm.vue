 <template>
    <button @click="handleClick"
        :class="[
            {'text-body-3 font-medium bg-primary500 hover:bg-primary400 text-white py-[12px] px-[12px] rounded-[10px] w-fit' : type === 'block'},
            {'text-body-3 font-medium bg-white border border-primary500 border-solid hover:text-primary400 text-primary500 py-[12px] px-[12px] rounded-[10px]' : type === 'outline-border'},
        ]">
        {{ title }}
    </button>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Button'
    },
    type : {
        type: String,
        default: 'block'
    }
})

const emit = defineEmits(['click']);

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};
</script>