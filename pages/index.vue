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
import type { User } from "~/types"

// Home page has login layout
definePageMeta({
    layout: "login"
});

// Defining form fields and schema
const formState = reactive({
    email: undefined,
    password: undefined,
});

const schema = z.object({
    email: z.string().email("Invalid email."),
    password: z.string().min(8, "Must be at least 8 characters long."),
})

type Schema = z.output<typeof schema>;

// Handling form submit button, retrieving the current user
const loginError = ref(false) // No authentication error is displayed by default

function showAuthenticationError() {
    const toast = useToast(); // Display error notification at the bottom of the page
    toast.add({
        title: "Authentication error", 
        description: "Email and/or password are incorrect",
        icon: "i-heroicons-exclamation-triangle-solid",
        color: "red",
    })
}

async function handleLogin(event: FormSubmitEvent<Schema>) {
    const body = event.data.email.toLowerCase(); // Make lowercase because email is case sensitive in Prisma findUnique

    try {
        const response = await $fetch('/api/login', {
            method: 'POST',
            body: { body }, // Querying server to find a user with given email
        })
        // console.log(response.user);

        loginError.value = response?.user == null; // No error if the user is found
        // console.log(loginError.value);
        if (loginError.value) {
            showAuthenticationError();
        } else {
            const currentUser = useCurrentUser();
            currentUser.value = response.user as User; // Update the current user
            const isLoggedIn = useIsLoggedIn();
            isLoggedIn.value = true;
            navigateTo('/dashboards') 
        }
    } catch (error) {
        console.error('Error logging in:', error);
        showAuthenticationError();
    }
};

</script>

<style scoped>
</style>