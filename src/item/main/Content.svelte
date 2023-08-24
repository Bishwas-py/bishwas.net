<script lang="ts">
    import {fade} from "svelte/transition";
</script>

<div in:fade={{delay: 1220}}>
    <div class="intro max-w-3xl mt-12">
        <h2 class="text-2xl font-noto-sans mb-3">Intro</h2>
        <p class="text-lg font-noto-sans">
        <p class="text-lg font-noto-sans">
            I'm a software engineer with 5 years of experience. I design and develop fast, reliable and readable
            applications for global businesses. I have strong technical, communication and product management skills. I
            love
            mentoring, tutoring and contributing to open-source projects.
        </p>
    </div>


    <div class="max-w-3xl mt-12">
        <h2 class="text-2xl font-noto-sans mb-3">Why I Exist?</h2>
        <p class="text-lg font-noto-sans">
            My purpose is to serve humans via shaping innovative web solutions. As a full-stack developer, I fuse
            technology with positive change, crafting impactful digital experiences that weave into the fabric of human
            existence.
        </p>

        <div class="tags justify-start items-start mt-12">
            <a class="social-tag github" in:fade={{delay: 770}} href="https://github.com/bishwas-py" target="_blank">
                <iconify-icon icon="mdi:github"></iconify-icon>
            </a>
            <a class="social-tag linkedin" in:fade={{delay: 790}} href="https://www.linkedin.com/in/bishwasbh/"
               target="_blank">
                <iconify-icon icon="mdi:linkedin"></iconify-icon>
            </a>
            <a class="social-tag twitter" in:fade={{delay: 810}} href="https://twitter.com/BhBishwas" target="_blank">
                <iconify-icon icon="mdi:twitter"></iconify-icon>
            </a>
            <a class="social-tag instagram" in:fade={{delay: 830}} href="https://www.instagram.com/bishwas.py/"
               target="_blank">
                <iconify-icon icon="mdi:instagram"></iconify-icon>
            </a>
            <a class="social-tag facebook" in:fade={{delay: 850}} href="https://www.facebook.com/bishwasbh/"
               target="_blank">
                <iconify-icon icon="mdi:facebook"></iconify-icon>
            </a>

        </div>
    </div>
</div>

<style lang="postcss">
</style>