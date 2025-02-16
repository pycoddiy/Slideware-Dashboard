<template>
    <div class="m-4">
        <UHorizontalNavigation :links="links" class="p-4 shadow-lg bg-gradient-to-b from-orange-50 to-white rounded-lg border-2 border-green-700">
            <template #default="{ link }">
                <span class="group-hover:text-green-700 relative">{{ link.label }}</span>
            </template>
        </UHorizontalNavigation>
        <main class="m-4 p-4 shadow-lg rounded-md border-2 border-green-700">
            <slot />
        </main>
    </div>
</template>

<script setup>

import { UButton, UHorizontalNavigation } from '#components';

const links = [
    [
        {
            label: 'Dashboards',
            icon: 'i-heroicons-document-duplicate',
            to: '/Dashboards',
        },
        {
            label: 'Profile',
            icon: 'i-heroicons-user',
            to: '/profile',
        }
    ],
    [
        {
            label: 'Logout',
            icon: 'i-heroicons-lock-closed',
            to: '/',
        }
    ],
];

</script>

<style scoped>
    .router-link-exact-active { font-weight: bolder;}
</style>