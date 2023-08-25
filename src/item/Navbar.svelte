<script lang="ts">
    import {page} from '$app/stores';
    import {fly} from 'svelte/transition';
</script>

<nav>

    {#if $page.url.pathname !== "/"}
        <div class="-top-10 left-7 absolute md:top-0 md:left-7 mr-7 md:mr-0 hero-image-container w-7 h-7"
             transition:fly={{x: -100, duration: 500}}>
            <img src="/me-bishwas.jpg" alt="Bishwas Bhandari" class="hero-image"/>
        </div>
    {/if}

    <ul>
        <li class:active={$page.url.pathname === "/"}><a href="/">Home</a></li>
        <li class:active={$page.url.pathname === "/projects"}><a href="/projects">Projects</a></li>
        <li class:active={$page.url.pathname === "/experience"}><a href="/experience">Experience</a></li>
    </ul>
</nav>

<style lang="postcss">

    nav {
        @apply flex justify-center gap-4 flex-col relative items-center;
        @apply mt-16 md:mt-14 py-1;
    }

    ul {
        @apply flex flex-wrap;
        @apply md:gap-7 gap-4;
    }

    ul li {
        @apply dark:hover:drop-shadow-white-lg hover:drop-shadow-dark-lg;
        @apply dark:hover:text-blue-200;
        @apply duration-300;
        @apply md:text-base text-sm;
    }

    ul li.active {
        @apply font-bold dark:text-blue-100;
    }

    ul li a {
        @apply md:py-2 md:px-3;
        @apply py-0.5 px-1;
    }

</style>