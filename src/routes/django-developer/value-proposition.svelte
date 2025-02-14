<script lang="ts">
	import AwesomeCard from "$item/AwesomeCard.svelte";
</script>

<div class="mt-10 mb-12">
	<div class="relative">
		<div
			class="absolute left-0 w-1 h-full bg-gradient-to-b from-green-500/40 to-transparent rounded-full"></div>

		<div class="pl-6">
			<h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Why This Journey Matters
			</h3>

			<p class="text-gray-800 dark:text-gray-200 mb-4">
				What sets me apart isn't just technical expertise with Django – it's understanding how to
				transform business requirements into elegant solutions. From automating tedious tasks to
				building frameworks that simplify development, each project has been about solving real
				problems effectively.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
				<AwesomeCard unglow>
					{#snippet cus()}
						<h4 class="font-semibold mb-2">For Teams</h4>
						<p class="text-sm text-gray-700 dark:text-gray-300">
							Need to scale your Django applications? I bring experience in building and maintaining
							large-scale Django systems, with a focus on maintainable, efficient code that grows with
							your needs.
						</p>
					{/snippet}
				</AwesomeCard>

				<AwesomeCard unglow>
					{#snippet cus()}
						<h4 class="font-semibold mb-2">For Projects</h4>
						<p class="text-sm text-gray-700 dark:text-gray-300">
							Looking for Django expertise? I offer technical leadership and hands-on development,
							bringing enterprise-level Django experience to your challenges.
						</p>
					{/snippet}
				</AwesomeCard>
			</div>

			<p class="mt-6 text-gray-800 dark:text-gray-200">
				Every project is an opportunity to demonstrate that Django development can be both powerful
				and efficient. Whether you're starting fresh or evolving existing systems, I help create
				solutions that deliver exceptional results while maintaining clean, maintainable codebases.
			</p>
		</div>
	</div>
</div>