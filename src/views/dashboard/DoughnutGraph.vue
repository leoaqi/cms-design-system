<template>
    <div class="relative flex flex-row justify-center my-16 w-full h-[200px] items-center">
        <Doughnut :data="data" :options="options" class="items-center" />
        <div class="absolute inset-0 flex items-center justify-center">
            <div>
                <h1 class="text-caption text-textScondary font-normal">Total spending</h1>
                <h1 class="text-caption text-textScondary font-semibold">{{ formatCurrency(250000000) }}</h1>
            </div>
            <div
                class="absolute top-5 left-[60px] bg-white rounded-full px-4 py-4 t text-content font-medium text-textPrimary shadow-lg">
                40%</div>
            <div
                class="absolute bottom-9 right-[60px] bg-white rounded-full px-4 py-4 text-content font-medium text-textPrimary shadow-lg">
                60%</div>
        </div>
    </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { formatCurrency } from '@/utils/currency_format';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    datasets: [
        {
            backgroundColor: ['#BD4B50', '#681317'],
            data: [60, 40]
        }
    ]
}

const options = {
    cutout: '68%',
    plugins: {
        legend: { display: false },
    },
};
</script>