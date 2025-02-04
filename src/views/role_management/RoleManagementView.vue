<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Role Management</h1>
        <ButtonAdd>
            <h1 class="text-content-2 font-medium">+ Add New Role</h1>
        </ButtonAdd>
    </div>
    <div class="border border-natural200 px-4 py-10 bg-white mt-8 rounded-xl">
        <Search hint="Search by departement name" />
        <table class="min-w-full bg-white border-none">
            <thead class="bg-primary100 border-none">
                <tr class="text-primary500">
                    <th class="py-4 px-4 text-content font-medium">No</th>
                    <th class="py-4 px-4 text-content font-medium text-left ">Role Name</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Role Access</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Action</th>
                </tr>
            </thead>
            <tbody class="py-4">
                <tr v-for="(row, index) in tableData" :key="index">
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-9">{{ index + 1 }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-[250px]">{{ row.roleName }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal ">
                        <div class="flex flex-row">
                            Group : <div v-for="value in row.access.group" :key="value"
                                class="flex flex-row line-clamp-2 overflow-hidden leading-relaxed text-ellipsis">
                                {{ value }},
                            </div>
                        </div>
                        <div class="flex flex-row">
                            Branch : <div v-for="value in row.access.branch" :key="value"
                                class="flex flex-row line-clamp-2 overflow-hidden leading-relaxed text-ellipsis">
                                {{ value }},
                            </div>
                        </div>
                    </td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal">
                        <div class="flex flex-row gap-3 items-center">
                            <img :src="icEdit" alt="">
                            <img :src="icDelete" alt="">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination />

    </div>
</template>

<script setup>
import icEdit from '@/assets/icons/ic_edit.svg'
import icDelete from '@/assets/icons/ic_delete.svg'
import Pagination from '@/components/Pagination.vue';
import Search from '@/components/SearchInput.vue';
import ButtonForm from '@/components/ButtonForm.vue';
import ButtonAdd from '@/components/buttons/ButtonAdd.vue';
const tableData = [
    {
        "roleName": "Head of Branch",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Administrator",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Finance",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Human Resources",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "General Affair",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Tech Lead",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Junior Front End Developer",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Middle Front End Developer",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Senior Front End Developer",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    },
    {
        "roleName": "Lead Front End Developer",
        "access": {
            "group": ["Read", "Create", "Update", "Delete"],
            "branch": ["Read", "Create", "Update", "Delete"]
        }
    }
]
</script>