<script lang="ts">
	import { tv, type VariantProps } from 'tailwind-variants';

	const dot = tv({
		base: 'absolute -left-6 mt-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-800',
		variants: {
			accent: {
				svelte: 'border-orange-500',
				django: 'border-green-500'
			}
		}
	});

	let {
		impacts,
		accent
	}: {
		impacts: { title: string; desc: string }[];
		accent: VariantProps<typeof dot>['accent'];
	} = $props();
</script>

<div class="mt-10">
	<div class="flex flex-col gap-6">
		<div class="ml-4 relative">
			<div
				class="absolute left-0 w-0.5 bg-gray-200 dark:bg-gray-700 -ml-4"
				style="height: calc(100% - 2.5rem)"
			></div>
			{#each impacts as impact (impact.title)}
				<div class="mb-6 last:mb-0 relative">
					<div class={dot({ accent })}></div>
					<h4 class="font-semibold mb-2">{impact.title}</h4>
					<p class="text-gray-700 dark:text-gray-300">{impact.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
