<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import GardenWorkflow26Icon from 'virtual:icons/garden/workflow-26';
	import PhCodeFillIcon from 'virtual:icons/ph/code-fill';
	import LogosSvelteIcon from 'virtual:icons/logos/svelte-icon';
	import SimpleIconsDjango from 'virtual:icons/simple-icons/django';
	import LogosReactIcon from 'virtual:icons/logos/react';
	import AwesomeCard from '$item/AwesomeCard.svelte';
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
		<div class="experience-item flex items-start gap-4">
			<LogosSvelteIcon
				class="w-10 h-10 p-2 shrink-0 rounded-full bg-orange-500/10 text-orange-600
        bg-gradient-to-r from-orange-500/20 via-red-400/20 to-pink-600/20
        shadow-inner shadow-orange-400/60"
			/>
			<div class="flex flex-col gap-2">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">The Transformation</h2>
				<p class="text-gray-800 dark:text-gray-200">
					My coding journey evolved from freelancing with React and Django to my first role at
					Cynical Technology. As a Python developer there, I started exploring Svelte for our
					frontend needs. But the real game-changer came with Blogstorm.AI, where I built an entire
					ecosystem from scratch - connecting SvelteKit with Django, Celery, and WordPress
					integrations.
				</p>
				<p class="text-gray-800 dark:text-gray-200 mt-2">
					The success at Blogstorm.AI, where Svelte handled complex AI-writing features seamlessly,
					opened new doors. This led to OnlySales, where I lead the frontend team, focused purely on
					building with SvelteKit. Each step of this journey has reinforced my belief in Svelte's
					ability to make complex development feel simple.
				</p>
			</div>
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
			<div class="achievements-grid grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each [{ title: 'Team Leadership', description: 'Guided development teams in Philippines through Svelte adoption' }, { title: 'Open Source', description: "Created @friendofsvelte/tipex, enhancing Svelte's ecosystem" }, { title: 'Performance Gains', description: 'Delivered faster, more maintainable applications' }] as achievement}
					<div
						class="transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50
            p-4 rounded-lg bg-white/30 dark:bg-gray-800/30"
					>
						<h4 class="font-semibold mb-2">{achievement.title}</h4>
						<p class="text-sm text-gray-700 dark:text-gray-300">
							{achievement.description}
						</p>
					</div>
				{/each}
			</div>
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

<div class="svelte-expertise max-w-3xl mt-12" in:fade>
	<div class="expertise-showcase" in:fly={{ y: 20, duration: 600 }}>
		<div class="flex items-start gap-4">
			<LogosSvelteIcon
				class="w-10 h-10 p-2.5 shrink-0 rounded-full bg-blue-500/10 text-orange-600"
			/>
			<div class="flex flex-col gap-2">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
					Building the Svelte Ecosystem
				</h2>
				<p class="text-gray-800 dark:text-gray-200">
					Beyond just using Svelte, I've become an active contributor to its ecosystem. The journey
					from user to advocate has been marked by real-world implementations and open-source
					contributions.
				</p>
			</div>
		</div>

		<div class="contribution-highlights mt-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<AwesomeCard title="@friendofsvelte/tipex">
					Created a rich text editor that embodies Svelte's philosophy: powerful yet intuitive. Now
					used by developers worldwide for its simplicity and flexibility.
				</AwesomeCard>
				<AwesomeCard title="SvelteKit Mastery">
					From static site generation to server-side rendering, I've mastered SvelteKit's
					capabilities to build performant, scalable applications.
				</AwesomeCard>
				<AwesomeCard title="Enterprise Success Stories">
					From OnlySales to Blogstorm.AI, I've proven that Svelte isn't just for small projects –
					it's enterprise-ready and scales beautifully.
				</AwesomeCard>
			</div>
		</div>

		<div class="tech-impact mt-10">
			<div class="flex flex-col gap-6">
				<div class="ml-4 relative">
					<div class="absolute left-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -ml-4 top-3"></div>
					{#each [{ title: 'Performance First', desc: 'Delivered applications with 40% smaller bundles and faster initial loads' }, { title: 'Developer Experience', desc: "Mentored teams in adopting Svelte's intuitive reactivity model" }, { title: 'Community Impact', desc: 'Contributing back through open-source projects and knowledge sharing' }] as impact}
						<div class="mb-6 relative">
							<div
								class="absolute -left-6 mt-1.5 w-4 h-4 rounded-full border-2 border-orange-500 bg-white dark:bg-gray-800"
							></div>
							<h4 class="font-semibold mb-2">{impact.title}</h4>
							<p class="text-gray-700 dark:text-gray-300">{impact.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="value-proposition mt-10 mb-12">
			<div class="relative">
				<div
					class="absolute left-0 w-1 h-full bg-gradient-to-b from-orange-500/40 to-transparent rounded-full"
				></div>

				<div class="pl-6">
					<h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Why This Journey Matters
					</h3>

					<p class="text-gray-800 dark:text-gray-200 mb-4">
						What sets me apart isn't just my technical expertise with Svelte – it's understanding
						that great code comes from developers who enjoy their craft. Having led teams through
						this journey, I've seen how the right tools and approaches can transform not just
						codebases, but the entire development experience.
					</p>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
						<div class="p-4 rounded-lg bg-white/30 dark:bg-gray-800/30">
							<h4 class="font-semibold mb-2">For Teams</h4>
							<p class="text-sm text-gray-700 dark:text-gray-300">
								Looking to modernize your frontend? I bring tools that bring joy to your developers'
								daily work. With Svelte, your team will rediscover the peace of mind that comes from
								clean, intuitive code.
							</p>
						</div>

						<div class="p-4 rounded-lg bg-white/30 dark:bg-gray-800/30">
							<h4 class="font-semibold mb-2">For Projects</h4>
							<p class="text-sm text-gray-700 dark:text-gray-300">
								Need expertise for a critical project? I offer technical leadership and hands-on
								development, bringing enterprise-level Svelte experience to your challenges.
							</p>
						</div>
					</div>

					<p class="mt-6 text-gray-800 dark:text-gray-200">
						Every project is a chance to prove that development can be both powerful and peaceful.
						Whether you're starting fresh or evolving existing systems, I help create an environment
						where your team can thrive while delivering exceptional results.
					</p>
				</div>
			</div>
		</div>

		<div
			class="future-vision mt-10 p-6 rounded-lg bg-gradient-to-br from-orange-500/5 to-purple-500/5"
		>
			<h3 class="text-xl font-semibold mb-4">Looking Forward</h3>
			<p class="text-gray-800 dark:text-gray-200">
				The future of web development is about finding the perfect balance between power and
				simplicity. With Svelte, I'm not just building applications – I'm helping shape a more
				intuitive way of creating for the web.
			</p>
			<div class="mt-6 text-sm text-gray-600 dark:text-gray-400">
				Want to explore how Svelte can transform your project?
				<a href="mailto:yo@bishwas.net" class="text-orange-600 dark:text-orange-400 hover:underline"
					>Let's talk</a
				>
			</div>
		</div>
	</div>
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
