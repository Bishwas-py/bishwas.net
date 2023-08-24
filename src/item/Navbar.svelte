<script lang="ts">
    import {page} from '$app/stores';
    import {send, receive} from "$lib";
</script>

<nav>

    {#if $page.url.pathname !== "/"}
        <div class="absolute top-0 left-7 hero-image-container drop-shadow-none w-7 h-7" in:send
             out:receive>
            <img src="/me-bishwas.png" alt="Bishwas Bhandari" class="hero-image"/>
        </div>
    {/if}

    <ul>
        <li class:active={$page.url.pathname === "/"}><a href="/">Home</a></li>
        <li class:active={$page.url.pathname === "/projects"}><a href="/projects">Projects</a></li>
    </ul>
</nav>

<style lang="postcss">

    nav {
        @apply flex flex-col relative items-center;
        @apply mt-16 md:mt-14 py-1;
    }

    ul {
        @apply flex;
        @apply gap-7;
    }

    ul li {
        @apply dark:hover:drop-shadow-white-lg hover:drop-shadow-dark-lg;
        @apply dark:hover:text-blue-200;
        @apply duration-300;
    }

    ul li.hero-image-container {
        @apply bg-green-500;
    }

    ul li.active {
        @apply font-bold dark:text-blue-100;
    }

    ul li a {
        @apply py-2 px-3;
    }

</style>