<template>
    <div class="card text-center shadow-md border border-secondary">
        <!-- <div class="container m-0 w-full h-[140px] bg-white shadow-md">
            <<img :src="dashboard.image" alt="Dashboard thumb" class="thumb">
        </div> -->
        <h3 class="m-1">{{ dashboard.title }}</h3>
        <p class="m-1">{{ dashboard.author.name }}</p>
        <NuxtLink :to="`/dashboards/dashboard-${dashboard.id}`">
            <p class="btn my-1">Dashboard Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { dashboard } = defineProps(['dashboard']);
</script>

<style scoped>
    .thumb {
        max-height: 140px;
        max-width: 100%;
        margin: 0 auto;
    }
</style>