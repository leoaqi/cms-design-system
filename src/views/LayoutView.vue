<template>
  <div class="flex flex-row h-screen ">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <!-- Header -->
      <Header />

      <!-- Content -->
      <div class="flex-1 bg-bg-foreground overflow-y-auto">
        <main class="m-8 ">
          <!-- <RouterView /> -->
          <router-view>
          </router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

</script>