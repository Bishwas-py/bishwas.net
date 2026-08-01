<script lang="ts">
	import { fly } from 'svelte/transition';
	import Meta from '$item/Meta.svelte';
	import PatchCard from './PatchCard.svelte';
	import Ticked from './Ticked.svelte';
	import { MAINTAINED, PATCHES, REPORTED } from './data';

	const STATS = [
		{ value: '4', label: 'merged upstream' },
		{ value: '605', label: 'stars on what I maintain' },
		{ value: '549', label: 'public commits' }
	];

</script>

<Meta
	title="Open Source — patches merged into pydantic, SvelteKit and Litestar | Bishwas"
	description="Merged upstream fixes in pydantic, SvelteKit and Litestar, plus the Python and Svelte frameworks I maintain: djapy, fymo, tipex and seord."
	keywords="open source, pydantic, sveltekit, litestar, djapy, tipex, fymo, python, svelte, contributions"
/>

<h1 class="sr-only">Open source</h1>

<div class="stats max-w-3xl w-full mb-12">
	{#each STATS as stat, i}
		<div class="stat" in:fly={{ y: 12, delay: i * 70, duration: 400 }}>
			<span class="value">{stat.value}</span>
			<span class="label">{stat.label}</span>
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
					<span class="metric"><iconify-icon icon="ph:star-fill"></iconify-icon>{project.stars}</span>
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
					<span class="stars"><iconify-icon icon="ph:star-fill"></iconify-icon>{issue.stars}</span>
					<span class="title"><Ticked text={issue.title} /></span>
					<iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">

    .stats {
        @apply flex flex-wrap items-baseline gap-x-3 gap-y-2;
    }

    .stat {
        @apply flex items-baseline gap-1.5 pr-3
        border-r border-gray-300/70 dark:border-gray-700/70
        last:border-r-0 last:pr-0;
    }

    .stat .value {
        @apply text-xl font-bold text-purple-800 dark:text-purple-200;
    }

    .stat .label {
        @apply text-sm text-gray-600 dark:text-gray-400;
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
        @apply flex flex-wrap items-center gap-2 text-xs
        text-gray-500 dark:text-gray-400;
    }

    .project-meta .metric {
        @apply inline-flex items-center gap-1;
    }

    .project-meta .metric iconify-icon {
        @apply text-[0.9em] text-amber-500/80 dark:text-amber-400/70;
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
        @apply inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400;
    }

    .reported .stars iconify-icon {
        @apply text-[0.9em] text-amber-500/80 dark:text-amber-400/70;
    }

    .reported .title {
        @apply text-gray-700 dark:text-gray-300;
    }

    .reported li a > iconify-icon {
        @apply ml-auto text-gray-400 dark:text-gray-500;
    }
</style>
