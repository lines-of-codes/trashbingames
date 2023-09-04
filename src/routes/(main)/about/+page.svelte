<script>
  import { t } from '$lib/translations';
</script>

<header>
  <div>
    <h1>Trashbin Games</h1>
    <p>{$t('common.slogan')}</p>
  </div>
</header>

<main>
  <p>
    Yes, literally, We make trash games.<br/>
    I mean I tried not to make trash games but 
    I finally admit that it's not possible with my current skill level.
  </p>
  
  <p>
    This is mainly a one man game studio, but I also have some supporters which will support me
    through the game development world, helping me in the side that I am not great at.
  </p>
  
  <p>
    Experience will make the trash better and better each time I make a new project.
    So I hope that one day, I will make the best trash which I'm the most proud of.
  </p>
  
  <p>
    I would of course feel very happy if you support me in any way possible.
    If you are sure you have some skills,
    You can also join me and the other supporters to make this trash better.
  </p>
</main>

<style>
  :global(body) {
    min-height: 90vh;
    text-align: center;
  }
  
  header {
    background: linear-gradient(black, #434343);
    font-family: var(--headerFont), var(--bodyFont), sans-serif;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  main {
    padding: 5vw 10vw 10vw 10vw;
    background: no-repeat linear-gradient(#434343 5%, black);
  }
  
  main > p {
    height: 25vh;
  }
</style>
