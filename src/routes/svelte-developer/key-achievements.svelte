<script lang="ts">
	import AwesomeCard from '$item/AwesomeCard.svelte';

	const achievements = [
		{
			title: 'Team Leadership',
			description: 'Guided development teams in Philippines through Svelte adoption'
		},
		{
			title: 'Open Source',
			description: "Created @friendofsvelte/tipex, enhancing Svelte's ecosystem"
		},
		{ title: 'Performance Gains', description: 'Delivered faster, more maintainable applications' }
	];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	{#each achievements as achievement}
		<AwesomeCard unglow>
			{#snippet cus()}
				<h4 class="font-semibold mb-2">{achievement.title}</h4>
				<p class="text-sm text-gray-700 dark:text-gray-300">
					{achievement.description}
				</p>
			{/snippet}
		</AwesomeCard>
	{/each}
</div>
