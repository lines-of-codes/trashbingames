<script>
	import { t, locale } from '$lib/translations';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let titleFont = 'Staatliches, Inter, sans-serif';
	export let isSolid = true;
	let displaylist = true;
	let language = 'en';

	onMount(() => {
		locale.subscribe((value) => (language = value));

		displaylist = window.innerWidth > 500;
		window.onresize = () => {
			if (window.innerWidth > 500 && !displaylist) {
				displaylist = true;
			} else if (window.innerWidth <= 500 && displaylist) {
				displaylist = false;
			}
		};
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
	/>
</svelte:head>

<nav class:solid={isSolid} class:transparent={!isSolid}>
	<a href="/">
		<h2 class="studiotitle" style={`font-family: ${titleFont};`}>Trashbin Games</h2>
	</a>
	<button
		id="openlist"
		on:click={() => {
			displaylist = !displaylist;
		}}
	>
		<i class="bi bi-list" />
	</button>
	{#if displaylist}
		<div id="navlist" transition:fly={{ x: window.innerWidth, opacity: 1 }}>
			<a href="/">{$t('common.home')}</a>
			<a href="/contact">{$t('common.contact')}</a>
			<a href="/about">{$t('common.about')}</a>
			<select bind:value={language} on:change={() => locale.set(language)}>
				<option value="en">English</option>
				<option value="th">ไทย</option>
			</select>
		</div>
	{/if}
</nav>

<style>
	nav {
		top: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0 2.5vw 0 2.5vw;
		z-index: 10;
	}

	nav.solid {
		position: sticky;
		background: linear-gradient(to right, black, #434343);
	}

	nav.transparent {
		position: fixed;
		background: rgba(0, 0, 0, 0.2);
		left: 0;
		right: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
		transition: 250ms;
		transform: scale(1, 1);
	}

	a:hover {
		transform: scale(1.1, 1.1);
	}

	select {
		padding: 3px 10px;
		background-color: #222222;
		color: white;
		border: 1px solid gray;
		border-radius: 5px;
		font: inherit;
	}

	#openlist {
		display: none;
		color: white;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.5em;
	}

	#navlist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		padding-left: 30px;
		gap: 1em;
	}

	@media only screen and (max-width: 500px) {
		#navlist {
			position: fixed;
			top: 40px;
			left: -2.5vw;
			margin: 0;
			width: 95vw;
			height: 50vh;
			flex-direction: column;
			background: linear-gradient(to left bottom, #434343, #000000);
			padding-bottom: 1em;
		}

		#openlist {
			display: unset;
		}
	}
</style>
