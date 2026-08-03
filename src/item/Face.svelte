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

<a class="relative block hover:z-20 group/face" {href} target="_blank" rel="noopener" use:tooltip>
	<img
		src={avatarOf(login)}
		alt={login}
		width={size}
		height={size}
		style="width: {size}px; height: {size}px"
		class={[
			'rounded-full ring-2 transition-transform duration-150 group-hover/face:-translate-y-0.5 group-focus-visible/face:-translate-y-0.5 group-hover/face:ring-purple-400/70 group-focus-visible/face:ring-purple-400/70 dark:group-hover/face:ring-purple-500/60 dark:group-focus-visible/face:ring-purple-500/60',
			ring
		]}
		loading="lazy"
		decoding="async"
	/>
	<span
		class="tip pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-[min(240px,calc(100vw-2rem))] rounded-md px-2.5 py-1.5 text-xs leading-snug text-left opacity-0 transition-opacity duration-150 shadow-lg bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900
		[transform:translateX(calc(-50%+var(--tip-shift,0px)))]
		group-hover/face:opacity-100 group-focus-visible/face:opacity-100
		[&.below]:bottom-auto [&.below]:top-full [&.below]:mb-0 [&.below]:mt-2
		after:content-[''] after:absolute after:top-full after:border-[6px] after:border-transparent after:border-t-gray-900 dark:after:border-t-gray-100
		after:left-[calc(50%-var(--tip-shift,0px))] after:[transform:translateX(-50%)]
		[&.below]:after:top-auto [&.below]:after:bottom-full [&.below]:after:border-t-transparent [&.below]:after:border-b-gray-900 dark:[&.below]:after:border-b-gray-100 dark:[&.below]:after:border-t-transparent"
		><b>{login}</b> {tip}</span
	>
</a>
