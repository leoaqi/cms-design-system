<template>
    <div class="w-[264px] h-screen bg-white shadow-lg">
        <!-- Logo -->
        <div class="flex items-center justify-center w-full h-[48px] py-10">
            <img :src="logoaqi" alt="logoaqi" class="w-[126px] h-[32px] object-fill" />
        </div>

        <!-- Navigation Items -->
        <nav class="pt-2 px-4">
            <template v-for="item in menuItems" :key="item.name">
                <div class="relative">
                    <div class="absolute inset-0" :class="[
                        { 'w-full h-11 z-0 bg-primary100 rounded-lg': isActive(item.slug) },
                        { 'hidden z-0': !isActive(item.slug) }
                    ]"></div>

                    <RouterLink :to="item.slug" :class="[
                        'relative flex items-center gap-3 z-10 text-[12px] pl-4 py-3 text-gray-700 my-4 mr-1',
                        {
                            'bg-active-menu text-white z-10 rounded-lg': isActive(item.slug),
                            'hover:bg-red-50 hover:text-red-600 hover:rounded-lg transition-colors': !isActive(item.slug)
                        }
                    ]">
                        <span class="w-5 h-5">
                            <component :is="item.icon" />
                        </span>
                        {{ item.name }}
                    </RouterLink>
                    
                </div>
            </template>
        </nav>
    </div>
</template>

<script setup>
import logoaqi from '@/assets/images/logoaqi.png';
import { RouterLink, useRoute } from 'vue-router';
import { computed, watch } from 'vue';

const route = useRoute()

const isActive = (slug) => {
    const currentPath = route.path;
    return currentPath.startsWith(slug);
};

// Icons as components
const DashboardIcon = () =>
    h(
        'svg',
        {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
        },
        [
            h('path', {
                d: 'M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4zM14 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z',
            }),
        ]
    );

const DepartmentIcon = () =>
    h(
        'svg',
        {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
        },
        [
            h('path', {
                d: 'M6.25 7.66667H3.83333C3.36662 7.66667 3.13327 7.66667 2.95501 7.75749C2.79821 7.83739 2.67072 7.96487 2.59083 8.12167C2.5 8.29993 2.5 8.53329 2.5 9V16M13.75 7.66667H16.1667C16.6334 7.66667 16.8667 7.66667 17.045 7.75749C17.2018 7.83739 17.3293 7.96487 17.4092 8.12167C17.5 8.29993 17.5 8.53329 17.5 9V16M13.75 16V3.66667C13.75 2.73325 13.75 2.26654 13.5683 1.91002C13.4086 1.59641 13.1536 1.34144 12.84 1.18166C12.4835 1 12.0168 1 11.0833 1H8.91667C7.98325 1 7.51654 1 7.16002 1.18166C6.84641 1.34144 6.59145 1.59641 6.43166 1.91002C6.25 2.26654 6.25 2.73325 6.25 3.66667V16M18.3333 16H1.66667M9.16667 4.33333H10.8333M9.16667 7.66667H10.8333M9.16667 11H10.8333',
            }),
        ]
    );

const BranchIcon = () =>
    h(
        'svg',
        {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
        },
        [
            h('path', {
                d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
            }),
            h('path', {
                d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
            }),
        ]
    );

const UserIcon = () =>
    h(
        'svg',
        {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
        },
        [
            h('path', {
                d: 'M14.6667 16C14.6667 14.837 14.6667 14.2555 14.5231 13.7824C14.2 12.717 13.3663 11.8834 12.301 11.5602C11.8278 11.4167 11.2463 11.4167 10.0833 11.4167H5.91667C4.7537 11.4167 4.17221 11.4167 3.69905 11.5602C2.63371 11.8834 1.80003 12.717 1.47687 13.7824C1.33333 14.2555 1.33333 14.837 1.33333 16M11.75 4.75C11.75 6.82107 10.0711 8.5 8 8.5C5.92893 8.5 4.25 6.82107 4.25 4.75C4.25 2.67893 5.92893 1 8 1C10.0711 1 11.75 2.67893 11.75 4.75Z',
            }),
        ]
    );

const RoleIcon = () =>
    h(
        'svg',
        {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
        },
        [
            h('path', {
                d: 'M13.3333 4.33333C13.3333 3.55836 13.3333 3.17087 13.2481 2.85295C13.017 1.99022 12.3431 1.31635 11.4804 1.08519C11.1625 1 10.775 1 10 1C9.22503 1 8.83754 1 8.51962 1.08519C7.65689 1.31635 6.98302 1.99022 6.75185 2.85295C6.66667 3.17087 6.66667 3.55836 6.66667 4.33333M4.33334 16H15.6667C16.6001 16 17.0668 16 17.4233 15.8183C17.7369 15.6586 17.9919 15.4036 18.1517 15.09C18.3333 14.7335 18.3333 14.2668 18.3333 13.3333V7C18.3333 6.06658 18.3333 5.59987 18.1517 5.24335C17.9919 4.92975 17.7369 4.67478 17.4233 4.51499C17.0668 4.33333 16.6001 4.33333 15.6667 4.33333H4.33333C3.39991 4.33333 2.9332 4.33333 2.57668 4.51499C2.26308 4.67478 2.00811 4.92975 1.84832 5.24335C1.66667 5.59987 1.66667 6.06658 1.66667 7V13.3333C1.66667 14.2668 1.66667 14.7335 1.84832 15.09C2.00811 15.4036 2.26308 15.6586 2.57668 15.8183C2.9332 16 3.39991 16 4.33334 16Z',
            }),
        ]
    );

const ApprovalIcon = () =>
    h(
        'svg',
        {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
        },
        [
            h('path', {
                d: 'M6.25 9.50008L8.75 12.0001L13.75 7.00008M18.3333 9.50008C18.3333 14.1025 14.6024 17.8334 10 17.8334C5.39763 17.8334 1.66667 14.1025 1.66667 9.50008C1.66667 4.89771 5.39763 1.16675 10 1.16675C14.6024 1.16675 18.3333 4.89771 18.3333 9.50008Z',
            }),
        ]
    );

const ReportIcon = () =>
    h(
        'svg',
        {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
        },
        [
            h('path', {
                d: 'M9.66667 1.39136V4.83348C9.66667 5.30018 9.66667 5.53354 9.75749 5.7118C9.83739 5.8686 9.96487 5.99609 10.1217 6.07598C10.2999 6.16681 10.5333 6.16681 11 6.16681H14.4421M9.66667 13.6667H4.66667M11.3333 10.3334H4.66667M14.6667 7.8236V13.8334C14.6667 15.2335 14.6667 15.9336 14.3942 16.4684C14.1545 16.9388 13.772 17.3212 13.3016 17.5609C12.7669 17.8334 12.0668 17.8334 10.6667 17.8334H5.33333C3.9332 17.8334 3.23314 17.8334 2.69836 17.5609C2.22795 17.3212 1.8455 16.9388 1.60582 16.4684C1.33333 15.9336 1.33333 15.2335 1.33333 13.8334V5.16675C1.33333 3.76662 1.33333 3.06655 1.60582 2.53177C1.8455 2.06137 2.22795 1.67892 2.69836 1.43923C3.23314 1.16675 3.9332 1.16675 5.33333 1.16675H8.00981C8.62129 1.16675 8.92703 1.16675 9.21474 1.23582C9.46983 1.29707 9.7137 1.39808 9.93738 1.53515C10.1897 1.68975 10.4059 1.90594 10.8382 2.33832L13.4951 4.99517C13.9275 5.42755 14.1437 5.64374 14.2983 5.89604C14.4353 6.11972 14.5363 6.36358 14.5976 6.61867C14.6667 6.90639 14.6667 7.21213 14.6667 7.8236Z',
            }),
        ]
    );

import { h } from 'vue';

const menuItems = [
    { name: 'Dashboard', slug: '/dashboard', icon: DashboardIcon },
    { name: 'Department', slug: '/department', icon: DepartmentIcon },
    { name: 'Branch', slug: '/branch', icon: BranchIcon },
    { name: 'User Management', slug: '/user-management', icon: UserIcon },
    { name: 'Role Management', slug: '/role-management', icon: RoleIcon },
    { name: 'Approval', slug: '/approval', icon: ApprovalIcon },
    { name: 'Report', slug: '/report', icon: ReportIcon },
];
</script>