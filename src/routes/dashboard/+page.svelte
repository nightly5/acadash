<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<svelte:head>
    <title>Acadash | Dashboard</title>
    <meta name="description" content="Sign in to see your dashboard." />
</svelte:head>

<div class="min-h-[90vh]">
    <section class="hero bg-gradient-to-r from-black to-accent justify-start pl-10">
        <div class="hero-content">
            <div class="max-w-2xl">
                <div class="text-4xl mb-2 font-bold text-white">
                    Hello, {data.userData.name}!
                </div>
                <div class="text-2xl mb-8 text-gray-200">
                    a subtitle
                </div>
        </div></div>
    </section>
</div>
