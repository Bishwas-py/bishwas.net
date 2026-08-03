import type { SkillTone } from '$utils/tags';

type Project = {
	name: string;
	group: string;
	timeline: string;
	description: string;
	technologies: { name: string; icon: string; tone: SkillTone }[];
	highlights: string[];
	link: string;
	image: string;
	featured?: {
		icon: string;
		lead: string;
		strong?: string;
		tail?: string;
		links: { label: string; url: string }[];
	};
	community?: {
		faces?: { login: string; did: string; url: string }[];
		facesMore?: number;
		people: { login: string; did: string; url: string }[];
		more?: string;
		url: string;
	};
};

const PROJECTS: Project[] = [
	{
		name: 'Fymo',
		group: 'frameworks',
		timeline: '2025 - Present, Python Framework',
		description:
			'I got tired of maintaining a frontend repo, a backend repo, and an API layer whose only job was to let the two talk. Fymo renders real Svelte 5 from Python, in one repo and one deploy.',
		technologies: [
			{ name: 'Python', icon: 'mdi:language-python', tone: 'python' },
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', tone: 'svelte' },
			{ name: 'esbuild', icon: 'logos:esbuild', tone: 'javascript' }
		],
		highlights: [
			'Compile Svelte once at build time and keep a long-lived Node process for rendering, so nothing compiles per request.',
			"Borrowed SvelteKit's remote functions so the frontend calls typed Python directly and I never write an API layer again.",
			'Generate the auth into your project as plain code you can read and delete, rather than hiding it inside the framework.',
			'Ships as one WSGI app, because not deploying two things was the entire point.'
		],
		featured: {
			icon: 'ph:bookmark-simple-fill',
			lead: 'Listed in',
			links: [{ label: 'sveltethemes.dev', url: 'https://sveltethemes.dev/Bishwas-py/fymo' }]
		},
		link: 'https://fymo.mintlify.app/',
		image: '/projects/fymo.jpg'
	},
	{
		name: 'Webmatrices',
		group: 'products',
		timeline: 'March 2020 to 28 July 2026',
		description:
			'I have run Webmatrices since 2020: a community where bloggers, publishers and freelancers bring AdSense, SEO and coding problems and get answers from people who have had them.',
		technologies: [
			{ name: 'Django/Djapy', icon: 'mdi:language-python', tone: 'django' },
			{ name: 'SvelteKit', icon: 'logos:svelte-icon', tone: 'svelte' }
		],
		highlights: [
			'Built its APIs on djapy, my own framework, so I was the first person to live with its mistakes.',
			'Answer and moderate it myself, which means I hear about a broken feature from a member before any dashboard tells me.',
			'Kept it running for six years, which is a different discipline from launching something.'
		],
		featured: {
			icon: 'ph:newspaper-clipping-fill',
			lead: 'Cited by',
			links: [
				{ label: 'JavaScript Weekly', url: 'https://javascriptweekly.com/issues/782' },
				{
					label: 'Inc.',
					url: 'https://www.inc.com/amanda-pressner-kreuser/6-ways-to-market-your-brand-on-linkedin.html'
				},
				{ label: 'The New Stack', url: 'https://thenewstack.io/ai-slop-open-source/' },
				{ label: 'Frontend at Scale', url: 'https://frontendatscale.com/issues/55/' },
				{
					label: 'University of Waterloo',
					url: 'https://uwaterloo.ca/web-resources/blog/web-dev-rev-wrap-january-27-2026'
				}
			]
		},
		link: 'https://webmatrices.com',
		image: '/projects/webmatrices.jpg'
	},
	{
		name: 'SuperMCP',
		group: 'products',
		timeline: 'Tauri desktop app, Rust and Svelte 5, 2026',
		description:
			'Every MCP server I tried wanted API keys and an OAuth dance for sites I was already signed into. This one borrows the Chrome session that is already open, so Claude, Cursor and Windsurf can read Reddit, X, LinkedIn and the rest without me handing anything over.',
		technologies: [
			{ name: 'Rust', icon: 'simple-icons:rust', tone: 'rust' },
			{ name: 'Tauri', icon: 'simple-icons:tauri', tone: 'javascript' },
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', tone: 'svelte' }
		],
		highlights: [
			'Wrote the worker in Rust as a single static binary and gave every AI client its own process, so one client cannot take another down.',
			"Emulated Chrome's TLS fingerprint for the sources that answer plain HTTP and only drove a real headless browser for the ones that need a session, because the second costs seconds and the first does not.",
			'Had every worker append to one activity log that the desktop shell tails, so you can watch which client is reading which source as it happens.',
			'Ships as a signed installer, because the people who want this are not going to build a Rust workspace.'
		],
		featured: {
			icon: 'simple-icons:svelte',
			lead: 'Featured in',
			strong: "Svelte's official",
			tail: 'newsletter',
			links: [{ label: 'July 2026', url: 'https://svelte.dev/blog/whats-new-in-svelte-july-2026' }]
		},
		link: 'https://webmatrices.com/mcpbrowser',
		image: '/projects/supermcp.jpg'
	},
	{
		name: 'Deviser Club',
		group: 'products',
		timeline: '97 stars, 389 commits in six weeks',
		description:
			'I wanted to know whether an open source Medium alternative could put authors in charge without getting complicated. Simple beats complex was the whole bet, and I built it on Rails 7 to find out.',
		technologies: [{ name: 'Ruby on Rails 7', icon: 'mdi:language-ruby-on-rails', tone: 'rails' }],
		highlights: [
			'Kept the data model deliberately small, because every feature I skipped was one an author would not have to think about.',
			"Ran it in the open from the first commit, which is why other people's patches ended up in it.",
			'Wrote 389 commits in six weeks and then stopped, because I had the answer and it was not going to be a product.'
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
	},
	{
		name: 'Djapy',
		group: 'frameworks',
		timeline: '120 stars, 507 commits since 2023',
		description:
			'Django REST Framework kept asking me to write serializers for things Django already knew. Djapy uses type hints as the contract instead: a decorator, a return type, done.',
		technologies: [
			{ name: 'Django', icon: 'mdi:language-python', tone: 'django' },
			{ name: 'Pydantic', icon: 'mdi:json', tone: 'python' },
			{ name: 'Swagger', icon: 'mdi:api', tone: 'python' }
		],
		highlights: [
			'Made the function signature the schema, so there is no second place to keep in sync.',
			'Kept plain Django decorators like cache_page working, because a framework inside a framework was the thing I was trying to avoid.',
			'Generate Swagger from the same annotations, so the documentation cannot drift away from the code.'
		],
		featured: {
			icon: 'ph:bookmark-simple-fill',
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
		timeline: '425 stars, maintained since 2023',
		description:
			'I wanted a rich-text editor for SvelteKit that looked finished the moment it was installed. TipTap and ProseMirror handle the document model; everything above them is mine.',
		technologies: [
			{ name: 'Tiptap', icon: 'mdi:format-text', tone: 'react' },
			{ name: 'Prosemirror', icon: 'material-symbols:owl', tone: 'react' },
			{ name: 'Svelte', icon: 'logos:svelte-icon', tone: 'svelte' }
		],
		highlights: [
			'Took TipTap rather than hand-rolling a ProseMirror layer, so I inherited its extension system and only had to own the Svelte side.',
			'Ship the styling inside the package instead of leaving it to whoever installs it, which is the whole reason it looks done out of the box.',
			'Rewrote the control system and floating menu for Svelte 5 runes rather than patching the old reactivity around them.'
		],
		featured: {
			icon: 'simple-icons:svelte',
			lead: 'Featured twice in',
			strong: "Svelte's official",
			tail: 'newsletter',
			links: [
				{ label: 'October 2024', url: 'https://svelte.dev/blog/whats-new-in-svelte-october-2024' },
				{ label: 'December 2024', url: 'https://svelte.dev/blog/whats-new-in-svelte-december-2024' }
			]
		},
		community: {
			faces: [
				{
					login: 'bluepuma77',
					did: 'raised five issues, starting with missing CSS in the install instructions',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Abluepuma77'
				},
				{
					login: 'lgrkvst',
					did: 'raised four issues on default buttons, focus stealing and the placeholder',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Algrkvst'
				},
				{
					login: 'digitaldrreamer',
					did: 'reported a broken TipTap peer dependency on install',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Adigitaldrreamer'
				},
				{
					login: 'zulienr',
					did: 'reported control buttons not rendering, including on Safari',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Azulienr'
				},
				{
					login: 'ikshyza',
					did: 'found a build where only one version shipped its CSS',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Aikshyza'
				},
				{
					login: 'robishx',
					did: 'asked for background props and a way to drop the focus ring',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Arobishx'
				},
				{
					login: 'lalilaloe',
					did: 'hit an error using it in a PWA outside SvelteKit',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Alalilaloe'
				},
				{
					login: 'MihaelBercic',
					did: 'asked how Enter and Shift+Enter should behave',
					url: 'https://github.com/friendofsvelte/tipex/issues/44'
				},
				{
					login: 'kinderhead',
					did: 'found that default extensions could not be replaced',
					url: 'https://github.com/friendofsvelte/tipex/issues/46'
				}
			],
			facesMore: 20,
			people: [
				{
					login: 'bluepuma77',
					did: 'traded twenty-one messages across their five issues',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Abluepuma77'
				},
				{
					login: 'lgrkvst',
					did: 'worked through four issues on the controls and focus behaviour',
					url: 'https://github.com/friendofsvelte/tipex/issues?q=is%3Aissue+author%3Algrkvst'
				},
				{
					login: 'MihaelBercic',
					did: 'turned their question on Enter and Shift+Enter into the docs',
					url: 'https://github.com/friendofsvelte/tipex/issues/44'
				},
				{
					login: 'Ayush-Tripathy',
					did: 'merged their autofocus prop',
					url: 'https://github.com/friendofsvelte/tipex/pull/28'
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
		timeline: '72 stars, 2024 to 2025',
		description:
			'Every time I paired Django with SvelteKit I rebuilt the same plumbing. I solved it once properly and made that the starting point instead of doing it again.',
		technologies: [
			{ name: 'Django', icon: 'mdi:language-python', tone: 'django' },
			{ name: 'SvelteKit', icon: 'logos:svelte-icon', tone: 'svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', tone: 'typescript' }
		],
		highlights: [
			'Got session auth working through server-side rendering, which is the part that breaks first and costs the most to debug.',
			'Bridged Django messages into Svelte toasts so the backend keeps owning the wording.',
			'Fed server-side validation errors back into form state rather than duplicating the rules in the frontend.'
		],
		featured: {
			icon: 'ph:bookmark-simple-fill',
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
		timeline: '21 stars, CLI, v2 in 2025',
		description:
			'Every Svelte project I start needs icons, and the libraries I tried either fetched them at runtime or shipped the whole set. I wrote a CLI that puts the icons into the project as real components.',
		technologies: [
			{ name: 'Node.js', icon: 'logos:nodejs-icon', tone: 'typescript' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', tone: 'typescript' },
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', tone: 'svelte' }
		],
		highlights: [
			'Generate typed components ahead of time, so icons cost nothing at runtime and a wrong name fails at compile.',
			'Made it validate tsconfig path mappings while generating, because a broken mapping is the kind of thing you find much later.',
			'Emit JavaScript or TypeScript depending on the project rather than forcing my preference on it.'
		],
		featured: {
			icon: 'simple-icons:svelte',
			lead: 'Featured under Icon Libraries in',
			strong: "Svelte's official",
			tail: 'newsletter',
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
		timeline: '36 stars, Svelte 5, since 2025',
		description:
			'I needed Mermaid diagrams on a server-rendered SvelteKit site, and the wrappers I found either broke during SSR or pulled mermaid.js into the first load. So I wrote the component I wanted.',
		technologies: [
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', tone: 'svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', tone: 'typescript' }
		],
		highlights: [
			'Load mermaid.js behind a dynamic import so it never reaches the server bundle.',
			"Hand back a snippet on parse errors instead of throwing, because a bad diagram in someone's content should not take the page down.",
			'Covered it with Playwright end to end, since the failure I cared about only shows up in a real browser.'
		],
		featured: {
			icon: 'ph:newspaper-clipping-fill',
			lead: 'Reviewed by',
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
		timeline: '39 stars, Svelte 5, since 2025',
		description:
			'Runes gave me reactivity but not persistence, and I kept rewriting the same localStorage glue in every project. This is that glue written once, typed.',
		technologies: [
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', tone: 'svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', tone: 'typescript' }
		],
		highlights: [
			'Put definition, persistence and cross-component sync in a single class, so there is nothing else to learn.',
			'Made the storage backend a constructor argument rather than a separate API, so moving from local to session is one word.',
			'Held it to zero dependencies beyond Svelte, because a persistence helper should not own your bundle.'
		],
		featured: {
			icon: 'ph:newspaper-clipping-fill',
			lead: 'Reviewed by',
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
		timeline: '50 stars, rebuilt for 2.0 in 2026',
		description:
			'I had a hard time finding a decent SEO analyser for Node, so I wrote one. For 2.0 I rebuilt it as a rule engine rather than the pile of checks it had grown into.',
		technologies: [
			{ name: 'Node.js', icon: 'logos:nodejs-icon', tone: 'typescript' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', tone: 'typescript' },
			{ name: 'JavaScript', icon: 'skill-icons:javascript', tone: 'javascript' }
		],
		highlights: [
			'Turned 22 checks into individually disableable rules, so the score can be explained rather than just produced.',
			'Weighted each rule and exposed the breakdown, because a number nobody can account for is not something you can act on.',
			'Kept it synchronous and down to one dependency, so it drops into a build step without ceremony.'
		],
		featured: {
			icon: 'ph:newspaper-clipping-fill',
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
		timeline: '84 stars, 2021 to 2024',
		description:
			'I needed Fiverr gig and profile data as structured JSON and there was no clean way to get it, so I wrote the library and put it on PyPI. Seven people have filed issues against it since.',
		technologies: [
			{ name: 'Python', icon: 'mdi:language-python', tone: 'python' },
			{ name: 'Web Scraping', icon: 'mdi:web', tone: 'django' }
		],
		highlights: [
			'Return both parsed JSON and the raw soup, so callers can take my parsing or ignore it entirely.',
			'Wired in proxy and ScraperAPI support so people can route around rate limits without forking it.',
			'Kept install to one pip package, because anything harder and people just copy the file.'
		],
		community: {
			faces: [
				{
					login: 'ruizuo11',
					did: 'reported profile scraping returning nothing',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue+author%3Aruizuo11'
				},
				{
					login: 'mubashardev',
					did: 'reported a NoneType error in the parser',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue+author%3Amubashardev'
				},
				{
					login: 'south1907',
					did: 'reported the scraper silently failing',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue+author%3Asouth1907'
				},
				{
					login: 'MatteoSchifano',
					did: 'traced an UnboundLocalError to the breadcrumb parser',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue+author%3AMatteoSchifano'
				},
				{
					login: 'toffuffee',
					did: 'reported a NoneType error on findChild',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue+author%3Atoffuffee'
				},
				{
					login: 'jayvs6341',
					did: 'reported another NoneType case',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue+author%3Ajayvs6341'
				},
				{
					login: 'wuchuanshiqi',
					did: 'asked how profile_scrape is meant to be used',
					url: 'https://github.com/Bishwas-py/fiverr-scraping-api/issues?q=is%3Aissue+author%3Awuchuanshiqi'
				}
			],
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
		timeline: 'Go over D-Bus, 2025',
		description:
			'I wanted my own Go scripts to raise desktop notifications on Linux without dragging in a desktop framework, so I wrote a thin layer over D-Bus.',
		technologies: [
			{ name: 'Go', icon: 'logos:go', tone: 'go' },
			{ name: 'D-Bus', icon: 'mdi:linux', tone: 'github' }
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
		name: 'SatzMaster',
		group: 'products',
		timeline: 'July 2025 to August 2025',
		description:
			'I am learning German and wanted drilling rather than flashcards, so I built three modes I keep coming back to: transcribing sentences, building them from keywords, and reflex drills on grammar patterns.',
		technologies: [
			{ name: 'Next.js', icon: 'logos:nextjs-icon', tone: 'react' },
			{ name: 'React', icon: 'logos:react', tone: 'react' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', tone: 'tailwind' }
		],
		highlights: [
			'Made typing the input, because recognising a correct sentence and producing one are not the same skill.',
			'Graded every mode A1 to C1, from articles and simple verbs up to subjunctive and passive, so it stays useful as I improve.',
			'Added timed sprints and a twenty sentence marathon, since the thing I am bad at is grammar under time pressure.'
		],
		link: 'https://satzmacher.bishwas.net/',
		image: '/projects/satzmacher.jpg'
	},
	{
		name: 'Speed Clicking',
		group: 'products',
		timeline: 'Browser game, 2022',
		description:
			'My fourteen year old brother plays Minecraft and wanted the clicking trainer he used to do more. I asked why I should not just build it, so I did, and shipped what he asked for.',
		technologies: [
			{ name: 'Next.js', icon: 'logos:nextjs-icon', tone: 'react' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', tone: 'tailwind' }
		],
		highlights: [
			'Built the features he actually named: fullscreen, a much bigger click area, and a dark mode I threw in.',
			'Took the spec from someone who would use it daily rather than deciding for him what a good trainer looked like.',
			'Left it finished once it did what he wanted, instead of finding reasons to keep going.'
		],
		link: 'https://github.com/Bishwas-py/speedclicking.com',
		image: '/projects/speedclicking.jpg'
	}
];

const GROUPS = [
	{ key: 'tools', label: 'Libraries & tools' },
	{ key: 'frameworks', label: 'Frameworks' },
	{ key: 'products', label: 'Products' }
];

export const GROUPED = GROUPS.map((g) => ({
	...g,
	projects: PROJECTS.filter((p) => p.group === g.key)
}));
