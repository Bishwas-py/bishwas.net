<script lang="ts" module>
	import { tv } from 'tailwind-variants';

	const BARS = 24;
	const BAR_SLOTS: undefined[] = Array.from({ length: BARS });

	const repoIcon = tv({
		base: 'text-base',
		variants: {
			accent: {
				rose: 'text-rose-600 dark:text-rose-400',
				orange: 'text-orange-600 dark:text-orange-400',
				amber: 'text-amber-600 dark:text-amber-400',
				emerald: 'text-emerald-600 dark:text-emerald-400'
			}
		}
	});

	const bar = tv({
		base: 'w-[3px] h-3.5 rounded-[1px]',
		variants: {
			added: {
				true: 'bg-green-500/80 dark:bg-green-400/80',
				false: 'bg-red-500/70 dark:bg-red-400/70'
			}
		}
	});
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

<article class="relative group">
	<div
		class="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-60 bg-linear-to-r from-purple-500/25 to-orange-500/25 transition duration-500"
	></div>

	<div
		class="relative rounded-lg bg-white/60 dark:bg-gray-800/50 shadow-xs p-5 md:p-6 flex flex-col gap-3"
	>
		<header class="flex flex-wrap items-center justify-between gap-2">
			<a
				href={repoUrl(patch.repo)}
				target="_blank"
				rel="noopener"
				class="inline-flex items-center gap-2 text-sm rounded-md px-2 py-1 -ml-2 duration-150 hover:bg-stone-200/70 dark:hover:bg-stone-800/70"
			>
				<iconify-icon class={repoIcon({ accent: patch.accent })} icon={patch.icon}></iconify-icon>
				<span class="font-semibold">{patch.repo}</span>
				<span class="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
					<iconify-icon
						class="text-[0.85em] text-amber-500/80 dark:text-amber-400/70"
						icon="ph:star-fill"
					></iconify-icon>
					{patch.stars}
				</span>
			</a>
			<span class="pill-accent text-xs font-medium px-2.5 py-1">{patch.mergedIn}</span>
		</header>

		<h3 class="text-lg md:text-xl font-semibold leading-snug"><Ticked text={patch.title} /></h3>

		<div
			class="rounded-md border-l-2 border-red-400/70 dark:border-red-500/60 bg-stone-100/80 dark:bg-stone-900/60 px-3 py-2.5 flex flex-col gap-1.5"
		>
			<pre class="font-mono text-sm overflow-x-auto text-stone-800 dark:text-stone-200">{patch
					.symptom.code}</pre>
			<p class="flex gap-1.5 items-start text-sm text-red-800 dark:text-red-300 font-mono">
				<iconify-icon class="shrink-0 mt-0.5" icon="ph:arrow-elbow-down-right-bold"></iconify-icon>
				<span>{patch.symptom.result}</span>
			</p>
		</div>

		<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{patch.context}</p>

		<p class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
			<img
				class="w-5 h-5 rounded-full shrink-0 outline outline-1 outline-stone-300 dark:outline-stone-700"
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
					class="font-medium text-gray-800 hover:text-purple-800 dark:text-gray-200 dark:hover:text-purple-200 duration-75"
					>{patch.approval.login}</a
				>
				{#if patch.approval.review}
					<a href={patch.approval.review} target="_blank" rel="noopener" class="said">
						approved it{#if patch.approval.note}<span
								class="italic text-gray-500 dark:text-gray-400 ml-1"
								>&ldquo;{patch.approval.note}&rdquo;</span
							>{/if}
					</a>
				{:else}
					merged it
				{/if}
			</span>

			{#if patch.approval.alsoOn}
				<span class="flex items-center -space-x-1.5 shrink-0">
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

		<footer class="flex items-center gap-3 flex-wrap pt-1">
			<div class="flex gap-[2px] items-center" aria-hidden="true">
				{#each BAR_SLOTS as _, i (i)}
					<span class={bar({ added: i < addedBars })}></span>
				{/each}
			</div>
			<span class="font-mono text-xs flex gap-2">
				<span class="text-green-700 dark:text-green-400">+{patch.diff.added}</span>
				<span class="text-red-700 dark:text-red-400">−{patch.diff.removed}</span>
				<span class="text-gray-500 dark:text-gray-400">{patch.diff.files} files</span>
			</span>
			<a
				href={prUrl(patch)}
				target="_blank"
				rel="noopener"
				class="ml-auto inline-flex items-center gap-1 font-mono text-sm text-purple-800 hover:text-purple-600 dark:text-purple-200 dark:hover:text-purple-400 duration-75"
			>
				#{patch.prNumber}
				<iconify-icon icon="ph:arrow-square-out-duotone"></iconify-icon>
			</a>
		</footer>

		<details class="group/detail">
			<summary
				class="cursor-pointer select-none list-none w-fit inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-800 dark:text-gray-400 dark:hover:text-purple-200 duration-75 [&::-webkit-details-marker]:hidden"
			>
				<iconify-icon
					class="text-[0.7em] duration-200 group-open/detail:rotate-90"
					icon="ph:caret-right-bold"
				></iconify-icon>
				<span>what I changed</span>
			</summary>
			<p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
				<Ticked text={patch.fix} />
			</p>
		</details>
	</div>
</article>
