<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Meta from '$item/Meta.svelte';
	import PatchCard from './PatchCard.svelte';
	import Ticked from './Ticked.svelte';
	import { MAINTAINED, PATCHES, REPORTED } from './data';

	const STATS = [
		{ value: '57k+', label: 'stars on repos I patched' },
		{ value: '4', label: 'merged upstream' },
		{ value: '549', label: 'public commits' },
		{ value: '605', label: 'stars on what I maintain' }
	];

	const PROOF = [
		{ icon: 'ph:timer-duotone', head: 'Merged in 1h 40m', sub: 'pydantic took my patch same day' },
		{ icon: 'ph:hourglass-duotone', head: 'Closed a 2 yr 9 mo bug', sub: 'SvelteKit issue nobody had fixed' },
		{ icon: 'ph:warning-octagon-duotone', head: 'Shipped a breaking change', sub: 'Litestar default, argued and accepted' }
	];
</script>

<Meta
	title="Open Source — patches merged into pydantic, SvelteKit and Litestar | Bishwas"
	description="Merged upstream fixes in pydantic, SvelteKit and Litestar, plus the Python and Svelte frameworks I maintain: djapy, fymo, tipex and seord."
	keywords="open source, pydantic, sveltekit, litestar, djapy, tipex, fymo, python, svelte, contributions"
/>

<div class="intro max-w-3xl w-full mb-8">
	<h1>I fix the frameworks other people build on.</h1>
	<p>
		Every claim below links to the real pull request on
		<a
			class="link-inked inline-flex gap-1 items-center"
			href="https://github.com/Bishwas-py"
			target="_blank"
			rel="noopener"
			in:fade>
			<span>GitHub</span>
			<iconify-icon icon="simple-icons:github"></iconify-icon>
		</a>.
	</p>
</div>

<div class="stats max-w-3xl w-full mb-6">
	{#each STATS as stat, i}
		<div class="stat" in:fly={{ y: 12, delay: i * 70, duration: 400 }}>
			<span class="value">{stat.value}</span>
			<span class="label">{stat.label}</span>
		</div>
	{/each}
</div>

<div class="proof max-w-3xl w-full mb-14">
	{#each PROOF as item, i}
		<div class="proof-item" in:fly={{ y: 12, delay: 250 + i * 70, duration: 400 }}>
			<iconify-icon icon={item.icon}></iconify-icon>
			<div>
				<p class="proof-head">{item.head}</p>
				<p class="proof-sub">{item.sub}</p>
			</div>
		</div>
	{/each}
</div>

<section class="max-w-3xl w-full mb-16">
	<h2 class="section-title">
		<iconify-icon icon="ph:git-merge-duotone"></iconify-icon>
		Merged upstream
	</h2>
	<p class="section-sub">
		Frameworks I did not write. Correctness bugs, not typos.
	</p>

	<div class="flex flex-col gap-6 mt-7">
		{#each PATCHES as patch}
			<PatchCard {patch} />
		{/each}
	</div>
</section>

<section class="max-w-3xl w-full mb-16">
	<h2 class="section-title">
		<iconify-icon icon="ph:package-duotone"></iconify-icon>
		Maintained by me
	</h2>
	<p class="section-sub">
		APIs I designed and still ship.
	</p>

	<div class="grid sm:grid-cols-2 gap-4 mt-7">
		{#each MAINTAINED as project}
			<a href={project.url} target="_blank" rel="noopener" class="project group">
				<div class="project-head">
					<iconify-icon icon={project.icon}></iconify-icon>
					<h3>{project.name}</h3>
				</div>
				<p class="project-tagline">{project.tagline}</p>
				<div class="project-meta">
					<span class="role">{project.role}</span>
					<span class="metric">{project.stars}★</span>
					{#if project.commits}
						<span class="metric">{project.commits} commits</span>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="max-w-3xl w-full">
	<h2 class="section-title">
		<iconify-icon icon="ph:bug-beetle-duotone"></iconify-icon>
		Also reported
	</h2>
	<p class="section-sub">
		Traced and filed in projects I only use.
	</p>

	<ul class="reported mt-6">
		{#each REPORTED as issue}
			<li>
				<a href={issue.url} target="_blank" rel="noopener">
					<span class="repo">{issue.repo}</span>
					<span class="stars">{issue.stars}★</span>
					<span class="title"><Ticked text={issue.title} /></span>
					<iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
    .intro h1 {
        @apply text-3xl md:text-4xl font-bold leading-tight mb-3;
    }

    .intro p {
        @apply text-gray-700 dark:text-gray-300;
    }

    .stats {
        @apply grid grid-cols-2 md:grid-cols-4 gap-4 w-full;
    }

    .proof {
        @apply grid sm:grid-cols-3 gap-4 w-full;
    }

    .proof-item {
        @apply flex items-start gap-2.5;
    }

    .proof-item iconify-icon {
        @apply text-xl mt-0.5 flex-shrink-0 text-purple-700 dark:text-purple-300;
    }

    .proof-head {
        @apply font-semibold text-sm leading-snug;
    }

    .proof-sub {
        @apply text-xs text-gray-600 dark:text-gray-400 leading-snug mt-0.5;
    }

    .stat {
        @apply flex flex-col gap-1 rounded-lg px-4 py-3
        bg-white/50 dark:bg-gray-800/40 shadow-sm;
    }

    .stat .value {
        @apply text-2xl font-bold text-purple-800 dark:text-purple-200;
    }

    .stat .label {
        @apply text-xs leading-snug text-gray-600 dark:text-gray-400;
    }

    .section-title {
        @apply text-2xl font-bold flex items-center gap-2;
    }

    .section-title iconify-icon {
        @apply text-purple-700 dark:text-purple-300;
    }

    .section-sub {
        @apply text-gray-600 dark:text-gray-400 mt-1;
    }

    .project {
        @apply flex flex-col gap-2 rounded-lg p-5 shadow-sm
        bg-white/50 dark:bg-gray-800/40
        duration-200 hover:bg-white/80 dark:hover:bg-gray-800/70
        hover:-translate-y-0.5;
    }

    .project-head {
        @apply flex items-center gap-2;
    }

    .project-head iconify-icon {
        @apply text-lg text-gray-600 dark:text-gray-300;
    }

    .project-head h3 {
        @apply font-semibold font-mono text-sm
        group-hover:text-purple-800 dark:group-hover:text-purple-200 duration-150;
    }

    .project-tagline {
        @apply text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-grow;
    }

    .project-meta {
        @apply flex flex-wrap items-center gap-2 text-xs font-mono
        text-gray-500 dark:text-gray-400;
    }

    .project-meta .role {
        @apply rounded-full px-2 py-0.5 not-italic
        bg-purple-100/80 text-purple-900
        dark:bg-purple-950/70 dark:text-purple-200;
    }

    .reported {
        @apply flex flex-col;
    }

    .reported li a {
        @apply flex items-center gap-2 flex-wrap py-2.5 px-3 -mx-3 rounded-md text-sm
        duration-150 hover:bg-white/60 dark:hover:bg-gray-800/50;
    }

    .reported .repo {
        @apply font-mono font-medium;
    }

    .reported .stars {
        @apply font-mono text-xs text-gray-500 dark:text-gray-400;
    }

    .reported .title {
        @apply text-gray-700 dark:text-gray-300;
    }

    .reported iconify-icon {
        @apply ml-auto text-gray-400 dark:text-gray-500;
    }
</style>
