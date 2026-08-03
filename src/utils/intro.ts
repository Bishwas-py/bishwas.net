const played = new Set<string>();
const PREFIX = 'intro:';

function alreadyPlayed(key: string): boolean {
	if (played.has(key)) return true;
	try {
		return sessionStorage.getItem(PREFIX + key) !== null;
	} catch {
		return false;
	}
}

function markPlayed(key: string) {
	played.add(key);
	try {
		sessionStorage.setItem(PREFIX + key, '1');
	} catch {
		// storage blocked; the in-memory set still covers this page load
	}
}

/**
 * Fades an element in the first time its key is seen this session,
 * whether the page was server-rendered on landing or reached by
 * navigation. Svelte intro transitions skip hydrated markup, so a
 * direct visit never played them; an action runs on mount either way.
 * Played keys are mirrored into sessionStorage, so a reload in the
 * same tab stays quiet and a fresh tab starts over.
 */
export function introFade(
	node: HTMLElement,
	{ key, delay = 0, duration = 400 }: { key: string; delay?: number; duration?: number }
) {
	if (alreadyPlayed(key)) return;
	markPlayed(key);

	node.animate([{ opacity: 0 }, { opacity: 1 }], {
		duration,
		delay,
		easing: 'linear',
		fill: 'backwards'
	});
}
