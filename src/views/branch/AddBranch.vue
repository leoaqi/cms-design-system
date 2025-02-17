<template>
    <div class="bg-white rounded-xl max-w-screen-md mx-auto py-4 border border-natural200">
        <div class="px-6">
            <div class="text-center">
                <h1 class="text-body text-textPrimary">Add New Branch</h1>
                <h1 class="text-content text-textScondary pt-3">Create a new branch for content management system
                </h1>
            </div>
            <div class="flex flex-col md:grid grid-cols-2 gap-4">
                <div class="pt-3">
                    <h1 class="text-content text-textPrimary pb-2">Departement</h1>
                    <Dropdown v-model="selectedValue" :options="branchStore.departments" placeholder="Select department"
                        header="Department" id="dept" labelKey="departmentName" valueKey="departmentName" />
                </div>
                <div class="pt-3">
                    <h1 class="text-content text-textPrimary pb-2">Branch Name</h1>
                    <TextField hint="Input branch name" v-model="branchName" />
                </div>
                <div class="pt-1">
                    <h1 class="text-content text-textPrimary pb-2">Address</h1>
                    <TextField hint="Input Address" v-model="address" />
                </div>
                <div class="pt-1">
                    <h1 class="text-content text-textPrimary pb-2">Head of Branch</h1>
                    <Dropdown v-model="selectedHeadOfBranchValue" :options="branchStore.headOfBranchs" placeholder="Select head of branch"
                        header="Head of branch" id="branch" valueKey="id" labelKey="name" />
                </div>
            </div>
            <div class="pb-3 pt-6">
                <h1 class="text-content text-textPrimary pb-2">Branch Description</h1>
                <div class="">
                    <TextArea hint="Input departement description" v-model="description" />
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-natural200 my-3"></div>
        <div class="flex flex-col md:flex-row justify-center py-4 px-6 gap-4 mx-auto max-w-screen-xl">
            <ButtonForm title="Cancel" type="outline-border" class="w-full  md:w-[232px] " @click="back" />
            <ButtonForm title="Add New Branch" class="w-full md:w-[254px]" @click="handleSubmit" />
        </div>
    </div>
</template>

<script setup>
import TextField from '@/components/TextField.vue';
import TextArea from '@/components/TextArea.vue';
import ButtonForm from '@/components/ButtonForm.vue';
import Dropdown from '@/components/Dropdown.vue';
import { useRouter } from 'vue-router';
import { onActivated, ref } from 'vue';
import { useBranchStore } from '@/store/branchStore';

const router = useRouter()

const selectedValue = ref(null)
const selectedHeadOfBranchValue = ref(null)
const branchName = ref('')
const address = ref('')
const description = ref('')

const branchStore = useBranchStore()

const handleSubmit = async()=>{
    await branchStore.addBranch({
        branchName: branchName.value,
        address: address.value,
        description: description.value,
        relatedDepartment: selectedHeadOfBranchValue.value.name
    })

    back()
}

const back = () => {
    router.back()
}

onActivated(() => {
    selectedValue.value = null
    selectedHeadOfBranchValue.value = null
    branchName.value = ''
    address.value = ''
    description.value = ''
    branchStore.init()
})
</script>