<template>
    <!-- Title -->
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Detail Branch</h1>
        <div class="flex flex-row gap-3">
            <button class="btn-border-icon">
                <img :src="icEdit" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 font-medium">Edit Branch</h1>
            </button>
            <button class="btn-border-icon">
                <img :src="icDelete" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 font-medium">Delete Branch</h1>
            </button>
        </div>
    </div>
    <!-- Information -->
    <div class="w-full bg-white rounded-xl border border-natural100 my-5 py-4 ">
        <h1 class="px-6 pb-4 text-body-2 font-medium text-textPrimary">Branch Information</h1>
        <div class="w-full h-[1px] bg-natural200 mb-6"></div>
        <div class="px-6 grid grid-cols-2 gap-4">
            <div>
                <h1 class="text-content-2 font-normal text-textScondary pb-2">Branch Name</h1>
                <h1 class="text-content-2 font-medium text-textPrimary">Branch Jabodetabek</h1>
            </div>
            <div>
                <div class="flex flex-row items-start justify-start gap-4">
                    <div class="w-[1px] h-[40px] bg-natural200"></div>
                    <div>
                        <h1 class="text-content-2 font-normal text-textScondary pb-2">Related Departement</h1>
                        <h1 class="text-content-2 font-medium text-textPrimary">Jabodetabek</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="text-content-2 font-normal text-textScondary pb-2">Address</h1>
                <h1 class="text-content-2 font-medium text-textPrimary">199 Oakway Lane, Woodland Hills, CA 91303</h1>
            </div>
            <div>
                <div class="flex flex-row items-start justify-start gap-4">
                    <div class="w-[1px] h-[40px] bg-natural200"></div>
                    <div>
                        <h1 class="text-content-2 font-normal text-textScondary pb-2">Head Of Branch</h1>
                        <h1 class="text-content-2 font-medium text-textPrimary">Daniel Robert Hamilton</h1>
                    </div>
                </div>
            </div>
            <div class="">
                <h1 class="text-content-2 font-normal text-textScondary pb-2">Branch Description</h1>
                <h1 class="text-content-2 font-medium text-textPrimary">Lorem ipsum dolor sit amet consectetur. Mattis
                    hendrerit nec donec quam curabitur ut pretium.</h1>
            </div>
            <div>
                <div class="flex flex-row items-start justify-start gap-4">
                    <div class="w-[1px] h-[40px] bg-natural200"></div>
                    <div>
                        <h1 class="text-content-2 font-normal text-textScondary pb-2">Total User</h1>
                        <h1 class="text-content-2 font-medium text-textPrimary">50</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- List Branch -->
    <div class="w-full bg-white rounded-xl border border-natural100 my-5 py-4 ">
        <div class="flex flex-row justify-between items-center px-6 pb-4">
            <h1 class=" text-body-2 font-medium text-textPrimary">List User</h1>
        </div>
        <div class="w-full h-[1px] bg-natural200 mb-6"></div>
        <div class="px-6">
            <SearchInput hint="Search by user name" />
            <div class="overflow-auto">
                <table class="min-w-full bg-white border-none table-auto overflow-scroll w-full">
                    <thead class="bg-primary100 border-none">
                        <tr class="text-primary500">
                            <th class="py-4 px-4 text-content font-medium">No</th>
                            <th class="py-4 px-4 text-content font-medium text-left ">Name & ID</th>
                            <th class="py-4 px-4 text-content font-medium text-left">User Role</th>
                            <th class="py-4 px-4 text-content font-medium text-left">Email</th>
                            <th class="py-4 px-4 text-content font-medium text-left">Group</th>
                            <th class="py-4 px-4 text-content font-medium text-left">Branch</th>
                            <th class="py-4 px-4 text-content font-medium text-left">Status</th>
                            <th class="py-4 px-4 text-content font-medium text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody class="py-4">
                        <tr v-for="(row, index) in tableData" :key="index">
                            <td class="py-5 px-4 border-b text-content-2 font-normal w-4">{{ index + 1 }}</td>
                            <td class="py-5 px-4 border-b text-content-2 font-normal text-left">
                                <div class="flex flex-row gap-2">
                                    <img :src="icProfile1" alt="profile"
                                        class="w-[36px] h-[36px] rounded-full object-cover">
                                    <div>
                                        <h1 class="text-content-2 font-normal text-textPrimary">{{ row.name }}</h1>
                                        <h1 class="text-paragraph-4 font-normal text-natural600">{{ row.id }}</h1>
                                    </div>
                                </div>
                            </td>
                            <td class="py-5 px-4 border-b text-content-2 font-normal">
                                <div
                                    class="bg-primary50 px-1 py-2 flex flex-row items-center justify-center rounded-3xl gap-1">
                                    <h1 class="text-error500 text-content-2 font-normal">Status</h1>
                                    <RiCloseLine class="text-error500 w-3 h-3" />
                                </div>
                            </td>
                            <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.email }}</td>
                            <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.group }}</td>
                            <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.branch }}</td>
                            <td class="py-5 px-4 border-b text-content-2 font-normal">
                                <div
                                    class="bg-primary50 px-1 py-2 flex flex-row items-center justify-center rounded-3xl gap-1">
                                    <h1 class="text-error500 text-content-2 font-normal">{{ row.status }}</h1>
                                    <RiCloseLine class="text-error500 w-3 h-3" />
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
            </div>
            <Pagination />
        </div>
    </div>
</template>

<script setup>
import icEdit from '@/assets/icons/ic_edit.svg'
import icDelete from '@/assets/icons/ic_delete.svg'
import ButtonAdd from '@/components/buttons/ButtonAdd.vue';
import SearchInput from '@/components/SearchInput.vue';
import Pagination from '@/components/Pagination.vue';
import icProfile1 from '@/assets/icons/ic_profile_1.png';
import { useRouter } from 'vue-router';
import {RiCloseLine} from '@remixicon/vue'

const router = useRouter()

const toAddForm = () =>{
    router.push('/branch/add')
}

const tableData = [
    {
        "name": "James Lee Hall",
        "id": "1360308",
        "userRole": "Johnson's General",
        "email": "m.k.freund@aol.com",
        "group": "stores",
        "branch": "Jakarta Pusat",
        "status": "Status"
    },
    {
        "name": "Daniel Robert H..",
        "id": "1353460",
        "userRole": "Cala Foods",
        "email": "j.e.dukes@aol.com",
        "group": "Cala Foods",
        "branch": "Yogyakarta",
        "status": "Status"
    },
    {
        "name": "Lori Taya Wari",
        "id": "1356884",
        "userRole": "Pacific Stereo",
        "email": "dennis416@gmail.com",
        "group": "Pacific Stereo",
        "branch": "Semarang",
        "status": "Status"
    },
    {
        "name": "Stephanie Tay...",
        "id": "1350036",
        "userRole": "Pro Property Maintenance",
        "email": "pattricia651@outlook.com",
        "group": "Pro Property Maintenance",
        "branch": "Solo",
        "status": "Status"
    },
    {
        "name": "Mary Karma Fr..",
        "id": "1346612",
        "userRole": "Grey Fade",
        "email": "autumn_philips@aol.com",
        "group": "Grey Fade",
        "branch": "Jakarta Selatan",
        "status": "Status"
    },
    {
        "name": "Paula Eve Mora",
        "id": "1343188",
        "userRole": "stratacard",
        "email": "Kurt_bates@outlook.com",
        "group": "stratacard",
        "branch": "Jakarta Barat",
        "status": "Status"
    },
    {
        "name": "Kimberly Rave...",
        "id": "1336340",
        "userRole": "Bugle Boy",
        "email": "fj.swann@aol.com",
        "group": "Bugle Boy",
        "branch": "Salatiga",
        "status": "Status"
    },
    {
        "name": "Frances Jett S..",
        "id": "1329492",
        "userRole": "Cut Rite Lawn Care",
        "email": "s.t.sharkey@outlook.com",
        "group": "Cut Rite Lawn Care",
        "branch": "Blora",
        "status": "Status"
    },
    {
        "name": "Rodger Joseph...",
        "id": "1332916",
        "userRole": "Specialty Restaurant Group",
        "email": "k.p.alien@aol.com",
        "group": "Specialty Restaurant Group",
        "branch": "Sukabumi",
        "status": "Status"
    }
]
</script>