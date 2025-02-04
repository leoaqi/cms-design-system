<template>
    <div class="bg-white rounded-xl max-w-screen-lg mx-auto py-4 border border-natural200">
        <div class="px-28 ">
            <div class="text-center mt-4">
                <h1 class="text-body text-textPrimary">Add New User</h1>
                <h1 class="text-content text-textScondary pt-2">Create new internal user for credit administration
                </h1>
            </div>
            <div class="w-full border border-natural200 px-4 py-4 my-8 rounded-lg">
                <h1 class="title-form">General Information</h1>
                <h1 class="text-content-2 font-normal text-textScondary">General user information</h1>
                <div class="flex flex-row gap-4 items-center my-4">
                    <img :src="profile" alt="profile">
                    <ButtonForm class="text-content-2 font-medium" title="Add Photo" />
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="pt-1">
                        <h1 class="title-form pb-2">Full Name</h1>
                        <TextField placeholder="Input full name" />
                    </div>
                    <div class="pt-1">
                        <h1 class="title-form pb-2">User Id</h1>
                        <TextField placeholder="Input user id" />
                    </div>
                    <div class="pt-1">
                        <h1 class="title-form pb-2">Email</h1>
                        <TextField placeholder="Input user email" type="email" />
                    </div>
                    <div class="pt-1">
                        <h1 class="title-form pb-2">Phone Number</h1>
                        <div class="flex flex-row gap-4">
                            <select v-model="phoneNumber"
                                class="px-4 py-3 border border-gray-300 rounded-md w-[100px] input-border"
                                placeholder="Select a department">
                                <option :value="+62" selected class="text-textScondary">
                                    +62
                                </option>
                            </select>
                            <TextField placeholder="Input phone number" type="number" class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                [&::-webkit-inner-spin-button]:appearance-none" />
                        </div>
                    </div>
                    <div class="pt-1">
                        <h1 class="title-form pb-2">User Status</h1>
                        <select v-model="selectedDepartment" class="border-select" placeholder="Select a department">
                            <option :value="null" disabled selected>
                                Select status
                            </option>
                            <template v-for="dept in departments" :key="dept.id">
                                <option>{{ dept.name }}</option>
                            </template>
                        </select>
                    </div>

                    <div class="pt-1">
                        <h1 class="title-form pb-2">Marital Status</h1>
                        <select v-model="headOfBranch" class="border-select" placeholder="Select a department">
                            <option :value="null" disabled selected class="text-textScondary">
                                Select status
                            </option>
                            <template v-for="dept in departments" :key="dept.id">
                                <option>{{ dept.name }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="pt-1 col-span-2">
                        <h1 class="title-form pb-2">Branch Description</h1>
                        <div class="">
                            <TextArea placeholder="Input address" max-line="1" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full border border-natural200 px-4 py-4 my-8 rounded-lg">
                <h1 class="title-form">Role & Area</h1>
                <h1 class="text-content-2 font-normal text-textScondary">Select role & job area</h1>
                <div class="pt-3">
                    <h1 class="title-form pb-2">Role</h1>
                    <select v-model="selectedDepartment" class="border-select" placeholder="Select a department">
                        <option :value="null" disabled selected>
                            Select role
                        </option>
                        <template v-for="dept in departments" :key="dept.id">
                            <option>{{ dept.name }}</option>
                        </template>
                    </select>
                </div>
                <div class="w-full border border-natural200 px-4 py-4 my-3 rounded-lg">
                    <h1 class="title-form">Area</h1>
                    <div class="flex flex-row gap-4 my-2">
                        <select v-model="selectedDepartment" class="border-select" placeholder="Select a department">
                            <option :value="null" disabled selected>
                                Select role
                            </option>
                            <template v-for="dept in departments" :key="dept.id">
                                <option>{{ dept.name }}</option>
                            </template>
                        </select><select v-model="selectedDepartment" class="border-select"
                            placeholder="Select a department">
                            <option :value="null" disabled selected>
                                Select role
                            </option>
                            <template v-for="dept in departments" :key="dept.id">
                                <option>{{ dept.name }}</option>
                            </template>
                        </select>
                        <ButtonForm title="Filter" class="w-fit" />
                    </div>
                    <div class="overflow-x-auto border-l border-r border-natural200 rounded-lg">
                        <table class="min-w-full">
                            <thead>
                                <tr class="bg-primary100 text-left ">
                                    <th class="header-table-area">Departement</th>
                                    <th class="header-table-area">Branch</th>
                                    <th class="header-table-area">Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(department, index) in areas" :key="index">
                                    <tr v-for="(branch, bIndex) in department.branches" :key="bIndex">
                                        <td class="px-4 py-4 border-b" v-if="bIndex === 0"
                                            :rowspan="department.branches.length">
                                            {{ department.name }}
                                        </td>
                                        <td class="px-4 py-4 border">{{ branch }}</td>
                                        <td class="px-4 py-4 border-l border-b text-center">
                                            <input type="checkbox" v-model="selectedBranches" :value="branch" 
                                            
                                            class="w-4 h-4 border border-natural200 rounded-sm input-border
                                            checked:bg-primary500 checked:border-transparent
                                            checked:active:bg-primary500 checked:hover:bg-primary500 cursor-pointer" />
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-natural200 my-3"></div>
        <div class="flex justify-center py-4 px-6 gap-4 mx-auto max-w-screen-xl">
            <ButtonForm title="Cancel" type="outline-border" class="w-[150px] " @click="back" />
            <ButtonForm title="Add New User" @click="back" />
        </div>
    </div>
</template>

<script setup>
import TextField from '@/components/TextField.vue';
import TextArea from '@/components/TextArea.vue';
import ButtonForm from '@/components/ButtonForm.vue';
import Pagination from '@/components/Pagination.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import profile from '@/assets/icons/profile.svg'

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
const phoneNumber = ref(null)

const areas = ref([
    { name: 'Jabodetabek', branches: ['Jakarta Utara', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Pusat'] },
    { name: 'Jawa Tengah', branches: ['Semarang', 'Solo'] },
]);

const selectedBranches = ref([]);
</script>

<style scoped>
.title-form {
    @apply text-content font-medium text-textPrimary
}

.header-table-area {
    @apply px-4 py-4 text-primary500 text-content font-medium
}
</style>