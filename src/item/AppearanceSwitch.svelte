<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import TrackAppearance from '@friendofsvelte/toggle';
	import { appearance } from '@friendofsvelte/toggle';
</script>

<TrackAppearance />

<button onclick={()=>{
  appearance.dark=!appearance.dark
}} transition:fade>
  <span transition:fly={{y: 5, duration: 1060}} class="icons">
      {#if appearance.dark}
        <iconify-icon icon="mdi:weather-night"></iconify-icon>
      {:else}
        <iconify-icon icon="mdi:weather-sunny"></iconify-icon>
      {/if}
  </span>
	<span class="text">
        {appearance.dark ? 'Night' : 'Day'}
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