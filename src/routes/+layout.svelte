<script lang="ts">
	import 'iconify-icon';
	import '$styles/app.css';

	import '$fonts/styles/noto-sans.css';

	import AppearanceSwitch from '$item/AppearanceSwitch.svelte';
	import Navbar from '$item/Navbar.svelte';
	import Footer from '$item/Footer.svelte';
	import { avatarFlight } from '$utils/avatar-flight';

	let { children } = $props();

	avatarFlight();
</script>

<div
	class="text-slate-900 dark:text-slate-100 w-full min-h-screen flex flex-col relative z-10 pb-7"
>
	<Navbar />
	<main class="pt-9 flex flex-col items-center">
		<div class="flex flex-col items-center w-full px-4">
			{@render children()}
		</div>
	</main>
	<Footer />
	<AppearanceSwitch />
</div>

<div class="fixed top-0 w-screen h-screen">
	<div
		class="h-full w-full bg-linear-to-b from-purple-100/75 to-slate-200/75 dark:from-gray-950/95 dark:to-slate-950/95"
	></div>
	<img
		src="/bg.png"
		alt="Bishwas Bhandari PNG"
		class="-z-10 bg-black opacity-20 invert dark:invert-0 w-full h-full absolute top-0 left-0"
	/>
</div>
