<script lang="ts">
    import {fade} from 'svelte/transition';

    let loadMore = $state(false);

    function toggleLoadMoreSkills() {
        loadMore = !loadMore;
    }
</script>

<div class="tags mt-5">
    <div class="skill-tag python" in:fade={{delay: 580}}>
        <span class="tag-text">Python</span>
        <iconify-icon icon="mdi:language-python"></iconify-icon>
    </div>
    <div class="skill-tag django" in:fade={{delay: 670}}>
        <span class="tag-text">Django</span>
        <iconify-icon icon="simple-icons:django"></iconify-icon>
    </div>
    <div class="skill-tag svelte" in:fade={{delay: 780}}>
        <span class="tag-text">Svelte</span>
        <iconify-icon icon="simple-icons:svelte"></iconify-icon>
    </div>
    {#if loadMore}
        <div class="skill-tag typescript" in:fade>
            <span class="tag-text">TypeScript</span>
            <iconify-icon icon="mdi:language-typescript"></iconify-icon>
        </div>
        <div class="skill-tag react" in:fade>
            <span class="tag-text">React.js</span>
            <iconify-icon icon="mdi:react"></iconify-icon>
        </div>
        <div class="skill-tag rails" in:fade>
            <span class="tag-text">Ruby on Rails</span>
            <iconify-icon icon="mdi:language-ruby-on-rails"></iconify-icon>
        </div>
        <div class="skill-tag tailwind" in:fade>
            <span class="tag-text">Tailwind CSS</span>
            <iconify-icon icon="simple-icons:tailwindcss"></iconify-icon>
        </div>
        <div class="skill-tag sockets" in:fade>
            <span class="tag-text">Sockets</span>
            <iconify-icon icon="mdi:broadcast"></iconify-icon>
        </div>
    {/if}
    <button class="load-more" on:click={toggleLoadMoreSkills} in:fade={{delay: 830}}>
        <span class="tag-text">{loadMore ? 'Show less' : 'Show more'}</span>
        <iconify-icon icon={loadMore ? 'mdi:chevron-up' : 'mdi:chevron-down'}></iconify-icon>
    </button>
</div>

<style lang="postcss">
    .load-more {
        @apply flex items-center justify-center;
        @apply active:scale-95 duration-200;
    }

    .load-more iconify-icon {
        @apply w-5 h-5;
        @apply text-xl;
    }
</style>