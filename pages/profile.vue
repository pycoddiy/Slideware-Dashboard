<template>
    <div class="max-w-screen-md m-4 mx-auto p-4 shadow-lg rounded-md border-green-700 border-2 bg-orange-50">
        <h1>Edit Profile</h1>
        <div class="flex gap-2">
            <form class="card image-upload h-[230px]">
                <label for="id-file-input">
                    <img :src="cUser.avatar" class="w-40 object-cover rounded-md cursor-pointer" title="Change profile image" alt="User Avatar">
                </label>
                <input id="id-file-input" type="file" accept="image/*" :onchange="onProfileImageChange">
            </form>
            <div class="card w-full h-[230px]">
                <UForm>
                    <UFormGroup name="email" label="Email">
                        <UInput type="email" :disabled="true" :placeholder="cUser.email"/>
                    </UFormGroup>
                    <UFormGroup name="role" label="Role">
                        <UInput type="text" :disabled="true" :placeholder="cUser.role"/>
                    </UFormGroup>
                    <UFormGroup name="name" label="Name">
                        <UInput type="text" :placeholder="cUser.name"/>
                    </UFormGroup>
                    <UButton name="update" class="mt-2 shadow-md">Update Profile</UButton>
                </UForm>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

// Current user profile
const { cUser, setCUser } = useCUser();

const MAX_FILE_SIZE = 1024 * 1024; // 1MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"] // Image file types

const schemaImageProfile = z
     .any()
     .refine((file) => file?.size <= MAX_FILE_SIZE, "Maximum image size is 1MB `${file}`")
     .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only JPG, JPEG, PNG, and WebP images are accepted");

type Schema = z.output<typeof schemaImageProfile>;

async function onProfileImageChange(event: FormSubmitEvent<Schema>) {
    const toast = useToast();
    toast.add({title: "Profile image change", description: "The new profile image has been selected..."});

    const input = (event.target as HTMLInputElement);
    if (input.files?.length) {
        const file = input.files[0];

        const fd = new FormData()

        try {
            const parsedFile = schemaImageProfile.parse(file);
            fd.append('avatar', parsedFile);
            const response = await $fetch('/api/avatar', {
                method: 'POST',
                body: fd,
            })

            const copyCUser = {...cUser.value, avatar: response.path}
            setCUser(copyCUser);

        } catch (error) {
            if (error instanceof z.ZodError) {
                console.error("Validation failed: ", error.issues[0]);
            } else {
                console.error("Unexpected error: ", error);
            }
        }
    }
 };
</script>

<style scoped>
.image-upload>input {
    display: none;
}
</style>