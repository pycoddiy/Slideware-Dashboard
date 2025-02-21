<template>
    <div class="max-w-screen-md m-4 mx-auto p-4 shadow-lg rounded-md border-green-700 border-2 bg-orange-50">
        <h1>Edit Profile</h1>
        <div class="card">
            <UAvatar :src="avatar" size="3xl"></UAvatar>
        </div>
    </div>
</template>

<script setup>
    const currentUser = useCurrentUser();
    const avatar = useCurrentUserAvatar();
    //console.log(avatar);
</script>

<style scoped>

</style>