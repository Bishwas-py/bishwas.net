<script lang="ts">
	let { text }: { text: string } = $props();

	let parts = $derived(text.split('`'));
</script>

{#each parts as part, i (i)}{#if i % 2 === 1}<code
			class="font-mono text-[0.9em] px-1 py-0.5 rounded bg-stone-200/70 text-stone-800 dark:bg-stone-800/70 dark:text-stone-200"
			>{part}</code
		>{:else}{part}{/if}{/each}
