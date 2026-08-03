<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tv } from 'tailwind-variants';
	import { skillTag, skillTagIcon } from '$utils/tags';
	import Meta from '$item/Meta.svelte';
	import { GROUPED } from './data';
	import { avatarOf } from '$utils/people';
	import Face from '$item/Face.svelte';

	const featuredIcon = tv({
		base: 'w-4 h-4 shrink-0 mt-[3px] text-base leading-none',
		variants: {
			svelte: {
				true: 'text-orange-600 dark:text-orange-400',
				false: 'text-gray-500 dark:text-gray-400'
			}
		}
	});
</script>

<Meta
	title="Projects, on python, django, svelte, typescript and more | Bishwas"
	description="Collection of projects that I have worked on, including web applications, libraries, and open-source frameworks."
	keywords="svelte, django, python, typescript, web development, open-source, projects"
/>

<div class="max-w-3xl mb-7">
	<h1 class="text-3xl md:text-4xl font-bold leading-tight mb-3">Things I made.</h1>
	<p>
		Most of these began because I wanted something to exist and it did not. A few grew into
		libraries with users I have never met; the rest stayed small and quietly useful. Even
		<a
			class="link-inked inline-flex gap-1 items-center"
			href="https://github.com/Bishwas-py/bishwas.net"
			target="_blank"
			in:fade
		>
			<span class="tag-text">this site</span>
			<iconify-icon icon="simple-icons:svelte"></iconify-icon>
		</a> is one of them, source and all.
	</p>

	<p class="mt-7">
		All of these are mine end to end, not mockups or tutorials I followed along with. The bugs I
		fixed inside other people's code live on the
		<a class="link-inked" href="/contributions">open source</a> page instead.
	</p>
</div>

{#each GROUPED as group (group.key)}
	<section class="max-w-3xl w-full mb-14">
		<h2 class="text-2xl font-bold pb-2 border-b border-gray-300/60 dark:border-gray-700/60">
			{group.label}
		</h2>

		<div class="flex flex-col gap-9 mt-6">
			{#each group.projects as project (project.name)}
				<div class="flex flex-col">
					<div class="flex w-full gap-4">
						<a
							href={project.link}
							target="_blank"
							class="block relative w-32 min-h-16 max-h-24 group rounded-md overflow-clip"
						>
							<img
								src={project.image}
								alt={project.name}
								loading="lazy"
								decoding="async"
								class="w-auto h-full rounded-sm group-hover:opacity-75 transition-opacity duration-300"
							/>
							<div
								class="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							>
								<p class="text-white text-xs font-semibold">Learn more</p>
							</div>
							<iconify-icon
								icon="ph:arrow-square-in-duotone"
								class="absolute bottom-1 right-2 group-hover:hidden text-gray-400"
							></iconify-icon>
						</a>
						<div class="flex flex-col">
							<h2 class="text-xl font-semibold">{project.name}</h2>
							<p class="text-gray-600 dark:text-gray-400 text-sm">{project.timeline}</p>
							<ul class="flex flex-wrap gap-2 duration-300 mt-1.5">
								{#each project.technologies as tech (tech.name)}
									<li class={skillTag({ tone: tech.tone })}>
										<iconify-icon class={skillTagIcon} icon={tech.icon}></iconify-icon>
										{tech.name}
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<p class="mt-2.5 max-w-[62ch] leading-relaxed">{project.description}</p>
					<ul
						class="mt-2 max-w-[68ch] list-disc list-outside pl-5 space-y-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400 marker:text-gray-400/70 dark:marker:text-gray-600"
					>
						{#each project.highlights as highlight (highlight)}
							<li>{highlight}</li>
						{/each}
					</ul>
					{#if project.community}
						<p class="mt-3 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
							Worked with
						</p>
						{#if project.community.faces}
							<p class="mt-1.5 flex items-center -space-x-2">
								{#each project.community.faces as face (face.login)}
									<Face login={face.login} href={face.url} tip={face.did} />
								{/each}
								{#if project.community.facesMore}
									<span class="pl-3.5 text-xs text-gray-500 dark:text-gray-400"
										>+{project.community.facesMore}</span
									>
								{/if}
							</p>
						{/if}
						<ul
							class="mt-1.5 flex flex-col gap-1.5 max-w-[68ch] text-sm text-gray-600 dark:text-gray-400"
						>
							{#each project.community.people as person (person.login)}
								<li class="flex items-center gap-2">
									<img
										class="w-[18px] h-[18px] rounded-full shrink-0 outline outline-1 outline-stone-300/70 dark:outline-stone-700"
										src={avatarOf(person.login)}
										alt=""
										width="18"
										height="18"
										loading="lazy"
										decoding="async"
									/>
									<a href={person.url} target="_blank" rel="noopener" class="said">
										<span class="font-medium text-gray-800 dark:text-gray-200">{person.login}</span>
										{person.did}
									</a>
								</li>
							{/each}
							{#if project.community.more}
								<li class="pl-[26px] text-gray-500 dark:text-gray-500">
									<a href={project.community.url} target="_blank" rel="noopener" class="said">
										{project.community.more}
									</a>
								</li>
							{/if}
						</ul>
					{/if}
					{#if project.featured}
						<p
							class="mt-2.5 flex items-start gap-2 max-w-[68ch] text-sm text-gray-600 dark:text-gray-400"
						>
							<iconify-icon
								icon={project.featured.icon}
								class={featuredIcon({ svelte: project.featured.icon === 'simple-icons:svelte' })}
							></iconify-icon>
							<span>
								{project.featured.lead}
								{#if project.featured.strong}<strong
										class="font-semibold text-gray-800 dark:text-gray-200"
										>{project.featured.strong}</strong
									>{/if}{project.featured.tail ? ' ' + project.featured.tail : ''}:
								{#each project.featured.links as link, i (link.url)}<a
										href={link.url}
										target="_blank"
										rel="noopener"
										class="link-inked">{link.label}</a
									>{i < project.featured.links.length - 2
										? ', '
										: i === project.featured.links.length - 2
											? ' and '
											: '.'}{/each}
							</span>
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</section>
{/each}
