<script lang="ts">
	import { tv } from 'tailwind-variants';
	import Meta from '$item/Meta.svelte';
	import Ticked from '$item/Ticked.svelte';
	import { FULL_TIME_SINCE, yearsSince } from '$utils/years';
	import { fmtDate } from '../data';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);

	const stackTone = tv({
		base: '',
		variants: {
			stack: {
				SvelteKit: 'text-orange-700/90 dark:text-orange-400/90',
				Rust: 'text-amber-700/90 dark:text-amber-400/90',
				Biome: 'text-blue-700/90 dark:text-blue-400/90',
				Cloudflare: 'text-emerald-700/90 dark:text-emerald-400/90'
			}
		}
	});
</script>

<Meta
	title="{post.title} | Bishwas"
	description={post.description}
	keywords="{post.symptom}, {post.tags.join(', ')}"
/>

<article class="max-w-3xl w-full">
	<a
		class="inline-block text-[13px] text-gray-500 dark:text-gray-400 hover:text-purple-800 dark:hover:text-purple-200 duration-150 mb-12"
		href="/blog"
	>
		← Notes
	</a>

	<header>
		{#if post.receipt?.kind === 'upstream'}
			<p class="mb-4 flex flex-wrap items-baseline gap-x-2 text-[13px]">
				<a
					class="font-mono {stackTone({
						stack: post.stack
					})} underline decoration-current/30 hover:decoration-current underline-offset-4 duration-150"
					href={post.receipt.url}
					target="_blank"
					rel="noopener">{post.receipt.label}</a
				>
				<span class="text-gray-500 dark:text-gray-400">merged</span>
			</p>
		{:else}
			<p class="mb-4 text-[13px] {stackTone({ stack: post.stack })}">{post.stack}</p>
		{/if}

		<h1
			class="text-[34px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.025em] text-balance max-w-[20ch]"
		>
			{post.title}
		</h1>

		<p class="font-mono text-[13px] text-gray-500 dark:text-gray-500 mt-4">
			{post.symptom}
		</p>

		<p class="text-xl leading-[1.6] text-gray-700 dark:text-gray-300 max-w-[56ch] mt-7">
			{post.description}
		</p>

		<p class="mt-7 text-[13px] text-gray-500 dark:text-gray-400 tabular-nums">
			{fmtDate(post.date)}<span class="mx-1.5 opacity-50">·</span>{post.minutes} min read{#if post.receipt?.kind === 'own'}<span
					class="mx-1.5 opacity-50">·</span
				><a class="link-inked" href={post.receipt.url} target="_blank" rel="noopener"
					>{post.receipt.label}</a
				>{/if}
		</p>
	</header>

	<hr class="my-12 border-gray-300/50 dark:border-gray-700/40" />

	{#if post.body}
		<div class="flex flex-col">
			{#each post.body as block, i (i)}
				{#if block.t === 'p'}
					<p class="text-[17px] leading-[1.75] text-gray-700 dark:text-gray-300 max-w-[62ch] mb-7">
						<Ticked text={block.text} />
					</p>
				{:else if block.t === 'h2'}
					<h2
						class="text-[23px] font-bold leading-[1.25] tracking-[-0.015em] text-balance max-w-[30ch] mt-8 mb-5"
					>
						{block.text}
					</h2>
				{:else if block.t === 'code'}
					<figure class="mb-7 rounded-lg overflow-hidden bg-white/60 dark:bg-gray-800/50">
						{#if block.label}
							<figcaption
								class="font-mono text-[11.5px] text-gray-500 dark:text-gray-400 px-4 py-2.5 border-b border-gray-300/40 dark:border-gray-700/40"
							>
								{block.label}
							</figcaption>
						{/if}
						<pre
							class="overflow-x-auto px-4 py-4 text-[13px] leading-[1.7] font-mono text-stone-800 dark:text-stone-200"><code
								>{block.code}</code
							></pre>
					</figure>
				{:else if block.t === 'aside'}
					<aside
						class="mb-7 border-l-2 border-purple-500/40 dark:border-purple-300/30 pl-5 max-w-[62ch]"
					>
						<p class="text-[16px] leading-[1.7] text-gray-600 dark:text-gray-400">
							<Ticked text={block.text} />
						</p>
					</aside>
				{:else if block.t === 'measure'}
					<p class="mb-7 font-mono text-[15px] text-gray-700 dark:text-gray-300 tabular-nums">
						{#each block.rows as row, r (row.k)}{#if r > 0}<span
									class="mx-3 text-gray-400 dark:text-gray-600">→</span
								>{/if}<span class="text-stone-900 dark:text-stone-100">{row.v}</span>
							<span class="text-gray-500 dark:text-gray-500">{row.k}</span>{/each}
					</p>
				{/if}
			{/each}
		</div>
	{:else}
		<p class="text-gray-600 dark:text-gray-400">Not written yet.</p>
	{/if}

	<div class="mt-16 pt-8 border-t border-gray-300/50 dark:border-gray-700/40 flex gap-4">
		<img
			src="/me-bishwas.jpeg"
			alt=""
			width="48"
			height="48"
			loading="lazy"
			decoding="async"
			class="w-12 h-12 rounded-full object-cover shrink-0"
		/>
		<div class="max-w-[58ch]">
			<p class="font-semibold leading-tight">Bishwas Bhandari</p>
			<p class="text-[15px] leading-[1.65] text-gray-600 dark:text-gray-400 mt-1.5">
				Full-stack engineer, {yearsSince(FULL_TIME_SINCE)} years, working in Python and Svelte from Nepal.
				Patches merged into SvelteKit, Biome, pydantic and Litestar — all of them
				<a class="link-inked" href="/contributions">linked with the review threads</a>.
			</p>
			<p class="text-[15px] mt-2.5">
				<a class="link-inked" href="/projects">What I've built</a>
				<span class="mx-2 text-gray-400 dark:text-gray-600">·</span>
				<a class="link-inked" href="/experience">Where I've worked</a>
				<span class="mx-2 text-gray-400 dark:text-gray-600">·</span>
				<a class="link-inked" href="mailto:yo@bishwas.net">yo@bishwas.net</a>
			</p>
		</div>
	</div>

	{#if data.next}
		<footer class="mt-14 pt-8 border-t border-gray-300/50 dark:border-gray-700/40">
			<a class="group block" href="/blog/{data.next.slug}">
				<p class="text-[13px] text-gray-500 dark:text-gray-400 mb-2">Next</p>
				<p
					class="text-xl font-bold leading-[1.25] tracking-[-0.015em] text-balance max-w-[26ch] group-hover:text-purple-800 dark:group-hover:text-purple-200 duration-150"
				>
					{data.next.title}
				</p>
				<p class="font-mono text-[12.5px] text-gray-500 dark:text-gray-500 mt-2">
					{data.next.symptom}
				</p>
			</a>
		</footer>
	{/if}
</article>
