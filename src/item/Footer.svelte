<script lang="ts">
    import {fly} from "svelte/transition";
    import {page} from "$app/stores";

    let showExtraSocial = false;
</script>

<footer>
    <div class="footer-left">
        {#if showExtraSocial && $page.url.pathname === "/"}
            <div class="socials" in:fly={{y: 30, duration: 50}} out:fly={{y: 30, duration: 760}}>
                <a class="social-tag github" href="https://github.com/bishwas-py"
                   target="_blank"
                   rel="noopener noreferrer"
                   transition:fly={{y: 10, duration: 300}}>
                    <iconify-icon icon="mdi:github"></iconify-icon>
                </a>
                <a class="social-tag linkedin" href="https://www.linkedin.com/in/bishwasbh/"
                   target="_blank"
                   rel="noopener noreferrer"
                   transition:fly={{y: 15, duration: 390}}>
                    <iconify-icon icon="mdi:linkedin"></iconify-icon>
                </a>
                <a class="social-tag twitter" href="https://twitter.com/BhBishwas"
                   target="_blank"
                   rel="noopener noreferrer"
                   transition:fly={{y: 20, duration: 480}}>
                    <iconify-icon icon="mdi:twitter"></iconify-icon>
                </a>
                <a class="social-tag instagram" href="https://www.instagram.com/bishwas.py/"
                   target="_blank"
                   rel="noopener noreferrer"
                   transition:fly={{y: 25, duration: 570}}>
                    <iconify-icon icon="mdi:instagram"></iconify-icon>
                </a>
                <a class="social-tag facebook" href="https://www.facebook.com/bishwasbh/"
                   target="_blank"
                   rel="noopener noreferrer"
                   transition:fly={{y: 30, duration: 660}}>
                    <iconify-icon icon="mdi:facebook"></iconify-icon>
                </a>
            </div>
        {/if}
        {#if $page.url.pathname === "/"}
            <button class="go-link social-button"
                    on:click={() => showExtraSocial = !showExtraSocial}>
                <iconify-icon icon={showExtraSocial ? 'mdi:chevron-up' : 'mdi:chevron-down'}></iconify-icon>
                <span>socials</span>
            </button>
        {/if}
        <a class="go-link is-linkable"
           target="_blank"
           rel="noopener noreferrer"
           href="https://github.com/bishwas-py/">
            <iconify-icon icon="mdi:github"></iconify-icon>
            <span>git me</span>
        </a>
    </div>
    <a class="ml-auto go-link is-linkable"
       href="mailto:yo@bishwas.net">
        <iconify-icon icon="mdi:email"></iconify-icon>
        <span>mail me</span>
    </a>
</footer>

<style lang="postcss">
    footer {
        @apply mx-auto z-30 max-w-3xl justify-start w-full items-start mt-12 flex;
        @apply px-2;
    }

    .footer-left {
        @apply flex gap-2 flex-wrap relative md:gap-7;
    }
</style>