<template>
    <div class="bg-[#ffffff] min-h-screen flex flex-col lg:grid lg:grid-cols-2 p-4 md:p-8 lg:py-20 xl:px-[200px]">
        <div class="w-full flex justify-center items-center">
            <LoginFormView v-if="isLogin" />
            <ResetPasswordFormView v-if="isReset" />
            <ForgetPasswordFormView v-if="isForget" />
        </div>
        <div class="relative w-full hidden lg:flex lg:justify-start">
            <img :src="ilustration" alt="logo aqi" class="w-[680px] h-[900px] object-cover rounded-[30px]">
            <div class="absolute inset-x-0 xl:left-[0px]  xl:w-[600px] xl:justify-center xl:mx-1 bottom-[40px] flex justify-start">
                <h1 class="text-heading-3 font-semibold text-white px-14">
                    Welcome Back to Content Management System 👋
                </h1>
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