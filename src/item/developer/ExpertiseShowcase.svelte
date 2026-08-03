<script lang="ts">
	import { fly } from 'svelte/transition';
	import { tv, type VariantProps } from 'tailwind-variants';
	import TempPreferencesEcoOutline from 'virtual:icons/material-symbols/temp-preferences-eco-outline';

	const icon = tv({
		base: 'w-10 h-10 p-2.5 shrink-0 rounded-full text-green-500 bg-linear-to-r from-green-500/20 via-teal-400/20 to-teal-600/20 shadow-inner shadow-green-400/60',
		variants: {
			accent: {
				svelte: 'bg-orange-500/10',
				django: 'bg-green-500/10'
			}
		}
	});

	let {
		accent,
		title,
		body
	}: { accent: VariantProps<typeof icon>['accent']; title: string; body: string } = $props();
</script>

<div class="flex flex-col gap-2" in:fly={{ y: 20, duration: 600 }}>
	<div class="flex items-center gap-4">
		<TempPreferencesEcoOutline class={icon({ accent })} />
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
			{title}
		</h2>
	</div>
	<p class="text-gray-800 dark:text-gray-200">
		{body}
	</p>
</div>
