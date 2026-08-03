<script lang="ts">
	import { fade } from 'svelte/transition';
	import Avatar from '$item/Avatar.svelte';
	import Skills from '$item/main/Skills.svelte';
	import { FEATURED as UPSTREAM, prUrl } from '$utils/contributions';
	import { introOnce } from '$utils/intro';

	const joiner = (i: number) => (i === 0 ? '' : i === UPSTREAM.length - 1 ? ' and ' : ', ');

	const animate = introOnce('hero');
	const intro = (delay: number) => (animate ? { delay } : { duration: 0 });
</script>

<header
	class="max-w-3xl flex flex-col items-center justify-center text-slate-900 dark:text-slate-100"
>
	<div class="flex flex-col md:flex-row items-start gap-4 md:gap-9">
		<div class="w-32 h-32 shrink-0 md:sticky top-7" data-avatar>
			<Avatar alt="Bishwas Bhandari - Full-Stack Developer" />
		</div>
		<div class="flex flex-col w-full">
			<span class="text-5xl duration-200 sm:text-6xl md:text-7xl px-0 mb-1" in:fade={intro(100)}>
				Hey, <span class="group">Geeks</span>!
			</span>
			<h1 class="text-2xl mb-4 ml-2" in:fade={intro(200)}>I'm Bishwas, Full-Stack Developer</h1>
			<p class="text-lg ml-1" in:fade={intro(450)}>
				When I'm not building with Python or Svelte, you'll find me learning German or doing
				<a href="/contributions" class="link-inked">open-source</a>, lately in
				{#each UPSTREAM as repo, i (repo.prNumber)}{joiner(i)}<a
						href={prUrl(repo)}
						target="_blank"
						rel="noopener"
						class="link-inked">{repo.repo}</a
					>{/each}. Nepal-born, globally connected.
			</p>
			<Skills />
		</div>
	</div>
</header>
