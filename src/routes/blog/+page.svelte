<script lang="ts">
	import { tv } from 'tailwind-variants';
	import Meta from '$item/Meta.svelte';
	import { SORTED, fmtDate } from './data';

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
	title="Notes I wish I'd found | Bishwas"
	description="Writing about the evenings that went sideways: SvelteKit routing, TLS fingerprinting, Biome suppressions, Cloudflare builds. Each one links the fix that proves it."
	keywords="sveltekit 405, tls fingerprint blocked, biome-ignore, cloudflare pages node version, debugging notes"
/>

<header class="max-w-3xl w-full mb-16">
	<h1 class="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.02em] mb-5">
		Notes I wish I'd found.
	</h1>
	<p class="text-lg leading-[1.65] text-gray-700 dark:text-gray-300 max-w-[58ch]">
		Every one of these cost me an evening or three, and some of them ended in a patch to someone
		else's framework. I write them down because the answer was not on the internet when I went
		looking for it, and because a fix you cannot explain is a fix you got lucky with.
	</p>
</header>

<div class="max-w-3xl w-full flex flex-col gap-14">
	{#each SORTED as post (post.slug)}
		<article>
			{#if post.receipt?.kind === 'upstream'}
				<p class="mb-3 flex flex-wrap items-baseline gap-x-2 text-[13px]">
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
				<p class="mb-3 text-[13px] {stackTone({ stack: post.stack })}">{post.stack}</p>
			{/if}

			<a href="/blog/{post.slug}" class="group block">
				<h2
					class="text-2xl md:text-[28px] font-bold leading-[1.2] tracking-[-0.015em] text-balance max-w-[24ch] group-hover:text-purple-800 dark:group-hover:text-purple-200 duration-150"
				>
					{post.title}
				</h2>

				<p class="font-mono text-[12.5px] text-gray-500 dark:text-gray-500 mt-2.5">
					{post.symptom}
				</p>

				<p class="text-[15.5px] leading-[1.7] text-gray-600 dark:text-gray-400 max-w-[62ch] mt-4">
					{post.description}
				</p>
			</a>

			<p class="mt-4 text-[13px] text-gray-500 dark:text-gray-400 tabular-nums">
				{fmtDate(post.date)}<span class="mx-1.5 opacity-50">·</span>{post.minutes} min{#if post.receipt?.kind === 'own'}<span
						class="mx-1.5 opacity-50">·</span
					><a
						class="link-inked"
						href={post.receipt.url}
						target="_blank"
						rel="noopener">{post.receipt.label}</a
					>{/if}
			</p>
		</article>
	{/each}
</div>

<footer class="max-w-3xl w-full mt-20 pt-8 border-t border-gray-300/50 dark:border-gray-700/40">
	<p class="text-[15px] leading-[1.7] text-gray-600 dark:text-gray-400 max-w-[58ch]">
		Nothing here is a tutorial. If something claims to work, it links the thing that proves it —
		same rule as the <a class="link-inked" href="/contributions">patches</a> and the
		<a class="link-inked" href="/projects">projects</a>.
	</p>
</footer>
