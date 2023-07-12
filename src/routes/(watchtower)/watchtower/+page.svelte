<script></script>

<main>
  <section id="introbanner">
    <h1 id="gametitle">Watchtower</h1>
    <div>A little funny horror game.</div>
  </section>
  <section id="description">
    <div id="descriptionBackground" class="sectionbackground"></div>
    <div id="descriptionContent" class="sectioncontent">
      <div id="descriptionText">
        <h2>The Secret behind the National Park</h2>
        <div>Find the secret behind this National Park, What's in there?</div>
      </div>
      <img id="descriptionImage" src="images/WatchtowerNationalParkScreenshot.png" alt="Samalakkak National Park" />
    </div>
  </section>
  <section id="beauty">
    <div id="beautifulBackground" class="sectionbackground"></div>
    <div id="beautifulContent" class="sectioncontent">
      <img id="beautifulImage" src="images/WatchtowerMountainScreenshot.png" alt="Samalakkak National Park" />
      <div id="beautifulText">
        <h2>Travel through the amazing atmospehere</h2>
        <div>Feel the beauty of nature.</div>
      </div>
    </div>
  </section>
  <section id="systemrequirements">
    <div id="requirementsBackground" class="sectionbackground"></div>
    <div id="requirementsContent" class="sectioncontent">
      <h1>System Requirements</h1>
      <table>
        <thead>
          <tr>
            <td></td>
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
            <td colspan="2">
            Voice: English; Text: English
            </td>
          </tr>
          <tr>
            <td>Note</td>
            <td colspan="2">Minimum specification tested on Bodhi Linux at Extremely Low quality mode.</td>
          </tr>
        </tbody>
      </table>
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

#description, #systemrequirements, #beauty {
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
  background: no-repeat url("/images/WatchtowerNationalParkScreenshot.png");
  filter: brightness(0.5);
}

.sectioncontent {
  display: flex;
  text-align: left;
  gap: none;
  padding: 10vw;
  z-index: 2;
}

#descriptionContent, #beautifulContent {
  justify-content: space-between;
}

#descriptionText, #beautifulText {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#descriptionImage, #beautifulImage {
  aspect-ratio: 16 / 9;
  width: 25vw;
}

#beautifulBackground {
  background: no-repeat url("/images/WatchtowerMountainScreenshot.png");
  filter: brightness(0.5);
}

@media only screen and (max-width: 980px) {
  #descriptionContent, #beautifulContent {
    flex-direction: column;
    gap: 1em;
  }
  
  #descriptionImage, #beautifulImage {
    width: unset;
  }
}

#requirementsBackground {
  background: no-repeat url("/images/WatchtowerFlowerScreenshot.png");
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

thead tr, tbody tr td:first-child {
  background: rgba(100, 100, 100, 0.5);
}

td {
  padding: 5px 10px;
  border: 1px solid darkgray;
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