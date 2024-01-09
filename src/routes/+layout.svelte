<script lang="ts">
    import 'iconify-icon';
    import '$styles/app.postcss';
    import '$styles/icons.postcss';

    import '$fonts/styles/noto-sans.css';
    import '$fonts/styles/work-sans.css';

    import AppearanceSwitch from "$item/AppearanceSwitch.svelte";
    import Navbar from "$item/Navbar.svelte";
    import Footer from "$item/Footer.svelte";
</script>

<div class="layout-container">
    <Navbar/>
    <main>
        <div class="spread-love">
            <slot/>
        </div>
    </main>
    <Footer/>
    <AppearanceSwitch/>
</div>

<div class="bg-overlay">
    <div class="overlay"></div>
    <img src="/bg.png" alt="Bishwas Bhandari PNG">
</div>

<style lang="postcss">
    div.layout-container {
        @apply font-noto-sans
        text-slate-900 dark:text-slate-100
        w-full min-h-screen
        flex flex-col relative z-10 pb-7;
    }

    main {
        @apply pt-9 flex flex-col items-center;
    }

    main div.spread-love {
        @apply flex flex-col items-center w-full px-4;
    }

    .bg-overlay {
        @apply fixed top-0 w-screen h-screen;
    }

    .bg-overlay .overlay {
        @apply h-full w-full bg-gradient-to-b from-purple-100/75 to-slate-200/75 dark:from-gray-950/95 dark:to-slate-950/95;
    }

    .bg-overlay img {
        @apply -z-10 bg-black opacity-20 invert dark:invert-0 w-full h-full absolute top-0 left-0;
    }
</style>