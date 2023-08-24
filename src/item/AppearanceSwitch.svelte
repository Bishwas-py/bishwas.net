<script lang="ts">
    import {onMount} from 'svelte';
    import {fly, fade} from "svelte/transition";

    // indicate if we're in dark mode or not
    let isDarkMode: boolean

    // hide the control until we've decided what the initial mode is
    let isMenuHidden = true

    onMount(() => {
        // use the existence of the dark class on the html element for the initial value
        isDarkMode = document.documentElement.classList.contains('dark')

        // show UI controls
        isMenuHidden = false

        // listen for changes so we auto-adjust based on system settings
        const matcher = window.matchMedia('(prefers-color-scheme: dark)')
        matcher.addEventListener('change', handleChange)
        return () => matcher.removeEventListener('change', handleChange)
    })

    function handleChange({matches: dark}: MediaQueryListEvent) {
        // only set if we haven't overridden the theme
        if (!localStorage.theme) {
            setMode(dark)
        }
    }

    function toggle() {
        setMode(!isDarkMode)
    }

    function setMode(value: boolean) {
        isDarkMode = value

        // update page styling
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        // store the theme as a local override
        localStorage.theme = isDarkMode ? 'dark' : 'light'

        // if the toggled-to theme matches the system defined theme, clear the local override
        // this effectively provides a way to override or revert to "automatic" setting mode
        if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
            localStorage.removeItem('theme')
        }
    }

</script>

<!-- GitHub/CaptainCodeMan; This the Dark Mode RoadMan -->
<!-- set dark mode class based on user preference / device settings (in head to avoid FOUC) -->
<svelte:head>
    <script>
        if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')

        } else {
            document.documentElement.classList.remove('dark')
        }
    </script>
</svelte:head>


{#if !isMenuHidden}
    {#key isDarkMode}
        <button on:click={toggle} transition:fade>
            <span transition:fly={{y: 5, duration: 1060}} class="icons">
                {#if isDarkMode}
                    <iconify-icon icon="mdi:weather-night"></iconify-icon>
                {:else}
                    <iconify-icon icon="mdi:weather-sunny"></iconify-icon>
                {/if}
            </span>
            <span class="text">
                {isDarkMode ? 'Night' : 'Day'}
            </span>
        </button>
    {/key}
{/if}

<style lang="postcss">
    button {
        @apply absolute top-4 md:top-14 right-7;
        @apply duration-700;
        @apply active:scale-95;
        @apply p-2 w-20;
        @apply gap-2 items-center justify-between flex;
        @apply dark:drop-shadow-white-md;
        @apply dark:active:drop-shadow-white-xl active:drop-shadow-dark-xl;
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