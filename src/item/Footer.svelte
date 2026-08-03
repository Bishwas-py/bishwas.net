<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import { socialTag, goLink, type SocialTone } from '$utils/tags';

	let showExtraSocial = $state(false);
	const pathname = $derived(page.url.pathname);

	const socials: {
		label: string;
		href: string;
		icon: string;
		tag: SocialTone;
		y: number;
		duration: number;
	}[] = [
		{
			label: 'Github',
			href: 'https://github.com/bishwas-py',
			icon: 'mdi:github',
			tag: 'github',
			y: 10,
			duration: 300
		},
		{
			label: 'Twitter',
			href: 'https://twitter.com/BhBishwas',
			icon: 'mdi:twitter',
			tag: 'twitter',
			y: 20,
			duration: 480
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/bishwas.py/',
			icon: 'mdi:instagram',
			tag: 'instagram',
			y: 25,
			duration: 570
		},
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/bishwasbh/',
			icon: 'mdi:facebook',
			tag: 'facebook',
			y: 30,
			duration: 660
		},
		{
			label: 'Reddit',
			href: 'https://www.reddit.com/user/bishwasbhn',
			icon: 'mdi:reddit',
			tag: 'reddit',
			y: 35,
			duration: 750
		},
		{
			label: 'Linkedin',
			href: 'https://www.linkedin.com/in/bishwasbh/',
			icon: 'mdi:linkedin',
			tag: 'linkedin',
			y: 15,
			duration: 390
		}
	];
</script>

<footer class="mx-auto z-30 max-w-3xl justify-start w-full items-start mt-12 flex px-2">
	<div class="flex gap-2 flex-wrap relative md:gap-7">
		{#if showExtraSocial && pathname === '/'}
			<div
				class="absolute bottom-10 left-1 flex gap-2 md:flex-col md:bottom-7 md:-left-16"
				in:fly={{ y: 30, duration: 50 }}
				out:fly={{ y: 30, duration: 760 }}
			>
				{#each socials as social (social.href)}
					<a
						class={socialTag({ tone: social.tag })}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						transition:fly={{ y: social.y, duration: social.duration }}
						aria-label={social.label}
						title={social.label}
					>
						<iconify-icon icon={social.icon}></iconify-icon>
					</a>
				{/each}
			</div>
		{/if}
		{#if pathname === '/'}
			<button class="{goLink()} px-0 md:-ml-7" onclick={() => (showExtraSocial = !showExtraSocial)}>
				<iconify-icon icon={showExtraSocial ? 'mdi:chevron-up' : 'mdi:chevron-down'}></iconify-icon>
				<span>socials</span>
			</button>
		{/if}
		<a
			class={goLink({ linkable: true })}
			target="_blank"
			rel="noopener noreferrer"
			href="https://github.com/bishwas-py/"
		>
			<iconify-icon icon="mdi:github"></iconify-icon>
			<span>git me</span>
		</a>
	</div>
	<a class="ml-auto {goLink({ linkable: true })}" href="mailto:yo@bishwas.net">
		<iconify-icon icon="mdi:email"></iconify-icon>
		<span>mail me</span>
	</a>
</footer>
