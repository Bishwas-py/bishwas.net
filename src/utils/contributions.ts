export type Patch = {
	repo: string;
	stars: string;
	icon: string;
	accent: 'rose' | 'orange' | 'amber' | 'emerald';
	title: string;
	prNumber: number;
	mergedIn: string;
	diff: { added: number; removed: number; files: number };
	symptom: { code: string; result: string };
	context: string;
	fix: string;
	approval: { login: string; note?: string; review?: string; alsoOn?: string[] };
};

export const avatarOf = (login: string) => `/people/${login}.jpg`;

export const repoUrl = (repo: string) => `https://github.com/${repo}`;
export const prUrl = (patch: Patch) => `${repoUrl(patch.repo)}/pull/${patch.prNumber}`;

export const PATCHES: Patch[] = [
	{
		repo: 'sveltejs/kit',
		stars: '20.7k',
		icon: 'simple-icons:svelte',
		accent: 'orange',
		title: 'Docs code blocks lost their controls on the types reference page',
		prNumber: 12969,
		mergedIn: 'four maintainers on the thread',
		diff: { added: 1, removed: 1, files: 1 },
		symptom: {
			code: 'documentation/docs/98-reference/54-types.md',
			result: 'code blocks rendered with no copy control and no heading links'
		},
		context:
			'Reported on svelte.dev as issue 815 and left open; the page was simply missing a flag its neighbours had.',
		approval: {
			login: 'teemingc',
			note: 'Thanks!',
			review: 'https://github.com/sveltejs/kit/pull/12969#pullrequestreview-2431887877',
			alsoOn: ['Rich-Harris', 'dummdidumm', 'benmccann']
		},
		fix: 'The page lacked `link: true` in its frontmatter, which is what makes the docs renderer emit the block controls and heading anchors. One line, and the reference page behaves like the rest of the documentation again.'
	},
	{
		repo: 'pydantic/pydantic',
		stars: '28.4k',
		icon: 'simple-icons:pydantic',
		accent: 'rose',
		title: '`field_title_generator` was documented with a signature it never accepted',
		prNumber: 13565,
		mergedIn: 'merged in 14m',
		diff: { added: 4, removed: 4, files: 1 },
		symptom: {
			code: 'Field(field_title_generator=lambda field_name: field_name.upper())',
			result: 'TypeError: <lambda>() takes 1 positional argument but 2 were given'
		},
		context:
			'Four docstrings promised a one-argument callable, so following the documentation was guaranteed to crash.',
		approval: { login: 'Viicos' },
		fix: 'The callable is handed the field name and its info object, which `ConfigDict.field_title_generator` already described correctly. This aligns the `fields.py` docstrings on `Field()`, `FieldInfo.from_field()`, `computed_field()` and `ComputedFieldInfo` with the signature the code actually calls.'
	},
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
		context:
			'A regression I caught by reading the commit that caused it, before anyone filed a bug.',
		approval: {
			login: 'Viicos',
			note: "Thanks, the documentation isn't documenting this prominently, so I missed it when reading.",
			review: 'https://github.com/pydantic/pydantic/pull/13537#pullrequestreview-4808429838'
		},
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
		approval: {
			login: 'Rich-Harris',
			note: 'thank you!',
			review: 'https://github.com/sveltejs/kit/pull/16349#pullrequestreview-4738993808',
			alsoOn: ['teemingc']
		},
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
		approval: {
			login: 'provinzkraut',
			review: 'https://github.com/litestar-org/litestar/pull/4925#pullrequestreview-4711515407'
		},
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
		approval: {
			login: 'sobolevn',
			note: 'Looks good to me :)',
			review: 'https://github.com/litestar-org/litestar/pull/4921#pullrequestreview-4692440207'
		},
		fix: 'The splitter broke before every capital letter, including each one inside an uppercase run. Splitting only at real word boundaries keeps acronyms intact: `HTTPTimeoutError` → `HTTP Timeout Error`, `MissingJWTError` → `Missing JWT Error`.'
	},
	{
		repo: 'dj-stripe/dj-stripe',
		stars: '1.8k',
		icon: 'simple-icons:django',
		accent: 'emerald',
		title: 'The docs sent new users to an installation page that did not resolve',
		prNumber: 1906,
		mergedIn: 'merged the same day',
		diff: { added: 1, removed: 1, files: 1 },
		symptom: {
			code: 'docs/index.md  ->  Installation.md',
			result: 'a relative link that 404s once the docs are built'
		},
		context:
			'One line, and the smallest thing here, but it was the first link anyone installing the library would click.',
		approval: { login: 'jleclanche' },
		fix: 'The relative `Installation.md` reference does not resolve in the built site, so it points at the full `dj-stripe.dev` installation URL instead. Jerome Leclanche, who maintains dj-stripe, merged it the same morning.'
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

export const FEATURED = PATCHES.filter(
	(patch, i) => PATCHES.findIndex((other) => other.repo === patch.repo) === i
).slice(0, 3);
