<template>
    <div class="w-full px-3 md:px-6 lg:px-26 2xl:px-10 mx-auto bg-base-white">
        <img :src="logoAqi" alt="logo aqi" class="w-[158px] h-[40px] object-cover mt-10 mb-20">
        <div v-if="!isSuccess">
            <div>
                <h3 class="text-heading-3 font-medium">Forget Password?</h3>
                <p class="text-content font-normal text-textScondary py-4">No worriess, we’ll send you the reset link to
                    reset your password. Please enter your email first.</p>
            </div>
            <form>
                <div>
                    <label for="email" class="block text-content font-medium mb-2 text-textPrimary mt-14">Email</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input type="email" id="email" v-model="email"
                            class="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                            placeholder="Enter your email" />
                    </div>
                </div>
            </form>
            <div class="pt-14">
                <Button title="Submit" @click="submit" />
                <RouterLink to="/login"
                    class="flex text-body-3 my-6 font-medium text-primary500 justify-center items-center hover:underline">
                    Back to Sign In Page
                </RouterLink>
            </div>
        </div>
        <div v-if="isSuccess">
            <div>
                <h3 class="text-heading-3 font-medium">Email Sent</h3>
                <p class="text-content font-normal text-textScondary py-4">No worriess, we’ll send you the reset link to
                    reset your password. Please enter your email first.</p>
            </div>
            <div class="pt-14">
                <Button title="Back to Sign In Page" @click="backToLogin" />
                <RouterLink to="/reset-password"
                    class="flex text-body-3 my-6 font-medium text-primary500 justify-center items-center hover:underline">
                    Re-Send Email
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import logoAqi from '@/assets/images/logoaqi.png';

const router = useRouter()
const email = ref('')
const isSuccess = ref(false)

const submit = () => {
    if (email.value === '') {
        isSuccess.value = false
    } else {
        isSuccess.value = true
    }
}

const backToLogin = () => {
    router.push('/login')
}
</script>