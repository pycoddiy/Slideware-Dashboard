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
//import { _sm } from '#tailwind-config/theme/boxShadow';
import { useCurrentUser, useCurrentUserAvatar } from '~/composables/useUser';

// import { type User } from "~/types";
import { Role } from '~/enums';

const currentUser = useCurrentUser();
const currentUserAvatar = useCurrentUserAvatar();

let userNameRole: string = currentUser.value.name + ` (${currentUser.value.role})`;

const links = [
    [
        {
            label: 'My Dashboards',
            icon: 'i-heroicons-document-duplicate',
            to: '/Dashboards',
        },
        {
            label: 'My Profile',
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
            label: userNameRole,
            avatar: {
                src: currentUserAvatar,
                size: "xs",
            },
            to: '/profile',
        },
    ],
];

</script>

<style scoped>
    .router-link-exact-active { font-weight: bolder;}
</style>