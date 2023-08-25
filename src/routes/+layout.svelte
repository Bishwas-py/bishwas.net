<script lang="ts">
    import 'iconify-icon';
    import '$styles/app.postcss';
    import '$styles/icons.postcss';
    import '$styles/app.postcss';
    import '$fonts/styles/play-fair.css';
    import '$fonts/styles/combo.css';
    import '$fonts/styles/lato.css';
    import '$fonts/styles/source-sans-pro.css';
    import '$fonts/styles/inter.css';
    import '$fonts/styles/dancing-script.css';
    import '$fonts/styles/poppins.css';
    import '$fonts/styles/noto-sans.css';
    import AppearanceSwitch from "$item/AppearanceSwitch.svelte";
    import Navbar from "$item/Navbar.svelte";
</script>

<div class="be-love">
    <Navbar/>
    <main>
        <div class="spread-love">
            <slot/>
        </div>
    </main>
    <AppearanceSwitch/>
</div>

<div class="bg-overlay">
    <div class="overlay"></div>
    <img src="/bg.png" alt="Bishwas Bhandari PNG">
</div>

<style lang="postcss">
    div.be-love {
        @apply font-inter;
        @apply text-slate-900 dark:text-slate-100;
        @apply w-full min-h-screen;
        @apply flex flex-col;
        @apply relative;
        @apply z-10;
    }

    main {
        @apply pt-9 pb-7;
        @apply flex flex-col items-center;
    }

    main div.spread-love {
        @apply flex flex-col items-center;
        @apply w-full px-4;
    }

    .bg-overlay {
        @apply fixed top-0 w-screen h-screen;
    }
    .bg-overlay .overlay {
        @apply h-full w-full;
        @apply bg-gradient-to-b;
        @apply from-purple-100/75 to-slate-200/75;
        @apply dark:from-gray-950/95 dark:to-slate-950/95;
    }
    .bg-overlay img {
        @apply -z-10 bg-black opacity-20 invert dark:invert-0;
        @apply w-full h-full;
        @apply absolute top-0 left-0;
    }
</style>