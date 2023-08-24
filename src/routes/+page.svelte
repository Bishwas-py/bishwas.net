<script>
    import Hero from "$item/main/Hero.svelte";
    import {browser} from "$app/environment";
    import Content from "$item/main/Content.svelte";
</script>

<svelte:head>
    <title>Bishwas Bhandari | Intro</title>
</svelte:head>


{#key browser}
    <Hero/>
    <hr class="w-full mt-11 border-blue-600/5"/>
    <Content/>
{/key}