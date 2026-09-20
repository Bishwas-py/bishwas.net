<script lang="ts">
	import Meta from '$item/Meta.svelte';

	const updated = '19 September 2026';

	const sections: { title: string; body: string[]; list?: string[] }[] = [
		{
			title: 'The short version',
			body: [
				'Pen Friend is a handwriting notebook for iPad, with a small companion app for Mac. There is no account, no analytics, no advertising and no tracking. Your worklogs live on your iPad.',
				'One group of features, the pen friend, the briefings and search by meaning, is written by Google’s Gemini model. Those features are off until you agree to them, and Pen Friend is a complete notebook without them.'
			]
		},
		{
			title: 'What stays on your iPad',
			body: ['Everything you write is stored on your iPad: your ink, the images on your pages, your folders, and the titles, labels and summaries Pen Friend writes about them. I keep no copy of any of it, and with the Gemini features off, none of it leaves your iPad except to your own iCloud and your own Mac, as described below.']
		},
		{
			title: 'What is sent to Google, and only if you agree',
			body: ['Pen Friend asks before any of this happens, and you can turn it off again in Settings. When it is on:'],
			list: [
				'A picture of the page you are on, your ink and the images on it, is sent when you use the pen friend, and shortly after you stop writing so the briefing stays current. This includes pages in locked folders.',
				'With that picture goes the text Pen Friend has already written about your worklogs: titles, labels, keywords, short summaries and their history, your folder names, and labels you corrected. The same text is sent on its own, together with the words of your search, when you search by meaning, and when you ask for worklogs to be filed.',
				'Each request carries a random number that names your install of Pen Friend. It is used only to limit how fast requests can be made. It is not tied to your name, your Apple ID or your device’s identifiers.',
				'Each request is also signed by your iPad’s secure chip, using Apple’s App Attest, so the relay can tell it comes from a genuine copy of Pen Friend and not from someone imitating it. The first time, your iPad asks Apple to certify the key it made for this. Apple learns that this app asked for a certificate, and nothing about what you write. The key is made for this app alone and is not tied to your name or your Apple ID.'
			]
		},
		{
			title: 'How it gets there',
			body: [
				'Requests travel from your iPad to a small relay I run on Cloudflare Workers, which holds the key for Google’s API and passes the request on. The relay does not store your pages or your text. Cloudflare keeps short-lived operational logs of requests, which may include the time, the result, your network address and the random install number, but never the content.',
				'Google processes the request under the terms of its Gemini API. I do not receive, and cannot see, what you send or what comes back.'
			]
		},
		{
			title: 'iCloud backup',
			body: ['If you are signed in to iCloud, Pen Friend backs your worklogs up to your own private iCloud database so a new iPad can restore them. That data is held by Apple under your Apple ID. I have no access to it. You can delete it at any time in the iPad’s Settings, under your name, iCloud, Manage Account Storage.']
		},
		{
			title: 'The Mac companion',
			body: ['Pen Friend for Mac and Pen Friend for iPad talk to each other directly over your local network. Screenshots go from the Mac to the iPad, and your worklogs are mirrored to your own Mac so you can see and export them there. Worklogs in locked folders are never sent to the Mac. Nothing in this link passes through the internet or through me.']
		},
		{
			title: 'Permissions Pen Friend asks for',
			body: ['Two of these belong to Desktop mode, which is off until you turn it on in Settings. With it off, Pen Friend asks for neither and uses neither.'],
			list: [
				'Photos, in Desktop mode only, so a screenshot you take on the iPad can land in Pen Friend. Pen Friend reads new screenshots only, and they stay on your iPad unless they are on a page you ask the model to read.',
				'Local network, in Desktop mode only, to find your Mac.',
				'Face ID or Touch ID, to open locked folders. The check is done by iPadOS. Pen Friend never sees your face or fingerprint data, only a yes or a no.'
			]
		},
		{
			title: 'Deleting your data',
			body: ['Deleting Pen Friend from your iPad deletes everything it stored there. The iCloud backup is deleted from the iPad’s iCloud settings as described above. I hold no copy of your data, so there is nothing for me to delete.']
		},
		{
			title: 'Children',
			body: ['Pen Friend is not directed at children under 13 and does not knowingly collect information from them.']
		},
		{
			title: 'Changes',
			body: ['If what Pen Friend sends ever changes, this page changes first, and the app asks for your agreement again before anything new leaves your iPad.']
		}
	];
</script>

<Meta
	title="Pen Friend privacy policy | Bishwas Bhandari"
	description="What Pen Friend keeps on your iPad, what it sends to Google's Gemini when you agree, and how to turn that off."
/>

<article class="max-w-3xl w-full pb-24">
	<p class="mb-4 text-[13px] text-gray-500 dark:text-gray-400">Last updated {updated}</p>
	<h1 class="text-[34px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.025em] text-balance">
		Pen Friend privacy policy
	</h1>

	{#each sections as section}
		<section class="mt-12">
			<h2 class="text-[22px] font-semibold tracking-[-0.01em]">{section.title}</h2>
			{#each section.body as paragraph}
				<p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{paragraph}</p>
			{/each}
			{#if section.list}
				<ul class="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-gray-700 dark:text-gray-300">
					{#each section.list as item}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/each}

	<section class="mt-12">
		<h2 class="text-[22px] font-semibold tracking-[-0.01em]">Contact</h2>
		<p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
			Pen Friend is made by Bishwas Bhandari. Questions about this policy or your data:
			<a class="text-purple-800 dark:text-purple-200 underline" href="mailto:hi@bishwas.net">hi@bishwas.net</a>.
		</p>
	</section>
</article>
