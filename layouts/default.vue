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

<script setup lang="ts">

import { UButton, UHorizontalNavigation } from '#components';
import { _sm } from '#tailwind-config/theme/boxShadow';

import { type User } from "@/types.d.js";
import { Role } from '~/enums';

const user = ref<User>({
    name: 'Sergey Maydanov',
    email: 'sergey.maidanov@gmail.com',
    role: Role.ADMIN,
    avatar: 'files/avatars/default_avatar.png',
    id: 0,
    dashboards: [],
    documents: [],
});

let roleStr: string = (user.value?.role === Role.ADMIN) ? 'Admin' : 'User';

const links = [
    [
        {
            label: 'Dashboards',
            icon: 'i-heroicons-document-duplicate',
            to: '/Dashboards',
        },
        {
            label: 'Edit Profile',
            icon: 'i-heroicons-user',
            to: '/profile',
        },
        {
            label: 'Logout',
            icon: 'i-heroicons-lock-closed',
            to: '/',
        }
    ],
    [
        {
            label: user.value.name,
            avatar: {
                src: user.value.avatar,
                size: "xs",
            },
            to: '/profile',
        },
        {
            label: 'Role: ' + roleStr,
            to: '/profile',
        },
    ],
];

</script>

<style scoped>
    .router-link-exact-active { font-weight: bolder;}
</style>