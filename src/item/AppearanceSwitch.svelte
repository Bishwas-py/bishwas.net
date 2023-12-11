<script lang="ts">
    import {onMount} from 'svelte';
    import {fly, fade} from "svelte/transition";
    import {initDarkMode, isDarkMode, toggleDarkMode} from "@friendofsvelte/toggle";

    onMount(initDarkMode);
</script>

<button on:click={toggleDarkMode} transition:fade>
            <span transition:fly={{y: 5, duration: 1060}} class="icons">
                {#if $isDarkMode}
                    <iconify-icon icon="mdi:weather-night"/>
                {:else}
                    <iconify-icon icon="mdi:weather-sunny"/>
                {/if}
            </span>
    <span class="text">
        {$isDarkMode ? 'Night' : 'Day'}
    </span>
</button>

<style lang="postcss">
    button {
        @apply absolute top-4 md:top-14 right-7
        duration-700 active:scale-95
        p-2 w-20
        gap-2 items-center justify-between flex
        dark:drop-shadow-white-md dark:active:drop-shadow-white-xl active:drop-shadow-dark-xl;
    }

    button .icons {
        @apply flex flex-col items-center justify-center;
    }

    button .icons iconify-icon {
        @apply text-2xl p-0 m-0;
    }

    button .icons text {
        @apply text-xs h-min;
    }
</style>