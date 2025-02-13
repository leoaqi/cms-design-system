<template>
    <div class="w-full px-6 lg:px-10 xl:px-26 2xl:px-10 xl:mx-auto bg-base-white">
        <img :src="logoAqi" alt="logo aqi" class="w-[158px] h-[40px] object-cover mt-10 mb-20">
        <h2 class="text-heading-3 font-medium mb-2">Sign In to Your Account</h2>
        <h2 class="text-content font-normal text-textScondary">Enter your registered email & password to sign in</h2>
        <div :class="[errorMessage ? 'block' : 'hidden']" class="w-full mb-10 bg-error50 p-4 rounded-[4px] mt-10 block">
            <p class="text-error500 font-semibold">Error! <span class="font-normal">Your email or password are invalid.
                    Please try again or contact your administrator to fixed it.</span></p>
        </div>
        <form>
            <div>
                <label for="email" class="block text-content font-medium mb-2 text-textPrimary mt-10">Email</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <input type="email" id="email" v-model="email"
                        class="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                        placeholder="Enter your email" />
                </div>
                <label for="password" class="block text-content font-medium mb-2 text-textPrimary mt-6">Password</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                        class="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                        placeholder="Enter your password" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        @click="togglePasswordVisibility">
                        <RiEyeFill v-if="showPassword" class="text-gray-400" />
                        <RiEyeOffFill v-if="!showPassword" class="text-gray-400" />
                    </div>
                </div>
            </div>
            <div class="flex flex-row space-x-6 items-center justify-between my-8">
                <label class="inline-flex items-center mt-2">
                    <input type="checkbox"
                        :class="['form-checkbox h-[14px] w-[14px] text-primary500 rounded-[4px] border-natural300']" />
                    <span :class="['ml-2 font-normal text-[12px] text-textPrimary']">Remember me</span>
                </label>
                <router-link to="/forget-password" class="text-primary500 pt-3 text-[12px] hover:underline">Forget
                    Password?</router-link>
            </div>
            <div class="w-full mb-10 relative">
                <div
                    class="bg-white rounded-lg shadow-[-1px_0_20px_-1px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center gap-4 justify-between pr-4">
                    <div>
                        <label class="inline-flex items-center mt-2">
                            <input type="checkbox"
                                :class="['form-checkbox h-[14px] w-[14px] text-primary500 rounded-[4px] border-natural300 mb-0']" />
                            <span :class="['ml-2 font-normal text-[12px] text-textPrimary']">Prove that i’m not a
                                robot</span>
                        </label>
                    </div>
                    <img :src="captcha" alt="icon" class="w-[14px] h-[14px]">
                </div>
                <div class="absolute rounded-tr-[6px] rounded-br-[6px] bg-primary500 w-[5px] h-auto inset-y-0 right-0">
                </div>
            </div>
        </form>
        <Button title="Sign In" @click="signIn" />
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import logoAqi from '@/assets/images/logoaqi.png';
import { RiEyeFill, RiEyeOffFill } from '@remixicon/vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import captcha from '@/assets/images/captcha.png'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref(false)

const togglePasswordVisibility = computed(() => {
    showPassword.value = !showPassword.value
})

function forgetPassword(){
    router.push('/forget-password')
}

function signIn() {
    if (email.value === '' || password.value === '') {
        errorMessage.value = true
    } else {
        errorMessage.value = false
        router.push('/dashboard')
    }
}
</script>