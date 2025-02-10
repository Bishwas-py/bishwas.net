<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { unglow?: boolean } & (
		| { children: Snippet; cus?: never; title: string }
		| { cus: Snippet; children?: never; title?: never }
	);
	let { children, cus, title, unglow: hideGlow = false }: Props = $props();
</script>

<div class="relative group">
	{#if !hideGlow}
		<div
			class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"
		></div>
	{/if}
	<div class="relative p-6 rounded-lg bg-white/50 h-full dark:bg-gray-800/50 shadow-sm">
		{#if children}
			<h3 class="font-semibold mb-3">{title}</h3>
			<p class="text-gray-700 dark:text-gray-300">
				{@render children()}
			</p>
		{:else if cus}
			{@render cus()}
		{/if}
	</div>
</div>
