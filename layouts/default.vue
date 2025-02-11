<template>
    <div>
        <header class="m-4 p-4 shadow-lg bg-gradient-to-b from-lighter to-lightest rounded-lg border border-light">
            <nav class="container p-2 flex justify-between">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
                    <li><NuxtLink to="/Dashboards" class="btn">Dashboards</NuxtLink></li>
                    <li><NuxtLink to="/about" class="btn">About</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <main class="m-4 p-4 shadow-lg rounded-md border border-light">
            <slot />
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active { font-weight: bolder;}
</style>