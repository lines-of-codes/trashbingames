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
			<a href="/watchtower" class="linkbtn">
				{$t('common.learnMore')} <i class="bi bi-chevron-right" />
			</a>
		</div>
	</section>
	<section id="dreams">
		<div>
			<h1>Dreams</h1>
			<span>{$t('games.dreams.tagline')}</span>
		</div>
		<a href="/dreams" class="linkbtn blackborder scale">{$t('common.learnMore')}</a>
	</section>
	<!-- <section id="canvalatex">
		<h1>LaTeX for Canva</h1>
		<p>
			{$t('softwares.canvalatex.tagline')}
		</p>
		<br />
		<a href="/latexforcanva" class="linkbtn blackborder scale"
			>{$t('common.learnMore')} <i class="bi bi-chevron-right" /></a
		>
	</section> -->
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
		background: no-repeat url('/images/Watchtower/CaveDay.png');
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

	#dreams {
		background: no-repeat url('/images/Dreams/GreenGrassland.png');
		background-size: cover;
		background-position: center;
		color: black;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;
		height: 50vh;
		text-align: center;
	}

	/* 
	#canvalatex {
		color: black;
		background-image: url('/images/LaTeX_Math_Cropped_Gradient.png');
	}
	*/

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

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
