<script lang="ts">
	import AwesomeCard from '$item/AwesomeCard.svelte';

	let {
		bar,
		intro,
		teams,
		projects,
		outro
	}: { bar: string; intro: string; teams: string; projects: string; outro: string } = $props();
</script>

<div class="mt-10 mb-12">
	<div class="relative">
		<div class="absolute left-0 w-1 h-full bg-linear-to-b {bar} to-transparent rounded-full"></div>

		<div class="pl-6">
			<h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Why This Journey Matters
			</h3>

			<p class="text-gray-800 dark:text-gray-200 mb-4">
				{intro}
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
				<AwesomeCard unglow>
					{#snippet cus()}
						<h4 class="font-semibold mb-2">For Teams</h4>
						<p class="text-sm text-gray-700 dark:text-gray-300">
							{teams}
						</p>
					{/snippet}
				</AwesomeCard>

				<AwesomeCard unglow>
					{#snippet cus()}
						<h4 class="font-semibold mb-2">For Projects</h4>
						<p class="text-sm text-gray-700 dark:text-gray-300">
							{projects}
						</p>
					{/snippet}
				</AwesomeCard>
			</div>

			<p class="mt-6 text-gray-800 dark:text-gray-200">
				{outro}
			</p>
		</div>
	</div>
</div>
