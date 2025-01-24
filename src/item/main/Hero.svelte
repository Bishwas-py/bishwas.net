<script lang="ts">
	import { fade } from 'svelte/transition';
	import Skills from '$item/main/Skills.svelte';
	import { fly } from 'svelte/transition';
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
</style>
