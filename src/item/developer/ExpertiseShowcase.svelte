<script lang="ts">
	import { fly } from 'svelte/transition';
	import TempPreferencesEcoOutline from 'virtual:icons/material-symbols/temp-preferences-eco-outline';

	let { iconClass, title, body }: { iconClass: string; title: string; body: string } = $props();
</script>

<div class="flex flex-col gap-2" in:fly={{ y: 20, duration: 600 }}>
	<div class="flex items-center gap-4">
		<TempPreferencesEcoOutline class={iconClass} />
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
			{title}
		</h2>
	</div>
	<p class="text-gray-800 dark:text-gray-200">
		{body}
	</p>
</div>
