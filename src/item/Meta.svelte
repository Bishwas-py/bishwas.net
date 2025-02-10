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

	if (!og_alt && og) {
		og_alt = description;
	}

	if (!og_description && og) {
		og_description = description;
	}
	if (!og_image) {
		og_image = `${page.url.origin}/og.png`;
	} else if (og_image.startsWith('/')) {
		og_image = `${page.url.origin}${og_image}`;
	}
</script>


<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content={description}>
	{#if keywords}
		<meta
			name="keywords"
			content={keywords} />
	{/if}
	{#if og_alt}
		<meta
			property="og:image:alt"
			content={og_alt} />
	{/if}
	{#if og_image}
		<meta
			property="og:image" content={og_image} />
		<meta property="og:image:type" content="image/png">
		<meta property="og:image:width" content="1728">
		<meta property="og:image:height" content="1080">
	{/if}
	{#if og_description}
		<meta
			property="og:description"
			content={og_description} />
	{/if}
	{#if og_type}
		<meta property="og:type" content={og_type} />
	{/if}
	<meta property="og:locale" content="en_US">
</svelte:head>