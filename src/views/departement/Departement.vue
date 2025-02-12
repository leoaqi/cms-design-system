<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Master Data Department</h1>
        <ButtonAdd @click="toAddForm">
            <h1 class="text-content-2 font-medium">+ Add New Department</h1>
        </ButtonAdd>
    </div>
    <div class="border border-natural200 px-4 py-10 bg-white mt-8 rounded-xl">
        <Search hint="Search by departement name" v-model="searchQuery" @input="onSearch" @search="onSearch" />
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
                <tr v-if="filteredDepartements.length == 0">
                    <td colspan="4" class="py-5 px-4 border-b text-content-2 font-normal text-center">No Data</td>
                </tr>
                <tr v-for="(row, index) in paginatedData" :key="index">
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-9">{{ index + 1 }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal w-[250px]">{{ row.departmentName }}</td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal ">
                        <p class="line-clamp-2 overflow-hidden leading-relaxed text-ellipsis">{{ row.description }}</p>
                    </td>
                    <td class="py-5 px-4 border-b text-content-2 font-normal">
                        <div class="flex flex-row gap-3 items-center">
                            <img :src="icEdit" alt="" v-on:click="toDetail(index)" class="cursor-pointer">
                            <img :src="icDelete" alt="" v-on:click="onShowModalDelete(row)" class="cursor-pointer">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination v-model="currentPage" :total="filteredDepartements.length" :page-size="pageSize"
            @page-change="handlePageChange" @page-size-change="handlePageSizeChange" />
    </div>

    <Modal v-model="showModalDelete" title="Example Modal">
        <ModalDelete v-model="showModalDelete" @handleDelete="handleDelete" />
    </Modal>
</template>

<script setup>
import Pagination from '@/components/Pagination.vue';
import icEdit from '@/assets/icons/ic_edit.svg';
import icDelete from '@/assets/icons/ic_delete.svg';
import Search from '@/components/SearchInput.vue';
import { useRouter } from 'vue-router';
import ButtonAdd from '@/components/buttons/ButtonAdd.vue';
import { useDepartementStore } from '@/store/departementStore';
import { onBeforeMount, ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import Modal from '@/components/Modal.vue';
import ModalDelete from './ModalDelete.vue';

const router = useRouter()
const departementStore = useDepartementStore()
const { filteredDepartements } = storeToRefs(departementStore)
const searchQuery = ref('')
const showModalDelete = ref(false)
const selectIndexForDelete = ref(null)

const currentPage = ref(1);
const pageSize = ref(10);

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredDepartements.value.slice(start, end);
});

const handlePageChange = (pageInfo) => {
    // Handle page change
    console.log('Page changed:', pageInfo);
};

const handlePageSizeChange = (newPageSize) => {
    pageSize.value = newPageSize;
};

const onShowModalDelete = (data) => {
    showModalDelete.value = true
    selectIndexForDelete.value = data
}
const handleClose = () => {
    showModalDelete.value = false
}

const handleDelete = () => {
    departementStore.deleteDepartement(selectIndexForDelete.value)
    handleClose()
}

const paginatedDepartments = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredDepartements.value.slice(start, end);
});

onBeforeMount(() => {
    departementStore.init()
})

const toDetail = (id) => {
    router.push(`/department/${id}`)
}

const toAddForm = () => {
    router.push('/department/add')
}

const onSearch = () => {
    departementStore.setSearchQuery(searchQuery.value)
}
</script>