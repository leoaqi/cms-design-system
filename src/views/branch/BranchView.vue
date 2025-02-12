<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Master Data Branch</h1>
        <ButtonAdd @click="toAddForm">
            <h1 class="text-content-2 font-medium">+ Add New Branch</h1>
        </ButtonAdd>
    </div>
    <div class="border border-natural200 px-4 py-10 bg-white mt-8 rounded-xl">
        <Search hint="Search by departement & branch name" v-model="searchQuery" @input="onSearch" @search="onSearch" />
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
                <tr v-for="(row, index) in filterdBranchs" :key="index">
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
                            <img :src="icDelete" alt="" v-on:click="onShowModalDelete(row)" class="cursor-pointer">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination v-model="currentPage" 
        :total="filterdBranchs.length" 
        :page-size="pageSize"
        @page-size-change="handlePageSizeChange" />
    </div>

    <Modal v-model:model-value="showModalDelete">
        <ModalDelete v-model="showModalDelete" @handleDelete="handleDelete" />
    </Modal>
</template>

<script setup>
import Pagination from '@/components/Pagination.vue';
import ButtonAdd from '@/components/buttons/ButtonAdd.vue';
import icEdit from '@/assets/icons/ic_edit.svg';
import icDelete from '@/assets/icons/ic_delete.svg';
import Search from '@/components/SearchInput.vue';
import ModalDelete from './ModalDelete.vue';
import { useRouter } from 'vue-router';
import {useBranchStore} from '@/store/branchStore'
import { onBeforeMount, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import Modal from '@/components/Modal.vue';

const router = useRouter()
const branchStore = useBranchStore()
const {filterdBranchs} = storeToRefs(branchStore)
const selectBranchForDelete = ref(null)
const showModalDelete = ref(false)

const searchQuery = ref('')

const currentPage = ref(1);
const pageSize = ref(10);

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filterdBranchs.value.slice(start, end);
});

const handlePageSizeChange = (newPageSize) => {
    pageSize.value = newPageSize;
};

const toAddForm = () => {
    router.push('/branch/add')
}

const toDetail = (id) => {
    router.push(`/branch/${id}`)
}

const onSearch = () => {
    branchStore.setSearchQuery(searchQuery.value)
}

const onShowModalDelete = (data)=> {
    selectBranchForDelete.value = data
    showModalDelete.value = true
}

const handleDelete = () => {
    branchStore.deleteBranch(selectBranchForDelete.value)
    showModalDelete.value = false
}

onBeforeMount(()=> {
    branchStore.init();
})

</script>