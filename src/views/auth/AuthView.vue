<template>
    <div class="bg-[#ffffff] grid grid-cols-2 py-20 ">
        <LoginFormView v-if="isLogin"/>
        <ResetPasswordFormView v-if="isReset"/>
        <ForgetPasswordFormView v-if="isForget"/>
        <div class="relative w-full">
            <img :src="ilustration" alt="logo aqi" class="w-[680px] h-[900px] object-cover mb-20 rounded-[30px]">
            <div class="absolute inset-x-0 bottom-32 p-4 w-[560px] px-14">
                <h1 class=" w-50 pt-100 text-heading-3 font-semibold text-base-white">Welcome Back to Content
                    Management System 👋</h1>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRoute } from 'vue-router';
import ResetPasswordFormView from './forms/ResetPasswordFormView.vue';
import LoginFormView from './forms/LoginFormView.vue';
import ForgetPasswordFormView from './forms/ForgetPasswordFormView.vue';
import ilustration from '@/assets/images/ilustasi.jpeg';
import { computed, ref } from 'vue';


const route = useRoute()

const isLogin = computed(() => route.path === '/login');
const isRegister = computed(() => route.path === '/register');
const isReset = computed(() => route.path === '/reset-password');
const isForget = computed(() => route.path === '/forget-password');
</script>