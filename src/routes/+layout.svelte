<div class="app font-sans">
    <header>
        <nav class="navbar bg-neutral">
            <div class="navbar-start">
                <button class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </button>
            </div>
            <div class="flex-1">
              <a class="btn btn-ghost normal-case text-xl" href="/">Acadash</a>
            </div>
            <div class="flex-none">
              <ul class="menu menu-horizontal px-1">
                <li><a href="/test1">Test 1</a></li>
                <li><a href="/test2">Test 2</a></li>
              </ul>
            </div>
          </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer>App by nightly5</footer>
</div>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

</style>
