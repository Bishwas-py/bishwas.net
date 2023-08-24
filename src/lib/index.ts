import {crossfade} from "svelte/transition";

export const [send, receive] = crossfade({delay: 0, duration: 300});
