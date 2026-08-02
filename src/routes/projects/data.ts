export const avatarOf = (login: string) => `/people/${login}.jpg`;

export type Project = (typeof PROJECTS)[number];

export const PROJECTS = [
	{
		name: 'Fymo',
		group: 'frameworks',
		timeline: '2025 - Present, Python Framework',
		description:
			'I got tired of maintaining a frontend repo, a backend repo, and an API layer whose only job was to let the two talk. Fymo renders real Svelte 5 from Python, in one repo and one deploy.',
		technologies: [
			{ name: 'Python', icon: 'mdi:language-python', class: 'skill-tag python' },
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'esbuild', icon: 'logos:esbuild', class: 'skill-tag javascript' }
		],
		highlights: [
			'Compile Svelte once at build time and keep a long-lived Node process for rendering, so nothing compiles per request.',
			"Borrowed SvelteKit's remote functions so the frontend calls typed Python directly and I never write an API layer again.",
			'Generate the auth into your project as plain code you can read and delete, rather than hiding it inside the framework.',
			'Ships as one WSGI app, because not deploying two things was the entire point.'
		],
		featured: {
			lead: 'Listed in',
			links: [{ label: 'sveltethemes.dev', url: 'https://sveltethemes.dev/Bishwas-py/fymo' }]
		},
		link: 'https://fymo.mintlify.app/',
		image: '/projects/fymo.jpg'
	},
	{
		name: 'SatzMaster',
		group: 'products',
		timeline: '2024 - Present',
		description:
			'I was learning German and none of the apps drilled the thing I was actually bad at, which was building sentences under time pressure. So I built the drill I needed.',
		technologies: [
			{ name: 'Next.js', icon: 'logos:nextjs-icon', class: 'skill-tag react' },
			{ name: 'React', icon: 'logos:react', class: 'skill-tag react' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', class: 'skill-tag tailwind' }
		],
		highlights: [
			'Built it around typing rather than multiple choice, because recognition was never my problem and recall was.',
			'Graded it A1 to C1 so it keeps being useful as I improve instead of being outgrown in a month.',
			'Kept the loop short enough to run between other work, which is the only reason I still use it.'
		],
		link: 'https://satzmacher.bishwas.net/',
		image: '/projects/satzmacher.jpg'
	},
	{
		name: 'Webmatrices',
		group: 'products',
		timeline: 'March 2020 - Present',
		description:
			'I have run Webmatrices since 2020, a community where people bring SEO, Django and AdSense problems and get answers. It is the longest-lived thing I own.',
		technologies: [
			{ name: 'Django/Djapy', icon: 'mdi:language-python', class: 'skill-tag django' },
			{ name: 'SvelteKit', icon: 'logos:svelte-icon', class: 'skill-tag svelte' }
		],
		highlights: [
			'Built its APIs on djapy, my own framework, so I was the first person to live with its mistakes.',
			'Answer and moderate it myself, which means I see the failure reports before any dashboard does.',
			'Kept it running for six years, which is a different discipline from shipping something.'
		],
		link: 'https://webmatrices.com',
		image: '/projects/webmatrices.jpg'
	},
	{
		name: 'Djapy',
		group: 'frameworks',
		timeline: '120 stars, Django Framework',
		description:
			'Django REST Framework kept asking me to write serializers for things Django already knew. Djapy uses type hints as the contract instead: a decorator, a return type, done.',
		technologies: [
			{ name: 'Django', icon: 'mdi:language-python', class: 'skill-tag django' },
			{ name: 'Pydantic', icon: 'mdi:json', class: 'skill-tag python' },
			{ name: 'Swagger', icon: 'mdi:api', class: 'skill-tag python' }
		],
		highlights: [
			'Made the function signature the schema, so there is no second place to keep in sync.',
			'Kept plain Django decorators like cache_page working, because a framework inside a framework was the thing I was trying to avoid.',
			'Generate Swagger from the same annotations, so the documentation cannot drift away from the code.'
		],
		featured: {
			lead: 'Listed in',
			links: [
				{ label: 'djangopackages.org', url: 'https://djangopackages.org/packages/p/djapy/' },
				{ label: 'pydeps.com', url: 'https://pydeps.com/project/djapy/' },
				{ label: 'alternativeto.net', url: 'https://alternativeto.net/software/djapy/' }
			]
		},
		community: {
			people: [
				{
					login: 'Microturbine',
					did: 'merged their fix for reparsed schema data',
					url: 'https://github.com/Bishwas-py/djapy/pull/25'
				},
				{
					login: 'philrdubois',
					did: 'fixed the Swagger bug they found',
					url: 'https://github.com/Bishwas-py/djapy/issues/32'
				}
			],
			more: 'three more contributors',
			url: 'https://github.com/Bishwas-py/djapy/pulls?q=is%3Apr'
		},
		link: 'https://github.com/Bishwas-py/djapy',
		image: '/projects/djapy.jpg'
	},
	{
		name: '@friendofsvelte/tipex',
		group: 'tools',
		timeline: '425 stars, 2023',
		description:
			'I wanted a rich-text editor for SvelteKit that looked finished the moment it was installed. TipTap and ProseMirror handle the document model; everything above them is mine.',
		technologies: [
			{ name: 'Tiptap', icon: 'mdi:format-text', class: 'skill-tag react' },
			{ name: 'Prosemirror', icon: 'material-symbols:owl', class: 'skill-tag react' },
			{ name: 'Svelte', icon: 'logos:svelte-icon', class: 'skill-tag svelte' }
		],
		highlights: [
			'Took TipTap rather than hand-rolling a ProseMirror layer, so I inherited its extension system and only had to own the Svelte side.',
			'Ship the styling inside the package instead of leaving it to whoever installs it, which is the whole reason it looks done out of the box.',
			'Rewrote the control system and floating menu for Svelte 5 runes rather than patching the old reactivity around them.'
		],
		featured: {
			lead: 'Featured twice in',
			strong: "Svelte's official newsletter",
			links: [
				{ label: 'October 2024', url: 'https://svelte.dev/blog/whats-new-in-svelte-october-2024' },
				{ label: 'December 2024', url: 'https://svelte.dev/blog/whats-new-in-svelte-december-2024' }
			]
		},
		community: {
			people: [
				{
					login: 'Ayush-Tripathy',
					did: 'merged their autofocus prop',
					url: 'https://github.com/friendofsvelte/tipex/pull/28'
				},
				{
					login: 'kinderhead',
					did: 'answered them on replacing default extensions',
					url: 'https://github.com/friendofsvelte/tipex/issues/46'
				}
			],
			more: 'answered 38 of 40 reporters, closed all 40',
			url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue'
		},
		link: 'https://tipex.pages.dev',
		image: '/projects/tipex.jpg'
	},
	{
		name: 'Django + SvelteKit Template',
		group: 'frameworks',
		timeline: '72 stars, Production Template',
		description:
			'Every time I paired Django with SvelteKit I rebuilt the same plumbing. I solved it once properly and made that the starting point instead of doing it again.',
		technologies: [
			{ name: 'Django', icon: 'mdi:language-python', class: 'skill-tag django' },
			{ name: 'SvelteKit', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' }
		],
		highlights: [
			'Got session auth working through server-side rendering, which is the part that breaks first and costs the most to debug.',
			'Bridged Django messages into Svelte toasts so the backend keeps owning the wording.',
			'Fed server-side validation errors back into form state rather than duplicating the rules in the frontend.'
		],
		featured: {
			lead: 'Listed in',
			links: [
				{
					label: 'svelter.me',
					url: 'https://svelter.me/explore/library/django-svelte-template_Bishwas-py'
				},
				{
					label: 'sveltethemes.dev',
					url: 'https://sveltethemes.dev/Bishwas-py/django-svelte-template'
				},
				{
					label: 'starterindex.com',
					url: 'https://starterindex.com/boilerplate/django-svelte-template'
				}
			]
		},
		community: {
			people: [
				{
					login: 'Rey092',
					did: 'fixed the missing Django import they hit',
					url: 'https://github.com/Bishwas-py/django-svelte-template/issues/1'
				},
				{
					login: 'cd-4',
					did: 'worked through the CORS setup with them',
					url: 'https://github.com/Bishwas-py/django-svelte-template/issues/3'
				}
			],
			url: 'https://github.com/Bishwas-py/django-svelte-template/issues?q=is%3Aissue'
		},
		link: 'https://github.com/Bishwas-py/django-svelte-template',
		image: '/projects/django-svelte-template.jpg'
	},
	{
		name: 'Svelicon',
		group: 'tools',
		timeline: '21 stars, CLI Tool',
		description:
			'Every Svelte project I start needs icons, and the libraries I tried either fetched them at runtime or shipped the whole set. I wrote a CLI that puts the icons into the project as real components.',
		technologies: [
			{ name: 'Node.js', icon: 'logos:nodejs-icon', class: 'skill-tag typescript' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' },
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' }
		],
		highlights: [
			'Generate typed components ahead of time, so icons cost nothing at runtime and a wrong name fails at compile.',
			'Made it validate tsconfig path mappings while generating, because a broken mapping is the kind of thing you find much later.',
			'Emit JavaScript or TypeScript depending on the project rather than forcing my preference on it.'
		],
		featured: {
			lead: 'Featured under Icon Libraries in',
			strong: "Svelte's official newsletter",
			links: [
				{ label: 'December 2024', url: 'https://svelte.dev/blog/whats-new-in-svelte-december-2024' }
			]
		},
		community: {
			people: [
				{
					login: 'MarArMar',
					did: 'merged their Svelte 5 requirement',
					url: 'https://github.com/friendofsvelte/svelicon/pull/1'
				},
				{
					login: 'Tyler-Petrov',
					did: 'reviewed their move to types and env config',
					url: 'https://github.com/friendofsvelte/svelicon/pull/2'
				}
			],
			url: 'https://github.com/friendofsvelte/svelicon/pulls?q=is%3Apr'
		},
		link: 'https://www.npmjs.com/package/svelicon',
		image: '/projects/fos-svelicon.jpg'
	},
	{
		name: '@friendofsvelte/mermaid',
		group: 'tools',
		timeline: '36 stars, Svelte 5 Package',
		description:
			'I needed Mermaid diagrams on a server-rendered SvelteKit site, and the wrappers I found either broke during SSR or pulled mermaid.js into the first load. So I wrote the component I wanted.',
		technologies: [
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' }
		],
		highlights: [
			'Load mermaid.js behind a dynamic import so it never reaches the server bundle.',
			"Hand back a snippet on parse errors instead of throwing, because a bad diagram in someone's content should not take the page down.",
			'Covered it with Playwright end to end, since the failure I cared about only shows up in a real browser.'
		],
		featured: {
			lead: 'Written up on',
			links: [
				{
					label: 'jqueryscript.net',
					url: 'https://next.jqueryscript.net/svelte/mermaid-ssr-theming/'
				}
			]
		},
		link: 'https://mermaid-cjv.pages.dev/',
		image: '/projects/fos-mermaid.jpg'
	},
	{
		name: '@friendofsvelte/state',
		group: 'tools',
		timeline: '39 stars, Svelte 5 Package',
		description:
			'Runes gave me reactivity but not persistence, and I kept rewriting the same localStorage glue in every project. This is that glue written once, typed.',
		technologies: [
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' }
		],
		highlights: [
			'Put definition, persistence and cross-component sync in a single class, so there is nothing else to learn.',
			'Made the storage backend a constructor argument rather than a separate API, so moving from local to session is one word.',
			'Held it to zero dependencies beyond Svelte, because a persistence helper should not own your bundle.'
		],
		featured: {
			lead: 'Written up on',
			links: [
				{
					label: 'kitemetric.com',
					url: 'https://kitemetric.com/blogs/svelte-5-persistent-state-effortless-persistence-with-runes'
				},
				{
					label: 'libhunt.com',
					url: 'https://www.libhunt.com/compare-friendofsvelte--state-vs-forms-manager'
				}
			]
		},
		community: {
			people: [
				{
					login: 'notsidney',
					did: 'merged their server-side storage fix',
					url: 'https://github.com/friendofsvelte/state/pull/2'
				}
			],
			url: 'https://github.com/friendofsvelte/state/pulls?q=is%3Apr'
		},
		link: 'https://www.npmjs.com/package/@friendofsvelte/state',
		image: '/projects/fos-state.jpg'
	},
	{
		name: 'SEOrd - SEO Analyzer',
		group: 'tools',
		timeline: '50 stars, Node.js Library',
		description:
			'I had a hard time finding a decent SEO analyser for Node, so I wrote one. For 1.0 I rebuilt it as a rule engine rather than the pile of checks it had grown into.',
		technologies: [
			{ name: 'Node.js', icon: 'logos:nodejs-icon', class: 'skill-tag typescript' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' },
			{ name: 'JavaScript', icon: 'skill-icons:javascript', class: 'skill-tag javascript' }
		],
		highlights: [
			'Turned 22 checks into individually disableable rules, so the score can be explained rather than just produced.',
			'Weighted each rule and exposed the breakdown, because a number nobody can account for is not something you can act on.',
			'Kept it synchronous and down to one dependency, so it drops into a build step without ceremony.'
		],
		featured: {
			lead: 'Picked as one of twelve open-source tools for content creators by',
			links: [
				{
					label: 'medevel.com',
					url: 'https://medevel.com/12-open-source-tools-for-content-creators-in-2025-which-one-to-use/'
				}
			]
		},
		community: {
			people: [
				{
					login: 'paulrohrbeck',
					did: 'merged their fix for the output message',
					url: 'https://github.com/Bishwas-py/seord/pull/3'
				}
			],
			url: 'https://github.com/Bishwas-py/seord/pulls?q=is%3Apr'
		},
		link: 'https://npmjs.com/package/seord',
		image: '/projects/seord.jpg'
	},
	{
		name: 'Fiverr Scraper API',
		group: 'tools',
		timeline: '84 stars, Python Library',
		description:
			'I was doing Fiverr research by hand and wanted the data as JSON. I built the scraper for myself, published it, and have been maintaining it for strangers ever since.',
		technologies: [
			{ name: 'Python', icon: 'mdi:language-python', class: 'skill-tag python' },
			{ name: 'Web Scraping', icon: 'mdi:web', class: 'skill-tag django' }
		],
		highlights: [
			'Return both parsed JSON and the raw soup, so callers can take my parsing or ignore it entirely.',
			'Wired in proxy and ScraperAPI support so the caller can route around rate limits instead of forking the library.',
			'Kept install to a single pip package, because anything harder and people just copy the file.'
		],
		community: {
			people: [
				{
					login: 'ruizuo11',
					did: 'answered them when profile scraping broke',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues/1'
				},
				{
					login: 'MatteoSchifano',
					did: 'traced it with them to the breadcrumb parser',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues/5'
				}
			],
			more: 'closed all seven reports',
			url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue'
		},
		link: 'https://github.com/Bishwas-py/fiverr-scraping-api',
		image: '/projects/fiverr-api.jpg'
	},
	{
		name: 'notify',
		group: 'tools',
		timeline: 'Go Library',
		description:
			'I wanted my own Go scripts to raise desktop notifications on Linux without dragging in a desktop framework, so I wrote a thin layer over D-Bus.',
		technologies: [
			{ name: 'Go', icon: 'logos:go', class: 'skill-tag go' },
			{ name: 'D-Bus', icon: 'mdi:linux', class: 'skill-tag github' }
		],
		highlights: [
			'Bound action buttons straight to Go functions, so a notification can run code rather than only appear.',
			'Chose struct configuration over a builder chain, because the whole thing is one call and a chain would be ceremony.',
			'Defaulted to freedesktop sound names so it behaves like everything else on the desktop.'
		],
		link: 'https://github.com/Bishwas-py/notify',
		image: '/projects/notify.jpg'
	},
	{
		name: 'Speed Clicking',
		group: 'products',
		timeline: 'Browser-Based Game',
		description:
			'I wanted to know my click speed and every site that measured it was buried in ads. This was a weekend build to scratch that, and I left it that way.',
		technologies: [
			{ name: 'Next.js', icon: 'logos:nextjs-icon', class: 'skill-tag react' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', class: 'skill-tag tailwind' }
		],
		highlights: [
			'Kept it to one page with nothing between arriving and playing, because the whole interaction lasts ten seconds.',
			'Spent the time on input accuracy rather than decoration, since that is the only thing being measured.',
			'Left it finished rather than finding reasons to keep working on it.'
		],
		link: 'https://github.com/Bishwas-py/speedclicking.com',
		image: '/projects/speedclicking.jpg'
	},
	{
		name: 'Deviser Club',
		group: 'products',
		timeline: '97 stars, Blogging Platform',
		description:
			'I wanted to find out whether a Medium alternative could give authors real control, and I wanted to learn Rails properly rather than through tutorials. This was both.',
		technologies: [
			{ name: 'Ruby on Rails 7', icon: 'mdi:language-ruby-on-rails', class: 'skill-tag rails' }
		],
		highlights: [
			'Chose Rails 7 deliberately so I would learn it under real constraints instead of a toy project.',
			'Held the data model simple on purpose; the README still argues that simple beats complex.',
			"Ran it in the open from the first commit, which is why other people's patches ended up in it."
		],
		community: {
			people: [
				{
					login: 'yshmarov',
					did: 'merged their three cleanup patches',
					url: 'https://github.com/Bishwas-py/deviser-club/pulls?q=is%3Apr+author%3Ayshmarov'
				},
				{
					login: 'lucascarrias',
					did: 'merged the RSpec suite they built',
					url: 'https://github.com/Bishwas-py/deviser-club/pull/11'
				}
			],
			more: 'merged six patches in all',
			url: 'https://github.com/Bishwas-py/deviser-club/pulls?q=is%3Apr'
		},
		link: 'https://github.com/Bishwas-py/deviser-club',
		image: '/projects/deviser-club.jpg'
	}
];

export const GROUPS = [
	{ key: 'tools', label: 'Libraries & tools' },
	{ key: 'frameworks', label: 'Frameworks' },
	{ key: 'products', label: 'Products' }
];

export const GROUPED = GROUPS.map((g) => ({
	...g,
	projects: PROJECTS.filter((p) => p.group === g.key)
}));
