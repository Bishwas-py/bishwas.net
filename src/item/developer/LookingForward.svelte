<script lang="ts">
	import { tv, type VariantProps } from 'tailwind-variants';
	import CTA from '$item/CTA.svelte';

	const box = tv({
		base: 'mt-10 p-6 rounded-lg bg-linear-to-br',
		variants: {
			accent: {
				svelte: 'from-orange-500/5 to-purple-500/5',
				django: 'from-green-500/5 to-teal-500/5'
			}
		}
	});

	let { accent, body }: { accent: VariantProps<typeof box>['accent']; body: string } = $props();
</script>

<div class={box({ accent })}>
	<h3 class="text-xl font-semibold mb-4">Looking Forward</h3>
	<p class="text-gray-800 dark:text-gray-200">
		{body}
	</p>
	<div class="mt-6">
		<CTA variant={accent} />
	</div>
</div>
