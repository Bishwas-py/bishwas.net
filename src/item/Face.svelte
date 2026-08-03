<script lang="ts">
	import { avatarOf } from '$utils/people';
	import { tooltip } from '$utils/tooltip';

	let {
		login,
		href,
		tip,
		size = 22,
		ring = 'ring-white/90 dark:ring-gray-900'
	}: {
		login: string;
		href: string;
		tip: string;
		size?: number;
		ring?: string;
	} = $props();
</script>

<a {href} target="_blank" rel="noopener" use:tooltip>
	<img
		src={avatarOf(login)}
		alt={login}
		width={size}
		height={size}
		style="width: {size}px; height: {size}px"
		class={ring}
		loading="lazy"
		decoding="async"
	/>
	<span class="tip"><b>{login}</b> {tip}</span>
</a>

<style lang="postcss">
	@reference '../styles/app.css';

	a {
		@apply relative block hover:z-20;
	}

	img {
		@apply rounded-full ring-2 transition-transform duration-150;
	}

	a:hover img,
	a:focus-visible img {
		@apply -translate-y-0.5 ring-purple-400/70 dark:ring-purple-500/60;
	}

	a:hover :global(.tip),
	a:focus-visible :global(.tip) {
		@apply opacity-100;
	}
</style>
