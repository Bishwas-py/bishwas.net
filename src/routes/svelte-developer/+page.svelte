<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import LogosSvelteIcon from 'virtual:icons/logos/svelte-icon';
	import SimpleIconsDjango from 'virtual:icons/simple-icons/django';
	import LogosReactIcon from 'virtual:icons/logos/react';
	import AwesomeCard from '$item/AwesomeCard.svelte';
	import KeyAchievements from './key-achievements.svelte';
	import ValueProposition from './value-proposition.svelte';
	import TechImpact from './tech-impact.svelte';
	import ContributionHighlights from './contribution-highlights.svelte';
	import LookingForward from './looking-forward.svelte';
	import ExpertiseShowcase from './expertise-showcase.svelte';
</script>

<svelte:head>
	<title>Svelte Developer, that guy? | Bishwas Bhandari</title>
	<meta
		name="description"
		content="From complex React architectures to elegant Svelte solutions - my journey as a developer who found clarity in Svelte's simplicity."
	/>
</svelte:head>

<div class="journey-intro max-w-3xl" in:fade>
	<h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
		What? A svelte developer, you say?
	</h1>

	<div class="journey-timeline" in:fly={{ y: 20, duration: 600 }}>
		<div class="flex flex-col gap-2">
			<p class="text-gray-800 dark:text-gray-200">
				Every developer's journey has that moment of revelation. Mine came after years of wrestling
				with increasingly complex Django and React architectures. Each new project added layers of
				complexity – more dependencies, more boilerplate, more cognitive load.
			</p>
		</div>

		<div
			class="mt-6 justify-center flex items-start gap-4"
			in:fly={{ y: 20, duration: 600, delay: 200 }}
		>
			<div class="flex flex-col items-center gap-2">
				<SimpleIconsDjango class="w-8 h-8 text-green-700 dark:text-green-500" />
				<span class="text-sm">Django</span>
			</div>
			<span class="mt-3">+</span>
			<div class="flex flex-col items-center gap-2">
				<LogosReactIcon class="w-8 h-8" />
				<span class="text-sm">React</span>
			</div>
			<span class="mt-3">→</span>
			<div class="flex flex-col items-center gap-2">
				<LogosSvelteIcon class="w-8 h-8" />
				<span class="text-sm">Svelte</span>
			</div>
		</div>

		<div class="mt-6 flex flex-col gap-2" in:fly={{ y: 20, duration: 600, delay: 400 }}>
			<p class="text-gray-800 dark:text-gray-200">
				Then came Svelte. It wasn't just another framework – it was a revelation of simplicity. The
				way it handled reactivity felt natural, like the code I always wanted to write. From that
				moment on, I knew I wanted to become a Svelte developer focused on building elegant,
				efficient solutions. No virtual DOM, no unnecessary abstractions, just pure, elegant
				solutions.
			</p>
		</div>
	</div>
</div>

<div class="svelte-journey-continued max-w-3xl mt-12" in:fade>
	<div in:fly={{ y: 20, duration: 600 }}>
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-4">
				<LogosSvelteIcon
					class="w-10 h-10 p-2 shrink-0 rounded-full bg-orange-500/10 text-orange-600
        bg-gradient-to-r from-orange-500/20 via-red-400/20 to-pink-600/20
        shadow-inner shadow-orange-400/60"
				/>
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">The Transformation</h2>
			</div>
			<p class="text-gray-800 dark:text-gray-200">
				My coding journey evolved from freelancing with React and Django to my first role at Cynical
				Technology. As a Python developer there, I started exploring Svelte for our frontend needs.
				But the real game-changer came with Blogstorm.AI, where I built an entire ecosystem from
				scratch - connecting SvelteKit with Django, Celery, and WordPress integrations.
			</p>
			<p class="text-gray-800 dark:text-gray-200 mt-2">
				The success at Blogstorm.AI, where Svelte handled complex AI-writing features seamlessly,
				opened new doors. This led to OnlySales, where I lead the frontend team, focused purely on
				building with SvelteKit. Each step of this journey has reinforced my belief in Svelte's
				ability to make complex development feel simple.
			</p>
		</div>

		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
			<AwesomeCard title="From Complex to Simple">
				At Blogstorm.AI, built a complete publishing system with SvelteKit frontend, Django backend,
				and WordPress integration - proving that Svelte can elegantly handle complex, multi-system
				architectures.
			</AwesomeCard>

			<AwesomeCard title="Leading with Svelte">
				At OnlySales, guiding the frontend team in building a robust health tech platform with
				SvelteKit, turning complex workflows into intuitive interfaces.
			</AwesomeCard>
		</div>

		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
			<AwesomeCard title="OnlySales Transition">
				Led the frontend team's transition to SvelteKit, resulting in a 40% reduction in bundle size
				and significantly improved development velocity.
			</AwesomeCard>
			<AwesomeCard title="Blogstorm.AI Innovation">
				Single-handedly developed a full-stack application using SvelteKit, proving that complex
				applications don't need complex solutions.
			</AwesomeCard>
		</div>

		<div class="key-achievements mt-10">
			<h3 class="text-xl font-semibold mb-4">Impact & Achievements</h3>
			<KeyAchievements />
		</div>

		<div class="border-l-4 border-orange-500 pl-4 mt-10 flex items-start gap-4">
			<div class="flex flex-col gap-2">
				<p class="text-gray-800 dark:text-gray-200 italic">
					"The best code is the code you don't have to write. Svelte taught me that simplicity isn't
					just about writing less code – it's about making the right architectural decisions from
					the start."
				</p>
			</div>
		</div>
	</div>
</div>

<div class="max-w-3xl mt-12" in:fade>
	<ExpertiseShowcase />
	<ContributionHighlights />
	<TechImpact />
	<ValueProposition />
	<LookingForward />
</div>

<style lang="postcss">
	.milestone {
		@apply transition-all duration-300 hover:shadow-md;
	}
	.expertise-showcase {
		@apply relative;
	}

	.contribution-highlights .group {
		@apply transition-all duration-300;
	}

	.tech-impact {
		@apply relative;
	}

	.future-vision {
		@apply transition-all duration-300 hover:from-orange-500/10 hover:to-purple-500/10;
	}
</style>
