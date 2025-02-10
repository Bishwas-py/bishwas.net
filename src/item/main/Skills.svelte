<script lang="ts">
	import { fade } from 'svelte/transition';

	let loadMore = $state(false);

	function toggleLoadMoreSkills() {
		loadMore = !loadMore;
	}
</script>

<div class="tags mt-5">
	<a
		class="skill-tag svelte"
		in:fade={{ delay: 780 }}
		href="/svelte-developer"
		aria-label="Svelte Developer"
		title="Svelte Developer"
	>
		<span class="tag-text">Svelte</span>
		<span class="sr-only">Hire Svelte Developer</span>
		<iconify-icon icon="simple-icons:svelte"></iconify-icon>
	</a>
	<div class="skill-tag python cursor-not-allowed" in:fade={{ delay: 580 }}>
		<span class="tag-text">Python</span>
		<iconify-icon icon="mdi:language-python"></iconify-icon>
	</div>
	<div class="skill-tag django cursor-not-allowed" in:fade={{ delay: 670 }}>
		<span class="tag-text">Django</span>
		<iconify-icon icon="simple-icons:django"></iconify-icon>
	</div>
	{#if loadMore}
		<div class="skill-tag typescript cursor-not-allowed" in:fade>
			<span class="tag-text">TypeScript</span>
			<iconify-icon icon="mdi:language-typescript"></iconify-icon>
		</div>
		<div class="skill-tag react cursor-not-allowed" in:fade>
			<span class="tag-text">React.js</span>
			<iconify-icon icon="mdi:react"></iconify-icon>
		</div>
		<div class="skill-tag rails cursor-not-allowed" in:fade>
			<span class="tag-text">Ruby on Rails</span>
			<iconify-icon icon="mdi:language-ruby-on-rails"></iconify-icon>
		</div>
		<div class="skill-tag tailwind cursor-not-allowed" in:fade>
			<span class="tag-text">Tailwind CSS</span>
			<iconify-icon icon="simple-icons:tailwindcss"></iconify-icon>
		</div>
		<div class="skill-tag sockets cursor-not-allowed" in:fade>
			<span class="tag-text">Sockets</span>
			<iconify-icon icon="mdi:broadcast"></iconify-icon>
		</div>
	{/if}
	<button class="load-more" onclick={toggleLoadMoreSkills} in:fade={{ delay: 830 }}>
		<span class="tag-text">{loadMore ? 'Show less' : 'Show more'}</span>
		<iconify-icon icon={loadMore ? 'mdi:chevron-up' : 'mdi:chevron-down'}></iconify-icon>
	</button>
</div>

<style lang="postcss">
	.load-more {
		@apply flex items-center justify-center active:scale-95 duration-200;
	}

	.load-more iconify-icon {
		@apply w-5 h-5 text-xl;
	}
</style>
