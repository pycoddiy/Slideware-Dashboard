#  Slideware Dashboard
This is the Nuxt app that implements dashboards for managing and presenting slides 

## Create app placeholder

1. `npx nuxi@latest init slideware-dashboard`
2. `cd slideware-dashboard`
3. `code .`
4. In built-in termintal run development server `npm run dev` to complete initialization.

## Setting up initial structure
1. Remove  `app.vue`
2. Add in the root `/pages/index.vue`, `/pages/Dashboards/index.vue`, `pages/Dashboards/Dashboard [dashid]`, `/pages/Dashboards [dashid]/index.vue` and `pages/Dashboards/Dashboard [dashid]/[id].vue`. 
3. Add `/components` directory to the root.
4. Add `layouts/default.vue` to the root.
4. Add `assets/css/tailwind.css` and add the following imports `@tailwind base`, `@tailwind components`, and `@tailwind utilities`.
4. Initialize each with `vbase-3-setup` macro.

## Initializing Tailwind CSS
1. Install `npm install --save-dev @nuxtjs/tailwindcss`. 
2. Run `npx tailwindcss init`. 
3. Add to `next.config.ts` the Nuxt Tailwind module:

```ts
export default defineNuxtConfig({
    ...
  modules: ['@nuxtjs/tailwindcss']
})
```
