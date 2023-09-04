<script>
	import { t } from '$lib/translations';
	import NavBar from '../../components/navbar.svelte';
	import Footer from '../../components/footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href={`https://fonts.googleapis.com/css2?family=${$t(
			'common.bodyFont'
		)}:wght@400;700&family=${$t('common.headerFont')}&display=swap`}
		rel="stylesheet"
	/>
</svelte:head>

<NavBar />

<slot />

<Footer />

<style>
	:global(h1) {
		font-size: 2.5em;
		margin: 0;
	}

	:global(h2) {
		font-size: 2em;
		margin: 0;
	}

	:global(body) {
		margin: 0;
		font-family: var(--bodyFont), Inter, sans-serif;
		color: white;
		scroll-padding-top: 40px;
	}
</style>
