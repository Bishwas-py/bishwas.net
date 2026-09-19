<script lang="ts">
	import Meta from '$item/Meta.svelte';

	const questions: { title: string; body: string[] }[] = [
		{
			title: 'How do I ask the pen friend something?',
			body: [
				'Open a worklog and tap the pen button at the top right. Write your question on the page, then pause. The answer is written beside it in ink. Tap the button again to go back to plain writing.',
				'Hold the same button until the ring closes to bring down tracing paper. The pen friend then sketches on a sheet over your page, and the page itself stays clean. Tap the button to lift the paper.',
				'The first time, Pen Friend asks for your agreement, because the answers come from Google’s Gemini and the page has to be shown to it. If you say no, everything else keeps working.'
			]
		},
		{
			title: 'How do I paste?',
			body: ['Double tap the page with a finger. A picture lands as a card you can move and resize. Text arrives as handwriting.']
		},
		{
			title: 'Can I see the practice run again?',
			body: ['Yes. Open Settings in Pen Friend and choose Run the practice again.']
		},
		{
			title: 'My backup shows an error',
			body: [
				'Backup uses your own iCloud. Check that you are signed in to iCloud on the iPad, that iCloud Drive is on, and that there is free iCloud storage. Then open Settings in Pen Friend and choose Sync Now.',
				'If the error stays, send me the exact words it shows and I will look into it.'
			]
		},
		{
			title: 'What is Desktop mode?',
			body: [
				'It connects Pen Friend to its Mac companion on your own network, so a screenshot taken on the Mac lands on your page and your worklogs are mirrored to the Mac. It is off until you turn it on in Settings, and only then does Pen Friend ask for Local Network and Photos access.',
				'If you said no to either by accident, turn them back on in the iPad’s Settings, under Apps, Pen Friend.'
			]
		},
		{
			title: 'How do I turn the pen friend off, or delete my data?',
			body: [
				'Open Settings in Pen Friend and turn off Pen friend and briefings. Nothing is sent to Google after that.',
				'Deleting the app deletes everything it stored on the iPad. The iCloud backup is deleted in the iPad’s Settings, under your name, iCloud, Manage Account Storage.'
			]
		}
	];
</script>

<Meta
	title="Pen Friend support | Bishwas Bhandari"
	description="Help with Pen Friend, the handwriting notebook for iPad: the pen friend, pasting, backup, Desktop mode, and how to reach me."
/>

<article class="max-w-3xl w-full pb-24">
	<h1 class="text-[34px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.025em] text-balance">
		Pen Friend support
	</h1>
	<p class="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
		Pen Friend is made by one person. If something is broken or confusing, write to
		<a class="text-purple-800 dark:text-purple-200 underline" href="mailto:hi@bishwas.net">hi@bishwas.net</a>
		and I will answer, usually within two days. Saying which iPad and which version of iPadOS you have helps.
	</p>

	{#each questions as question}
		<section class="mt-12">
			<h2 class="text-[22px] font-semibold tracking-[-0.01em]">{question.title}</h2>
			{#each question.body as paragraph}
				<p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{paragraph}</p>
			{/each}
		</section>
	{/each}

	<section class="mt-12">
		<h2 class="text-[22px] font-semibold tracking-[-0.01em]">Privacy</h2>
		<p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
			What stays on your iPad and what is sent to Google when you agree is in the
			<a class="text-purple-800 dark:text-purple-200 underline" href="/privacy/pen-friend">privacy policy</a>.
		</p>
	</section>
</article>
