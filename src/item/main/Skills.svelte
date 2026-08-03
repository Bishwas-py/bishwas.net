<script lang="ts">
	import { fade } from 'svelte/transition';
	import { skillTag, skillTagIcon, type SkillTone } from '$utils/tags';

	let loadMore = $state(false);

	function toggleLoadMoreSkills() {
		loadMore = !loadMore;
	}

	const moreSkills: { tone: SkillTone; label: string; icon: string }[] = [
		{ tone: 'typescript', label: 'TypeScript', icon: 'mdi:language-typescript' },
		{ tone: 'react', label: 'React.js', icon: 'mdi:react' },
		{ tone: 'rails', label: 'Ruby on Rails', icon: 'mdi:language-ruby-on-rails' },
		{ tone: 'tailwind', label: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
		{ tone: 'sockets', label: 'Sockets', icon: 'mdi:broadcast' }
	];
</script>

<div class="flex flex-wrap gap-2 duration-300 mt-5">
	<a
		class={skillTag({ tone: 'svelte' })}
		in:fade={{ delay: 780 }}
		href="/svelte-developer"
		aria-label="Svelte Developer"
		title="Svelte Developer"
	>
		<span class="tag-text">Svelte</span>
		<span class="sr-only">Hire Svelte Developer</span>
		<iconify-icon class={skillTagIcon} icon="simple-icons:svelte"></iconify-icon>
	</a>
	<a
		class={skillTag({ tone: 'django' })}
		in:fade={{ delay: 670 }}
		href="/django-developer"
		aria-label="Django Developer"
	>
		<span class="tag-text">Django</span>
		<iconify-icon class={skillTagIcon} icon="simple-icons:django"></iconify-icon>
	</a>
	<div class={skillTag({ tone: 'python' })} in:fade={{ delay: 580 }}>
		<span class="tag-text">Python</span>
		<iconify-icon class={skillTagIcon} icon="mdi:language-python"></iconify-icon>
	</div>
	{#if loadMore}
		{#each moreSkills as skill (skill.label)}
			<div class={skillTag({ tone: skill.tone })} in:fade>
				<span class="tag-text">{skill.label}</span>
				<iconify-icon class={skillTagIcon} icon={skill.icon}></iconify-icon>
			</div>
		{/each}
	{/if}
	<button
		class="flex items-center justify-center active:scale-95 duration-200"
		onclick={toggleLoadMoreSkills}
		in:fade={{ delay: 830 }}
	>
		<span class="tag-text">{loadMore ? 'Show less' : 'Show more'}</span>
		<iconify-icon class="w-5 h-5 text-xl" icon={loadMore ? 'mdi:chevron-up' : 'mdi:chevron-down'}
		></iconify-icon>
	</button>
</div>
