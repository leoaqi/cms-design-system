<template>
    <div class="flex flex-row h-screen">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <div class="px-10 py-6 bg-primary300 w-full">Header</div>
  
        <!-- Content -->
        <div class="flex-1 bg-bg-foreground overflow-y-auto">
          <main>
            <RouterView />
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '@/components/Sidebar.vue';
  </script>