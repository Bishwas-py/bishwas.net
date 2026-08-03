<script lang="ts" module>
	const BARS = 24;
	const BAR_SLOTS: undefined[] = Array.from({ length: BARS });
</script>

<script lang="ts">
	import { prUrl, repoUrl, type Patch } from '$utils/contributions';
	import { avatarOf } from '$utils/people';
	import Face from '$item/Face.svelte';
	import Ticked from './Ticked.svelte';

	let { patch }: { patch: Patch } = $props();

	let addedBars = $derived(
		Math.max(1, Math.round((patch.diff.added / (patch.diff.added + patch.diff.removed)) * BARS))
	);
</script>

<article class="patch group">
	<div class="glow"></div>

	<div class="body">
		<header>
			<a
				href={repoUrl(patch.repo)}
				target="_blank"
				rel="noopener"
				class="repo accent-{patch.accent}"
			>
				<iconify-icon icon={patch.icon}></iconify-icon>
				<span class="font-semibold">{patch.repo}</span>
				<span class="stars">
					<iconify-icon icon="ph:star-fill"></iconify-icon>
					{patch.stars}
				</span>
			</a>
			<span class="merged pill-accent">{patch.mergedIn}</span>
		</header>

		<h3><Ticked text={patch.title} /></h3>

		<div class="symptom">
			<pre>{patch.symptom.code}</pre>
			<p class="result">
				<iconify-icon icon="ph:arrow-elbow-down-right-bold"></iconify-icon>
				<span>{patch.symptom.result}</span>
			</p>
		</div>

		<p class="context">{patch.context}</p>

		<p class="approval">
			<img
				src={avatarOf(patch.approval.login)}
				alt=""
				width="20"
				height="20"
				loading="lazy"
				decoding="async"
			/>
			<span>
				<a
					href="https://github.com/{patch.approval.login}"
					target="_blank"
					rel="noopener"
					class="who">{patch.approval.login}</a
				>
				{#if patch.approval.review}
					<a href={patch.approval.review} target="_blank" rel="noopener" class="said">
						approved it{#if patch.approval.note}<span class="note"
								>&ldquo;{patch.approval.note}&rdquo;</span
							>{/if}
					</a>
				{:else}
					merged it
				{/if}
			</span>

			{#if patch.approval.alsoOn}
				<span class="also">
					{#each patch.approval.alsoOn as login (login)}
						<Face
							{login}
							href="https://github.com/{login}"
							tip="was on the thread"
							size={18}
							ring="ring-white/90 dark:ring-gray-800"
						/>
					{/each}
				</span>
			{/if}
		</p>

		<footer>
			<div class="diffbar" aria-hidden="true">
				{#each BAR_SLOTS as _, i (i)}
					<span class={i < addedBars ? 'add' : 'del'}></span>
				{/each}
			</div>
			<span class="counts">
				<span class="add-text">+{patch.diff.added}</span>
				<span class="del-text">−{patch.diff.removed}</span>
				<span class="files">{patch.diff.files} files</span>
			</span>
			<a href={prUrl(patch)} target="_blank" rel="noopener" class="prlink">
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
	@reference '../../styles/app.css';

	.patch {
		@apply relative;
	}

	.glow {
		@apply absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-60
        bg-linear-to-r from-purple-500/25 to-orange-500/25
        transition duration-500;
	}

	.body {
		@apply relative rounded-lg bg-white/60 dark:bg-gray-800/50 shadow-xs p-5 md:p-6
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

	.accent-emerald iconify-icon {
		@apply text-emerald-600 dark:text-emerald-400;
	}

	.stars {
		@apply inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs;
	}

	.stars iconify-icon {
		@apply text-[0.85em] text-amber-500/80 dark:text-amber-400/70;
	}

	.merged {
		@apply text-xs font-medium px-2.5 py-1;
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
		@apply shrink-0 mt-0.5;
	}

	.context {
		@apply text-sm leading-relaxed text-gray-600 dark:text-gray-400;
	}

	.approval {
		@apply flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400;
	}

	.approval img {
		@apply w-5 h-5 rounded-full shrink-0
        outline outline-1 outline-stone-300 dark:outline-stone-700;
	}

	.approval .who {
		@apply font-medium text-gray-800 hover:text-purple-800
        dark:text-gray-200 dark:hover:text-purple-200 duration-75;
	}

	.also {
		@apply flex items-center -space-x-1.5 shrink-0;
	}

	.approval .note {
		@apply italic text-gray-500 dark:text-gray-400 ml-1;
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
