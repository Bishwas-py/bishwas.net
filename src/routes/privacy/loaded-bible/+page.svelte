<script lang="ts">
	import Meta from '$item/Meta.svelte';

	const updated = '8 October 2026';

	const sections: { title: string; body: string[]; list?: string[] }[] = [
		{
			title: 'The short version',
			body: [
				'Loaded Bible prepares a gift Bible: it gathers verses for someone you love and prints the tabs, verse lists and cards. There is no account, no analytics, no advertising and no tracking.',
				'The app does not collect, store or share any personal information. It makes no network requests at all.'
			]
		},
		{
			title: 'What stays on your iPhone',
			body: ['Everything you make in the app is kept on your device and nowhere else:'],
			list: [
				'Your kits, with the names and places you type',
				'Your messages and the lines you write beside a topic',
				'The verses you save',
				'What you enter in About you'
			]
		},
		{
			title: 'What I can see',
			body: ['Nothing. There are no servers that receive what you write, so I have no way to read it, lose it or hand it to anyone.']
		},
		{
			title: 'Apple Intelligence',
			body: ['On iPhones that support Apple Intelligence, the sentence you write about the person a kit is for is read by Apple’s model on your device to suggest topics and a title. It is not sent to me, and the app does not send it anywhere. On other iPhones a keyword match built into the app does the same job.']
		},
		{
			title: 'Printing, sharing and backups',
			body: [
				'When you print or share pages, they go only where you send them, through the print and share features built into your iPhone.',
				'If you back up your iPhone to iCloud or to a computer, what the app stored is included in that backup under Apple’s terms, as with any app.'
			]
		},
		{
			title: 'Deleting your data',
			body: ['Touch and hold a kit to delete it. Deleting the app deletes everything it stored. There is no account and no copy elsewhere to remove.']
		},
		{
			title: 'Children',
			body: ['The app collects no information from anyone, children included.']
		},
		{
			title: 'Changes',
			body: ['If the app ever starts sending anything off your iPhone, this page changes first.']
		}
	];
</script>

<Meta
	title="Loaded Bible privacy policy | Bishwas Bhandari"
	description="Loaded Bible collects nothing: your kits, notes and saved verses stay on your iPhone, with no account, analytics or tracking."
/>

<article class="max-w-3xl w-full pb-24">
	<p class="mb-4 text-[13px] text-gray-500 dark:text-gray-400">Last updated {updated}</p>
	<h1 class="text-[34px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.025em] text-balance">
		Loaded Bible privacy policy
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
			Loaded Bible is made by Bishwas Bhandari. Questions about this policy:
			<a class="text-purple-800 dark:text-purple-200 underline" href="mailto:hi@bishwas.net">hi@bishwas.net</a>.
		</p>
	</section>
</article>
