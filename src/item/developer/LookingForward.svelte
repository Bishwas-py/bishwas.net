<script lang="ts">
	import CTA from '$item/CTA.svelte';

	let {
		gradient,
		variant = 'svelte',
		body
	}: { gradient: string; variant?: 'svelte' | 'django'; body: string } = $props();
</script>

<div class="mt-10 p-6 rounded-lg bg-linear-to-br {gradient}">
	<h3 class="text-xl font-semibold mb-4">Looking Forward</h3>
	<p class="text-gray-800 dark:text-gray-200">
		{body}
	</p>
	<div class="mt-6">
		<CTA {variant} />
	</div>
</div>
