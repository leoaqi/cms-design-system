<template>
    <Teleport to="body">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="handleCancel">
        </div>

        <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div class="bg-white rounded-lg w-full max-w-md shadow-lg">
                <!-- Header -->
                <div class="bg-primary500 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
                    <h3 class="text-body-2 font-medium">Reject Request</h3>
                    <button @click="handleCancel"
                        class="text-white hover:text-gray-200 transition-colors focus:outline-none">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <h1 class="text-body-3 font-normal text-textScondary">Are you sure want to reject this request?
                        Please input reason why you reject this request</h1>
                    <h1 class="text-content-2 font-medium text-textPrimary py-4">Reject Reason</h1>
                    <TextArea hint="Input reason hear" class="mb-0" />
                </div>
                <div class="horizontal-divider"></div>
                <div class="px-6 pb-4 flex justify-end gap-3">
                    <button @click="handleCancel"
                        class="px-4 py-2 border border-primary500 text-body-3 font-medium rounded-lg text-primary500 hover:bg-gray-50 
                           transition-colors focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                        Cancel
                    </button>
                    <button @click="handleReject"
                        class="px-4 py-2 bg-primary500 text-white text-body-3 font-medium rounded-lg hover:bg-primary600 
                           transition-colors focus:outline-none focus:ring-2 focus:ring-primary500 focus:ring-offset-2">
                        Reject
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import TextArea from '@/components/TextArea.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['cancel', 'reject'])

const handleCancel = () => {
    emit('cancel')
}

const handleReject = () => {
    emit('reject')
    emit('cancel')
}
</script>