<template>
    <h1 class="font-medium text-body">Approval</h1>
    <div class="border border-natural200 px-4 py-10 bg-white mt-8 rounded-xl">
        <div class="flex flex-row items-center gap-4">
            <Search hint="Search by request title, related to & requested by" />
            <div class="border border-natural200 px-4 py-3 bg-white rounded-lg flex flex-row gap-2 items-center mb-5">
                <h1 class="text-content font-normal text-textScondary">Filter</h1>
                <RiFilter3Line class="w-[16px] h-[16px] text-textScondary" />
            </div>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border-none table-auto overflow-scroll w-full">
                <thead class="bg-primary100 border-none">
                    <tr class="text-primary500">
                        <th class="py-4 px-4 text-content font-medium">No</th>
                        <th class="py-4 px-4 text-content font-medium text-left ">Request title</th>
                        <th class="py-4 px-4 text-content font-medium text-left">Related to</th>
                        <th class="py-4 px-4 text-content font-medium text-left">Requested By</th>
                        <th class="py-4 px-4 text-content font-medium text-left">Datetime</th>
                        <th class="py-4 px-4 text-content font-medium text-left">Approval Status</th>
                        <th class="py-4 px-4 text-content font-medium text-left">Action</th>
                    </tr>
                </thead>
                <tbody class="py-4">
                    <tr v-for="(row, index) in tableData" :key="index">
                        <td class="py-5 px-4 border-b text-content-2 font-normal w-9">{{ index + 1 }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.requestTitle }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.relatedTo }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.requestedBy }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.datetime }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">
                            <div
                                class="bg-primary50 px-3 py-2 flex flex-row items-center justify-center rounded-3xl gap-1 w-fit">
                                <h1 class="text-error500 text-content-2 font-normal">{{ row.approvalStatus }}</h1>
                                <RiCloseLine class="text-error500 w-3 h-3" />
                            </div>
                        </td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">
                            <div class="flex flex-row gap-3 items-center">
                                <img :src="icEdit" alt="" @click="toDetail(index)" class="cursor-pointer">
                                <img :src="icDelete" alt="" @click="openDialog" class="cursor-pointer">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination />

    </div>

    <ApprovalDialog :is-open="isDialogOpen" @close="closeDialog" @confirm="handleDelete" title="Delete Request"
        message="Are you sure want to delete this request? Please check carefully before delete" ok-button="Delete" />
</template>

<script setup>
import icEdit from '@/assets/icons/ic_edit.svg'
import icDelete from '@/assets/icons/ic_delete.svg'
import { RiCloseLine } from '@remixicon/vue';
import Pagination from '@/components/Pagination.vue';
import Search from '@/components/SearchInput.vue';
import { RiFilter3Line } from '@remixicon/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ApprovalDialog from './ApprovalDialog.vue';

const router = useRouter()

const isDialogOpen = ref(false)
const openDialog = () => {
    isDialogOpen.value = true
}
const handleDelete = () => {
    console.log('delete');
    
}

const closeDialog = () => {
    isDialogOpen.value = false
}

const toDetail = (id) => {
    router.push(`/approval/${id}`)
}

const tableData = [
    {
        "requestTitle": "Ornare tortor sed pulvinar",
        "relatedTo": "Placerat velit at eu",
        "requestedBy": "Mary Karma Freund",
        "datetime": "31 December 2024 14:43",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Leo eget cras et id mi.",
        "relatedTo": "Uma neque sapien nibh",
        "requestedBy": "Corina Juliet McCoy",
        "datetime": "30 December 2024 21:14",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Curabitur ullamcorper eg...",
        "relatedTo": "Piatea Iacinia placerat",
        "requestedBy": "Frances Jett Swann",
        "datetime": "11 January 2025 06:48",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Sed felis condimentum se...",
        "relatedTo": "Et mattis nibh lectus in",
        "requestedBy": "Bradley Benjamin Lawlor",
        "datetime": "20 December 2024 22:51",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Massa viverra nec nulla",
        "relatedTo": "Ut vel sed turpis sed eget.",
        "requestedBy": "Patricia Tovi Sanders",
        "datetime": "29 December 2024 17:37",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Ipsum adipiscing arcu",
        "relatedTo": "Sapien sagittis turpis pur..",
        "requestedBy": "Kathy Jane Pacheco",
        "datetime": "20 December 2024 19:33",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Vestibulum mi nibh aliqu..",
        "relatedTo": "Pharetra id nibh varius",
        "requestedBy": "Autumn Pearl Phillips",
        "datetime": "22 December 2024 02:54",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Aliquam vel mattis sapien",
        "relatedTo": "Non felis quam in sapien",
        "requestedBy": "Iva Tenley Ryan",
        "datetime": "10 January 2025 22:45",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Arcu odio est amet amet i...",
        "relatedTo": "Quam tellus eget",
        "requestedBy": "Daniel Robert Hamilton",
        "datetime": "30 December 2024 08:33",
        "approvalStatus": "Status"
    },
    {
        "requestTitle": "Elementum fermentum",
        "relatedTo": "Aliquam risus dolor donec",
        "requestedBy": "Rodger Joseph Struck",
        "datetime": "11 January 2025 07:12",
        "approvalStatus": "Status"
    }
]
</script>