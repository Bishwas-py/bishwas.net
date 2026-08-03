<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import SimpleIconsDjango from 'virtual:icons/simple-icons/django';
	import LogosPythonIcon from 'virtual:icons/logos/python';
	import AwesomeCard from '$item/AwesomeCard.svelte';
	import KeyAchievements from '$item/developer/KeyAchievements.svelte';
	import ValueProposition from '$item/developer/ValueProposition.svelte';
	import TechImpact from '$item/developer/TechImpact.svelte';
	import ContributionHighlights from './contribution-highlights.svelte';
	import LookingForward from '$item/developer/LookingForward.svelte';
	import ExpertiseShowcase from '$item/developer/ExpertiseShowcase.svelte';
	import Meta from '$item/Meta.svelte';

	const achievements = [
		{
			title: 'Framework Creation',
			description: 'Developed Djapy.io, a streamlined REST framework for Django'
		},
		{
			title: 'Community Impact',
			description: 'Built and maintained Webmatrices platform serving thousands'
		},
		{
			title: 'Open Source',
			description: 'Created django-svelte-template for modern full-stack development'
		}
	];

	const impacts = [
		{
			title: 'Framework Innovation',
			desc: 'Created Djapy.io, simplifying Django REST development while maintaining core functionality'
		},
		{
			title: 'Community Growth',
			desc: 'Built Webmatrices platform serving thousands of developers and content creators'
		},
		{
			title: 'Developer Experience',
			desc: 'Streamlined Django deployment processes and created reusable project templates'
		}
	];
</script>

<Meta
	title="Django Developer, that guy? | Bishwas Bhandari"
	description="My journey from a COVID-era student to a Django framework innovator, creating tools that empower developers."
	keywords="django, python, djapy, full-stack developer, django rest framework"
	og_image="/og-django-developer.jpg"
/>

<div class="journey-intro max-w-3xl" in:fade>
	<h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
		A Django Developer's Tale
	</h1>

	<div class="journey-timeline" in:fly={{ y: 20, duration: 600 }}>
		<div class="flex flex-col gap-2">
			<p class="text-gray-800 dark:text-gray-200">
				Every developer's story has its humble beginnings. Mine started during the COVID lockdown,
				as a 12th grader with a content writing site and a dream to automate the tedious. What began
				as a simple tool to check Adsense eligibility would evolve into a passion for Django
				development that shapes my work to this day.
			</p>
		</div>

		<div
			class="mt-6 justify-center flex items-start gap-4"
			in:fly={{ y: 20, duration: 600, delay: 200 }}
		>
			<div class="flex flex-col items-center gap-2">
				<LogosPythonIcon class="w-8 h-8 text-blue-500" />
				<span class="text-sm">Python</span>
			</div>
			<span class="mt-3">+</span>
			<div class="flex flex-col items-center gap-2">
				<SimpleIconsDjango class="w-8 h-8 text-green-700 dark:text-green-500" />
				<span class="text-sm">Django</span>
			</div>
			<span class="mt-3">→</span>
			<div class="flex flex-col items-center gap-2">
				<img
					alt="djapy"
					src="https://raw.githubusercontent.com/Bishwas-py/djapy-docs/refs/heads/main/docs/images/icons/djapylogoGreen.svg"
					class="w-20 h-8"
				/>
				<span class="text-sm">Djapy</span>
			</div>
		</div>

		<div class="mt-6 flex flex-col gap-2" in:fly={{ y: 20, duration: 600, delay: 400 }}>
			<p class="text-gray-800 dark:text-gray-200">
				The journey from writing my first Django view to creating Djapy.io has been marked by
				continuous learning and innovation. Through freelancing, building tools that generate
				revenue, and ultimately leading to full-time roles, Django has been the constant companion
				in my developer journey.
			</p>
		</div>
	</div>
</div>

<div class="django-journey-continued max-w-3xl mt-12" in:fade>
	<div in:fly={{ y: 20, duration: 600 }}>
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-4">
				<SimpleIconsDjango
					class="w-10 h-10 p-2 shrink-0 rounded-full bg-green-500/10 text-green-600
        bg-linear-to-r from-green-500/20 via-green-400/20 to-teal-600/20
        shadow-inner shadow-green-400/60"
				/>
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">The Evolution</h2>
			</div>
			<p class="text-gray-800 dark:text-gray-200">
				What started as a solution to automate Adsense eligibility checks turned into a journey of
				continuous growth. From tackling the challenges of cPanel deployment to mastering Django's
				intricacies, each step added new layers to my expertise. The success of early projects on
				Fiverr opened doors to bigger opportunities.
			</p>
			<p class="text-gray-800 dark:text-gray-200 mt-2">
				The transition to Blogstorm.AI marked a new chapter, where Django's capabilities were pushed
				further. This led to the creation of Djapy.io, my contribution back to the Django community,
				embodying the lessons learned along the way.
			</p>
		</div>

		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
			<AwesomeCard title="From Side Project to Framework">
				Created Djapy.io, a Django REST framework born from real-world needs and battle-tested
				across multiple platforms. It's not just another framework - it's the culmination of years
				of Django development experience.
			</AwesomeCard>

			<AwesomeCard title="Building with Purpose">
				At Blogstorm.AI, architected complex systems using Django, proving that Python's "batteries
				included" framework can elegantly handle modern development challenges.
			</AwesomeCard>
		</div>

		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
			<AwesomeCard title="Webmatrices Innovation">
				Built and maintained a thriving community platform using Django, showcasing its power in
				creating scalable, maintainable applications.
			</AwesomeCard>
			<AwesomeCard title="Freelance Success">
				Turned Django expertise into a successful freelance career, specializing in deployment and
				custom development solutions that solve real business problems.
			</AwesomeCard>
		</div>

		<div class="border-l-4 border-green-500 pl-4 mt-10 flex items-start gap-4">
			<div class="flex flex-col gap-2">
				<p class="text-gray-800 dark:text-gray-200 italic">
					"Django taught me that the best solutions grow from real needs. Every challenge I faced as
					a developer became an opportunity to build something better for the next person."
				</p>
			</div>
		</div>

		<div class="key-achievements mt-10">
			<h3 class="text-xl font-semibold mb-4">Impact & Achievements</h3>
			<KeyAchievements {achievements} />
		</div>
	</div>
</div>

<div class="max-w-3xl mt-12" in:fade>
	<ExpertiseShowcase
		iconClass="w-10 h-10 p-2.5 shrink-0 rounded-full bg-green-500/10 text-green-500
      bg-linear-to-r from-green-500/20 via-teal-400/20 to-teal-600/20
      shadow-inner shadow-green-400/60"
		title="Mastering the Django Ecosystem"
		body="From writing that first view to architecting complex systems, my journey with Django has evolved into creating tools that empower other developers. The transition from user to contributor reflects a deep understanding of Django's capabilities and its community's needs."
	/>
	<ContributionHighlights />

	<TechImpact {impacts} dot="border-green-500" />
	<ValueProposition
		bar="from-green-500/40"
		intro="What sets me apart isn't just technical expertise with Django – it's understanding how to transform business requirements into elegant solutions. From automating tedious tasks to building frameworks that simplify development, each project has been about solving real problems effectively."
		teams="Need to scale your Django applications? I bring experience in building and maintaining large-scale Django systems, with a focus on maintainable, efficient code that grows with your needs."
		projects="Looking for Django expertise? I offer technical leadership and hands-on development, bringing enterprise-level Django experience to your challenges."
		outro="Every project is an opportunity to demonstrate that Django development can be both powerful and efficient. Whether you're starting fresh or evolving existing systems, I help create solutions that deliver exceptional results while maintaining clean, maintainable codebases."
	/>
	<LookingForward
		gradient="from-green-500/5 to-teal-500/5"
		variant="django"
		body="The future of web development is about finding the perfect balance between robust backends and modern frontends. With Django and frameworks like Djapy.io, I'm not just building applications – I'm helping shape a more efficient way of creating for the web. From that first COVID-era project to today's innovations, the journey continues to evolve."
	/>
</div>
