<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}
	let { children, title }: Props = $props();
</script>

<div class="relative group">
	<div
		class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"
	></div>
	<div class="relative p-6 rounded-lg bg-white/50 h-full dark:bg-gray-800/50 shadow-sm">
		<h3 class="font-semibold mb-3">{title}</h3>
		<p class="text-gray-700 dark:text-gray-300">
			{@render children()}
		</p>
	</div>
</div>
