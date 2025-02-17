<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">User Management</h1>
        <ButtonAdd @click="toAddUser">
            <h1 class="text-content-2 font-medium">+ Add New User</h1>
        </ButtonAdd>
    </div>

    <div class="border border-natural200 px-4 py-10 bg-white mt-8 rounded-xl">
        <SearchInput hint="Search by departement & branch name" />
        <div class="overflow-x-auto">
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
                        <td class="py-5 px-4 border-b text-content-2 font-normal text-left w-80">
                            <div class="flex flex-row gap-2">
                                <img :src="icProfile1" alt="profile" class="w-[36px] h-[36px] rounded-full object-cover">
                                <div>
                                    <h1 class="text-content-2 font-normal text-textPrimary">{{ row.name }}</h1>
                                    <h1 class="text-paragraph-4 font-normal text-natural600">{{ row.id }}</h1>
                                </div>
                            </div>
                        </td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">
                            <div class="bg-primary50 px-1 py-2 flex flex-row items-center justify-center rounded-3xl gap-1">
                                <h1 class="text-error500 text-content-2 font-normal">Status</h1>
                                <RiCloseLine class="text-error500 w-3 h-3" />
                            </div>
                        </td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.email }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.group }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">{{ row.branch }}</td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">
                            <div class="bg-primary50 px-1 py-2 flex flex-row items-center justify-center rounded-3xl gap-1">
                                <h1 class="text-error500 text-content-2 font-normal">{{ row.status }}</h1>
                                <RiCloseLine class="text-error500 w-3 h-3" />
                            </div>
                        </td>
                        <td class="py-5 px-4 border-b text-content-2 font-normal">
                            <div class="flex flex-row gap-3 items-center">
                                <img :src="icEdit" alt="" @click="toDetailUser(index)" class="cursor-pointer">
                                <img :src="icDelete" alt="">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination />

    </div>
</template>

<script setup>
import ButtonForm from '@/components/ButtonForm.vue';
import Pagination from '@/components/Pagination.vue';
import SearchInput from '@/components/SearchInput.vue';
import icProfile1 from '@/assets/icons/ic_profile_1.png';
import { RiCloseLine } from '@remixicon/vue';
import icEdit from '@/assets/icons/ic_edit.svg'
import icDelete from '@/assets/icons/ic_delete.svg'
import ButtonAdd from '@/components/buttons/ButtonAdd.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const toAddUser = () => {
    router.push('/user-management/add')
}

const toDetailUser = (id) => {
    router.push(`/user-management/${id}`)
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