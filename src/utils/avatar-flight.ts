import { afterNavigate, beforeNavigate } from '$app/navigation';
import { tick } from 'svelte';

const SELECTOR = '[data-avatar]';
const DURATION = 320;
const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

const rect = () => document.querySelector(SELECTOR)?.getBoundingClientRect();

/** Animates the avatar from where it sat on the previous page to where it lands on the next. */
export function avatarFlight() {
	let from: DOMRect | undefined;

	beforeNavigate(() => {
		from = rect();
	});

	afterNavigate(async () => {
		const start = from;
		from = undefined;
		if (!start?.width || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		await tick();
		const target = document.querySelector<HTMLElement>(SELECTOR);
		if (!target) return;

		const end = target.getBoundingClientRect();
		if (Math.hypot(start.left - end.left, start.top - end.top) < 2) return;

		target.animate(
			[
				{
					transformOrigin: 'top left',
					transform: `translate(${start.left - end.left}px, ${start.top - end.top}px)
						scale(${start.width / end.width}, ${start.height / end.height})`
				},
				{ transformOrigin: 'top left', transform: 'none' }
			],
			{ duration: DURATION, easing: EASING }
		);
	});
}
