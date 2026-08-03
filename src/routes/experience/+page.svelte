<script lang="ts">
	import { fade } from 'svelte/transition';
	import MdiBrainIcon from 'virtual:icons/mdi/brain';
	import PhCodeFillIcon from 'virtual:icons/ph/code-fill';
	import TeenyPythonIcon from 'virtual:icons/teenyicons/python-solid';
	import JamFiverrIcon from 'virtual:icons/jam/fiverr';
	import MdiForumIcon from 'virtual:icons/mdi/forum';
	import F7ChartBarCircleFill from 'virtual:icons/f7/chart-bar-circle-fill';
	import MdiSailBoatIcon from 'virtual:icons/mdi/sail-boat';
	import Meta from '$item/Meta.svelte';
	import Experience from './Experience.svelte';
	import { FREELANCING_SINCE, FULL_TIME_SINCE, yearsSince } from '$utils/years';

	const iconBox =
		'mt-0.5 w-10 h-10 px-2 rounded-full flex items-center justify-center flex-shrink-0';
</script>

<Meta
	title="Experience | Bishwas"
	description="Showcasing my professional experience as a full-stack web developer."
	keywords="full-stack developer, web development, SvelteKit, Python, Django, portfolio"
/>

<div class="max-w-3xl" in:fade>
	<h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-0">Experience</h1>
	<p class="mt-4 text-gray-700 dark:text-gray-300">
		I have been working as a full-stack software developer since 2020, and a freelancer since 2018.
		I work primarily with Python/Django for backend and SvelteKit/React for frontend development. My
		experience includes building web applications, microservices, and developer tools, with a focus
		on creating practical solutions for real-world problems. I actively contribute to open-source
		<a href="/projects" class="link-inked">projects</a> and enjoy building tools that help other developers.
	</p>

	<div class="flex flex-wrap items-baseline gap-x-3 gap-y-2 mt-5">
		{#each [{ value: yearsSince(FULL_TIME_SINCE), label: 'years full-time' }, { value: yearsSince(FREELANCING_SINCE), label: 'years including freelance' }] as stat (stat.label)}
			<div
				class="flex items-baseline gap-1.5 pr-3 border-r border-gray-300/70 dark:border-gray-700/70 last:border-r-0 last:pr-0"
			>
				<span class="text-xl font-bold text-purple-800 dark:text-purple-200">{stat.value}</span>
				<span class="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
			</div>
		{/each}
	</div>
</div>

<div class="max-w-3xl mt-8 flex flex-col gap-6">
	<Experience
		name="Mako Labs"
		tenure="Mar 2025 - Present (Full Stack Engineer)"
		link={{ href: 'https://makolabs.ai/', label: 'Visit company' }}
	>
		{#snippet icon()}
			<MdiSailBoatIcon class="bg-blue-500 text-blue-100 {iconBox}" />
		{/snippet}
		{#snippet description()}
			Mako Labs is a Singaporean international company helping companies in Japan, Germany, and UK
			build software. I develop and deliver software solutions for clients through Mako Labs,
			focusing on successful project delivery and client satisfaction.
		{/snippet}
		{#snippet points()}
			<li>
				Architect and develop full-stack applications across diverse technology stacks from Python
				to Rust
			</li>
			<li>Work independently using my own tools and methodologies</li>
			<li>Collaborate with teams to meet project specifications and deadlines</li>
			<li>Ensure professional-quality deliverables that meet industry standards</li>
			<li>Provide regular progress updates and technical documentation</li>
		{/snippet}
	</Experience>

	<Experience
		name="Only Sales"
		tenure="July 2023 - Jan 2025 (Frontend Project Lead / SvelteKit)"
		link={{ href: 'https://onlysales.io/', label: 'Visit project' }}
	>
		{#snippet icon()}
			<F7ChartBarCircleFill class="bg-purple-500 text-purple-100 {iconBox}" />
		{/snippet}
		{#snippet description()}
			OnlySales is a CRM system for health advisors, US-based. I worked here as a Frontend Project
			Lead, and responsible for developing the frontend of the web app.
		{/snippet}
		{#snippet points()}
			<li>
				Lead the frontend team, with SvelteKit, Tailwind CSS and Node.JS implementation and
				development
			</li>
			<li>Developed and maintained components, pages, and features</li>
			<li>Managed SvelteKit's store, routing, and server-side rendering</li>
			<li>Integrated the backend with the frontend and middle-end</li>
			<li>Went to Philippines, for a business-tourism trip, guided with Svelte5 and integration</li>
		{/snippet}
	</Experience>

	<Experience
		name="Blogstorm.AI"
		tenure="April 2023 - Oct 2024 (Full Stack Engineer)"
		link={{ href: 'https://app.blogstorm.ai/', label: 'Visit project' }}
	>
		{#snippet icon()}
			<MdiBrainIcon class="bg-green-500 text-green-100 {iconBox}" />
		{/snippet}
		{#snippet description()}
			Blogstorm.AI is an AI-based articles and blog writing system with SEO analysis and integration
			on it associated with a US-based company called Rankiit LLC. I was Full Stack Engineering with
			backend, frontend and prompt engineering services. Basically, I single-handedly developed the
			whole system from scratch.
		{/snippet}
		{#snippet points()}
			<li>Develop microservices, tasks modules and APIs; Django/FastAPI</li>
			<li>
				Developing and designing frontend with SvelteKit and Tailwind CSS —
				<a href="/svelte-developer" class="link-inked">read about my Svelte journey</a>
			</li>
			<li>Integrate the backend with the frontend</li>
			<li>CI/CD web services; Github Actions, AWS Lambda and EC2</li>
			<li>Test the feature integrations</li>
			<li>WordPress plugins development and API integration</li>
			<li>Develop bots and crawlers to perform specific tasks</li>
		{/snippet}
	</Experience>

	<Experience
		name="REtech software"
		badge="Part-time"
		tenure="January 2024 - April 2024 (Svelte/Kit Freelance Developer)"
		link={{ href: 'https://retech-software.de/', label: 'Visit company page' }}
		delay={90}
	>
		{#snippet icon()}
			<PhCodeFillIcon class="bg-indigo-500 text-purple-100 {iconBox}" />
		{/snippet}
		{#snippet description()}
			REtech software is a German-based company that develops software solutions for companies. I
			was working here as a Svelte/Kit developer, and was responsible for developing the frontend of
			the web app.
		{/snippet}
		{#snippet points()}
			<li>Develop frontend with Svelte/Kit and Tailwind CSS</li>
			<li>Integrate the backend with the frontend</li>
			<li>Test the feature integrations</li>
			<li>Co-operate with the backend developers</li>
		{/snippet}
	</Experience>

	<Experience
		name="Cynical Technology"
		tenure="Dec 2022 - 20 April 2023 (Mid. Python Developer)"
		delay={100}
	>
		{#snippet icon()}
			<TeenyPythonIcon class="bg-yellow-500 text-yellow-100 {iconBox}" />
		{/snippet}
		{#snippet description()}
			Cynical Tech is a cyber security company, and I primarily did backend and API development here
			as Python Developer. As frontend is also something I enjoy a lot to do, so I worked here as a
			full-stack developer.
		{/snippet}
		{#snippet points()}
			<li>Develop API, automated bots, task scheduling, and backend</li>
			<li>Develop frontend based on provided design</li>
			<li>Developing and designing frontend with NextJs/ReactJS and Tailwind CSS</li>
			<li>Deployment on relative AWS instance</li>
		{/snippet}
	</Experience>

	<Experience
		name="Fiverr"
		tenure="2018 - 2020 (Full Stack Developer/Freelancer)"
		link={{ href: 'https://fiverr.com/bishwasbh', label: 'Visit profile' }}
		delay={200}
	>
		{#snippet icon()}
			<JamFiverrIcon class="bg-emerald-500 text-emerald-100 {iconBox}" />
		{/snippet}
		{#snippet description()}
			I worked as a freelancer on Fiverr since 2018, on a variety of projects, ranging from bot
			development, desktop application development, and web development.
		{/snippet}
		{#snippet points()}
			<li>Design and develop bots for Discord, Telegram, and Twitter</li>
			<li>Build desktop applications using ElectronJS and Python as a backend</li>
			<li>Develop web apps using Django, ReactJS, and NextJS</li>
			<li>Develop APIs using Django, Flask or FastAPI</li>
			<li>Develop and design frontend with NextJs/ReactJS and Tailwind CSS</li>
			<li>Integrate the backend with the frontend</li>
			<li>Deploy the web app to web servers</li>
			<li>Fix bugs and issues in the existing codebase of clients</li>
		{/snippet}
	</Experience>

	<Experience
		name="Webmatrices"
		tenure="2020 - PRESENT (Admin)"
		link={{ href: 'https://webmatrices.com/', label: 'Visit project' }}
		delay={300}
	>
		{#snippet icon()}
			<MdiForumIcon class="bg-cyan-500 text-cyan-100 {iconBox}" />
		{/snippet}
		{#snippet description()}
			I have been working as a software developer and project admin at Webmatrices since 2020, an
			online community where people could get their SEO, programming, blogging and Google
			Adsense-related issues solved.
		{/snippet}
		{#snippet points()}
			<li>Maintain, sustain, fix (if any) and update forum tech sides</li>
			<li>Response to community members and help them with their issues</li>
			<li>Filter out unwanted or spammy content using the system features</li>
			<li>Add new features, apps and APIs</li>
		{/snippet}
	</Experience>
</div>

<div class="max-w-3xl mt-8">
	<p>
		I have also worked on a variety of projects, ranging from bot development, desktop application
		development, and web development. You can check out my projects
		<a class="link-inked" href="/projects">here</a>.
	</p>
</div>
