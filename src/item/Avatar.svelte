<script lang="ts">
	let { alt }: { alt: string } = $props();
</script>

<div
	class="w-full h-full overflow-hidden shadow-md dark:outline-solid dark:outline-1 dark:outline-stone-700 animate-wobble rounded-[28%_25%_28%_25%]"
>
	<img
		src="/me-bishwas.jpeg"
		{alt}
		class="w-full h-full object-cover scale-110 hover:scale-150 hover:object-top duration-200 cursor-zoom-in"
	/>
</div>
