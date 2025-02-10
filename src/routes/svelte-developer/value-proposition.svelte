<script lang="ts">

	import AwesomeCard from "$item/AwesomeCard.svelte";

</script>

<div class="mt-10 mb-12">
  <div class="relative">
    <div
      class="absolute left-0 w-1 h-full bg-gradient-to-b from-orange-500/40 to-transparent rounded-full"
    ></div>

    <div class="pl-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Why This Journey Matters
      </h3>

      <p class="text-gray-800 dark:text-gray-200 mb-4">
        What sets me apart isn't just my technical expertise with Svelte – it's understanding
        that great code comes from developers who enjoy their craft. Having led teams through
        this journey, I've seen how the right tools and approaches can transform not just
        codebases, but the entire development experience.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <AwesomeCard unglow>
          {#snippet cus()}
            <h4 class="font-semibold mb-2">For Teams</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Looking to modernize your frontend? I bring tools that bring joy to your
              developers' daily work. With Svelte, your team will rediscover the peace of mind
              that comes from clean, intuitive code.
            </p>
          {/snippet}
        </AwesomeCard>

        <AwesomeCard unglow>
          {#snippet cus()}
            <h4 class="font-semibold mb-2">For Projects</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Need expertise for a critical project? I offer technical leadership and hands-on
              development, bringing enterprise-level Svelte experience to your challenges.
            </p>
          {/snippet}
        </AwesomeCard>
      </div>

      <p class="mt-6 text-gray-800 dark:text-gray-200">
        Every project is a chance to prove that development can be both powerful and peaceful.
        Whether you're starting fresh or evolving existing systems, I help create an environment
        where your team can thrive while delivering exceptional results.
      </p>
    </div>
  </div>
</div>
