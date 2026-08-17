export type Stack = 'SvelteKit' | 'Rust' | 'Biome' | 'Cloudflare';

/** Body blocks. Backticks inside `text` render as inline code. */
export type Block =
	| { t: 'p'; text: string }
	| { t: 'h2'; text: string }
	| { t: 'code'; label?: string; code: string }
	| { t: 'aside'; text: string }
	| { t: 'measure'; rows: { k: string; v: string }[] };

export type Post = {
	slug: string;
	title: string;
	/** The literal string someone pastes into a search box. */
	symptom: string;
	stack: Stack;
	description: string;
	date: string;
	minutes: number;
	tags: string[];
	/** Every post links the thing that proves it. */
	/** upstream = merged into someone else's project. own = my own code. */
	receipt?: { label: string; url: string; kind: 'upstream' | 'own' };
	body?: Block[];
};

const POSTS: Post[] = [
	{
		slug: 'sveltekit-405-page-actions',
		title: 'A POST fell through to a 405 for two years and nine months',
		symptom: '405 Method Not Allowed',
		stack: 'SvelteKit',
		description:
			'A form posting to a route whose +server.js only exported GET returned a 405, even though +page.server.js had a perfectly good matching action. Routing handed the request to the sibling endpoint and stopped there.',
		date: '2026-08-06',
		minutes: 7,
		tags: ['sveltekit', 'routing'],
		receipt: {
			kind: 'upstream',
			label: 'sveltejs/kit#16349',
			url: 'https://github.com/sveltejs/kit/pull/16349'
		}
	},
	{
		slug: 'tls-fingerprint-blocked',
		title: 'Your User-Agent is cosmetic. Your TLS handshake is your identity.',
		symptom: 'works in dev, 403 in production',
		stack: 'Rust',
		description:
			'Same request, same headers, blocked in the wild. The giveaway was underneath HTTP entirely: cipher order, extension order, and the HTTP/2 settings frame said "not a browser" before anyone read a header.',
		date: '2026-07-29',
		minutes: 11,
		tags: ['rust', 'scraping', 'tls'],
		receipt: { kind: 'own', label: 'SuperMCP', url: 'https://webmatrices.com/mcpbrowser' }
	},
	{
		slug: 'page-transition-blocks-navigation',
		title: 'Your page transition is blocking navigation and you cannot see it',
		symptom: 'next page renders only after the animation finishes',
		stack: 'SvelteKit',
		description:
			'A page-level out: transition keeps the outgoing page mounted for its full duration, so both pages exist at once and the one you asked for waits behind an animation that has nothing to do with it. Measured: 5213px of document mid-transition against 4300px settled.',
		date: '2026-08-02',
		minutes: 6,
		tags: ['sveltekit', 'animation'],
		receipt: { kind: 'own', label: 'bishwas.net source', url: 'https://github.com/Bishwas-py/bishwas.net' },
		body: [
			{
				t: 'p',
				text: 'I wanted the avatar on this site to fly. It sits big in the hero on the home page and small up in the navbar everywhere else, so every navigation made it pop out of one spot and appear in the other. Same picture, two places, no connection between them.'
			},
			{
				t: 'p',
				text: 'So I did it the obvious way, with a transition on the page itself, and sat there clicking around grinning at it.'
			},
			{
				t: 'p',
				text: 'Then I clicked through to another page and waited. And waited a bit more. The thing I built to make the site feel nicer was the exact reason it felt slow, and I did not catch it for two days, because it looked good the whole time it was doing it.'
			},
			{ t: 'h2', text: 'It is not your load function' },
			{
				t: 'p',
				text: 'I went hunting in the wrong places first. Load functions, `data-sveltekit-preload-code`, the adapter. None of them.'
			},
			{
				t: 'p',
				text: 'A page level `out:` transition keeps the outgoing page mounted for its full duration. That is the whole point of it, and it is documented behaviour. What is not obvious is the consequence: mid navigation both pages exist in the DOM at the same time, and the one you actually asked for is sitting behind an animation that has nothing to do with it, waiting its turn.'
			},
			{
				t: 'p',
				text: 'You can see it without any tooling. Log `document.body.scrollHeight` during the transition and again once it settles:'
			},
			{
				t: 'measure',
				rows: [
					{ k: 'mid transition', v: '5213px' },
					{ k: 'settled', v: '4300px' }
				]
			},
			{
				t: 'p',
				text: 'Two full pages stacked on top of each other. The gap is the height of the page that has already rendered and is not being shown to you yet.'
			},
			{ t: 'h2', text: 'The fix is to stop transitioning pages' },
			{
				t: 'p',
				text: 'I deleted every page transition I had written. All of it, gone. The element that needs to move does not belong to either page, so it should not be animated by either page.'
			},
			{
				t: 'p',
				text: 'Instead it lives in `+layout.svelte`: measure where the element is before you leave, measure where it lands after you arrive, and animate the difference with the Web Animations API. Nothing transitions, so nothing blocks.'
			},
			{
				t: 'code',
				label: 'src/utils/avatar-flight.ts',
				code: `const SELECTOR = '[data-avatar]';
const rect = () => document.querySelector(SELECTOR)?.getBoundingClientRect();

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
					transform: \`translate(\${start.left - end.left}px, \${start.top - end.top}px)
						scale(\${start.width / end.width}, \${start.height / end.height})\`
				},
				{ transformOrigin: 'top left', transform: 'none' }
			],
			{ duration: 320, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
		);
	});
}`
			},
			{
				t: 'p',
				text: 'Call it once in `+layout.svelte` and any element carrying `data-avatar` flies between pages.'
			},
			{
				t: 'aside',
				text: 'The `await tick()` is not optional. Without it you measure the element before the incoming page has painted and get the old position back, so the element animates from where it already is and nothing appears to happen.'
			},
			{
				t: 'p',
				text: 'The `Math.hypot` guard is there so it stays quiet when the element has not actually moved, which is what happens navigating between two pages that both render it in the navbar.'
			},
			{ t: 'h2', text: 'How to check your own' },
			{
				t: 'p',
				text: 'If routing feels sluggish and you have page level transitions, open devtools and watch `document.body.scrollHeight` while navigating. If it roughly doubles for the length of your animation, this is the same thing, and it is structural rather than a duration you can tune down.'
			}
		]
	},
	{
		slug: 'biome-ignore-multiline-html',
		title: 'The linter could not lint itself',
		symptom: 'biome-ignore does not suppress on multiline tags',
		stack: 'Biome',
		description:
			'The rule anchored its suppression range to the tabindex value — a line a comment above the element can never reach once attributes wrap. Biome’s own maintainer filed the issue; the fix took two rounds of review.',
		date: '2026-08-04',
		minutes: 8,
		tags: ['biome', 'rust', 'linting'],
		receipt: {
			kind: 'upstream',
			label: 'biomejs/biome#11201',
			url: 'https://github.com/biomejs/biome/pull/11201'
		}
	},
	{
		slug: 'cloudflare-pages-node-18',
		title: 'Node 18, a dashboard variable, and a macOS binary walk into a build',
		symptom: 'npm ERR! code EBADENGINE',
		stack: 'Cloudflare',
		description:
			'Three separate traps in one afternoon: a NODE_VERSION set in the Pages dashboard silently outranking .nvmrc, retried deployments reusing the environment snapshot from when they were created, and a darwin-only binary in devDependencies killing a Linux build.',
		date: '2026-08-03',
		minutes: 9,
		tags: ['cloudflare', 'ci', 'node'],
		receipt: {
			kind: 'own',
			label: 'the commit',
			url: 'https://github.com/Bishwas-py/bishwas.net/commits/main'
		}
	}
];

export const SORTED = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const fmtDate = (iso: string) =>
	new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC'
	});
