<script lang="ts">
	import { fade } from 'svelte/transition';
	import Skills from '$item/main/Skills.svelte';
	import { FEATURED as UPSTREAM, prUrl } from '$utils/contributions';

	const joiner = (i: number) => (i === 0 ? '' : i === UPSTREAM.length - 1 ? ' and ' : ', ');
</script>

<header class="max-w-3xl">
	<div class="hero-content">
		<div class="avatar-slot w-32 h-32" data-avatar>
			<div class="hero-image-container w-full h-full">
				<img
					src="/me-bishwas.jpeg"
					alt="Bishwas Bhandari - Full-Stack Developer"
					class="hero-image"
				/>
			</div>
		</div>
		<div class="hero-text">
			<span
				class="text-5xl duration-200 sm:text-6xl md:text-7xl px-0 mb-1"
				in:fade={{ delay: 100 }}
			>
				Hey, <span class="group">Geeks</span>!
			</span>
			<h1 class="text-2xl mb-4 ml-2" in:fade={{ delay: 200 }}>I'm Bishwas, Full-Stack Developer</h1>
			<p class="text-lg ml-1" in:fade={{ delay: 450 }}>
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

<style lang="postcss">
	header {
		@apply flex flex-col items-center justify-center;
		@apply text-slate-900 dark:text-slate-100;
	}

	.hero-content {
		@apply flex flex-col md:flex-row items-start;
		@apply gap-4 md:gap-9;
	}

	.avatar-slot {
		@apply flex-shrink-0 md:sticky top-7;
	}

	.hero-text {
		@apply flex-col flex;
		@apply w-full;
	}
</style>
