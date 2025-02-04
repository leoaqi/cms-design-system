<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Master Data Department</h1>
        <ButtonAdd @click="toAddForm">
            <h1 class="text-content-2 font-medium">+ Add New Department</h1>
        </ButtonAdd>
    </div>
    <div class="border border-natural200 px-4 py-10 bg-white mt-8 rounded-xl">
        <Search hint="Search by departement name" />
        <table class="min-w-full bg-white border-none">
            <thead class="bg-primary100 border-none">
                <tr class="text-primary500">
                    <th class="py-4 px-4 text-content font-medium">No</th>
                    <th class="py-4 px-4 text-content font-medium text-left ">Department Name</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Description</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Action</th>
                </tr>
            </thead>
            <tbody class="py-4">
                <tr v-for="(row, index) in tableData" :key="index">
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-9">{{ index + 1 }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-[250px]">{{ row.departmentName }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal ">
                        <p class="line-clamp-2 overflow-hidden leading-relaxed text-ellipsis">{{ row.description }}</p>
                    </td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal">
                        <div class="flex flex-row gap-3 items-center">
                            <img :src="icEdit" alt="" v-on:click="toDetail(index)" class="cursor-pointer">
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
import Pagination from '@/components/Pagination.vue';
import icEdit from '@/assets/icons/ic_edit.svg';
import icDelete from '@/assets/icons/ic_delete.svg';
import Search from '@/components/SearchInput.vue';
import { useRouter } from 'vue-router';
import ButtonAdd from '@/components/buttons/ButtonAdd.vue';

const router = useRouter()

const toDetail= (id) => {
    router.push(`/department/${id}`)
}

const toAddForm= () => {
    router.push('/department/add')
}

const tableData = [
    {
        "departmentName": "Specialty Restaurant Group",
        "description": "Lorem ipsum dolor sit amet consectetur. In dictumst cenean eu sit adipiscing."
    },
    {
        "departmentName": "Stratacard",
        "description": "Lorem ipsum dolor sit amet consectetur. Mattis hendrerit nec donec quam curabitur ut pretium."
    },
    {
        "departmentName": "Finast",
        "description": "Lorem ipsum dolor sit amet consectetur. Viverra mauris leo sit quam venenatis pharetra ullamcorper."
    },
    {
        "departmentName": "Auto Works",
        "description": "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper sit vestibulum duis magna."
    },
    {
        "departmentName": "Cut Rite Lawn Care",
        "description": "Lorem ipsum dolor sit amet consectetur. Ante etiam viverra pretium aliquam."
    },
    {
        "departmentName": "Pro Property Maintenance",
        "description": "Lorem ipsum dolor sit amet consectetur. Auctor auctor omare sagittis et."
    },
    {
        "departmentName": "Sofa Express",
        "description": "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris mauris et porta elit montes sit."
    },
    {
        "departmentName": "Total Network Development",
        "description": "Lorem ipsum dolor sit amet consectetur. Vestibulum dui tellus aliquam commodo."
    },
    {
        "departmentName": "Giant",
        "description": "Lorem ipsum dolor sit amet consectetur. At molestie et ligula consectetur augue condimentum enim pharetra."
    },
    {
        "departmentName": "Murray's Discount Auto Stores",
        "description": "Lorem ipsum dolor sit amet consectetur. Odio elit tortor faucibus semper."
    }
];
</script>