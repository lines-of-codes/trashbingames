<script>
	import { t } from '$lib/translations';
</script>

<main>
	<section id="introbanner">
		<h1 id="gametitle">Watchtower</h1>
		<div>
			{$t('games.watchtower.description')}
		</div>
	</section>
	<section id="description">
		<div id="descriptionBackground" class="sectionbackground" />
		<div id="descriptionContent" class="sectioncontent">
			<div id="descriptionText">
				<h2>The Secret behind the National Park</h2>
				<div>Find the secret behind this National Park, What's in there?</div>
			</div>
			<img
				id="descriptionImage"
				src="images/Watchtower/NationalPark.png"
				alt="Samalakkak National Park"
			/>
		</div>
	</section>
	<section id="beauty">
		<div id="beautifulBackground" class="sectionbackground" />
		<div id="beautifulContent" class="sectioncontent">
			<img
				id="beautifulImage"
				src="images/Watchtower/Mountain.png"
				alt="Samalakkak National Park's Mountain"
			/>
			<div id="beautifulText">
				<h2>Travel through the amazing atmospehere</h2>
				<div>Feel the beauty of nature.</div>
			</div>
		</div>
	</section>
	<section id="systemrequirements">
		<div id="requirementsBackground" class="sectionbackground" />
		<div id="requirementsContent" class="sectioncontent">
			<h1>System Requirements</h1>
			<table>
				<thead>
					<tr>
						<td />
						<td>Minimum</td>
						<td>Recommended</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>OS</td>
						<td>64-bit Windows 7 and newer</td>
						<td>64-bit Windows 7 and newer</td>
					</tr>
					<tr>
						<td>CPU</td>
						<td>5th Gen Intel CPU equivalent or higher</td>
						<td>7th Gen Intel Core i3 or equivalent or higher</td>
					</tr>
					<tr>
						<td>RAM</td>
						<td>2GB</td>
						<td>4GB</td>
					</tr>
					<tr>
						<td>Storage</td>
						<td>1GB</td>
						<td>1GB</td>
					</tr>
					<tr>
						<td>DirectX</td>
						<td colspan="2">DirectX 11</td>
					</tr>
					<tr>
						<td>Languages</td>
						<td colspan="2"> Voice: English; Text: English </td>
					</tr>
					<tr>
						<td>Note</td>
						<td colspan="2"
							>Minimum specification tested on Bodhi Linux at Extremely Low quality mode.</td
						>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	<section id="download">
		<h1>In Development...</h1>
		<p>
			The game is in development and is not available for public testing yet. Do contact me if you
			wanted to get the private testing build.
		</p>
		<button on:click={() => (window.location.href = '/contact')}>Contact</button>
	</section>
</main>

<style>
	main section {
		min-height: 95vh;
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-family: Amita, var(--bodyFont), sans-serif;
	}

	#introbanner {
		background: no-repeat url('/images/Watchtower/CaveNight.png');
		align-items: center;
	}

	#description,
	#systemrequirements,
	#beauty {
		position: relative;
	}

	.sectionbackground {
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	#descriptionBackground {
		background: no-repeat url('/images/Watchtower/NationalPark.png');
		filter: brightness(0.5);
	}

	.sectioncontent {
		display: flex;
		text-align: left;
		gap: none;
		padding: 10vw;
		z-index: 2;
	}

	#descriptionContent,
	#beautifulContent {
		justify-content: space-between;
	}

	#descriptionText,
	#beautifulText {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	#descriptionImage,
	#beautifulImage {
		aspect-ratio: 16 / 9;
		width: 25vw;
	}

	#beautifulBackground {
		background: no-repeat url('/images/Watchtower/Mountain.png');
		filter: brightness(0.5);
	}

	@media only screen and (max-width: 980px) {
		#descriptionContent,
		#beautifulContent {
			flex-direction: column;
			gap: 1em;
		}

		#descriptionImage,
		#beautifulImage {
			width: unset;
		}
	}

	#requirementsBackground {
		background: no-repeat url('/images/Watchtower/FlowerField.png');
		filter: brightness(0.5) blur(5px);
	}

	#requirementsContent {
		text-align: left;
		flex-direction: column;
		align-items: center;
	}

	table {
		border-collapse: collapse;
	}

	thead tr,
	tbody tr td:first-child {
		background: rgba(100, 100, 100, 0.5);
	}

	td {
		padding: 5px 10px;
		border: 1px solid darkgray;
	}

	#download {
		background: no-repeat url('/images/Watchtower/Watchtower.png');
		align-items: center;
		padding: 0 10vw 0 10vw;
	}

	h1 {
		font-size: 3em;
		margin: 0;
	}

	h2 {
		font-size: 2em;
		margin: 0;
	}

	button {
		font: inherit;
		padding: 5px 15px;
		border: 2px solid transparent;
		border-image-slice: 1;
		background: rgba(75, 75, 75, 0.2);
		color: white;
		transition: 500ms;
		cursor: pointer;
	}

	button:hover {
		background: rgba(75, 75, 75, 0.5);
		border-image-source: linear-gradient(to right, gold, goldenrod);
	}
</style>
