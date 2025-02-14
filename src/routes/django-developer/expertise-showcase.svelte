<script lang="ts">
	import { fly } from 'svelte/transition';
	import TempPreferencesEcoOutline from 'virtual:icons/material-symbols/temp-preferences-eco-outline';
</script>

<div class="flex flex-col gap-2" in:fly={{ y: 20, duration: 600 }}>
	<div class="flex items-center gap-4">
		<TempPreferencesEcoOutline
			class="w-10 h-10 p-2.5 shrink-0 rounded-full bg-green-500/10 text-green-500
      bg-gradient-to-r from-green-500/20 via-teal-400/20 to-teal-600/20
      shadow-inner shadow-green-400/60"
		/>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
			Mastering the Django Ecosystem
		</h2>
	</div>
	<p class="text-gray-800 dark:text-gray-200">
		From writing that first view to architecting complex systems, my journey with Django has evolved into
		creating tools that empower other developers. The transition from user to contributor reflects a deep
		understanding of Django's capabilities and its community's needs.
	</p>
</div>