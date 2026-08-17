<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Meta from '$item/Meta.svelte';
	import PatchCard from './PatchCard.svelte';
	import Ticked from '$item/Ticked.svelte';
	import { PATCHES, REPORTED } from '$utils/contributions';

	const frameworks = new Set(PATCHES.map((patch) => patch.repo)).size;

	const STATS = [
		{ value: String(PATCHES.length), label: 'merged upstream' },
		{ value: String(frameworks), label: 'frameworks patched' },
		{ value: String(REPORTED.length), label: 'bugs reported' }
	];
</script>

<Meta
	title="Contributions — patches merged into Biome, pydantic, SvelteKit and Litestar | Bishwas"
	description="Bugs found and fixed in other people's frameworks: eight patches merged into Biome, pydantic, SvelteKit, Litestar and dj-stripe, plus issues traced and filed upstream."
	keywords="open source contributions, upstream patches, pydantic, sveltekit, litestar, python, svelte, pull requests"
/>

<div class="max-w-3xl w-full mb-8">
	<h1 class="text-3xl md:text-4xl font-bold leading-tight mb-3">
		Things I fixed in other people's code.
	</h1>
	<p class="text-gray-700 dark:text-gray-300">
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

<div class="flex flex-wrap items-baseline gap-x-3 gap-y-2 max-w-3xl w-full mb-12">
	{#each STATS as stat, i (i)}
		<div
			class="flex items-baseline gap-1.5 pr-3 border-r border-gray-300/70 dark:border-gray-700/70 last:border-r-0 last:pr-0"
			in:fly={{ y: 12, delay: i * 70, duration: 400 }}
		>
			<span class="text-xl font-bold text-purple-800 dark:text-purple-200">{stat.value}</span>
			<span class="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
		</div>
	{/each}
</div>

<section class="max-w-3xl w-full mb-16">
	<h2 class="text-2xl font-bold flex items-center gap-2">
		<iconify-icon class="text-purple-700 dark:text-purple-300" icon="ph:git-merge-duotone"
		></iconify-icon>
		Merged upstream
	</h2>
	<p class="text-gray-600 dark:text-gray-400 mt-1">
		Frameworks I did not write. Correctness bugs, not typos.
	</p>

	<div class="flex flex-col gap-6 mt-7">
		{#each PATCHES as patch (patch.prNumber)}
			<PatchCard {patch} />
		{/each}
	</div>
</section>

<section class="max-w-3xl w-full">
	<h2 class="text-2xl font-bold flex items-center gap-2">
		<iconify-icon class="text-purple-700 dark:text-purple-300" icon="ph:bug-beetle-duotone"
		></iconify-icon>
		Also reported
	</h2>
	<p class="text-gray-600 dark:text-gray-400 mt-1">Traced and filed in projects I only use.</p>

	<ul class="flex flex-col mt-6">
		{#each REPORTED as issue (issue.repo)}
			<li>
				<a
					class="flex items-center gap-2 flex-wrap py-2.5 px-3 -mx-3 rounded-md text-sm duration-150 hover:bg-white/60 dark:hover:bg-gray-800/50"
					href={issue.url}
					target="_blank"
					rel="noopener"
				>
					<span class="font-mono font-medium">{issue.repo}</span>
					<span class="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
						><iconify-icon
							class="text-[0.9em] text-amber-500/80 dark:text-amber-400/70"
							icon="ph:star-fill"
						></iconify-icon>{issue.stars}</span
					>
					<span class="text-gray-700 dark:text-gray-300"><Ticked text={issue.title} /></span>
					<iconify-icon
						class="ml-auto text-gray-400 dark:text-gray-500"
						icon="ph:arrow-up-right-bold"
					></iconify-icon>
				</a>
			</li>
		{/each}
	</ul>
</section>
