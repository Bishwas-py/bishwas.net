<script lang="ts">
    import {page} from '$app/stores';
</script>

<nav>
    <ul>
        <li class:active={$page.url.pathname === "/"}><a href="/">Home</a></li>
        <li class:active={$page.url.pathname === "/projects"}><a href="/projects">Projects</a></li>
    </ul>
</nav>

<style lang="postcss">

    nav {
        @apply flex flex-col items-center;
        @apply mt-16 md:mt-14 py-1;
        @apply dark:drop-shadow-white-xl drop-shadow-dark-xl;
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

    ul li.active {
        @apply font-bold dark:text-blue-100;
    }

    ul li a {
        @apply py-2 px-3;
    }

</style>