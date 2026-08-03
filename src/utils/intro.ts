import { browser } from '$app/environment';

const played = new Set<string>();

/**
 * True only the first time a key is seen this session, so intro
 * transitions play on first contact and stay quiet on return visits.
 */
export function introOnce(key: string): boolean {
	if (!browser) return true;
	if (played.has(key)) return false;
	played.add(key);
	return true;
}
