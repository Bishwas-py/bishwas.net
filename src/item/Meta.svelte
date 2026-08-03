<script lang="ts" module>
	export interface MetaProps {
		title: string;
		description: string;
		keywords?: string;
		og_alt?: string;
		og_image?: string;
		og_description?: string;
		og?: boolean;
		og_type?: string;
	}
</script>

<script lang="ts">
	import { page } from '$app/state';

	let {
		title = '',
		description = '',
		keywords,
		og_alt,
		og_image = '',
		og_description,
		og = false,
		og_type
	}: MetaProps = $props();

	const alt = $derived(og_alt || (og ? description : undefined));
	const ogDescription = $derived(og_description || (og ? description : undefined));
	const image = $derived(
		!og_image
			? `${page.url.origin}/og.jpg`
			: og_image.startsWith('/')
				? `${page.url.origin}${og_image}`
				: og_image
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	{#if alt}
		<meta property="og:image:alt" content={alt} />
	{/if}
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="og:image:type" content="image/jpeg" />
		<meta property="og:image:width" content="896" />
		<meta property="og:image:height" content="560" />
	{/if}
	{#if ogDescription}
		<meta property="og:description" content={ogDescription} />
	{/if}
	{#if og_type}
		<meta property="og:type" content={og_type} />
	{/if}
	<meta property="og:locale" content="en_US" />
</svelte:head>
