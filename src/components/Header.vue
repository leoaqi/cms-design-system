<template>
  <div class="px-4 lg:px-8 py-4 bg-white w-full ml-[2px]">
    <div class="flex flex-row justify-between items-center">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-2">
          <li v-for="(crumb, index) in breadcrumbs" :key="index" class="inline-flex items-center">
            <template v-if="index < breadcrumbs.length - 1">
              <RouterLink :to="crumb.path" class="text-textScondary text-content-2 font-normal hover:text-primary500">
                {{ crumb.name }}
              </RouterLink>
              <span class="mx-2 text-gray-500">></span>
            </template>
            <span v-else class="text-primary500 text-content-2 font-semibold">
              {{ crumb.name }}
            </span>
          </li>
        </ol>
      </nav>

      <div class="flex flex-row gap-8 items-center">
        <img :src="icBell" alt="Notifications" class="w-[20px] h-[20px] object-cover">
        <div class="flex flex-row items-center gap-3">
          <img :src="icProfile1" alt="Profile" class="w-[36px] h-[36px] rounded-full object-cover">
          <h1 class="text-content font-normal text-textPrimary">Hi, Administrator</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import icBell from '@/assets/icons/ic_bell.svg';
import icProfile1 from '@/assets/icons/ic_profile_1.png';

const route = useRoute();

const breadcrumbs = computed(() => {
  const crumbs = [];
  let fullPath = '';

  route.matched.forEach((match) => {
    
    if (match.meta?.breadcrumb) {
      fullPath = match.path.startsWith('/') ? match.path : `/${match.path}`;

      // Handle dynamic route params
      Object.keys(route.params).forEach((param) => {
        fullPath = fullPath.replace(`:${param}`, route.params[param]);
      });

      crumbs.push({
        name: match.meta.breadcrumb,
        path: fullPath,
      });
    }
  });

  return crumbs;
});
</script>
