const PAD = 8;

/**
 * Keeps a `.tip` inside the viewport. The box shifts horizontally and the arrow
 * shifts back by the same amount, so it stays pointed at whatever opened it.
 */
export function tooltip(node: HTMLElement) {
	const place = () => {
		const tip = node.querySelector<HTMLElement>('.tip');
		if (!tip) return;

		tip.style.setProperty('--tip-shift', '0px');
		const rect = tip.getBoundingClientRect();

		let shift = 0;
		if (rect.left < PAD) shift = PAD - rect.left;
		else if (rect.right > window.innerWidth - PAD) shift = window.innerWidth - PAD - rect.right;

		tip.style.setProperty('--tip-shift', `${shift}px`);
		tip.classList.toggle('below', rect.top < PAD);
	};

	node.addEventListener('pointerenter', place);
	node.addEventListener('focusin', place);

	return {
		destroy() {
			node.removeEventListener('pointerenter', place);
			node.removeEventListener('focusin', place);
		}
	};
}
