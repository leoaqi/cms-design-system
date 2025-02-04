<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Detail User</h1>
        <div class="flex flex-row gap-3">
            <button class="btn-border-icon">
                <img :src="icEdit" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 font-medium">Edit User</h1>
            </button>
            <button class="btn-border-icon">
                <img :src="icDelete" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 font-medium">Delete User</h1>
            </button>
        </div>
    </div>
    <!-- General Information -->
    <div class="w-full bg-white  my-8 rounded-lg">
        <h1 class="text-body-2 font-medium text-textPrimary px-6 py-4">General Information</h1>
        <div class="w-full h-[1px] bg-natural200"></div>
        <div class="px-6 py-4">
            <img :src="icProfile1" alt="" class="w-[80px] h-[80px] rounded-full object-cover mb-8">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <h1 class="title">Full Name</h1>
                    <h1 class="value">Kenneth Percy Allen</h1>
                </div>
                <div class="flex flex-row gap-6">
                    <div class="vertical-divider"></div>
                    <div>
                        <h1 class="title">User Id</h1>
                        <h1 class="value">10098457230</h1>
                    </div>
                </div>
                <div>
                    <h1 class="title">Email</h1>
                    <h1 class="value">r.m.smith@gmail.com</h1>
                </div>
                <div class="flex flex-row gap-6">
                    <div class="vertical-divider"></div>
                    <div>
                        <h1 class="title">Phone Number</h1>
                        <h1 class="value">(830) 556-6651</h1>
                    </div>
                </div>
                <div>
                    <h1 class="title">User Status</h1>
                    <div
                        class="w-fit py-1 px-2 rounded-3xl bg-success50 text-success500 text-content-2 font-normal flex flex-row justify-center items-center">
                        Active</div>
                </div>
                <div class="flex flex-row gap-6">
                    <div class="vertical-divider"></div>
                    <div>
                        <h1 class="title">Marital Status</h1>
                        <h1 class="value">Married</h1>
                    </div>
                </div>
                <div class="col-span-2">
                    <h1 class="title">Address</h1>
                    <h1 class="value">4093 Overlook Drive, Richmond, IN 47374</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Role & Area -->
    <div class="w-full bg-white my-8 rounded-lg">
        <div class="flex flex-row justify-between items-center px-6 py-4">
            <h1 class="text-body-2 font-medium text-textPrimary ">Role & Area</h1>
            <button class="btn-border-icon">
                <img :src="icEdit" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 font-medium">Edit Role</h1>
            </button>
        </div>
        <div class="w-full h-[1px] bg-natural200"></div>
        <div class="px-6 py-4">
            <h1 class="title">Role</h1>
            <h1 class="value">Head Of Branch</h1>
            <SearchInput hint="Search by departement name & branch name" class="w-full my-6" />
            <table class="min-w-full">
                <thead>
                    <tr class="bg-primary100 text-left ">
                        <th class="py-4 px-4 text-content font-medium">Departement</th>
                        <th class="py-4 px-4 text-content font-medium">Branch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in tableData" :key="index">
                        <td class="value-table">
                                {{ data.department }}
                            </td>
                            <td class="value-table">{{ data.branch }}</td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    </div>
</template>

<script setup>
import icEdit from '@/assets/icons/ic_edit.svg'
import icDelete from '@/assets/icons/ic_delete.svg'
import icProfile1 from '@/assets/icons/ic_profile_1.png'
import SearchInput from '@/components/SearchInput.vue';
import Pagination from '@/components/Pagination.vue';

const tableData = [
  {
    "department": "Human Resources",
    "branch": "Jogjakarta, Jakarta"
  },
  {
    "department": "Finance",
    "branch": "Jogjakarta, Jakarta"
  },
  {
    "department": "ABC",
    "branch": "Jogjakarta, Jakarta"
  },
  {
    "department": "DEF",
    "branch": "Jogjakarta, Jakarta"
  },
  {
    "department": "GHI",
    "branch": "Jogjakarta, Jakarta"
  }
]
</script>

<style scoped>
.title {
    @apply text-content-2 font-normal text-textScondary mb-3
}

.value {
    @apply text-content-2 font-medium text-textPrimary
}

.vertical-divider {
    @apply w-[1px] h-[50px] bg-natural200
}

.value-table{
    @apply px-4 py-4 border-b text-textPrimary text-content-2 font-normal
}
</style>