import { crossfade } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';

export const AVATAR = 'avatar';

export const [send, receive] = crossfade({
	duration: 300,
	easing: cubicInOut,
	fallback(node) {
		const transform = getComputedStyle(node).transform.replace('none', '');
		return {
			duration: 320,
			easing: cubicInOut,
			css: (t, u) => `transform: ${transform} translateY(${u * 12}px) scale(${0.92 + 0.08 * t});
				opacity: ${t}`
		};
	}
});
