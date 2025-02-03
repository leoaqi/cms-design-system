<template>
    <div class="flex items-center justify-end gap-4 mt-5">
        <!-- Rows per page dropdown -->
        <div class="flex items-center gap-2">
            <span class="text-content font-normal text-textPrimary">Rows per page:</span>
            <button class="inline-flex items-center gap-2 text-content font-normal">
                10
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>

        <!-- Page info and navigation -->
        <div class="flex items-center gap-4">
            <span class="text-content font-normal text-textPrimary">1-10 of 250</span>
            <div class="flex gap-2">
                <!-- Previous page button -->
                <button class="p-1">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <!-- Next page button -->
                <button class="p-1">
                    <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>