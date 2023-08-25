<script lang="ts">
    import {fly, fade} from "svelte/transition";
</script>

<svelte:head>
    <title>Projects | Bishwas</title>
</svelte:head>

<div class="intro">
    <p>
        I have worked on many projects, some of them are my own and some of them are for clients, using
        different technologies and frameworks, from small to large scale projects.
    </p>

    <p class="mt-7">
        Here are some of the projects that I have worked on.
    </p>

    <div class="tags mt-7">
        <a class="skill-tag typescript" href="https://www.npmjs.com/package/seord" target="_blank"
           in:fade>
            <span class="tag-text">SEOrd</span>
            <iconify-icon icon="mdi:language-typescript"></iconify-icon>
        </a>
        <a class="skill-tag python" href="https://pypi.org/project/fiverr-api/" target="_blank" in:fade>
            <span class="tag-text">Fiverr API</span>
            <iconify-icon icon="mdi:language-python"></iconify-icon>
        </a>
        <a class="skill-tag react" href="https://github.com/Bishwas-py/speedclicking.com" target="_blank" in:fade>
            <span class="tag-text">Speed Clicking</span>
            <iconify-icon icon="simple-icons:react"></iconify-icon>
            <iconify-icon icon="simple-icons:tailwindcss"></iconify-icon>
            <iconify-icon icon="mdi:language-javascript"></iconify-icon>
        </a>
        <a class="skill-tag python" href="https://pypi.org/project/regxon/" target="_blank" in:fade>
            <span class="tag-text">RegXon</span>
            <iconify-icon icon="mdi:language-python"></iconify-icon>
        </a>
        <a class="skill-tag django" href="https://github.com/Bishwas-py/shazam" target="_blank" in:fade>
            <span class="tag-text">Shazam</span>
            <iconify-icon icon="simple-icons:svelte"></iconify-icon>
            <iconify-icon icon="mdi:language-python"></iconify-icon>
            <iconify-icon icon="simple-icons:django"></iconify-icon>
        </a>
        <a class="skill-tag javascript" href="https://github.com/Bishwas-py/bishwas.net" target="_blank"
           in:fade>
            <span class="tag-text">My Portfolio</span>
            <iconify-icon icon="simple-icons:svelte"></iconify-icon>
            <iconify-icon icon="simple-icons:typescript"></iconify-icon>
            <iconify-icon icon="simple-icons:tailwindcss"></iconify-icon>
        </a>
    </div>

</div>


<div class="image-tab">
    <a class="image" href="https://webmatrices.com" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 300, y: '53'}}>
        <img src="/projects/webmatrices.jpg" alt="webmatrices">
    </a>
    <a class="image" href="https://www.blogstorm.ai" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 700, y: '53'}}>
        <img src="/projects/blogstorm.jpg" alt="blogstorm">
    </a>
    <a class="image" href="https://www.webmatrices.com/long-tail-keywords" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 2000, y: '53'}}>
        <img src="/projects/webmatrices-long-form-used.jpg" alt="webmatrices long-tail keywords">
    </a>
    <a class="image" href="https://www.speedclicking.com" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 1200, y: '53'}}>
        <img src="/projects/speedclicking.jpg" alt="speedclicking game developed by bishwas using react/tailwind/nexjs">
    </a>
    <a class="image" href="https://www.xoomato.com" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 1500, y: '53'}}>
        <img src="/projects/xoomato.jpg" alt="xoomato, a url security service">
    </a>
    <a class="image" href="https://github.com/Bishwas-py/deviser-club" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 1700, y: '53'}}>
        <img src="/projects/deviser-club.jpg" alt="deviser club, a ruby on rails project" class="h-full">
    </a>
    <a class="image h-full" href="https://www.liveinabroad.com" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 2200, y: '53'}}>
        <img src="/projects/liveinabroad.jpg" alt="liveinabroad, a flarum forum project" class="h-full">
    </a>
    <a class="image" href="https://www.xoomato.com" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 2700, y: '53'}}>
        <img src="/projects/xoomato-front.jpg" alt="xoomato front page">
    </a>
    <a class="image" href="https://www.blogstorm.ai" target="_blank" rel="noopener noreferrer"
       in:fly={{duration: 3100, y: '53'}}>
        <img src="/projects/blogstorm-interface.jpg" alt="blogstorm interface, a project for AI content generation and optimization">
    </a>
</div>

<p class="outro">
    I have worked on many other projects, but I am not indexing them here because they are not public or I don't have
    the permission to share them.
</p>

<style lang="postcss">
    .image-tab {
        @apply max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
        @apply gap-10;
        @apply mt-16;
    }

    .image {
    }

    img {
        @apply w-full h-36;
        @apply rounded-lg;
        @apply shadow;
        @apply rounded-lg shadow-md;
        @apply outline outline-accent dark:outline-stone-950;
        @apply shadow hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-white/30 duration-200;
        @apply cursor-pointer;
    }

    .intro {
        @apply max-w-3xl;
    }

    p.outro {
        @apply max-w-3xl mt-16;
    }
</style>