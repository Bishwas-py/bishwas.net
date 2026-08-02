<script lang="ts">
	import { fade } from 'svelte/transition';
	import Meta from '$item/Meta.svelte';
	import { GROUPED } from './data';
</script>


<Meta
	title="Projects, on python, django, svelte, typescript and more | Bishwas"
	description="Collection of projects that I have worked on, including web applications, libraries, and open-source frameworks."
	keywords="svelte, django, python, typescript, web development, open-source, projects"
/>

<div class="intro max-w-3xl mb-7">
	<p>
		Most of these began because I wanted something to exist and it did not. A few grew into
		libraries with users I have never met; the rest stayed small and quietly useful. Even
		<a
			class="link-inked inline-flex gap-1 items-center"
			href="https://github.com/Bishwas-py/bishwas.net"
			target="_blank"
			in:fade>
			<span class="tag-text">this site</span>
			<iconify-icon icon="simple-icons:svelte"></iconify-icon>
		</a> is one of them, source and all.
	</p>

	<p class="mt-7">
		All of these are mine end to end, not mockups or tutorials I followed along with. The bugs I
		fixed inside other people's code live on the
		<a class="link-inked" href="/open-source">open source</a> page instead.
	</p>
</div>

{#each GROUPED as group}
<section class="max-w-3xl w-full mb-14">
	<h2 class="group-title">{group.label}</h2>

	<div class="flex flex-col gap-9 mt-6">
	{#each group.projects as project}
		<div class="flex flex-col">
			<div class="flex w-full gap-4">
				<a href={project.link} target="_blank" class="block relative w-32 min-h-16 max-h-24 group rounded-md overflow-clip">
					<img src={project.image} alt={project.name}
							 loading="lazy"
							 decoding="async"
							 class="w-auto h-full rounded group-hover:opacity-75 transition-opacity duration-300" />
					<div
						class="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<p class="text-white text-xs font-semibold">Learn more</p>
					</div>
					<iconify-icon icon="ph:arrow-square-in-duotone"
												class="absolute bottom-1 right-2 group-hover:hidden text-gray-400"></iconify-icon>
				</a>
				<div class="flex flex-col">
					<h2 class="text-xl font-semibold">{project.name}</h2>
					<p class="text-gray-600 dark:text-gray-400 text-sm">{project.timeline}</p>
					<ul class="tags mt-1.5">
						{#each project.technologies as tech}
							<li class={tech.class}>
								<iconify-icon icon={tech.icon}></iconify-icon>
								{tech.name}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<p class="description">{project.description}</p>
			<ul class="highlights">
				{#each project.highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
		</div>
	{/each}
	</div>
</section>
{/each}

<style lang="postcss">
    .group-title {
        @apply text-2xl font-bold pb-2 border-b border-gray-300/60 dark:border-gray-700/60;
    }

    .description {
        @apply mt-2.5 max-w-[62ch] leading-relaxed;
    }

    .highlights {
        @apply mt-2 max-w-[68ch] list-disc list-outside pl-5 space-y-1
        text-sm leading-relaxed text-gray-600 dark:text-gray-400
        marker:text-gray-400/70 dark:marker:text-gray-600;
    }
</style>
