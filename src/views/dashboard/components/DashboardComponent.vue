<template>
    <h1 class="font-medium text-body">Dashboard</h1>
    <div class="flex flex-wrap md:grid grid-cols-3 gap-8 py-4">
        <div class="w-full bg-white rounded-xl border border-natural200 px-4 lg:px-6 py-4">
            <div class="flex flex-row justify-between">
                <div class="bg-error50 w-[30px] h-[30px] rounded-lg flex items-center justify-center mb-4">
                    <div class="w-[20px] h-[20px]">
                        <img :src="wallet" alt="wallet" class="object-cover">
                    </div>
                </div>
                <div class="py-1 px-3 flex rounded-full h-[24px] bg-success50 items-center">
                    <h1 class="text-[10px] font-normal  text-success500">+20%</h1>
                </div>
            </div>
            <h5 class="text-heading-5 font-medium">{{ formatCurrency(dashboardStore.totalCash) }}</h5>
            <h1 class="text-content font-normal text-textScondary">Total Cash</h1>
            <div class="w-full h-[1px] bg-natural200 my-4"></div>
            <h1 class="text-body-3 font-medium text-primary500 hover:underline hover:cursor-pointer">Show More</h1>
        </div>
        <div class="w-full bg-white rounded-xl border border-natural200 px-4 lg:px-6 py-4">
            <div class="flex flex-row justify-between">
                <div class="relative bg-warning100 w-[30px] h-[30px] rounded-lg flex items-center justify-center mb-4">
                    <div class="absolute w-[20px] h-[20px] inset-y-[7px]">
                        <img :src="creditCard" alt="creditCard" class="object-cover">
                    </div>
                </div>
                <div class="py-1 px-3 flex rounded-full h-[24px] bg-error50 items-center">
                    <h1 class="text-[10px] font-normal  text-error500">-20%</h1>
                </div>
            </div>
            <h5 class="text-heading-5 font-medium">{{ formatCurrency(dashboardStore.totalFinance) }}</h5>
            <h1 class="text-content font-normal text-textScondary">Total Finance</h1>
            <div class="w-full h-[1px] bg-natural200 my-4"></div>
            <h1 class="text-body-3 font-medium text-primary500 hover:underline hover:cursor-pointer">Show More</h1>
        </div>
        <div class="w-full bg-white rounded-xl border border-natural200 px-4 lg:px-6 py-4">
            <div class="bg-info100 w-[30px] h-[30px] rounded-lg flex items-center justify-center mb-4">
                <div class="w-[20px] h-[20px]">
                    <img :src="icUser" alt="icUser" class="object-cover">
                </div>
            </div>
            <div class="flex flex-row justify-between">
                <h5 class="text-heading-5 font-medium">{{ dashboardStore.totalUser }}</h5>
            </div>
            <h1 class="text-content font-normal text-textScondary">Total User</h1>
            <div class="w-full h-[1px] bg-natural200 my-4"></div>
            <h1 class="text-body-3 font-medium text-primary500 hover:underline hover:cursor-pointer">Show More</h1>
        </div>
    </div>
    <div class="flex flex-wrap lg:grid grid-cols-3 gap-8">
        <!-- Last Deposit -->
        <div class=" w-full min-h-screen bg-white rounded-md border border-natural200 p-6">
            <div class="flex justify-between items-center mb-7">
                <h2 class="text-body-2 font-medium text-textPrimary">Last Deposit</h2>
                <button>
                    <div class="flex flex-col gap-1">
                        <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                </button>
            </div>
            <template v-for="(values, index) in dashboardStore.depositData" :key="values">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-row gap-4 items-center">
                        <img :src="values.icon" alt="{{ values.title }}" class="w-[46px] h-[32px]">
                        <div>
                            <h1 class="text-content font-medium text-textPrimary overflow-ellipsis">{{ values.title }}
                            </h1>
                            <h1 class="text-content-2 font-normal text-textScondary overflow-ellipsis">{{
                                values.subtitle }}</h1>
                        </div>
                    </div>
                    <h1 class="text-content-2 font-normal text-success500">+{{ formatCurrency(values.value) }}</h1>
                </div>
                <div v-if="index < dashboardStore.depositData.length - 1" class="h-[1px] w-full bg-natural200 my-4"></div>
                <div v-else class="my-6"></div>
            </template>
            <h1 class="text-body-3 font-medium text-primary500 hover:underline hover:cursor-pointer">Show More</h1>
        </div>
        <!-- End Last Deposit -->

        <div class="w-full col-span-2 gap-4 flex flex-col">
            <!-- All Time Balance -->
            <div class="w-full bg-white rounded-md border border-natural200 p-6">
                <div class="pb-6">
                    <div class="flex justify-between items-center mb-8">
                        <h2 class="text-body-2 font-medium text-textPrimary">All Time Balance</h2>
                        <button class="p-2">
                            <div class="flex flex-col gap-1">
                                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                            </div>
                        </button>
                    </div>

                    <!-- Chart grid -->
                    <div class="relative h-48">
                        <!-- Horizontal grid lines -->
                        <div class="absolute inset-0 flex flex-col justify-between">
                            <template v-for="n in 4" :key="n">
                                <div class="w-full border-t border-gray-100" />
                            </template>
                        </div>

                        <!-- Bars container -->
                        <div class="relative h-full flex items-end justify-between px-1 lg:px-4">
                            <template v-for="(values) in dashboardStore.chartData">
                                <div class="flex flex-col items-center group">
                                    <!-- Stacked bars container -->
                                    <div class="relative w-4 lg:w-[32px] flex flex-col-reverse">
                                        <div :style="{ height: `${values[0] + 100}px` }"
                                            class="absolute w-4 lg:w-[32px] bg-primary300 transition-all duration-300 rounded-t-sm lg:rounded-t-lg">
                                        </div>
                                        <div :style="{ height: `${values[1] + 80}px` }"
                                            class="absolute w-4 lg:w-[32px]  bg-primary500 transition-all duration-300 rounded-t-sm lg:rounded-t-lg">
                                        </div>
                                        <div :style="{ height: `${values[2] + 50}px` }"
                                            class="absolute w-4 lg:w-[32px]  bg-primary700 transition-all duration-300 rounded-t-sm lg:rounded-t-lg">
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <div class="absolute inset-y-5 lg:inset-y-6 inset-0 h-full flex gap-1 items-end justify-between px-1 lg:px-4 ">
                                <template v-for="(values, month) in dashboardStore.chartData" :key="month">
                                    <div class="flex flex-col items-center group">
                                        <div class="text-center mt-4 text-gray-600 text-caption lg:text-sm">
                                            {{ month }}
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End All Time Balance -->

            <div class="flex flex-wrap md:grid grid-cols-2 gap-8 h-full mb-20 lg:mb-0">
                <!-- Top Spending -->
                <div class="w-full bg-white rounded-xl border border-natural200 py-4 px-4">
                    <h1 class="text-body-2 font-medium text-textPrimary">Top Spending</h1>
                    <template v-for="(values, index) in dashboardStore.dataTopSpending" :key="values">
                        <div class="flex justify-between items-center mt-4">
                            <div class="flex flex-row gap-4">
                                <img :src="values.img" alt="{{ values.name }}"
                                    class="w-[40px] h-[40px] rounded-full object-cover">
                                <div>
                                    <h1 class="text-content font-medium text-textPrimary">{{ values.name }}</h1>
                                    <h1 class="text-content-2 font-normal text-textScondary">{{ values.position }}</h1>
                                </div>
                            </div>
                            <div v-if="values.action === 'normal'"
                                class="w-[36px] h-[36px] rounded-full bg-primary50 items-center justify-center flex">
                                <img :src="icArrowRight" alt="" class="w-[16px] h-[12px] object-fill">
                            </div>
                            <div v-else
                                class="w-[36px] h-[36px] rounded-full bg-white border border-primary50 items-center justify-center flex">
                                <img :src="icArrowRightUp" alt="" class="w-[16px] h-[12px] object-fill">
                            </div>
                        </div>
                        <div class="h-[1px] w-full bg-natural200 my-4"></div>
                    </template>
                </div>
                <!-- End Top Spending -->

                <!-- Top User -->
                <div class="w-full bg-white rounded-xl border border-natural200 py-4 px-4">
                    <h1 class="text-body-2 font-medium text-textPrimary">Top User</h1>
                    <DoughnutGraph />
                    <div class="flex flex-row justify-between">
                        <h1 class="text-content">Income</h1>
                        <h1 class="text-content-2 text-success500">Rp 62.500.000</h1>
                    </div>
                    <div class="w-full h-[1px] bg-natural200 my-4"></div>
                    <div class="flex flex-row justify-between">
                        <h1 class="text-content">Outcome</h1>
                        <h1 class="text-content-2 text-success500">Rp 62.500.000</h1>
                    </div>
                    <h1 class="text-body-3 font-medium text-primary500 hover:underline hover:cursor-pointer mt-4">Show
                        More
                    </h1>
                </div>
                <!-- End Top User -->
            </div>

        </div>
    </div>
</template>

<script setup>
import wallet from '@/assets/icons/wallet.png';
import creditCard from '@/assets/icons/credit_card.png';
import icUser from '@/assets/icons/user.png';
import icArrowRight from '@/assets/icons/ic_arrow_right.png';
import icArrowRightUp from '@/assets/icons/ic_arrow_right_up.png';
import DoughnutGraph from '../DoughnutGraph.vue';
import { useDashboardStore } from '@/store/dashboardStore';
import {formatCurrency} from '../../../utils/currency_format'

const dashboardStore = useDashboardStore()
</script>