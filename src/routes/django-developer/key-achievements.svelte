<script lang="ts">
	import AwesomeCard from '$item/AwesomeCard.svelte';

	const achievements = [
		{
			title: 'Framework Creation',
			description: 'Developed Djapy.io, a streamlined REST framework for Django'
		},
		{
			title: 'Community Impact',
			description: 'Built and maintained Webmatrices platform serving thousands'
		},
		{
			title: 'Open Source',
			description: 'Created django-svelte-template for modern full-stack development'
		}
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