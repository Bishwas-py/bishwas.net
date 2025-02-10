<script lang="ts">
	const impacts = [
		{
			title: 'Performance First',
			desc: 'Delivered applications with 40% smaller bundles and faster initial loads'
		},
		{
			title: 'Developer Experience',
			desc: "Mentored teams in adopting Svelte's intuitive reactivity model"
		},
		{
			title: 'Community Impact',
			desc: 'Contributing back through open-source projects and knowledge sharing'
		}
	];
</script>

<div class="mt-10">
	<div class="flex flex-col gap-6">
		<div class="ml-4 relative">
			<div
				class="absolute left-0 w-0.5 bg-gray-200 dark:bg-gray-700 -ml-4"
				style="height: calc(100% - 2.5rem)"
			></div>
			{#each impacts as impact, i}
				<div class="mb-6 relative {i === impacts.length - 1 ? 'mb-0' : ''}">
					<div
						class="absolute -left-6 mt-1.5 w-4 h-4 rounded-full border-2 border-orange-500 bg-white dark:bg-gray-800"
					></div>
					<h4 class="font-semibold mb-2">{impact.title}</h4>
					<p class="text-gray-700 dark:text-gray-300">{impact.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
