<script>
  import { t } from '$lib/translations';
  
  export let titleFont = "Staatliches, Inter, sans-serif";
</script>

<footer>
  <h2 class="studiotitle" style={`font-family: ${titleFont};`}>Trashbin Games</h2>
  <div id="footerelements">
    <a href="/">{$t('common.home')}</a>
    <a href="/contact">{$t('common.contact')}</a>
    <a href="/about">{$t('common.about')}</a>
  </div>
  <div id="finalwords">
    {$t('common.footerLastWords')}
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
