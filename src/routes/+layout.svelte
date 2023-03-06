<script>
    import Header from "./Header.svelte";
</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <footer>
        App by nightly5.
    </footer>
</div>
