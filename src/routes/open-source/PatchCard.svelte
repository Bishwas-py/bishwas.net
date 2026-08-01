<script lang="ts">
	import type { Patch } from './data';
	import Ticked from './Ticked.svelte';

	let { patch }: { patch: Patch } = $props();

	const BARS = 24;
	let addedBars = $derived(
		Math.max(1, Math.round((patch.diff.added / (patch.diff.added + patch.diff.removed)) * BARS))
	);
</script>

<article class="patch group">
	<div class="glow"></div>

	<div class="body">
		<header>
			<a href={patch.repoUrl} target="_blank" rel="noopener" class="repo accent-{patch.accent}">
				<iconify-icon icon={patch.icon}></iconify-icon>
				<span class="font-semibold">{patch.repo}</span>
				<span class="stars">{patch.stars}★</span>
			</a>
			<span class="merged">{patch.mergedIn}</span>
		</header>

		<h3><Ticked text={patch.title} /></h3>

		<div class="symptom">
			<pre>{patch.symptom.code}</pre>
			<p class="result">
				<iconify-icon icon="ph:arrow-elbow-down-right-bold"></iconify-icon>
				<span>{patch.symptom.result}</span>
			</p>
		</div>

		<ul class="chips">
			{#each patch.chips as chip}
				<li>{chip}</li>
			{/each}
		</ul>

		<footer>
			<div class="diffbar" aria-hidden="true">
				{#each Array(BARS) as _, i}
					<span class={i < addedBars ? 'add' : 'del'}></span>
				{/each}
			</div>
			<span class="counts">
				<span class="add-text">+{patch.diff.added}</span>
				<span class="del-text">−{patch.diff.removed}</span>
				<span class="files">{patch.diff.files} files</span>
			</span>
			<a href={patch.url} target="_blank" rel="noopener" class="prlink">
				#{patch.prNumber}
				<iconify-icon icon="ph:arrow-square-out-duotone"></iconify-icon>
			</a>
		</footer>

		<details class="detail">
			<summary>
				<iconify-icon icon="ph:caret-right-bold"></iconify-icon>
				<span>what I changed</span>
			</summary>
			<p><Ticked text={patch.fix} /></p>
		</details>
	</div>
</article>

<style lang="postcss">
    .patch {
        @apply relative;
    }

    .glow {
        @apply absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-60
        bg-gradient-to-r from-purple-500/25 to-orange-500/25
        transition duration-500;
    }

    .body {
        @apply relative rounded-lg bg-white/60 dark:bg-gray-800/50 shadow-sm p-5 md:p-6
        flex flex-col gap-3;
    }

    header {
        @apply flex flex-wrap items-center justify-between gap-2;
    }

    .repo {
        @apply inline-flex items-center gap-2 text-sm rounded-md px-2 py-1 -ml-2
        duration-150 hover:bg-stone-200/70 dark:hover:bg-stone-800/70;
    }

    .repo iconify-icon {
        @apply text-base;
    }

    .accent-rose iconify-icon {
        @apply text-rose-600 dark:text-rose-400;
    }

    .accent-orange iconify-icon {
        @apply text-orange-600 dark:text-orange-400;
    }

    .accent-amber iconify-icon {
        @apply text-amber-600 dark:text-amber-400;
    }

    .stars {
        @apply text-gray-500 dark:text-gray-400 text-xs font-mono;
    }

    .merged {
        @apply text-xs font-medium rounded-full px-2.5 py-1
        bg-purple-100/80 text-purple-900
        dark:bg-purple-950/70 dark:text-purple-200;
    }

    h3 {
        @apply text-lg md:text-xl font-semibold leading-snug;
    }

    .symptom {
        @apply rounded-md border-l-2 border-red-400/70 dark:border-red-500/60
        bg-stone-100/80 dark:bg-stone-900/60 px-3 py-2.5 flex flex-col gap-1.5;
    }

    .symptom pre {
        @apply font-mono text-sm overflow-x-auto text-stone-800 dark:text-stone-200;
    }

    .result {
        @apply flex gap-1.5 items-start text-sm text-red-800 dark:text-red-300 font-mono;
    }

    .result iconify-icon {
        @apply flex-shrink-0 mt-0.5;
    }

    .chips {
        @apply flex flex-wrap gap-1.5;
    }

    .chips li {
        @apply text-xs rounded px-2 py-0.5 font-mono
        bg-stone-200/70 text-stone-700
        dark:bg-stone-800/70 dark:text-stone-300;
    }

    .detail summary {
        @apply cursor-pointer select-none list-none w-fit
        inline-flex items-center gap-1.5 text-sm
        text-gray-500 hover:text-purple-800
        dark:text-gray-400 dark:hover:text-purple-200 duration-75;
    }

    .detail summary::-webkit-details-marker {
        @apply hidden;
    }

    .detail summary iconify-icon {
        @apply text-[0.7em] duration-200;
    }

    .detail[open] summary iconify-icon {
        @apply rotate-90;
    }

    .detail p {
        @apply mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300;
    }

    footer {
        @apply flex items-center gap-3 flex-wrap pt-1;
    }

    .diffbar {
        @apply flex gap-[2px] items-center;
    }

    .diffbar span {
        @apply w-[3px] h-3.5 rounded-[1px];
    }

    .diffbar span.add {
        @apply bg-green-500/80 dark:bg-green-400/80;
    }

    .diffbar span.del {
        @apply bg-red-500/70 dark:bg-red-400/70;
    }

    .counts {
        @apply font-mono text-xs flex gap-2;
    }

    .add-text {
        @apply text-green-700 dark:text-green-400;
    }

    .del-text {
        @apply text-red-700 dark:text-red-400;
    }

    .files {
        @apply text-gray-500 dark:text-gray-400;
    }

    .prlink {
        @apply ml-auto inline-flex items-center gap-1 font-mono text-sm
        text-purple-800 hover:text-purple-600
        dark:text-purple-200 dark:hover:text-purple-400 duration-75;
    }
</style>
