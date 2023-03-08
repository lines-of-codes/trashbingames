<script></script>

<main>
  <h1>My Socials</h1>
  <div class="socials">
    <div class="social">
      <a href="mailto:LinesOfCodes@proton.me">
        <h2>Email</h2>
        <div class="subtitle">LinesOfCodes@proton.me</div>
      </a>
    </div>
    <div class="social">
      <h2>Discord</h2>
      <div class="subtitle">GameCreator#8053</div>
    </div>
    <div class="social">
      <a href="https://twitter.com/trashbin_trash" target="_blank" rel="noreferrer">
        <h2>Twitter</h2>
        <div class="subtitle">@trashbin_trash</div>
      </a>
    </div>
  </div>
</main>

<style>
:global(body) {
  margin: 0;
  color: white;
  font-family: Inter, sans-serif;
}

main {
  min-height: 50vh;
  background: black;
  text-align: center;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3em;
}

h2 {
  margin: 0;
  font-size: 2em;
}

a {
  text-decoration: none;
  color: inherit;
}

.socials {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
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
</style>