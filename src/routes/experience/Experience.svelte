<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';
	import MdiOpenInNewIcon from 'virtual:icons/mdi/open-in-new';

	let {
		name,
		badge,
		tenure,
		link,
		delay = 0,
		icon,
		description,
		points
	}: {
		name: string;
		badge?: string;
		tenure: string;
		link?: { href: string; label: string };
		delay?: number;
		icon: Snippet;
		description: Snippet;
		points: Snippet;
	} = $props();
</script>

<div class="flex flex-col gap-2" in:fly={{ y: 50, duration: 500, delay }}>
	<div class="flex items-start gap-4">
		{@render icon()}
		<div class="flex flex-col gap-0 w-full">
			{#if badge}
				<div class="flex items-center gap-3">
					<h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{name}</h2>
					<span class="text-xs text-gray-500/75 uppercase">[{badge}]</span>
				</div>
			{:else}
				<h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{name}</h2>
			{/if}
			{#if link}
				<div class="flex flex-col gap-2 md:gap-0 md:flex-row justify-between w-full">
					<h3 class="text-xs text-gray-700 dark:text-gray-300">{tenure}</h3>
					<a
						href={link.href}
						target="_blank"
						class="flex items-center gap-2 text-xs text-indigo-700 dark:text-indigo-300"
					>
						<span>{link.label}</span>
						<MdiOpenInNewIcon />
					</a>
				</div>
			{:else}
				<h3 class="text-xs text-gray-700 dark:text-gray-300">{tenure}</h3>
			{/if}
		</div>
	</div>

	<p class="text-base text-gray-700 dark:text-gray-300 ml-4">
		{@render description()}
	</p>

	<ul class="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-4">
		{@render points()}
	</ul>
</div>
