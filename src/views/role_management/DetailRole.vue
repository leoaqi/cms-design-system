<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Detail Role</h1>
        <div class="flex flex-row gap-3">
            <button class="btn-border-icon">
                <img :src="icEdit" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 font-medium">Edit Role</h1>
            </button>
            <button class="btn-border-icon">
                <img :src="icDelete" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 font-medium">Delete Role</h1>
            </button>
        </div>
    </div>
    <div class="w-full bg-white rounded-xl border border-natural100 my-5 py-4 ">
        <h1 class="px-6 text-body-2 font-medium text-textPrimary">Role Information</h1>
        <div class="horizontal-divider"></div>
        <div class="px-6 py-4">
            <h1 class="text-content-2 font-normal text-textScondary pb-2">Role Name</h1>
            <h1 class="text-content font-medium text-textPrimary pb-4">Head of Branch</h1>
            <h1 class="text-content font-medium text-textPrimary pb-2">Access Menu & Access Type</h1>
            <h1 class="text-content-2 font-normal text-textScondary pb-2">Detail role access based on menu & type</h1>

            <div class="bg-white my-4 rounded-lg overflow-hidden border border-natural200">
                <!-- Header -->
                <div class="bg-primary100 text-primary500 px-6 py-4 grid grid-cols-5 gap-4">
                    <div class="text-header">Menu</div>
                    <div class="text-header">Access</div>
                    <div class="text-header">Create</div>
                    <div class="text-header">Edit</div>
                    <div class="text-header">Delete</div>
                </div>

                <!-- Table Body -->
                <div class="divide-y divide-gray-200">
                    <div v-for="item in menuItems" :key="item.name"
                        class="grid grid-cols-5 gap-4 px-6 py-4 items-center hover:bg-gray-50">
                        <div class="text-content-2 font-normal text-textScondary">{{ item.name }}</div>

                        <!-- Checkboxes -->
                        <div v-for="permission in ['access', 'create', 'edit', 'delete']" :key="permission"
                            class="flex justify-center">
                            <img v-if="item[permission] === true" :src="icChecklist" alt=""
                                class="ic-checklist">
                            <img v-if="item[permission] === false" :src="icMinus" alt="" class="ic-checklist">

                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white my-4 rounded-lg overflow-hidden border border-natural200">
                <!-- Header -->
                <div class="bg-primary100 text-primary500 px-6 py-4 grid grid-cols-5 gap-4">
                    <div class="text-header-approver col-span-3 text-left">Menu</div>
                    <div class="text-header">Access</div>
                    <div class="text-header">Edit</div>
                </div>

                <!-- Table Body -->
                <div class="divide-y divide-gray-200">
                    <div v-for="item in approvalMenuItems" :key="item.name"
                        class="grid grid-cols-5 gap-4 px-6 py-4 items-center hover:bg-gray-50">
                        <div class="text-content-2 font-normal text-textScondary col-span-3">{{ item.name }}</div>

                        <!-- Checkboxes -->
                        <div v-for="permission in ['access', 'edit']" :key="permission" class="flex justify-center">
                            <img v-if="item[permission] === true" :src="icChecklist" alt=""
                                class="ic-checklist">
                            <img v-if="item[permission] === false" :src="icMinus" alt="" class="ic-checklist">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import icEdit from '@/assets/icons/ic_edit.svg';
import icDelete from '@/assets/icons/ic_delete.svg';
import { ref } from 'vue';
import icChecklist from '@/assets/icons/ic_checklist.svg';
import icMinus from '@/assets/icons/ic_minus.svg';

const menuItems = ref([
    { name: 'Dashboard', access: true },
    { name: 'Departement', access: false, create: false, edit: false, delete: false },
    { name: 'Branch', access: true, create: true, edit: true, delete: true },
    { name: 'User Management', access: true, create: true, edit: true, delete: true },
    { name: 'Role Management', access: true, create: true, edit: true, delete: true },
    { name: 'Report', access: true },
    { name: 'Audit Trail', access: true },
    { name: 'Setting', access: true, edit: true },
])

const approvalMenuItems = ref([
    { name: 'Approval Menu', access: true },
    { name: 'Approver level 1', access: true, edit: true },
    { name: 'Approver level 2', access: true, edit: true },
    { name: 'Approver level 3', access: false, edit: false },
])
</script>

<style scoped>
.text-header {
    @apply font-medium text-content text-center
}

.text-header-approver {
    @apply font-medium text-content text-left
}

.ic-checklist{
    @apply w-[16px] h-[16px] object-fill
}
</style>