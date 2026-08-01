export type Patch = {
	repo: string;
	stars: string;
	icon: string;
	accent: 'rose' | 'orange' | 'amber';
	title: string;
	prNumber: number;
	mergedIn: string;
	diff: { added: number; removed: number; files: number };
	symptom: { code: string; result: string };
	context: string;
	fix: string;
};

export const repoUrl = (repo: string) => `https://github.com/${repo}`;
export const prUrl = (patch: Patch) => `${repoUrl(patch.repo)}/pull/${patch.prNumber}`;

export const PATCHES: Patch[] = [
	{
		repo: 'pydantic/pydantic',
		stars: '28.4k',
		icon: 'simple-icons:pydantic',
		accent: 'rose',
		title: '`SecretStr` equality raised `TypeError` on non-ASCII values',
		prNumber: 13537,
		mergedIn: 'merged in 1h 40m',
		diff: { added: 8, removed: 1, files: 2 },
		symptom: {
			code: "SecretStr('café') == SecretStr('café')",
			result: 'TypeError: comparing strings with non-ASCII characters is not supported'
		},
		context: 'A regression I caught by reading the commit that caused it, before anyone filed a bug.',
		fix: 'A recent switch to `secrets.compare_digest()` broke it: the function only accepts ASCII when handed `str`. Encoding both sides to bytes first restores equality for any value and keeps the constant-time guarantee that motivated the switch.'
	},
	{
		repo: 'sveltejs/kit',
		stars: '20.7k',
		icon: 'simple-icons:svelte',
		accent: 'orange',
		title: 'POST fell through to a 405 instead of the page it belonged to',
		prNumber: 16349,
		mergedIn: 'closed a 2 yr 9 mo old issue',
		diff: { added: 37, removed: 7, files: 6 },
		symptom: {
			code: 'POST /contact   →   +server.js exports only GET',
			result: '405 Method Not Allowed — even though +page.server.js had a matching action'
		},
		context: 'Core routing, plus a test fixture that did not exist before.',
		fix: 'Routing handed the POST to the sibling endpoint and stopped there. Now an endpoint exporting neither `POST` nor `fallback` is treated as unusable and the request falls through to the page actions, mirroring the `endpoint_can_handle` pattern already used for GET/HEAD.'
	},
	{
		repo: 'litestar-org/litestar',
		stars: '8.4k',
		icon: 'simple-icons:python',
		accent: 'amber',
		title: 'Prometheus default let metric cardinality grow without bound',
		prNumber: 4925,
		mergedIn: 'breaking change, accepted',
		diff: { added: 28, removed: 2, files: 3 },
		symptom: {
			code: '/users/1   /users/2   /users/3   …',
			result: 'one Prometheus time series per parameter value, forever'
		},
		context: 'Changing a public default was the only real fix, so I argued for it and it landed.',
		fix: '`group_path=True` already collapsed these to the route template `/users/{user_id}`, but the safe behaviour was opt-in, so every default deployment leaked memory silently. I flipped the default and kept raw paths reachable through `group_path=False`.'
	},
	{
		repo: 'litestar-org/litestar',
		stars: '8.4k',
		icon: 'simple-icons:python',
		accent: 'amber',
		title: 'Acronyms shattered into single letters across the OpenAPI spec',
		prNumber: 4921,
		mergedIn: 'merged in 1h 47m',
		diff: { added: 41, removed: 2, files: 2 },
		symptom: {
			code: 'InvalidAPIKeyError',
			result: '"Invalid A P I Key Error"  —  published in the public API docs'
		},
		context: 'This text was shipping in the public API docs of every Litestar app.',
		fix: 'The splitter broke before every capital letter, including each one inside an uppercase run. Splitting only at real word boundaries keeps acronyms intact: `HTTPTimeoutError` → `HTTP Timeout Error`, `MissingJWTError` → `Missing JWT Error`.'
	}
];

export type Project = {
	name: string;
	tagline: string;
	url: string;
	stars: number;
	commits: number;
	icon: string;
	role: string;
};

export const MAINTAINED: Project[] = [
	{
		name: 'friendofsvelte/tipex',
		tagline: 'Styled rich-text editor for SvelteKit, built on TipTap and ProseMirror.',
		url: 'https://tipex.pages.dev/',
		stars: 425,
		commits: 224,
		icon: 'simple-icons:svelte',
		role: 'author'
	},
	{
		name: 'djapy',
		tagline:
			'Django REST framework with no framework inside the framework. Pydantic schemas, generated Swagger.',
		url: 'https://djapy-docs.pages.dev/',
		stars: 120,
		commits: 507,
		icon: 'simple-icons:django',
		role: 'author'
	},
	{
		name: 'django-svelte-template',
		tagline:
			'Production template wiring SvelteKit to Django: auth, form actions, flash messages, validation.',
		stars: 72,
		commits: 115,
		icon: 'simple-icons:django',
		role: 'author'
	},
	{
		name: 'seord',
		tagline: 'Rule-based content SEO analyzer for Node. Redesigned as an engine for 1.0.',
		url: 'https://www.npmjs.com/package/seord',
		stars: 50,
		commits: 52,
		icon: 'simple-icons:npm',
		role: 'author'
	},
	{
		name: 'fymo',
		tagline:
			'Python SSR framework for Svelte 5: esbuild pipeline, Node sidecar, remote functions, durable job queue.',
		url: 'https://fymo.mintlify.app/',
		stars: 9,
		commits: 280,
		icon: 'simple-icons:python',
		role: 'building now'
	},
	{
		name: 'friendofsvelte/*',
		tagline:
			'Svelte 5 utility packages: persistent state, mermaid renderer, type-safe icons, django-kit, toggle, progress.',
		stars: 131,
		commits: 0,
		icon: 'simple-icons:svelte',
		role: 'org maintainer'
	}
];

export type Reported = {
	repo: string;
	stars: string;
	title: string;
	url: string;
};

export const REPORTED: Reported[] = [
	{
		repo: 'vitalik/django-ninja',
		stars: '9.2k',
		title: 'Serious issue with `alias` in v1',
		url: 'https://github.com/vitalik/django-ninja/issues/967'
	},
	{
		repo: 'sveltejs/kit',
		stars: '20.7k',
		title: 'Cross-site POST form submissions forbidden behind Docker',
		url: 'https://github.com/sveltejs/kit/issues/9582'
	},
	{
		repo: 'beego/beego',
		stars: '32.4k',
		title: 'Documentation domain flagged insecure',
		url: 'https://github.com/beego/beego/issues/5399'
	},
	{
		repo: 'zed-industries/zed',
		stars: '87.9k',
		title: 'Pasting across projects silently failed',
		url: 'https://github.com/zed-industries/zed/issues/13634'
	}
];

export const FEATURED = PATCHES.slice(0, 3);
