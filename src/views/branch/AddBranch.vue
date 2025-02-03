<template>
    <div class="bg-white rounded-xl max-w-screen-md mx-auto py-4 border border-natural200">
        <div class="px-6">
            <div class="text-center">
                <h1 class="text-body text-textPrimary">Add New Branch</h1>
                <h1 class="text-content text-textScondary pt-3">Create a new branch for content management system
                </h1>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="pt-3">
                    <h1 class="text-content text-textPrimary pb-2">Departement</h1>
                    <select v-model="selectedDepartment"
                        class="px-4 py-2 border border-gray-300 rounded-md w-full input-border"
                        placeholder="Select a department">
                        <option :value="null" disabled selected>
                            Select a department
                        </option>
                        <template v-for="dept in departments" :key="dept.id">
                            <option>{{ dept.name }}</option>
                        </template>
                    </select>
                </div>
                <div class="pt-3">
                    <h1 class="text-content text-textPrimary pb-2">Branch Name</h1>
                    <TextField placeholder="Input branch name" />
                </div>
                <div class="pt-1">
                    <h1 class="text-content text-textPrimary pb-2">Address</h1>
                    <TextField placeholder="Input Address" />
                </div>
                <div class="pt-1">
                    <h1 class="text-content text-textPrimary pb-2">Head of Branch</h1>
                    <select v-model="headOfBranch"
                        class="px-4 py-2 border border-gray-300 rounded-md w-full input-border"
                        placeholder="Select a department">
                        <option :value="null" disabled selected>
                            Select a department
                        </option>
                        <template v-for="dept in departments" :key="dept.id">
                            <option>{{ dept.name }}</option>
                        </template>
                    </select>
                </div>
            </div>
            <div class="pb-3 pt-6">
                <h1 class="text-content text-textPrimary pb-2">Branch Description</h1>
                <div class="">
                    <TextArea placeholder="Input departement description" />
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-natural200 my-3"></div>
        <div class="flex justify-center py-4 px-6 gap-4 mx-auto max-w-screen-xl">
            <ButtonForm title="Cancel" type="outline-border" class="w-[232px] " @click="back" />
            <ButtonForm title="Add New Branch" class="w-[254px]" @click="back" />
        </div>
    </div>
</template>

<script setup>
import TextField from '@/components/TextField.vue';
import TextArea from '@/components/TextArea.vue';
import ButtonForm from '@/components/ButtonForm.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

const back = () => {
    router.back()
}

const departments = ref([
    { id: 1, name: 'Human Resources' },
    { id: 2, name: 'Information Technology' },
    { id: 3, name: 'Finance' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Operations' }
])

const selectedDepartment = ref(null)
const headOfBranch = ref(null)
</script>