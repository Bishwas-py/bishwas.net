<script lang="ts">
	import {fade} from 'svelte/transition';

	export let projects = [
		{
			name: 'Webmatrices',
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
			image: '/projects/blogstorm-interface.jpg'
		},
		{
			name: '@friendofsvelte/tipex',
			timeline: '2023',
			description:
				'A rich-text editor for Svelte, simplifying text editing with frameworks like Tiptap and Prosemirror.',
			technologies: [
				{ name: 'Tiptap', icon: 'mdi:format-text', class: 'skill-tag react' },
				{ name: 'Prosemirror', icon: 'mdi:mirror', class: 'skill-tag react' },
				{ name: 'Svelte', icon: 'logos:svelte-icon', class: 'skill-tag svelte' }
			],
			highlights: [
				'Drag-and-drop and clipboard support for image uploads.',
				'Easy integration and customization for developers.',
				'Provided detailed documentation and npm package.'
			],
			link: 'https://tipex.pages.dev',
			image: '/projects/blogstorm.jpg'
		},
		{
			name: 'Speed Clicking',
			timeline: 'Browser-Based Game',
			description:
				'A game built to measure click speed, designed for gamers needing quick reflexes.',
			technologies: [
				{ name: 'Next.js', icon: 'logos:nextjs-icon', class: 'skill-tag react' },
				{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', class: 'skill-tag tailwind' }
			],
			highlights: [
				'Created responsive, user-friendly gameplay mechanics.',
				'Optimized performance for various devices and browsers.',
				'Inspired by a personal need, making it a fun, practical solution.'
			],
			link: 'https://bishwas-py/speedclicking.com',
			image: '/projects/speedclicking.jpg'
		},
		{
			name: 'SEOrd - SEO Analyzer',
			timeline: 'Node.js Library',
			description:
				'An advanced content SEO analyzer library for swift analysis of HTML content.',
			technologies: [
				{ name: 'Node.js', icon: 'logos:nodejs-icon', class: 'skill-tag typescript' },
				{ name: 'TypeScript', icon: 'logos:typescript-icon', class: 'skill-tag typescript' },
				{ name: 'JavaScript', icon: 'logos:javascript-icon', class: 'skill-tag javascript' }
			],
			highlights: [
				'Evaluates keyword density, meta descriptions, and link structure.',
				'Fills a critical gap in the Node.js ecosystem for SEO analysis.'
			],
			link: 'https://npmjs.com/package/seord',
			image: '/projects/liveinabroad.jpg'
		},
		{
			name: 'Deviser Club',
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
</script>

<div class="intro max-w-3xl mb-7">
	<p>
		I have worked on many projects, some of them are my own and some of them are for clients, using
		different technologies and frameworks, from small to large scale projects. Check this
		<a class="link-inked inline-flex gap-1 items-center" href="https://github.com/Bishwas-py/bishwas.net"
			 target="_blank"
			 in:fade>
			<span class="tag-text">portfolio</span>
			<iconify-icon icon="simple-icons:svelte" />
		</a> here.
	</p>

	<p class="mt-7">
		Here are some of the projects that I have worked on.
	</p>
</div>

<div class="flex flex-col gap-10 max-w-3xl">
	{#each projects as project}
		<div class="flex flex-col">
			<div class="flex w-full gap-4">
				<a href={project.link} target="_blank" class="block relative w-32 group rounded-md overflow-clip">
					<img src={project.image} alt={project.name}
							 class="w-auto h-full rounded group-hover:opacity-75 transition-opacity duration-300" />
					<div
						class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<p class="text-white text-lg font-bold">Learn more</p>
					</div>
					<iconify-icon icon="ph:arrow-square-in-duotone" class="absolute bottom-1 right-2 group-hover:hidden text-gray-400"></iconify-icon>
				</a>
				<div class="flex flex-col">
					<h2 class="text-xl font-semibold">{project.name}</h2>
					<p class="text-gray-600 text-sm">{project.timeline}</p>
					<ul class="mt-1 flex flex-wrap gap-2">
						{#each project.technologies as tech}
							<li class={tech.class}>
								<iconify-icon icon={tech.icon}></iconify-icon>
								{tech.name}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<p class="mt-2">{project.description}</p>
			<ul class="mt-2 list-disc list-inside">
				{#each project.highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

