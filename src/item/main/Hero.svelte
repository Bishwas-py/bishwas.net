<script lang="ts">
    import {fade, scale} from "svelte/transition";
    import Skills from "$item/main/Skills.svelte";
    export let imageUrl = "https://avatars.githubusercontent.com/u/42182303?v=4";
</script>

<header class="max-w-3xl">
    <div class="hero-content">
        <div class="hero-image-container" in:scale={{start: 3}}>
            <img src={imageUrl} alt="Bishwas Bhandari" class="hero-image"/>
        </div>
        <div class="hero-text">
            <span class="text-7xl font-noto-sans px-0 mb-1" in:fade={{delay: 300}}>Hi, Man!</span>
            <h1 class="text-2xl font-noto-sans mb-4 ml-2" in:fade={{delay: 400}}>I am Bishwas.</h1>
            <p class="text-lg font-noto-sans ml-1" in:fade={{delay: 550}}>
                A Full-Stack Web developer doing Django Python, Svelte/Kit, Ruby on Rails, React.js &
                Next JS. I love to develop things, I'd rather say I am addicted to development and coding.
            </p>
            <Skills/>

        </div>
    </div>
</header>

<style lang="postcss">
    header {
        @apply flex flex-col items-center justify-center;
        @apply text-slate-900 dark:text-slate-100;
    }

    .hero-content {
        @apply flex flex-col md:flex-row items-start;
        @apply gap-4 md:gap-9;
    }

    .hero-image-container {
        @apply overflow-hidden w-32 mb-4 shadow-md dark:outline;
        animation: wobble 2s infinite;
        border-radius: 28% 25% 28% 25%;
        @apply md:sticky top-7;
    }

    .hero-image {
        @apply w-full h-full object-cover hover:scale-110 duration-200 cursor-zoom-in;
    }

    .hero-text {
        @apply flex-col flex;
        @apply w-full;
    }
</style>
