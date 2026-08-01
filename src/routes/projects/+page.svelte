<script lang="ts">
	import { fade } from 'svelte/transition';
	import Meta from '$item/Meta.svelte';

	const PROJECTS = [
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
			timeline: 'Open-Source Framework',
			description:
				'A REST API framework built on Django, emphasizing a \'no framework inside a framework\' principle.',
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
			timeline: '2023',
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
			description:
				'A Mermaid renderer for Svelte 5: pass it Mermaid source, get an SVG in the DOM.',
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
			timeline: 'Node.js Library',
			description:
				'An advanced content SEO analyzer library for swift analysis of HTML content.',
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
			timeline: 'Python Library',
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
			description:
				'A game built to measure click speed, designed for gamers needing quick reflexes.',
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
			timeline: 'Blogging Platform',
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

	const GROUPS = [
		{ key: 'frameworks', label: 'Frameworks' },
		{ key: 'tools', label: 'Libraries & tools' },
		{ key: 'products', label: 'Products' }
	];
</script>


<Meta
	title="Projects, on python, django, svelte, typescript and more | Bishwas"
	description="Collection of projects that I have worked on, including web applications, libraries, and open-source frameworks."
	keywords="svelte, django, python, typescript, web development, open-source, projects"
/>

<div class="intro max-w-3xl mb-7">
	<p>
		As a systematic developer, I create solutions ranging from client-focused applications to open-source frameworks.
		Each project in
		<a
			class="link-inked inline-flex gap-1 items-center"
			href="https://github.com/Bishwas-py/bishwas.net"
			target="_blank"
			in:fade>
			<span class="tag-text">my portfolio</span>
			<iconify-icon icon="simple-icons:svelte"></iconify-icon>
		</a> reflects both technical precision and practical purpose, combining engineering
		principles with creative problem-solving.
	</p>

	<p class="mt-7">
		Here are some of the projects that I have worked on. For the fixes I have merged into other
		people's frameworks, see <a class="link-inked" href="/open-source">open source</a>.
	</p>
</div>

{#each GROUPS as group}
<section class="max-w-3xl w-full mb-14">
	<h2 class="group-title">{group.label}</h2>

	<div class="flex flex-col gap-9 mt-6">
	{#each PROJECTS.filter((p) => p.group === group.key) as project}
		<div class="flex flex-col">
			<div class="flex w-full gap-4">
				<a href={project.link} target="_blank" class="block relative w-32 min-h-16 max-h-24 group rounded-md overflow-clip">
					<img src={project.image} alt={project.name}
							 class="w-auto h-full rounded group-hover:opacity-75 transition-opacity duration-300" />
					<div
						class="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<p class="text-white text-xs font-semibold">Learn more</p>
					</div>
					<iconify-icon icon="ph:arrow-square-in-duotone"
												class="absolute bottom-1 right-2 group-hover:hidden text-gray-400"></iconify-icon>
				</a>
				<div class="flex flex-col">
					<h2 class="text-xl font-semibold">{project.name}</h2>
					<p class="text-gray-600 dark:text-gray-400 text-sm">{project.timeline}</p>
					<ul class="mt-1.5 flex flex-wrap gap-2">
						{#each project.technologies as tech}
							<li class={tech.class}>
								<iconify-icon icon={tech.icon}></iconify-icon>
								{tech.name}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<p class="description">{project.description}</p>
			<ul class="highlights">
				{#each project.highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
		</div>
	{/each}
	</div>
</section>
{/each}

<style lang="postcss">
    .group-title {
        @apply text-2xl font-bold pb-2 border-b border-gray-300/60 dark:border-gray-700/60;
    }

    .description {
        @apply mt-2.5 max-w-[62ch] leading-relaxed;
    }

    .highlights {
        @apply mt-2 max-w-[68ch] list-disc list-outside pl-5 space-y-1
        text-sm leading-relaxed text-gray-600 dark:text-gray-400
        marker:text-gray-400/70 dark:marker:text-gray-600;
    }
</style>
