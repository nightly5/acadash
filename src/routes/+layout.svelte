<script lang="ts">
    import "../app.css";
    import type { LayoutData } from "./$types";
    export let data: LayoutData;
</script>

<div class="app font-sans flex flex-col min-h-screen justify-between">
    <a href="#main" class="link-base-content left-0 absolute p-3 m-3 mt-16
    -translate-y-28 focus:translate-y-0">Skip to main content</a>
    <header>
        <nav class="navbar bg-base-300">
            <div class="navbar-start flex-1">
                <a class="btn btn-ghost normal-case text-xl" href="/">
                    Acadash
                </a>
            </div>
            <div class="navbar-end">
                <a class="
                btn btn-ghost font-bold rounded px-8 py-4 uppercase
                tracking-wide"
                href={data.signed_in ? "/signout": "/auth"}>
                    {#if data.signed_in}Sign out{:else}Sign in{/if}
                </a>
            </div>
          </nav>
    </header>

    <main id="main">
        <slot />
    </main>

    <footer class="footer footer-center link-secondary p-4">
        <div><div>
            ·
                <span role=img aria-label="Written by">✍️</span>
                <a href="https://github.com/nightly5">nightly5</a>
            ·
                <span aria-hidden=true>📝</span>
                <a href="https://github.com/nightly5/acadash">Code</a>
            ·
                <span role=img aria-label="Licensed under">📄</span>
                <a href="https://github.com/nightly5/LICENSE">BSD-3-Clause</a>
            ·
                <span role=img aria-label="Powered by">🚀</span>
                <a href="https://pages.cloudflare.com">CloudFlare</a>
            ·
        </div></div>
    </footer>

</div>
