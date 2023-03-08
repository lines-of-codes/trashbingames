<style>
  :global(body) {
    margin: 0;
    font-family: Inter, sans-serif;
    color: white;
  }
  
  header {
    font-family: Staatliches, Inter, sans-serif;
    text-align: center;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: no-repeat linear-gradient(to bottom, #000000 25%, #434343 50%, #000000 75%);
  }
  
  h1, header p {
    margin: 0;
  }
  
  main section {
    padding: 10vw;
  }
  
  #watchtower {
    background: no-repeat url("/images/WatchtowerScreenshot.png");
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
  
  button {
    cursor: pointer;
    border-radius: 10px;
    font: inherit;
    border: 3px solid white;
    color: inherit;
    background: rgba(0, 0, 0, 0.5);
    transform: translateX(0);
    transition: 250ms;
    padding: 15px;
  }
  
  button:hover {
    background: rgba(0, 0, 0, 0.75);
    transform: translateX(5px);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
</style>

<header>
  <div>
    <h1>Trashbin Games</h1>
    <p>We make trash games.</p>
  </div>
</header>

<main>
  <section id="watchtower">
    <div>
      <h1>Watchtower</h1>
      <p>
        A comedy, fantasy, futuristic, classic, action, horror game.
      </p>
    </div>
    <div></div>
    <div class="learnmore">
      <a href="/watchtower"><button>Learn More <i class="bi bi-chevron-right"></i></button></a>
    </div>
  </section>
</main>
