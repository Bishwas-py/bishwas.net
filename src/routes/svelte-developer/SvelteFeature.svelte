<script lang="ts">
	// text fragment so the link lands on the mention, not the top of the post
	const POST =
		'https://svelte.dev/blog/whats-new-in-svelte-august-2026#:~:text=me%20everything%20by-,Bishwas%20Bhandari,-is%20a%20personal';
	const ARTICLE =
		'https://www.reddit.com/r/sveltejs/comments/1uu9sg6/three_years_ago_i_told_you_svelte_gave_me/';
</script>

<div class="relative group mt-8">
	<div
		class="absolute inset-0 rounded-lg blur-sm opacity-40 group-hover:opacity-80 duration-500 bg-linear-to-r from-orange-500/25 to-rose-500/20 transition"
	></div>

	<div class="relative p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 shadow-xs">
		<div class="flex flex-wrap items-center gap-2 mb-4">
			<iconify-icon class="text-xl text-orange-600 dark:text-orange-400" icon="simple-icons:svelte"
			></iconify-icon>
			<span class="font-semibold">Featured by the Svelte team</span>
			<a href={POST} target="_blank" rel="noopener" class="said text-sm ml-auto">
				What's new in Svelte, August 2026
			</a>
		</div>

		<blockquote class="border-l-4 border-orange-500 pl-4 text-gray-800 dark:text-gray-200">
			<a href={ARTICLE} target="_blank" rel="noopener" class="link-inked font-medium">
				Three years ago I told you Svelte gave me everything
			</a>
			by Bishwas Bhandari is a personal retrospective on six years of building with Svelte
		</blockquote>

		<p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
			Community Showcase &rarr; Learning Resources
		</p>
	</div>
</div>
