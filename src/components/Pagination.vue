<template>
    <div class="flex items-center justify-end gap-4 mt-5">
        <!-- Rows per page dropdown -->
        <div class="flex items-center gap-2">
            <span class="text-content font-normal text-textPrimary">Rows per page:</span>
            <div class="relative">
                <select 
                    v-model="selectedPageSize" 
                    @change="handlePageSizeChange"
                    class="appearance-none bg-transparent pr-8 text-content font-normal cursor-pointer"
                >
                    <option v-for="size in pageSizes" :key="size" :value="size">
                        {{ size }}
                    </option>
                </select>
            </div>
        </div>

        <!-- Page info and navigation -->
        <div class="flex items-center gap-4">
            <span class="text-content font-normal text-textPrimary">
                {{ startIndex }}-{{ endIndex }} of {{ total }}
            </span>
            <div class="flex gap-2">
                <!-- Previous page button -->
                <button 
                    class="p-1" 
                    :disabled="currentPage === 1"
                    @click="handlePrevPage"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
                >
                    <svg class="w-4 h-4" 
                        :class="currentPage === 1 ? 'text-gray-400' : 'text-gray-800'"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <!-- Next page button -->
                <button 
                    class="p-1"
                    :disabled="currentPage === totalPages"
                    @click="handleNextPage"
                    :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
                >
                    <svg class="w-4 h-4" 
                        :class="currentPage === totalPages ? 'text-gray-400' : 'text-gray-800'"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
    total: {
        type: Number,
        required: true,
    },
    modelValue: { // current page
        type: Number,
        default: 1
    },
    pageSize: {
        type: Number,
        default: 10
    }
});

const emit = defineEmits(['update:modelValue', 'page-change', 'page-size-change']);

// Internal state
const currentPage = ref(props.modelValue);
const selectedPageSize = ref(props.pageSize);
const pageSizes = [10, 25, 50, 100];

// Computed properties
const totalPages = computed(() => Math.ceil(props.total / selectedPageSize.value));

const startIndex = computed(() => {
    if (props.total === 0) return 0;
    return ((currentPage.value - 1) * selectedPageSize.value) + 1;
});

const endIndex = computed(() => {
    return Math.min(currentPage.value * selectedPageSize.value, props.total);
});

// Methods
const handlePrevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        emitPageChange();
    }
};

const handleNextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        emitPageChange();
    }
};

const handlePageSizeChange = () => {
    // Reset to first page when changing page size
    currentPage.value = 1;
    emit('page-size-change', selectedPageSize.value);
    emitPageChange();
};

const emitPageChange = () => {
    emit('update:modelValue', currentPage.value);
    emit('page-change', {
        page: currentPage.value,
        pageSize: selectedPageSize.value,
        startIndex: startIndex.value,
        endIndex: endIndex.value
    });
};

// Watch for external changes
watch(() => props.modelValue, (newValue) => {
    currentPage.value = newValue;
});

watch(() => props.pageSize, (newValue) => {
    selectedPageSize.value = newValue;
});
</script>