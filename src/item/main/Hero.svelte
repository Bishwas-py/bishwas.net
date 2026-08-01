<script lang="ts">
	import { fade } from 'svelte/transition';
	import Skills from '$item/main/Skills.svelte';
	import { fly } from 'svelte/transition';

	const UPSTREAM = [
		{ name: 'pydantic', url: 'https://github.com/pydantic/pydantic/pull/13537' },
		{ name: 'SvelteKit', url: 'https://github.com/sveltejs/kit/pull/16349' },
		{ name: 'Litestar', url: 'https://github.com/litestar-org/litestar/pull/4925' }
	];
</script>

<header class="max-w-3xl">
	<div class="hero-content">
		<div class="hero-image-container w-32 h-32"
				 in:fly={{ y: 300 }}>
			<img src="/me-bishwas.jpg" alt="Bishwas Bhandari - Full-Stack Developer" class="hero-image" />
		</div>
		<div class="hero-text">
            <span class="text-5xl duration-200 sm:text-6xl md:text-7xl px-0 mb-1"
									in:fade={{delay: 100}}>
                Hey, <span class="group">Geeks</span>!
            </span>
			<h1 class="text-2xl mb-4 ml-2" in:fade={{delay: 200}}>
				I'm Bishwas, Full-Stack Developer
			</h1>
			<p class="text-lg ml-1" in:fade={{delay: 450}}>
				Full-stack developer passionate about clean code and user experience.
				When I'm not building with Django or Svelte,
				you'll find me doing open-source or learning German.
				Nepal-born, globally connected.
			</p>
			<p class="upstream ml-1" in:fade={{ delay: 600 }}>
				<span class="upstream-label">Patches merged into</span>
				{#each UPSTREAM as repo, i}<a
						href={repo.url}
						target="_blank"
						rel="noopener"
						class="upstream-repo">{repo.name}</a
					>{#if i < UPSTREAM.length - 1}<span class="sep">·</span>{/if}{/each}
				<a href="/open-source" class="upstream-more">see the patches</a>
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

    .hero-text {
        @apply flex-col flex;
        @apply w-full;
    }

    .upstream {
        @apply mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm;
    }

    .upstream-label {
        @apply text-gray-600 dark:text-gray-400;
    }

    .upstream-repo {
        @apply font-medium text-purple-800 hover:text-purple-600
        dark:text-purple-200 dark:hover:text-purple-400 duration-75;
    }

    .sep {
        @apply text-gray-400 dark:text-gray-600;
    }

    .upstream-more {
        @apply text-gray-500 dark:text-gray-400 hover:text-purple-800
        dark:hover:text-purple-200 duration-75 underline underline-offset-4
        decoration-gray-400/50 dark:decoration-gray-600;
    }
</style>
