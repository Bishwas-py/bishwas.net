<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Meta from '$item/Meta.svelte';
	import PatchCard from './PatchCard.svelte';
	import Ticked from './Ticked.svelte';
	import { PATCHES, REPORTED } from '$utils/contributions';

	const frameworks = new Set(PATCHES.map((patch) => patch.repo)).size;

	const STATS = [
		{ value: String(PATCHES.length), label: 'merged upstream' },
		{ value: String(frameworks), label: 'frameworks patched' },
		{ value: String(REPORTED.length), label: 'bugs reported' }
	];
</script>

<Meta
	title="Contributions — patches merged into pydantic, SvelteKit and Litestar | Bishwas"
	description="Bugs found and fixed in other people's frameworks: five patches merged into pydantic, SvelteKit and Litestar, plus issues traced and filed upstream."
	keywords="open source contributions, upstream patches, pydantic, sveltekit, litestar, python, svelte, pull requests"
/>

<div class="intro max-w-3xl w-full mb-8">
	<h1>Things I fixed in other people's code.</h1>
	<p>
		Bugs I found in other people's code, and what I sent them. Everything links to the pull request
		on
		<a
			class="link-inked inline-flex gap-1 items-center"
			href="https://github.com/Bishwas-py"
			target="_blank"
			rel="noopener"
			in:fade
		>
			<span>GitHub</span>
			<iconify-icon icon="simple-icons:github"></iconify-icon>
		</a>.
	</p>
</div>

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
	<p class="section-sub">Frameworks I did not write. Correctness bugs, not typos.</p>

	<div class="flex flex-col gap-6 mt-7">
		{#each PATCHES as patch}
			<PatchCard {patch} />
		{/each}
	</div>
</section>

<section class="max-w-3xl w-full">
	<h2 class="section-title">
		<iconify-icon icon="ph:bug-beetle-duotone"></iconify-icon>
		Also reported
	</h2>
	<p class="section-sub">Traced and filed in projects I only use.</p>

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
	.intro h1 {
		@apply text-3xl md:text-4xl font-bold leading-tight mb-3;
	}

	.intro p {
		@apply text-gray-700 dark:text-gray-300;
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
