<script>
	import { t } from '$lib/translations';
	import NavBar from '../../components/navbar.svelte';
	import Footer from '../../components/footer.svelte';

	const titleFont = "'Special Elite', Staatliches, Inter, sans-serif";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href={`https://fonts.googleapis.com/css2?family=${$t(
			'common.bodyFont'
		)}:wght@400;700&family=Special+Elite&family=${$t('common.headerFont')}&display=swap`}
		rel="stylesheet"
	/>
</svelte:head>

<NavBar {titleFont} isSolid={false} />

<slot />

<Footer {titleFont} />

<style>
	:global(body) {
		color: white;
		margin: 0;
		font-family: var(--bodyFont), sans-serif;
	}
</style>
