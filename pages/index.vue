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
            <UFormGroup v-slot="{ error }" :error="loginError && 'Authentication error'">
                <UButton type="submit" leading-icon="i-heroicons-lock-open" class="mt-3 bg-green-700 shadow-lg">Login</UButton>
            </UFormGroup>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types"
import { useCurrentUser } from "~/composables/useUser";

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

const loginError = ref(false)

async function handleLogin(event: FormSubmitEvent<Schema>) {
    const body = event.data.email.toLowerCase(); // Make lowercase because email is case sensitive in Prisma findUnique

    try {
        const response = await $fetch('/api/login', {
            method: 'POST',
            body: { body },
        })
        console.log(response.user);

        loginError.value = response?.user == null
        if (loginError) {
            const toast = useToast();
            toast.add({
                title: "Authentication error", 
                description: "Email and/or password are incorrect",
                icon: "i-heroicons-exclamation-triangle-solid",
                color: "red",
            })
        } else {
            const currentUser = useCurrentUser();
            currentUser.value = response.user;
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
};

</script>

<style scoped>
</style>