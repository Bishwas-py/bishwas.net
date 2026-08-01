export type Patch = {
	repo: string;
	repoUrl: string;
	stars: string;
	icon: string;
	accent: string;
	title: string;
	prNumber: number;
	url: string;
	mergedIn: string;
	diff: { added: number; removed: number; files: number };
	symptom: { code: string; result: string };
	fix: string;
	note?: string;
};

export const PATCHES: Patch[] = [
	{
		repo: 'pydantic/pydantic',
		repoUrl: 'https://github.com/pydantic/pydantic',
		stars: '28.4k',
		icon: 'simple-icons:pydantic',
		accent: 'rose',
		title: '`SecretStr` equality raised `TypeError` on non-ASCII values',
		prNumber: 13537,
		url: 'https://github.com/pydantic/pydantic/pull/13537',
		mergedIn: 'merged in 1h 40m',
		diff: { added: 8, removed: 1, files: 2 },
		symptom: {
			code: "SecretStr('café') == SecretStr('café')",
			result: 'TypeError: comparing strings with non-ASCII characters is not supported'
		},
		fix: 'A recent switch to `secrets.compare_digest()` broke it: the function only accepts ASCII when handed `str`. Encoding both sides to bytes first restores equality for any value and keeps the constant-time guarantee that motivated the switch.',
		note: 'Regression I caught by reading the commit that introduced it, before anyone filed a bug.'
	},
	{
		repo: 'sveltejs/kit',
		repoUrl: 'https://github.com/sveltejs/kit',
		stars: '20.7k',
		icon: 'simple-icons:svelte',
		accent: 'orange',
		title: 'POST fell through to a 405 instead of the page it belonged to',
		prNumber: 16349,
		url: 'https://github.com/sveltejs/kit/pull/16349',
		mergedIn: 'closed a 2 yr 9 mo old issue',
		diff: { added: 37, removed: 7, files: 6 },
		symptom: {
			code: "POST /contact   →   +server.js exports only GET",
			result: '405 Method Not Allowed — even though +page.server.js had a matching action'
		},
		fix: 'Routing handed the POST to the sibling endpoint and stopped there. Now an endpoint exporting neither `POST` nor `fallback` is treated as unusable and the request falls through to the page actions, mirroring the `endpoint_can_handle` pattern already used for GET/HEAD.',
		note: 'Closed issue #10863, open since October 2023.'
	},
	{
		repo: 'litestar-org/litestar',
		repoUrl: 'https://github.com/litestar-org/litestar',
		stars: '8.4k',
		icon: 'simple-icons:python',
		accent: 'amber',
		title: 'Prometheus default let metric cardinality grow without bound',
		prNumber: 4925,
		url: 'https://github.com/litestar-org/litestar/pull/4925',
		mergedIn: 'breaking change, accepted',
		diff: { added: 28, removed: 2, files: 3 },
		symptom: {
			code: '/users/1   /users/2   /users/3   …',
			result: 'one Prometheus time series per parameter value, forever'
		},
		fix: '`group_path=True` already collapsed these to the route template `/users/{user_id}`, but the safe behaviour was opt-in, so every default deployment leaked memory silently. I flipped the default and kept raw paths reachable through `group_path=False`.',
		note: 'A default-changing break in a metrics API, argued and merged in under two days.'
	},
	{
		repo: 'litestar-org/litestar',
		repoUrl: 'https://github.com/litestar-org/litestar',
		stars: '8.4k',
		icon: 'simple-icons:python',
		accent: 'amber',
		title: 'Acronyms shattered into single letters across the OpenAPI spec',
		prNumber: 4921,
		url: 'https://github.com/litestar-org/litestar/pull/4921',
		mergedIn: 'merged in 1h 47m',
		diff: { added: 41, removed: 2, files: 2 },
		symptom: {
			code: 'InvalidAPIKeyError',
			result: '"Invalid A P I Key Error"  —  published in the public API docs'
		},
		fix: 'The splitter broke before every capital letter, including each one inside an uppercase run. Splitting only at real word boundaries keeps acronyms intact: `HTTPTimeoutError` → `HTTP Timeout Error`, `MissingJWTError` → `Missing JWT Error`.',
		note: 'Closed issue #4004, open since February 2025.'
	}
];

export type Project = {
	name: string;
	tagline: string;
	url: string;
	stars: number;
	commits: number;
	lang: string;
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
		lang: 'Svelte',
		icon: 'simple-icons:svelte',
		role: 'author'
	},
	{
		name: 'djapy',
		tagline: 'Django REST framework with no framework inside the framework. Pydantic schemas, generated Swagger.',
		url: 'https://djapy-docs.pages.dev/',
		stars: 120,
		commits: 507,
		lang: 'Python',
		icon: 'simple-icons:django',
		role: 'author'
	},
	{
		name: 'django-svelte-template',
		tagline: 'Production template wiring SvelteKit to Django: auth, form actions, flash messages, validation.',
		url: 'https://github.com/Bishwas-py/django-svelte-template',
		stars: 72,
		commits: 115,
		lang: 'Python',
		icon: 'simple-icons:django',
		role: 'author'
	},
	{
		name: 'seord',
		tagline: 'Rule-based content SEO analyzer for Node. Redesigned as an engine for 1.0.',
		url: 'https://www.npmjs.com/package/seord',
		stars: 50,
		commits: 52,
		lang: 'TypeScript',
		icon: 'simple-icons:npm',
		role: 'author'
	},
	{
		name: 'fymo',
		tagline: 'Python SSR framework for Svelte 5: esbuild pipeline, Node sidecar, remote functions, durable job queue.',
		url: 'https://fymo.mintlify.app/',
		stars: 9,
		commits: 280,
		lang: 'Python',
		icon: 'simple-icons:python',
		role: 'building now'
	},
	{
		name: 'friendofsvelte/*',
		tagline: 'Svelte 5 utility packages: persistent state, mermaid renderer, type-safe icons, django-kit, toggle, progress.',
		url: 'https://github.com/orgs/friendofsvelte/repositories',
		stars: 131,
		commits: 0,
		lang: 'Svelte',
		icon: 'simple-icons:svelte',
		role: 'org maintainer'
	}
];

export const REPORTED = [
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
