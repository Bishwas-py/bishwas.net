<script lang="ts">
	import Meta from '$item/Meta.svelte';

	const questions: { title: string; body: string[] }[] = [
		{
			title: 'How do I make a kit?',
			body: [
				'Tap the plus button, write one sentence about who the Bible is for, and follow the three steps: who it is for, your message, the verses. Save opens your kit.',
				'You can change anything afterwards. Look, Picture, Place and Words sit under the page, and the page above shows what will print.'
			]
		},
		{
			title: 'How do I print?',
			body: [
				'Open a kit and tap the printer button. You see every page first: the contents page, the emergency numbers, the verse lists, the tabs and the cards. Tap the printer there to print with any AirPrint printer, or use Share to save the pages as a PDF and print them somewhere else.',
				'The pages are laid out for standard letter paper. Card stock works best for the tabs and the tip-in cards.'
			]
		},
		{
			title: 'Where are the verses I saved?',
			body: ['Tap the heart under any verse while you read. Saved, in the bar at the foot of the home screen, keeps them, newest first. Tap the heart again to let one go.']
		},
		{
			title: 'Can I change the verses or their order?',
			body: [
				'Yes. In a kit, open Words and tap a topic. Add a verse by typing its reference, take one away with the minus button, and touch and hold a verse to move it.',
				'Topics move the same way: touch and hold one in Words and drop it where you want it.'
			]
		},
		{
			title: 'Which wordings of the Bible are included?',
			body: ['Two, both in the public domain: the World English Bible, which is easy to read, and the King James Version, the familiar traditional wording. Choose one for each kit, and your usual one in About you.']
		},
		{
			title: 'How do I delete a kit, or all my data?',
			body: [
				'Touch and hold a kit on the home screen and choose Delete.',
				'Deleting the app deletes everything it stored on your iPhone. There is no account and no copy anywhere else to remove.'
			]
		}
	];
</script>

<Meta
	title="Loaded Bible support | Bishwas Bhandari"
	description="Help with Loaded Bible, the app that prepares a gift Bible: making a kit, printing the tabs and cards, saved verses, and how to reach me."
/>

<article class="max-w-3xl w-full pb-24">
	<h1 class="text-[34px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.025em] text-balance">
		Loaded Bible support
	</h1>
	<p class="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
		Loaded Bible is made by one person. If something is broken or confusing, write to
		<a class="text-purple-800 dark:text-purple-200 underline" href="mailto:hi@bishwas.net">hi@bishwas.net</a>
		and I will answer, usually within two days. Saying which iPhone and which version of iOS you have helps.
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
			Everything you make in Loaded Bible stays on your iPhone: your kits, the names you type, your
			messages and the verses you save. There is no account, and nothing is sent to me or to anyone else.
		</p>
	</section>
</article>
