<script lang="ts">
	import Avatar from '$item/Avatar.svelte';
	import Skills from '$item/main/Skills.svelte';
	import { FEATURED as UPSTREAM, prUrl } from '$utils/contributions';
	import { introFade } from '$utils/intro';

	const joiner = (i: number) => (i === 0 ? '' : i === UPSTREAM.length - 1 ? ' and ' : ', ');
</script>

<header
	class="max-w-3xl flex flex-col items-center justify-center text-slate-900 dark:text-slate-100"
>
	<div class="flex flex-col md:flex-row items-start gap-4 md:gap-9">
		<div class="w-32 h-32 shrink-0 md:sticky top-7" data-avatar>
			<Avatar alt="Bishwas Bhandari - Full-Stack Developer" />
		</div>
		<div class="flex flex-col w-full">
			<span
				class="text-5xl duration-200 sm:text-6xl md:text-7xl px-0 mb-1"
				use:introFade={{ key: 'hero-hey', delay: 100 }}
			>
				Hey, <span class="group">Geeks</span>!
			</span>
			<h1 class="text-2xl mb-4 ml-2" use:introFade={{ key: 'hero-title', delay: 200 }}>
				I'm Bishwas, Full-Stack Developer
			</h1>
			<p class="text-lg ml-1" use:introFade={{ key: 'hero-lede', delay: 450 }}>
				When I'm not building with Python or Svelte, you'll find me learning German or doing
				<a href="/contributions" class="link-inked">open-source</a>, lately in
				{#each UPSTREAM as repo, i (repo.prNumber)}{joiner(i)}<a
						href={prUrl(repo)}
						target="_blank"
						rel="noopener"
						class="link-inked">{repo.repo}</a
					>{/each}. Nepal-born, globally connected.
			</p>
			<p
				class="text-sm ml-1 mt-3 flex flex-wrap items-center gap-x-1.5 text-gray-600 dark:text-gray-400"
				use:introFade={{ key: 'hero-svelte-feature', delay: 520 }}
			>
				<iconify-icon class="text-orange-600 dark:text-orange-400" icon="simple-icons:svelte"
				></iconify-icon>
				Featured by the Svelte team in
				<a
					href="https://svelte.dev/blog/whats-new-in-svelte-august-2026#:~:text=me%20everything%20by-,Bishwas%20Bhandari,-is%20a%20personal"
					target="_blank"
					rel="noopener"
					class="link-inked">What's new in Svelte, August 2026</a
				>
			</p>
			<Skills />
		</div>
	</div>
</header>
