<script lang="ts">
	import { fly } from 'svelte/transition';
	import TempPreferencesEcoOutline from 'virtual:icons/material-symbols/temp-preferences-eco-outline';
</script>

<div class="flex flex-col gap-2" in:fly={{ y: 20, duration: 600 }}>
	<div class="flex items-center gap-4">
		<TempPreferencesEcoOutline
			class="w-10 h-10 p-2.5 shrink-0 rounded-full bg-orange-500/10 text-green-500
      bg-gradient-to-r from-green-500/20 via-teal-400/20 to-teal-600/20
      shadow-inner shadow-green-400/60"
		/>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
			Building the Svelte Ecosystem
		</h2>
	</div>
	<p class="text-gray-800 dark:text-gray-200">
		Beyond just using Svelte, I've become an active contributor to its ecosystem. The journey from
		user to advocate has been marked by real-world implementations and open-source contributions.
	</p>
</div>
