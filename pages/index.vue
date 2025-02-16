<template>
    <div>
        <h1>Slideware Dashboard Login</h1>
        <UForm :schema="schema" :state="formState" @submit="handleLogin" class="m-2 p-2 space-y-3">
            <UFormGroup name="email" label="Email" size="lg">
                <UInput type="email" v-model="formState.email" />
            </UFormGroup>
            <UFormGroup name="password" label="Password" size="lg">
                <UInput type="password" v-model="formState.password" />
            </UFormGroup>
            <UButton type="submit" leading-icon="i-heroicons-lock-open" block class="mt-3 bg-green-700 shadow-lg">Login</UButton>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types"

definePageMeta({
    layout: "login"
});

const formState = reactive({
    email: undefined,
    password: undefined,
});

const schema = z.object({
    email: z.string().email("Invalid email."),
    password: z.string().min(8, "Must be at least 8 characters long."),
})

type Schema = z.output<typeof schema>;

async function handleLogin(event: FormSubmitEvent<Schema>) {
    try {
        const response = await $fetch('/api/login', {
            method: 'POST',
            body: event.data.email,
        })
    } catch (error) {
        console.error('Error logging in:', error);
        // Handle the error appropriately, e.g., display an error message
    }
};

</script>

<style scoped>
</style>