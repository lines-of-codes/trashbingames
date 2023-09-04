<script>
	import { t } from '$lib/translations';
	import './common.css';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Welcome to the Trashbin Land</title>
	<meta name="title" content="Welcome to the Trashbin Land" />
	<meta name="description" content="We make trash games... and software." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://trashbingames.vercel.app" />
	<meta property="og:title" content="Welcome to the Trashbin Land" />
	<meta property="og:description" content="We make trash games... and software." />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://trashbingames.vercel.app" />
	<meta property="twitter:title" content="Welcome to the Trashbin Land" />
	<meta property="twitter:description" content="We make trash games... and software." />
</svelte:head>

<header>
	<div>
		<h1>Trashbin Games</h1>
		<p>{$t('common.slogan')}</p>
	</div>
</header>

<main>
	<section id="watchtower">
		<div>
			<h2>Watchtower</h2>
			<p>
				{$t('games.watchtower.description')}
			</p>
		</div>
		<div />
		<div class="learnmore">
			<a href="/watchtower" class="linkbtn"
				>{$t('common.learnMore')} <i class="bi bi-chevron-right" /></a
			>
		</div>
	</section>
	<section id="canvalatex">
		<h1>CanvaLaTeX</h1>
		<p>
			{$t('softwares.canvalatex.tagline')}
		</p>
		<br />
		<a href="/canvalatex" class="linkbtn blackborder scale"
			>{$t('common.learnMore')} <i class="bi bi-chevron-right" /></a
		>
	</section>
	<section id="storytailor">
		<div>
			<h2>StoryTailor</h2>
			<p>
				{$t('softwares.storytailor.tagline')}<br />
				Coming soon...
			</p>
		</div>
	</section>
</main>

<style>
	header {
		font-family: var(--headerFont), var(--bodyFont), sans-serif;
		text-align: center;
		height: 35vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: no-repeat linear-gradient(to bottom, #434343 50%, #000000 99%);
	}

	h1,
	header p {
		margin: 0;
	}

	main section {
		padding: 10vw;
	}

	#watchtower {
		background: no-repeat url('/images/WatchtowerScreenshot.png');
		background-size: cover;
		background-position: center;
		text-align: left;
		height: 50vh;
		display: grid;
		grid-template: 1fr 2fr 1fr;
	}

	#watchtower .learnmore {
		display: flex;
		align-items: end;
	}

	#canvalatex {
		color: black;
	}

	#storytailor {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: linear-gradient(to bottom, #050505, #000000);
	}

	#watchtower .linkbtn:hover {
		background: rgba(0, 0, 0, 0.25);
		transform: translateX(5px);
	}

	#canvalatex {
		background-image: url("/images/LaTeX_Math_Cropped_Gradient.png");
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
