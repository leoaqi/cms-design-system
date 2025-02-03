<template>
    <div class="bg-white rounded-xl max-w-screen-md mx-auto py-4 border border-natural200">
        <div class="px-6">
            <div class="text-center">
                <h1 class="text-body text-textPrimary">Add New Departement</h1>
                <h1 class="text-content text-textScondary pt-3">Create a new departement for content management system
                </h1>
            </div>
            <div class="py-3">
                <h1 class="text-content text-textPrimary pb-2">Departement Name</h1>
                <div class="">
                    <TextField placeholder="Input departement name" />
                </div>
            </div>
            <div class="py-3">
                <h1 class="text-content text-textPrimary pb-2">Departement Description</h1>
                <div class="">
                    <TextArea placeholder="Input departement description" />
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-natural200 my-3"></div>
        <div class="flex justify-center py-4 px-6 gap-4 mx-auto max-w-screen-xl">
            <ButtonForm title="Cancel" type="outline-border" class="w-[232px] " @click="backToDepartement" />
            <ButtonForm title="Add New Departement" class="w-[232px]" @click="backToDepartement" />
        </div>
    </div>
</template>

<script setup>
import TextField from '@/components/TextField.vue';
import TextArea from '@/components/TextArea.vue';
import ButtonForm from '@/components/ButtonForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const backToDepartement = () => {
    router.push('/department')
}
</script>