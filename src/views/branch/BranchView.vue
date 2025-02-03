<template>
    <div class="flex flex-row justify-between">
        <h1 class="font-medium text-body">Master Data Branch</h1>
        <ButtonAdd @click="toAddForm">
            <h1 class="text-content-2 font-medium">+ Add New Branch</h1>
        </ButtonAdd>
    </div>
    <div class="border border-natural200 px-4 py-10 bg-white mt-8 rounded-xl">
        <Search hint="Search by departement & branch name" />
        <table class="min-w-full bg-white border-none">
            <thead class="bg-primary100 border-none">
                <tr class="text-primary500">
                    <th class="py-4 px-4 text-content font-medium">No</th>
                    <th class="py-4 px-4 text-content font-medium text-left ">Branch Name</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Related Department</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Address</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Description</th>
                    <th class="py-4 px-4 text-content font-medium text-left">Action</th>
                </tr>
            </thead>
            <tbody class="py-4">
                <tr v-for="(row, index) in tableData" :key="index">
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-9">{{ index + 1 }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-[180px]">{{ row.branchName }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-[250px]">{{ row.relatedDepartment }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-[350px]">{{ row.address }}</td>
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
import ButtonAdd from '@/components/buttons/ButtonAdd.vue';
import icEdit from '@/assets/icons/ic_edit.svg';
import icDelete from '@/assets/icons/ic_delete.svg';
import Search from '@/components/SearchInput.vue';

import { useRouter } from 'vue-router';

const router = useRouter()

const toAddForm = () => {
    router.push('/branch/add')
}

const toDetail = (id) => {
    router.push(`/branch/${id}`)
}

const tableData = [
    {
        "branchName": "Jakarta Utara",
        "relatedDepartment": "Johnson’s General Stores",
        "address": "612 Shadowmar Drive, New Orleans, LA 70115",
        "description": "Lorem ipsum dolor sit amet consectetur. In dictumst cenean as asda dasdkl asdakl asdalk askldkas daksldk  asdasdkjalsdasdsdad"
    },
    {
        "branchName": "Jakarta Selatan",
        "relatedDepartment": "Bugle Boy",
        "address": "591 Joanne Lane, Wilmington, MA 01887",
        "description": "Lorem ipsum dolor sit amet consectetur. Mattis hendrerit nec..."
    },
    {
        "branchName": "Jakarta Barat",
        "relatedDepartment": "Cut Rite Lawn Care",
        "address": "4319 Wakefield Street, Philadelphia, PA 19126",
        "description": "Lorem ipsum dolor sit amet consectetur. Viverra mauris leo si..."
    },
    {
        "branchName": "Jakarta Timur",
        "relatedDepartment": "J. Brannam",
        "address": "199 Oakway Lane, Woodland Hills, CA 91303",
        "description": "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper si..."
    },
    {
        "branchName": "Jakarta Pusat",
        "relatedDepartment": "Cala Foods",
        "address": "4267 Cherry Tree Drive, Jacksonville, FL 32216",
        "description": "Lorem ipsum dolor sit amet consectetur. Ante etiam viverra p..."
    },
    {
        "branchName": "Depok",
        "relatedDepartment": "Rink’s",
        "address": "1341 Poplar Street, Chicago, IL 60606",
        "description": "Lorem ipsum dolor sit amet consectetur. Auctor auctor ornar..."
    },
    {
        "branchName": "Bogor",
        "relatedDepartment": "Cut Rite Lawn Care",
        "address": "417 Electown Road, New York, NY 10018",
        "description": "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris..."
    },
    {
        "branchName": "Tangerang",
        "relatedDepartment": "Ezhe Source",
        "address": "184 Griffin Street, Gilbert, AZ 85233",
        "description": "Lorem ipsum dolor sit amet consectetur. Vestibulum dui tellu..."
    },
    {
        "branchName": "Bekasi",
        "relatedDepartment": "Western Auto",
        "address": "2900 Ritter Street, Huntsville, AL 35802",
        "description": "Lorem ipsum dolor sit amet consectetur. At molestie et ligula..."
    },
    {
        "branchName": "Kepulauan Seribu",
        "relatedDepartment": "Super Duper",
        "address": "1456 Veltri Drive, Anchorage, AK 99502",
        "description": "Lorem ipsum dolor sit amet consectetur. Odio elit tortor fauci..."
    }
];

</script>