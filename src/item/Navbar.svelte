<script lang="ts">
    import {page} from '$app/stores';
    import {fly} from 'svelte/transition';
</script>

<nav>

    {#if $page.url.pathname !== "/"}
        <div class="-top-14 duration-300 left-7 absolute md:top-0 md:left-7 mr-7 md:mr-0 hero-image-container w-7 h-7"
             transition:fly={{x: -100, duration: 500}}>
            <img src="/me-bishwas.jpg" alt="Bishwas Bhandari | Django and Svelte Developer | Open Source Python Dev"
                 class="hero-image"/>
        </div>
    {/if}
    <div class="nav-wrap">
        <a class="repo-link" href="https://github.com/Bishwas-py/bishwas.net" target="_blank">
            <iconify-icon icon="mdi:github"/>
            <span>Use this Portfolio</span>
        </a>
        <ul>
            <li class:active={$page.url.pathname === "/"}><a href="/">Home</a></li>
            <li class:active={$page.url.pathname === "/projects"}><a href="/projects">Projects</a></li>
            <li class:active={$page.url.pathname === "/experience"}><a href="/experience">Experience</a></li>
        </ul>
    </div>
</nav>

<style lang="postcss">

    nav {
        @apply flex justify-center gap-4 flex-col relative
        mt-20 md:mt-14 py-1 items-center;
    }

    ul {
        @apply flex flex-wrap md:gap-7 gap-4 justify-center items-center;
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

    .repo-link {
        @apply bg-gradient-to-bl from-blue-700 to-indigo-500 dark:from-blue-500 dark:to-blue-700
        hover:shadow
        rounded-full
        text-white dark:text-white font-bold text-sm md:text-base px-2 md:px-4
        md:py-2 py-0.5 flex items-center justify-center gap-3 duration-300;
    }

    .repo-link iconify-icon {
        @apply text-base sm:text-lg lg:text-xl w-6 items-center flex;
    }

    .nav-wrap {
        @apply flex items-center justify-between flex-wrap flex-col
        sm:flex-row px-2 gap-4 md:gap-12 max-w-xl xl:-ml-56 w-full;
    }

</style>