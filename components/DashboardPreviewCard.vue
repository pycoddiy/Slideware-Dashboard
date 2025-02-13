<template>
    <div class="card text-center shadow-md border border-secondary">
        <Carousel :slides="thumbnails"/>
        <h3 class="m-1">{{ dashboard.title }}</h3>
        <p class="m-1">{{ dashboard.author.name }}</p>
        <NuxtLink :to="`/dashboards/dashboard-${dashboard.id}`">
            <p class="btn my-1">Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    import Carousel from './carousel/Carousel.vue';
    import { ref } from 'vue';

    const { dashboard } = defineProps(['dashboard']);

    const thumbnails = ref([]);

    function getThumbnails() {
        for (let i = 0; i < dashboard.documents.length; i++) {
            thumbnails.value.push(dashboard.documents[i].preview);
        }
    };

    getThumbnails();
</script>

<style scoped>
    .thumb {
        max-height: 140px;
        max-width: 100%;
        margin: 0 auto;
    }
</style>