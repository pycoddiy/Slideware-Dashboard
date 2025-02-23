<template>
    <div class="max-w-screen-md m-4 mx-auto p-4 shadow-lg rounded-md border-green-700 border-2 bg-orange-50">
        <h1>Edit Profile</h1>
        <div class="flex gap-2">
            <div class="card image-upload">
                <label for="id-file-input">
                    <img :src="avatar" class="w-40 object-cover rounded-md cursor-pointer" title="Change profile image" alt="User Avatar">
                </label>
                <input id="id-file-input" type="file" accept="image/*" :onchange="onProfileImageChange">
            </div>
            <div class="card">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// Current user profile
const currentUser = useCurrentUser();
const avatar = useCurrentUserAvatar();

async function onProfileImageChange(event: Event) {
    const toast = useToast();
    toast.add({title: "Profile image change", description: "The new profile image has been selected..."});
    console.log(event);
    const input = (event.target as HTMLInputElement);
    if (input.files?.length) {
        const file = input.files[0];
        console.log(file);
    }
 };
</script>

<style scoped>
.image-upload>input {
    display: none;
}
</style>