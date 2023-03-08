<script>
export let titleFont = "Staatliches, Inter, sans-serif";
</script>

<footer>
  <h2 class="studiotitle" style={`font-family: ${titleFont};`}>Trashbin Games</h2>
  <div id="footerelements">
    <a href="/">Home</a>
    <a href="#">Games</a>
    <a href="#">Join us</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
  </div>
  <div id="finalwords">
    Made with ❤️ by Trashbin Games and its supporter.
  </div>
</footer>

<style>
  footer {
    background: linear-gradient(to bottom, #000000, #434343);
    text-align: center;
    padding: 30px;
  }
  
  #footerelements {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  #footerelements a {
    color: inherit;
    text-decoration: none;
    transition: 250ms;
    transform: scale(1, 1);
  }
  
  #footerelements a:hover {
    transform: scale(1.1, 1.1);
  }
  
  #finalwords {
    margin: 20px;
  }
</style>
