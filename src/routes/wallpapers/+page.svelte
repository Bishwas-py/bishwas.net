<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { tv } from 'tailwind-variants';
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
		activeCategory === 'All' ? WALLPAPERS : WALLPAPERS.filter((w) => w.category === activeCategory)
	);

	function categoryIcon(c: Wallpaper['category']) {
		if (c === 'Phone') return 'ph:device-mobile-duotone';
		if (c === 'Desktop') return 'ph:desktop-duotone';
		return 'ph:monitor-play-duotone';
	}

	const chip = tv({
		base: 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/60 dark:bg-gray-800/60 border hover:bg-white/90 dark:hover:bg-gray-800/90 hover:border-purple-500/30 dark:hover:border-purple-300/30 transition',
		variants: {
			active: {
				true: 'bg-linear-to-r from-purple-500/15 to-orange-500/15 border-purple-500/40 dark:border-purple-300/40 text-purple-900 dark:text-purple-100 font-semibold shadow-sm',
				false: 'border-purple-500/10 dark:border-purple-300/10 text-slate-700 dark:text-slate-200'
			}
		}
	});
</script>

<Meta
	title="Wallpapers — Free downloads by Bishwas"
	description="A small, hand-picked set of free wallpapers — bohemian patterns, red pandas, and cozy art for your phone, desktop, and ultra-wide displays."
	keywords="wallpapers, free wallpapers, boho wallpaper, red panda wallpaper, phone wallpaper, desktop wallpaper, ultra-wide wallpaper"
/>

<section class="max-w-3xl mb-8 text-slate-900 dark:text-slate-100" in:fade={{ duration: 300 }}>
	<h1 class="text-3xl sm:text-4xl font-semibold mb-3">
		<span
			class="bg-linear-to-r from-purple-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent"
		>
			Wallpapers
		</span>
		<span class="opacity-80">— free for your screens.</span>
	</h1>
	<p class="text-base sm:text-lg">
		A small, hand-picked collection. Some are mine, some are sketches gifted by friends, all of them
		are free to download. Pick one for your phone, your desktop, or that very wide monitor you’ve
		been showing off.
	</p>

	<div class="mt-6 flex flex-wrap gap-2">
		{#each CATEGORIES as c (c)}
			<button
				type="button"
				onclick={() => (activeCategory = c)}
				class={chip({ active: activeCategory === c })}
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

<div class="columns-1 sm:columns-2 lg:columns-3 gap-5 w-full max-w-6xl">
	{#each filtered as wp (wp.file)}
		<article
			class="relative mb-5 break-inside-avoid group"
			data-palette={wp.palette}
			in:fly={{ y: 24, duration: 350 }}
		>
			<div
				class="absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-70 transition duration-500
				bg-[linear-gradient(135deg,rgba(168,85,247,0.45),rgba(249,115,22,0.45))]
				boho:bg-[linear-gradient(135deg,rgba(217,119,6,0.45),rgba(190,18,60,0.45))]
				panda:bg-[linear-gradient(135deg,rgba(244,114,182,0.45),rgba(251,146,60,0.5))]"
			></div>
			<div
				class="relative rounded-2xl overflow-hidden bg-white/70 dark:bg-gray-900/60 backdrop-blur-xs shadow-xs border border-purple-500/5 dark:border-purple-300/5"
			>
				<a
					href={`/wallpaper/${wp.file}`}
					target="_blank"
					rel="noopener"
					class="block relative overflow-hidden"
					aria-label={`Open ${wp.name} in a new tab`}
				>
					<img
						class="w-full h-auto block transition duration-500 ease-out group-hover:scale-[1.04]"
						src={`/wallpaper/${wp.file}`}
						alt={wp.name}
						width={wp.width}
						height={wp.height}
						loading="lazy"
						decoding="async"
					/>
					<div
						class="absolute inset-0 flex items-end justify-start p-3 bg-linear-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
					>
						<span
							class="inline-flex items-center gap-1.5 text-white text-sm px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30"
						>
							<iconify-icon icon="ph:arrow-square-out-duotone"></iconify-icon>
							View full size
						</span>
					</div>
				</a>

				<div class="px-4 py-3 flex flex-col gap-1.5">
					<div class="flex items-baseline justify-between gap-2">
						<h2 class="text-base font-semibold text-slate-900 dark:text-slate-100 leading-tight">
							{wp.name}
						</h2>
						<span
							class="text-[11px] font-mono tracking-tight text-gray-500 dark:text-gray-400 shrink-0"
							>{wp.width}×{wp.height}</span
						>
					</div>
					<p class="text-sm text-gray-700 dark:text-gray-300">{wp.caption}</p>
					<div class="flex items-center justify-between mt-2">
						<span
							class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border
							bg-purple-500/10 text-purple-800 dark:text-purple-200 border-purple-500/20
							boho:bg-amber-500/10 boho:text-amber-800 boho:dark:text-amber-200 boho:border-amber-500/20
							panda:bg-orange-500/10 panda:text-orange-800 panda:dark:text-orange-200 panda:border-orange-500/20"
						>
							<iconify-icon icon={categoryIcon(wp.category)}></iconify-icon>
							{wp.category}
						</span>
						<a
							class="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-900 dark:text-purple-100 px-3 py-1.5 rounded-full bg-linear-to-r from-purple-500/15 to-orange-500/15 hover:from-purple-500/30 hover:to-orange-500/30 border border-purple-500/30 dark:border-purple-300/30 transition"
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

<p class="max-w-3xl mt-10 text-sm text-gray-600 dark:text-gray-400">
	Use them freely on your devices. If you redistribute or use them commercially, a quick
	<a class="link-inked" href="mailto:hi@bishwas.net">ping</a> is appreciated.
</p>
