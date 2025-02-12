<template>
    <div class="card text-center shadow-md border border-secondary">
        <Carousel />
        <h3 class="m-1">{{ dashboard.title }}</h3>
        <p class="m-1">{{ dashboard.author.name }}</p>
        <NuxtLink :to="`/dashboards/dashboard-${dashboard.id}`">
            <p class="btn my-1">Dashboard Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
import Carousel from './carousel/Carousel.vue';

    const { dashboard } = defineProps(['dashboard']);
</script>

<style scoped>
    .thumb {
        max-height: 140px;
        max-width: 100%;
        margin: 0 auto;
    }
</style>