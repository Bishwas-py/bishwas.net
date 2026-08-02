export type Project = (typeof PROJECTS)[number];

export const PROJECTS = [
	{
		name: 'Fymo',
		group: 'frameworks',
		timeline: '2025 - Present, Python Framework',
		description:
			'A Python web framework that server-renders real Svelte 5 components, so the backend and the page live in one repo and one deploy.',
		technologies: [
			{ name: 'Python', icon: 'mdi:language-python', class: 'skill-tag python' },
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'esbuild', icon: 'logos:esbuild', class: 'skill-tag javascript' }
		],
		highlights: [
			'Compiles Svelte once at build time; a long-lived Node sidecar renders each request over stdio, so nothing compiles on the fly.',
			'SvelteKit-style remote functions let the frontend call typed Python endpoints directly.',
			'Ships a durable job queue, real-time broadcasts and scaffolded password auth you can read and delete.',
			'Deploys as a single WSGI app, with no second server to run.'
		],
		link: 'https://fymo.mintlify.app/',
		image: '/projects/fymo.jpg'
	},
	{
		name: 'SatzMaster',
		group: 'products',
		timeline: '2024 - Present',
		description:
			'An interactive German language learning application featuring typing exercises, sentence building, and grammar reflex training.',
		technologies: [
			{ name: 'Next.js', icon: 'logos:nextjs-icon', class: 'skill-tag react' },
			{ name: 'React', icon: 'logos:react', class: 'skill-tag react' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', class: 'skill-tag tailwind' }
		],
		highlights: [
			'Interactive German sentence typing for muscle memory development',
			'Sentence building exercises from keywords for grammar practice',
			'Neural pattern recognition for advanced grammar training',
			'Multiple difficulty levels from A1 to C1 German proficiency'
		],
		link: 'https://satzmacher.bishwas.net/',
		image: '/projects/satzmacher.jpg'
	},
	{
		name: 'Webmatrices',
		group: 'products',
		timeline: 'March 2020 - Present',
		description:
			'A SaaS web application designed to provide tools for digital creators, freelancers, bloggers, and developers.',
		technologies: [
			{ name: 'Django/Djapy', icon: 'mdi:language-python', class: 'skill-tag django' },
			{ name: 'SvelteKit', icon: 'logos:svelte-icon', class: 'skill-tag svelte' }
		],
		highlights: [
			'Developed robust APIs and features to support user needs.',
			'Conducted in-depth research to align tools with industry trends.',
			'Enhanced user engagement through data-driven updates.'
		],
		link: 'https://webmatrices.com',
		image: '/projects/webmatrices.jpg'
	},
	{
		name: 'Djapy',
		group: 'frameworks',
		timeline: '120 stars, Django Framework',
		description:
			"A REST API framework built on Django, emphasizing a 'no framework inside a framework' principle.",
		technologies: [
			{ name: 'Django', icon: 'mdi:language-python', class: 'skill-tag django' },
			{ name: 'Pydantic', icon: 'mdi:json', class: 'skill-tag python' },
			{ name: 'Swagger', icon: 'mdi:api', class: 'skill-tag python' }
		],
		highlights: [
			'Promoted flexibility while ensuring user-friendly API design.',
			'Integrated strict input/output control to reduce errors.',
			'Enhanced developer experience through comprehensive Swagger documentation.'
		],
		link: 'https://github.com/Bishwas-py/djapy',
		image: '/projects/djapy.jpg'
	},
	{
		name: '@friendofsvelte/tipex',
		group: 'tools',
		timeline: '425 stars, 2023',
		description:
			'A rich-text editor for Svelte, simplifying text editing with frameworks like Tiptap and Prosemirror.',
		technologies: [
			{ name: 'Tiptap', icon: 'mdi:format-text', class: 'skill-tag react' },
			{ name: 'Prosemirror', icon: 'material-symbols:owl', class: 'skill-tag react' },
			{ name: 'Svelte', icon: 'logos:svelte-icon', class: 'skill-tag svelte' }
		],
		highlights: [
			'Drag-and-drop and clipboard support for image uploads.',
			'Easy integration and customization for developers.',
			'Provided detailed documentation and npm package.'
		],
		featured: {
			lead: "Listed in Svelte's official What's new in Svelte twice",
			links: [
				{ label: 'October 2024', url: 'https://svelte.dev/blog/whats-new-in-svelte-october-2024' },
				{ label: 'December 2024', url: 'https://svelte.dev/blog/whats-new-in-svelte-december-2024' }
			]
		},
		link: 'https://tipex.pages.dev',
		image: '/projects/tipex.jpg'
	},
	{
		name: 'Django + SvelteKit Template',
		group: 'frameworks',
		timeline: '72 stars, Production Template',
		description:
			'A production template wiring SvelteKit to Django, with the plumbing that usually costs a week already solved.',
		technologies: [
			{ name: 'Django', icon: 'mdi:language-python', class: 'skill-tag django' },
			{ name: 'SvelteKit', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' }
		],
		highlights: [
			'Session auth that survives server-side rendering, with form actions posting straight to Django.',
			'Django messages bridged into Svelte as toast and flash notifications.',
			'Server-side validation errors surfaced back into SvelteKit form state.'
		],
		link: 'https://github.com/Bishwas-py/django-svelte-template',
		image: '/projects/django-svelte-template.jpg'
	},
	{
		name: '@friendofsvelte/mermaid',
		group: 'tools',
		timeline: '36 stars, Svelte 5 Package',
		description: 'A Mermaid renderer for Svelte 5: pass it Mermaid source, get an SVG in the DOM.',
		technologies: [
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' }
		],
		highlights: [
			'One typed component, with a snippet slot for parse errors instead of a thrown exception.',
			'A dynamic import keeps mermaid.js out of the server bundle entirely.',
			'Built on Svelte 5 runes throughout.'
		],
		link: 'https://mermaid-cjv.pages.dev/',
		image: '/projects/fos-mermaid.jpg'
	},
	{
		name: '@friendofsvelte/state',
		group: 'tools',
		timeline: '39 stars, Svelte 5 Package',
		description:
			'Type-safe persistent state for Svelte 5, backed by localStorage or sessionStorage.',
		technologies: [
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' }
		],
		highlights: [
			'A single PersistentState class covers definition, persistence and cross-component sync.',
			'Full type inference, with zero dependencies beyond Svelte itself.',
			'The storage backend is a constructor argument rather than a separate API.'
		],
		link: 'https://www.npmjs.com/package/@friendofsvelte/state',
		image: '/projects/fos-state.jpg'
	},
	{
		name: 'Svelicon',
		group: 'tools',
		timeline: '21 stars, CLI Tool',
		description:
			'A CLI that turns Iconify SVGs into type-safe Svelte components, so icons ship as code instead of a runtime fetch.',
		technologies: [
			{ name: 'Node.js', icon: 'logos:nodejs-icon', class: 'skill-tag typescript' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' },
			{ name: 'Svelte 5', icon: 'logos:svelte-icon', class: 'skill-tag svelte' }
		],
		highlights: [
			'Interactive search across the Iconify collections, with batched parallel downloads.',
			'Generates typed components and validates tsconfig path mappings automatically.',
			'Emits JavaScript or TypeScript depending on the project it runs in.'
		],
		link: 'https://www.npmjs.com/package/svelicon',
		image: '/projects/fos-svelicon.jpg'
	},
	{
		name: 'notify',
		group: 'tools',
		timeline: 'Go Library',
		description:
			'A Go library for Linux desktop notifications with action buttons and sound, spoken over D-Bus.',
		technologies: [
			{ name: 'Go', icon: 'logos:go', class: 'skill-tag go' },
			{ name: 'D-Bus', icon: 'mdi:linux', class: 'skill-tag github' }
		],
		highlights: [
			'Action buttons bound directly to Go functions, with click handling wired through D-Bus.',
			'Sound alerts by freedesktop name or custom file.',
			'Struct-based configuration rather than a builder chain.'
		],
		link: 'https://github.com/Bishwas-py/notify',
		image: '/projects/notify.jpg'
	},
	{
		name: 'SEOrd - SEO Analyzer',
		group: 'tools',
		timeline: '50 stars, Node.js Library',
		description: 'An advanced content SEO analyzer library for swift analysis of HTML content.',
		technologies: [
			{ name: 'Node.js', icon: 'logos:nodejs-icon', class: 'skill-tag typescript' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' },
			{ name: 'JavaScript', icon: 'skill-icons:javascript', class: 'skill-tag javascript' }
		],
		highlights: [
			'Evaluates keyword density, meta descriptions, and link structure.',
			'Fills a critical gap in the Node.js ecosystem for SEO analysis.'
		],
		link: 'https://npmjs.com/package/seord',
		image: '/projects/seord.jpg'
	},
	{
		name: 'Fiverr Scraper API',
		group: 'tools',
		timeline: '84 stars, Python Library',
		description:
			'A Python library that programmatically extracts data from Fiverr gig pages and user profiles for analysis and automation.',
		technologies: [
			{ name: 'Python', icon: 'mdi:language-python', class: 'skill-tag python' },
			{ name: 'Web Scraping', icon: 'mdi:web', class: 'skill-tag django' }
		],
		highlights: [
			'Enabled dynamic data extraction from Fiverr gig pages.',
			'Integrated proxy support and customizable headers.',
			'Simplified installation and usage through pip.'
		],
		link: 'https://github.com/Bishwas-py/fiverr-scraping-api',
		image: '/projects/fiverr-api.jpg'
	},
	{
		name: 'Speed Clicking',
		group: 'products',
		timeline: 'Browser-Based Game',
		description: 'A game built to measure click speed, designed for gamers needing quick reflexes.',
		technologies: [
			{ name: 'Next.js', icon: 'logos:nextjs-icon', class: 'skill-tag react' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', class: 'skill-tag tailwind' }
		],
		highlights: [
			'Created responsive, user-friendly gameplay mechanics.',
			'Optimized performance for various devices and browsers.',
			'Inspired by a personal need, making it a fun, practical solution.'
		],
		link: 'https://github.com/Bishwas-py/speedclicking.com',
		image: '/projects/speedclicking.jpg'
	},
	{
		name: 'Deviser Club',
		group: 'products',
		timeline: '97 stars, Blogging Platform',
		description:
			'An open-source blogging platform enhancing author autonomy while ensuring exceptional audience experience.',
		technologies: [
			{ name: 'Ruby on Rails 7', icon: 'mdi:language-ruby-on-rails', class: 'skill-tag rails' }
		],
		highlights: [
			'Focused on seamless content creation and publishing workflows.',
			'Enabled publishers with tools for better audience engagement.'
		],
		link: 'https://github.com/Bishwas-py/deviser-club',
		image: '/projects/deviser-club.jpg'
	}
];

export const GROUPS = [
	{ key: 'frameworks', label: 'Frameworks' },
	{ key: 'tools', label: 'Libraries & tools' },
	{ key: 'products', label: 'Products' }
];

export const GROUPED = GROUPS.map((g) => ({
	...g,
	projects: PROJECTS.filter((p) => p.group === g.key)
}));
