<script></script>

<main>
  <section id="introbanner">
    <h1 id="gametitle">Watchtower</h1>
    <div>A little funny horror game.</div>
  </section>
  <section id="description">
    <div id="descriptionBackground"></div>
    <div id="descriptionContent">
      <div id="descriptionText">
        <h2>The Secret behind the Samalakkak National Park</h2>
        <div>Find the secret behind this National Park, What's in there?</div>
      </div>
      <img id="descriptionImage" src="images/WatchtowerNationalParkScreenshot.png" alt="Samalakkak National Park" />
    </div>
  </section>
  <section id="download">
    <h1>In Development...</h1>
    <p>
      The game is in development and is not available for public testing yet.
      Do contact me if you wanted to get the private testing build.
    </p>
  </section>
</main>

<style>
:global(body) {
  color: white;
  margin: 0;
  font-family: Inter, sans-serif;
}

main section {
  min-height: 75vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Amita, Inter, sans-serif;
}

#introbanner {
  background: no-repeat url("/images/WatchtowerNightScreenshot.png");
  align-items: center;
}

#description {
  position: relative;
}

#descriptionBackground {
  position: absolute;
  top: 0;
  left: 0;
  background: no-repeat url("/images/WatchtowerNationalParkScreenshot.png");
  background-size: cover;
  background-position: center;
  filter: blur(5px) brightness(0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
}

#descriptionContent {
  display: flex;
  justify-content: space-between;
  text-align: left;
  gap: none;
  padding: 10vw;
  z-index: 2;
}

#descriptionText {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#descriptionImage {
  aspect-ratio: 16 / 9;
  width: 25vw;
}

@media only screen and (max-width: 980px) {
  #descriptionContent {
    flex-direction: column;
    gap: 1em;
  }
  
  #descriptionImage {
    width: unset;
  }
}

#download {
  background: no-repeat url("/images/WatchtowerWatchtowerScreenshot.png");
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
</style>