<script lang="ts">
    import "../app.css";
    import type { LayoutData } from "./$types";
    export let data: LayoutData;
</script>

<div class="app font-sans">
    <header>
        <nav class="navbar bg-base-300">
            <div class="navbar-start flex-1">
                <a class="btn btn-ghost normal-case text-xl" href="/">
                    Acadash
                </a>
            </div>
            <div class="navbar-end">
                <a class="
                btn btn-ghost font-bold rounded px-8
                shadow-lg uppercase tracking-wide py-4"
                href={data.signed_in ? "/signout": "/auth"}>
                    {#if data.signed_in}Sign out{:else}Sign in{/if}
                </a>
            </div>
          </nav>
    </header>

    <main>
        <slot />
    </main>

</div>
