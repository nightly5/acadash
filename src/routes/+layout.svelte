<script lang="ts">
    import DarkMode from "svelte-dark-mode";
    import {Nav, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from "sveltestrap";

    let isOpen = false;

    let theme: "dark" | "light";
    $: dark = theme === "dark";
    $: switchTheme = theme === "dark" ? "light" : "dark";

    $: if (typeof window !== "undefined") {
        document.body.className = theme;
        const footerColors = document.querySelector("footer")?.classList;
        const darkColors = ["bg-dark", "text-white"];
        const lightColors = ["bg-white", "text-black"];
        if (dark) {
            footerColors?.remove(...lightColors);
            footerColors?.add(...darkColors);
        } else {
            footerColors?.remove(...darkColors);
            footerColors?.add(...lightColors);
        }
    };
</script>

<DarkMode bind:theme />

<div class="app">
    <header>
        <Navbar color={theme} {dark} expand="md">
            <NavbarBrand href="/">Acadash</NavbarBrand>
            <NavbarToggler title="Menu" on:click={() => {isOpen = !isOpen}} />
            <Collapse {isOpen} navbar expand="md">
                <Nav class="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="/test">Test 1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/test2">Test 2</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </header>

    <main>
        <slot />
    </main>

    <footer class="footer bg-dark text-white">
        Theme: {theme} | App by nightly5
    </footer>
</div>

<style>
    :global(.dark) {
        color: white;
        background: #121212;
    }
    .footer {
        position: absolute;
        bottom: 0;
        left: 25%;
        right: 25%;
        padding: 8px 8px;
        color: white;
        text-align: center;
    }
</style>
