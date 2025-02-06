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
                            <Dropdown :options="dataNumber" v-model="phoneNumber" placeholder="+.." header="Code"
                                id="phoneNumber" />
                            <TextField placeholder="Input phone number" type="number" class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                [&::-webkit-inner-spin-button]:appearance-none" />
                        </div>
                    </div>
                    <div class="pt-1">
                        <h1 class="title-form pb-2">User Status</h1>
                        <Dropdown :options="userStatusData" v-model="userStatus" placeholder="Select user status"
                            header="User status" id="userStatus" />
                    </div>

                    <div class="pt-1">
                        <h1 class="title-form pb-2">Marital Status</h1>
                        <Dropdown :options="maritalStatusData" v-model="maritalStatus"
                            placeholder="Select marital status" header="Marital status" id="maritalStatus" />

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
                    <Dropdown :options="roleData" v-model="role" placeholder="Select role" header="Role" id="role" />
                </div>
                <div class="w-full border border-natural200 px-4 py-4 my-3 rounded-lg">
                    <h1 class="title-form">Area</h1>
                    <div class="flex flex-row gap-4 my-2">
                        <Dropdown :options="departmentsData" v-model="selectedDepartment" placeholder="Select department"
                            header="Department" id="dep" />
                        <Dropdown :options="roleData" v-model="headOfBranch" placeholder="Select role" header="Role"
                            id="role2" />

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
                                            <input type="checkbox" v-model="selectedBranches" :value="branch" class="w-4 h-4 border border-natural200 rounded-sm input-border
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
import Dropdown from '@/components/Dropdown.vue';

const router = useRouter()

const back = () => {
    router.back()
}

const maritalStatusData = [
    { id: 1, label: 'Single' },
    { id: 2, label: 'Married' },
    { id: 3, label: 'Divorced' },
    { id: 4, label: 'Widowed' },
    { id: 5, label: 'Separated' }
]
const roleData = [
    { id: 1, label: 'Admin' },
    { id: 2, label: 'Sales' }
]

const userStatus = ref(null)
const maritalStatus = ref(null)

const userStatusData = [
    { id: 1, label: 'Option 1', status: '1' },
    { id: 2, label: 'Option 2', status: '2' },
    { id: 3, label: 'Option 3', status: '3' },
    { id: 4, label: 'Option 4', status: '4' }
]

const departmentsData = [
    { id: 1, label: 'Human Resources' },
    { id: 2, label: 'Information Technology' },
    { id: 3, label: 'Finance' },
    { id: 4, label: 'Marketing' },
    { id: 5, label: 'Operations' }
]

const dataNumber = [
    { id: 1, label: '+62', status: '1' },
]

const selectedDepartment = ref(null)
const headOfBranch = ref(null)
const phoneNumber = ref(null)
const role = ref(null)

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