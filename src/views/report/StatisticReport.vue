<template>
    <div class="w-full border border-natural200 px-4 py-4 bg-white rounded-xl flex flex-row gap-4 items-center">
        <div class="border border-natural200 rounded-lg p-2 items-center flex flex-row w-[36px] h-[36px]">
            <img :src="coinHand" alt="" class="w-[20px] h-[20px] object-fill">
        </div>
        <div>
            <h1 class="text-body-2 font-medium text-textPrimary">{{ withCurrencyFormat? formatCurrency(amount): amount }}</h1>
            <h1 class="text-content-2 font-normal text-textScondary">{{ title }}</h1>

        </div>
    </div>
</template>

<script setup>
import coinHand from '@/assets/icons/coins-hand.svg';

const props = defineProps({
    amount : {
        type: String,
        default: '00000'
    },
    title: {
        type: String,
        default: 'title'
    },
    withCurrencyFormat : {
        type: Boolean,
        default: true,
    }
})

const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-Id', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};
</script>