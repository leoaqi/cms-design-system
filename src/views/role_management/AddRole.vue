<template>
    <div class="bg-white rounded-xl max-w-screen-lg mx-auto py-4 border border-natural200">
        <div class="px-4 lg:px-32">
            <div class="text-center">
                <h1 class="text-body text-textPrimary">Add New Role</h1>
                <h1 class="text-content text-textScondary pt-3">Add new role and assign role access
                </h1>
            </div>
            <h1 class="text-content font-medium text-textPrimary pb-2">Role Name</h1>
            <TextField class="w-full mb-4" placeholder="Input role name" />
            <h1 class="text-content font-medium text-textPrimary pb-2">Access Menu & Access Type</h1>
            <h1 class="text-content-2 font-normal text-textScondary">Select role access based on menu & type bellow</h1>
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
                            <button v-if="item[permission] === true || item[permission] === false"
                                @click="togglePermission(item, permission)"
                                class="w-4 h-4 rounded border border-gray-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500"
                                :class="{ 'bg-red-500 border-red-500': item[permission] }">
                                <div v-if="item[permission] === true">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </button>
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
                            <button v-if="item[permission] === true || item[permission] === false"
                                @click="togglePermissionApproval(item, permission)"
                                class="w-4 h-4 rounded border border-gray-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500"
                                :class="{ 'bg-red-500 border-red-500': item[permission] }">
                                <div v-if="item[permission] === true">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="horizontal-divider"></div>
        <div class="flex justify-center py-4 px-6 gap-4 mx-auto max-w-screen-xl">
            <ButtonForm title="Cancel" type="outline-border" class="w-[150px] " @click="back" />
            <ButtonForm title="Add New Role" class="w-[232px]" @click="back" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TextField from '@/components/TextField.vue';
import ButtonForm from '@/components/ButtonForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const back = () => {
    router.back()
}

const menuItems = ref([
    { name: 'Dashboard', access: false },
    { name: 'Departement', access: false, create: false, edit: false, delete: false },
    { name: 'Branch', access: false, create: false, edit: false, delete: false },
    { name: 'User Management', access: false, create: false, edit: false, delete: false },
    { name: 'Role Management', access: false, create: false, edit: false, delete: false },
    { name: 'Report', access: false },
    { name: 'Audit Trail', access: false },
    { name: 'Setting', access: false, edit: false },
])

const approvalMenuItems = ref([
    { name: 'Approval Menu', access: false },
    { name: 'Approver level 1', access: false, edit: false },
    { name: 'Approver level 2', access: false, edit: false },
    { name: 'Approver level 3', access: false, edit: false },
])

const togglePermission = (item, permission) => {
    item[permission] = !item[permission]
}
const togglePermissionApproval = (item, permission) => {
    item[permission] = !item[permission]
}
</script>

<style scoped>
.text-header {
    @apply font-medium text-content text-center
}

.text-header-approver {
    @apply font-medium text-content text-left
}
</style>