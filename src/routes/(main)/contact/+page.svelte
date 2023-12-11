<script>
	import { t } from '$lib/translations';
</script>

<main>
	<h1>{$t('contact.title')}</h1>
	<p>
		{$t('contact.description1')}<br />
		{$t('contact.description2')}
	</p>
	<div class="socials">
		<div class="social">
			<a href="mailto:LinesOfCodes@proton.me">
				<h2>{$t('contact.email')}</h2>
				<div class="subtitle">LinesOfCodes@proton.me</div>
			</a>
		</div>
		<div class="social">
			<h2>{$t('contact.discord')}</h2>
			<div class="subtitle">gamecreator</div>
		</div>
		<div class="social">
			<a href="https://twitter.com/trashbin_trash" target="_blank" rel="noreferrer">
				<h2>X</h2>
				<div class="subtitle">@trashbin_trash</div>
			</a>
		</div>
	</div>
</main>

<style>
	main {
		min-height: 55vh;
		background: black;
		text-align: center;
		padding: 5vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		font-size: 3em;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	.socials {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.social {
		transition: 250ms;
	}

	.socials:hover > .social {
		opacity: 0.3;
	}

	.socials:hover > .social:hover {
		opacity: 1;
	}

	.social .subtitle {
		opacity: 0;
		transition: 250ms;
	}

	.social:hover .subtitle {
		opacity: 1;
	}

	@media only screen and (any-hover: none) {
		.social .subtitle {
			opacity: 1;
		}
	}
</style>
