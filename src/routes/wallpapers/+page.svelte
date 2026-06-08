<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Meta from '$item/Meta.svelte';

	type Wallpaper = {
		name: string;
		file: string;
		width: number;
		height: number;
		category: 'Phone' | 'Desktop' | 'Ultra-Wide';
		palette: 'boho' | 'panda';
		caption: string;
	};

	const WALLPAPERS: Wallpaper[] = [
		{
			name: 'Red Panda — Chill UHD',
			file: 'red-panda-chill-uhd.png',
			width: 1915,
			height: 821,
			category: 'Ultra-Wide',
			palette: 'panda',
			caption: 'A sleepy red panda lounging through pastel afternoon light.'
		},
		{
			name: 'Red Panda — iPhone',
			file: 'red-panda-iphone.png',
			width: 864,
			height: 1821,
			category: 'Phone',
			palette: 'panda',
			caption: 'Pocket-sized cuddle. Built for OLED blacks and lock-screen warmth.'
		},
		{
			name: 'Boho — Starlit Pattern',
			file: 'boho-start-pattern.png',
			width: 1586,
			height: 992,
			category: 'Desktop',
			palette: 'boho',
			caption: 'Hand-drawn celestial motifs over a calm bohemian palette.'
		},
		{
			name: 'Boho — Phone',
			file: 'boho-phone.png',
			width: 941,
			height: 1672,
			category: 'Phone',
			palette: 'boho',
			caption: 'Soft earthy tones, perfect for a quiet home screen.'
		},
		{
			name: 'Boho — Nabina’s Drawing',
			file: 'boho-nabina-drawing.png',
			width: 1536,
			height: 1024,
			category: 'Desktop',
			palette: 'boho',
			caption: 'A reference sketch by Nabina, turned wallpaper. Warm and personal.'
		},
		{
			name: 'Boho — Nabina’s Drawing (Ultra-Wide)',
			file: 'boho-nabina-drawing-ultra-wide.png',
			width: 1983,
			height: 793,
			category: 'Ultra-Wide',
			palette: 'boho',
			caption: 'Same warmth, stretched wide for ultrawide monitors and dual-screens.'
		}
	];

	const CATEGORIES = ['All', 'Phone', 'Desktop', 'Ultra-Wide'] as const;
	type Category = (typeof CATEGORIES)[number];

	let activeCategory = $state<Category>('All');

	const filtered = $derived(
		activeCategory === 'All'
			? WALLPAPERS
			: WALLPAPERS.filter((w) => w.category === activeCategory)
	);

	function categoryIcon(c: Wallpaper['category']) {
		if (c === 'Phone') return 'ph:device-mobile-duotone';
		if (c === 'Desktop') return 'ph:desktop-duotone';
		return 'ph:monitor-play-duotone';
	}
</script>

<Meta
	title="Wallpapers — Free downloads by Bishwas"
	description="A small, hand-picked set of free wallpapers — bohemian patterns, red pandas, and cozy art for your phone, desktop, and ultra-wide displays."
	keywords="wallpapers, free wallpapers, boho wallpaper, red panda wallpaper, phone wallpaper, desktop wallpaper, ultra-wide wallpaper"
/>

<section class="intro max-w-3xl mb-8" in:fade={{ duration: 300 }}>
	<h1 class="text-3xl sm:text-4xl font-semibold mb-3">
		<span class="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
			Wallpapers
		</span>
		<span class="opacity-80">— free for your screens.</span>
	</h1>
	<p class="text-base sm:text-lg">
		A small, hand-picked collection. Some are mine, some are sketches gifted by friends, all
		of them are free to download. Pick one for your phone, your desktop, or that very wide
		monitor you’ve been showing off.
	</p>

	<div class="mt-6 flex flex-wrap gap-2">
		{#each CATEGORIES as c}
			<button
				type="button"
				onclick={() => (activeCategory = c)}
				class="chip"
				class:chip-active={activeCategory === c}
			>
				{#if c === 'Phone'}<iconify-icon icon="ph:device-mobile-duotone"></iconify-icon>{/if}
				{#if c === 'Desktop'}<iconify-icon icon="ph:desktop-duotone"></iconify-icon>{/if}
				{#if c === 'Ultra-Wide'}<iconify-icon icon="ph:monitor-play-duotone"></iconify-icon>{/if}
				{#if c === 'All'}<iconify-icon icon="ph:squares-four-duotone"></iconify-icon>{/if}
				<span>{c}</span>
			</button>
		{/each}
	</div>
</section>

<div class="masonry w-full max-w-6xl">
	{#each filtered as wp (wp.file)}
		<article
			class="card group"
			class:palette-boho={wp.palette === 'boho'}
			class:palette-panda={wp.palette === 'panda'}
			in:fly={{ y: 24, duration: 350 }}
		>
			<div class="glow"></div>
			<div class="card-inner">
				<a
					href={`/wallpaper/${wp.file}`}
					target="_blank"
					rel="noopener"
					class="preview"
					aria-label={`Open ${wp.name} in a new tab`}
				>
					<img
						src={`/wallpaper/${wp.file}`}
						alt={wp.name}
						width={wp.width}
						height={wp.height}
						loading="lazy"
						decoding="async"
					/>
					<div class="overlay">
						<span class="pill">
							<iconify-icon icon="ph:arrow-square-out-duotone"></iconify-icon>
							View full size
						</span>
					</div>
				</a>

				<div class="meta">
					<div class="meta-top">
						<h2>{wp.name}</h2>
						<span class="ratio">{wp.width}×{wp.height}</span>
					</div>
					<p class="caption">{wp.caption}</p>
					<div class="meta-bottom">
						<span class="tag">
							<iconify-icon icon={categoryIcon(wp.category)}></iconify-icon>
							{wp.category}
						</span>
						<a
							class="download"
							href={`/wallpaper/${wp.file}`}
							download
							aria-label={`Download ${wp.name}`}
						>
							<iconify-icon icon="ph:download-simple-duotone"></iconify-icon>
							Download
						</a>
					</div>
				</div>
			</div>
		</article>
	{/each}
</div>

<p class="footer-note max-w-3xl mt-10 text-sm text-gray-600 dark:text-gray-400">
	Use them freely on your devices. If you redistribute or use them commercially, a quick
	<a class="link-inked" href="mailto:hi@bishwas.net">ping</a> is appreciated.
</p>

<style lang="postcss">
    .intro {
        @apply text-slate-900 dark:text-slate-100;
    }

    .chip {
        @apply inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm
        bg-white/60 dark:bg-gray-800/60
        border border-purple-500/10 dark:border-purple-300/10
        text-slate-700 dark:text-slate-200
        hover:bg-white/90 dark:hover:bg-gray-800/90
        hover:border-purple-500/30 dark:hover:border-purple-300/30
        transition;
    }

    .chip-active {
        @apply bg-gradient-to-r from-purple-500/15 to-orange-500/15
        border-purple-500/40 dark:border-purple-300/40
        text-purple-900 dark:text-purple-100 font-semibold shadow-sm;
    }

    .masonry {
        column-count: 1;
        column-gap: 1.25rem;
    }

    @media (min-width: 640px) {
        .masonry { column-count: 2; }
    }
    @media (min-width: 1024px) {
        .masonry { column-count: 3; }
    }

    .card {
        @apply relative mb-5;
        break-inside: avoid;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
    }

    .glow {
        @apply absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-70 transition duration-500;
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.45), rgba(249, 115, 22, 0.45));
    }
    .card.palette-boho .glow {
        background: linear-gradient(135deg, rgba(217, 119, 6, 0.45), rgba(190, 18, 60, 0.45));
    }
    .card.palette-panda .glow {
        background: linear-gradient(135deg, rgba(244, 114, 182, 0.45), rgba(251, 146, 60, 0.5));
    }

    .card-inner {
        @apply relative rounded-2xl overflow-hidden
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur-sm shadow-sm
        border border-purple-500/5 dark:border-purple-300/5;
    }

    .preview {
        @apply block relative overflow-hidden;
    }

    .preview img {
        @apply w-full h-auto block
        transition duration-500 ease-out;
    }

    .card:hover .preview img {
        transform: scale(1.04);
    }

    .overlay {
        @apply absolute inset-0 flex items-end justify-start p-3
        bg-gradient-to-t from-black/60 via-black/15 to-transparent
        opacity-0 group-hover:opacity-100 transition duration-300;
    }

    .pill {
        @apply inline-flex items-center gap-1.5 text-white text-sm
        px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md
        border border-white/30;
    }

    .meta {
        @apply px-4 py-3 flex flex-col gap-1.5;
    }

    .meta-top {
        @apply flex items-baseline justify-between gap-2;
    }

    .meta h2 {
        @apply text-base font-semibold text-slate-900 dark:text-slate-100 leading-tight;
    }

    .ratio {
        @apply text-[11px] font-mono tracking-tight text-gray-500 dark:text-gray-400 shrink-0;
    }

    .caption {
        @apply text-sm text-gray-700 dark:text-gray-300;
    }

    .meta-bottom {
        @apply flex items-center justify-between mt-2;
    }

    .tag {
        @apply inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full
        bg-purple-500/10 text-purple-800 dark:text-purple-200
        border border-purple-500/20;
    }
    .card.palette-boho .tag {
        @apply bg-amber-500/10 text-amber-800 dark:text-amber-200 border-amber-500/20;
    }
    .card.palette-panda .tag {
        @apply bg-orange-500/10 text-orange-800 dark:text-orange-200 border-orange-500/20;
    }

    .download {
        @apply inline-flex items-center gap-1.5 text-sm font-semibold
        text-purple-900 dark:text-purple-100
        px-3 py-1.5 rounded-full
        bg-gradient-to-r from-purple-500/15 to-orange-500/15
        hover:from-purple-500/30 hover:to-orange-500/30
        border border-purple-500/30 dark:border-purple-300/30
        transition;
    }
</style>
