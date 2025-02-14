<script lang="ts">
	const impacts = [
		{
			title: 'Framework Innovation',
			desc: 'Created Djapy.io, simplifying Django REST development while maintaining core functionality'
		},
		{
			title: 'Community Growth',
			desc: 'Built Webmatrices platform serving thousands of developers and content creators'
		},
		{
			title: 'Developer Experience',
			desc: 'Streamlined Django deployment processes and created reusable project templates'
		}
	];
</script>

<div class="mt-10">
	<div class="flex flex-col gap-6">
		<div class="ml-4 relative">
			<div
				class="absolute left-0 w-0.5 bg-gray-200 dark:bg-gray-700 -ml-4"
				style="height: calc(100% - 2.5rem)"></div>
			{#each impacts as impact, i}
				<div class="mb-6 relative {i === impacts.length - 1 ? 'mb-0' : ''}">
					<div
						class="absolute -left-6 mt-1.5 w-4 h-4 rounded-full border-2 border-green-500 bg-white dark:bg-gray-800"></div>
					<h4 class="font-semibold mb-2">{impact.title}</h4>
					<p class="text-gray-700 dark:text-gray-300">{impact.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>