<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/contributions', label: 'Contributions' },
		{ href: '/experience', label: 'Experience' }
	];
</script>

<nav class="flex justify-center items-center gap-4 flex-col relative mt-20 md:mt-14 py-1">
	{#if page.url.pathname !== '/'}
		<div class="-top-14 left-7 absolute md:top-0 md:left-7 mr-7 md:mr-0 w-7 h-7" data-avatar>
			<div class="hero-image-container w-full h-full">
				<img
					src="/me-bishwas.jpeg"
					alt="Bishwas Bhandari | Django and Svelte Developer | Open Source Python Dev"
					class="hero-image"
				/>
			</div>
		</div>
	{/if}
	<div
		class="flex items-center justify-center flex-wrap flex-col sm:flex-row px-2 gap-4 md:gap-12 max-w-xl w-full"
	>
		<ul class="flex flex-wrap md:gap-7 gap-4 justify-center items-center">
			{#each links as { href, label } (href)}
				<li
					class="dark:hover:drop-shadow-white-lg hover:drop-shadow-dark-lg dark:hover:text-blue-200 duration-300 md:text-base text-sm {page
						.url.pathname === href
						? 'font-bold dark:text-blue-100'
						: ''}"
				>
					<a class="md:py-2 md:px-3 py-0.5 px-1" {href}>{label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
