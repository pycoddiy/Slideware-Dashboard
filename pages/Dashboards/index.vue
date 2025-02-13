<template>
    <div>
        <h2>Dashboards</h2>
        <div  class="grid grid-cols-4 gap-2">
            <div v-for="d in dashboards" :key="d.id">
                <DashboardPreviewCard :dashboard="d" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Dashboard } from '@/types.d.ts';
    import { reactive } from 'vue';

    const dashboards: Dashboard[] = reactive([]);

    async function fetchDashboards() {
        const response = await $fetch("/api/getDashboards");

        for (let i:number = 0; i < response.length; i++) {
            dashboards.push({
                id: response[i].id,
                title: response[i].title,
                documents: response[i].documents,
                published: response[i].published,
                author: response[i].author,
                authorId: response[i].authorId,
            });
        }
    }

    fetchDashboards();
</script>

<style scoped>

</style>