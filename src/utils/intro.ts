const played = new Set<string>();

/**
 * Fades an element in the first time its key is seen this session,
 * whether the page was server-rendered on landing or reached by
 * navigation. Svelte intro transitions skip hydrated markup, so a
 * direct visit never played them; an action runs on mount either way.
 */
export function introFade(
	node: HTMLElement,
	{ key, delay = 0, duration = 400 }: { key: string; delay?: number; duration?: number }
) {
	if (played.has(key)) return;
	played.add(key);

	node.animate([{ opacity: 0 }, { opacity: 1 }], {
		duration,
		delay,
		easing: 'linear',
		fill: 'backwards'
	});
}
