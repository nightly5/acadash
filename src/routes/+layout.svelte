<div class="app font-sans">
    <header>
        <nav class="navbar bg-base-300">
            <div class="navbar-start flex-1">
                <a class="btn btn-ghost normal-case text-xl" href="/">
                    Acadash
                </a>
            </div>
            <div class="navbar-end hidden flex-1 lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><a href="/test1">Test 1</a></li>
                    <li><a href="/test2">Test 2</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <button title="Menu" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
                <ul class="menu dropdown-content shadow bg-base-100 rounded-box right-0 p-3 flex-auto min-w-max">
                    <li><a href="/test1">Test 1</a></li>
                    <li><a href="/test2">Test 2</a></li>
                </ul>
            </div>
          </nav>
    </header>

    <main>
        <slot />
    </main>

</div>

<!--
    Unused selectors can be safely ignored as tailwind discards them during
    preprocessing postcss
-->
<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
