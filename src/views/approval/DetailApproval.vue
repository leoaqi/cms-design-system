<template>
    <div class="flex flex-row justify-between items-center">
        <h1 class="font-medium text-body">Detail Approval</h1>
        <div class="flex flex-row gap-3">
            <button class="btn-border-icon flex items-center" @click="openDialog">
                <img :src="icCheckCircle" alt="" class="w-[16px] h-[16px] object-cover text-primary500">
                <h1 class="text-content-2 text-left font-medium">Approve Request</h1>
            </button>
            <button class="btn-border-icon flex items-center" @click="openDialogReject">
                <img :src="icCloseCircle" alt="" class="w-[16px] h-[16px] object-cover">
                <h1 class="text-content-2 text-left font-medium">Reject Request</h1>
            </button>
        </div>
    </div>

    <div class="card-detail">
        <h1 class="px-6 text-body-2 font-medium text-textPrimary">Request Information</h1>
        <div class="horizontal-divider"></div>
        <div class="px-6 py-4 grid grid-cols-2 gap-6">
            <div>
                <h1 class="subtitle pb-2">Request Title</h1>
                <h1 class="value-title">Kenneth Percy Allen</h1>
            </div>
            <div class="flex flex-row items-center gap-2">
                <div class="vertical-divider h-[40px]"></div>
                <div>
                    <h1 class="subtitle pb-2">Related To</h1>
                    <h1 class="value-title">10098457230</h1>
                </div>
            </div>
            <div>
                <h1 class="subtitle pb-2">Requested By</h1>
                <h1 class="value-title">r.m.smith@gmail.com</h1>
            </div>
            <div class="flex flex-row items-center gap-2">
                <div class="vertical-divider h-[40px]"></div>
                <div>
                    <h1 class="subtitle pb-2">Requested At</h1>
                    <h1 class="value-title">(830) 556-6651</h1>
                </div>
            </div>
            <div class="col-span-2">
                <h1 class="subtitle pb-2">Request Note</h1>
                <h1 class="value-title">4093 Overlook Drive, Richmond, IN 47374</h1>
            </div>
        </div>
    </div>
    <div class="card-detail overflow-scroll w-screen">
        <h1 class="px-6 text-body-2 font-medium text-textPrimary">Approval Information</h1>
        <div class="horizontal-divider w-full"></div>
        <div class="px-6 py-4">
            <div class="flex items-center justify-between w-full gap-6">
                <!-- Step 1: Request Created -->
                <div class="flex-shrink-0 approval-step bg-primary500">
                    <RiCheckboxCircleLine class="text-white w-6 h-6" />
                    <div class="flex flex-col">
                        <h1 class="title-white">Request Created</h1>
                        <h1 class="subtitle-white">by John Doe</h1>
                    </div>
                </div>

                <!-- Line 1 -->
                <div class="flex-grow">
                    <div class="horizontal-line"></div>
                </div>

                <!-- Step 2: Approved -->
                <div class="flex-shrink-0 approval-step bg-primary500">
                    <RiCheckboxCircleLine class="text-white w-6 h-6" />
                    <div class="flex flex-col">
                        <label class="title-white">Approved</label>
                        <label class="subtitle-white">by John Doe</label>
                    </div>
                </div>

                <!-- Line 2 -->
                <div class="flex-grow">
                    <div class="horizontal-line"></div>
                </div>

                <!-- Step 3: Waiting Approval -->
                <div class="flex-shrink-0 approval-step border border-primary500">
                    <RiTimeLine class="text-primary500 w-6 h-6" />
                    <div class="flex flex-col">
                        <label class="title-red">Waiting Approval</label>
                        <label class="subtitle-red">by John Doe</label>
                    </div>
                </div>

                <!-- Line 3 -->
                <div class="flex-grow">
                    <div class="horizontal-line-disable"></div>
                </div>

                <!-- Step 4: Disabled -->
                <div class="flex-shrink-0 approval-step border border-natural200">
                    <RiTimeLine class="text-textScondary w-6 h-6" />
                    <div class="flex flex-col">
                        <label class="title-disable">Waiting Approval</label>
                        <label class="subtitle-disable">by John Doe</label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ApprovalDialog :is-open="isDialogOpen" @close="closeDialog" @confirm="handleApprove" />
    <RejectDialog :is-open="isRejectDialogOpen" @cancel="closeDialogReject" @reject="handleReject" />


</template>

<script setup>
import icCheckCircle from '@/assets/icons/ic_check_circle.svg'
import icCloseCircle from '@/assets/icons/ic_close_circle.svg'
import { RiCheckboxCircleLine, RiTimeLine } from '@remixicon/vue'
import ApprovalDialog from './ApprovalDialog.vue';
import { ref } from 'vue';
import RejectDialog from './RejectDialog.vue';

const isDialogOpen = ref(false)
const isRejectDialogOpen = ref(false)

const openDialog = () => {
    isDialogOpen.value = true
}

const closeDialog = () => {
    isDialogOpen.value = false
}
const openDialogReject = () => {
    isRejectDialogOpen.value = true
}

const closeDialogReject = () => {
    isRejectDialogOpen.value = false
}

const handleApprove = () => {
    // Handle approval logic here
    console.log('Request approved')
}
const handleReject = () => {
    // Handle approval logic here
    console.log('Request approved')
}
</script>

<style scoped>
.horizontal-line {
    @apply h-[4px] bg-primary500 rounded-full w-full;
}

.horizontal-line-disable {
    @apply h-[2px] bg-natural200 rounded-full w-full;
}

.approval-step {
    @apply flex flex-row justify-center items-center rounded-full px-4 py-4 gap-4;
}

.title-white {
    @apply text-white text-content-2 font-medium;
}

.title-red {
    @apply text-primary500 text-content-2 font-medium;
}

.title-disable {
    @apply text-textScondary text-content-2 font-medium;
}

.subtitle-white {
    @apply text-white text-content-2 font-normal;
}

.subtitle-red {
    @apply text-primary500 text-content-2 font-normal;
}

.subtitle-disable {
    @apply text-textScondary text-content-2 font-normal;
}
</style>