<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { tick } from 'svelte';

	const SELECTOR = '[data-avatar]';
	const DURATION = 320;
	const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

	let from: DOMRect | null = null;

	const rect = () => document.querySelector(SELECTOR)?.getBoundingClientRect() ?? null;

	beforeNavigate(() => {
		from = rect();
	});

	afterNavigate(async () => {
		const start = from;
		from = null;
		if (!start || start.width === 0) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		await tick();
		const target = document.querySelector(SELECTOR) as HTMLElement | null;
		if (!target) return;

		const end = target.getBoundingClientRect();
		if (Math.hypot(start.left - end.left, start.top - end.top) < 2) return;

		const dx = start.left - end.left;
		const dy = start.top - end.top;
		const sx = start.width / end.width;
		const sy = start.height / end.height;

		target.style.transformOrigin = 'top left';
		const flight = target.animate(
			[{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: 'none' }],
			{ duration: DURATION, easing: EASING }
		);
		flight.finished.finally(() => (target.style.transformOrigin = ''));
	});
</script>
