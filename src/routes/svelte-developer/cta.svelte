<script>
	import FluentMail32Filled from '$icons/FluentMail32Filled.svelte';
	import FluentMeetNow32Filled from '$icons/FluentMeetNow32Filled.svelte';
</script>



<div class="flex flex-row flex-wrap gap-3 items-center justify-between">
	<h3 class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
		Ready to Transform?
	</h3>
	<div class="flex flex-wrap gap-4 items-center justify-between w-full sm:w-auto">
		<a
			href="https://calendar.app.google/GN4FVeLyi4YpHpRu9"
			class="group w-min flex items-center justify-center gap-3 px-6 py-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
		>
			<FluentMeetNow32Filled display class="w-5 h-5"/>
			<span class="whitespace-nowrap">Schedule a Meeting</span>
		</a>

		<a
			href="mailto:yo@bishwas.net"
			target="_blank"
			rel="noopener noreferrer"
			class="group w-min flex items-center justify-center gap-3 px-6 py-2 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white rounded-xl transition-all duration-300 "
		>
			<FluentMail32Filled display class="w-5 h-5"/>
			<span class="whitespace-nowrap">Let's Talk</span>
		</a>
	</div>
</div>
