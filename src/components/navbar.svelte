<script>
import { onMount } from 'svelte';
import { fly } from 'svelte/transition';

export let titleFont = "Staatliches, Inter, sans-serif";
let displaylist = true;

onMount(() => {
  displaylist = window.innerWidth > 500;
  window.onresize = () => {
    if (window.innerWidth > 500 && !displaylist) {
      displaylist = true;
    } else if (window.innerWidth <= 500 && displaylist) {
      displaylist = false;
    }
  };
});
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
</svelte:head>

<nav>
  <a href="/">
    <h2 class="studiotitle" style={`font-family: ${titleFont};`}>Trashbin Games</h2>
  </a>
  <button id="openlist" on:click={() => {displaylist = !displaylist;}}>
    <i class="bi bi-list"></i>
  </button>
  {#if displaylist}
  <div id="navlist" transition:fly={{x: window.innerWidth, opacity: 1}}>
    <a href="/">Home</a>
    <a href="#">Games</a>
    <a href="#">Join us</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
  </div>
  {/if}
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    background: linear-gradient(to right, black, #434343);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5vw 0 2.5vw;
    z-index: 10;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: 250ms;
    transform: scale(1, 1);
  }
  
  a:hover {
    transform: scale(1.1, 1.1);
  }
  
  #openlist {
    display: none;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
  }
  
  #navlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-left: 30px;
    gap: 1em;
  }
  
  @media only screen and (max-width: 500px) {
    #navlist {
      position: fixed;
      top: 70.23px;
      left: -2.5vw;
      margin: 0;
      width: 100vw;
      height: calc(100vh - 15.5vw);
      flex-direction: column;
      background: linear-gradient(to left bottom, #434343, #000000);
    }
    
    #openlist {
      display: unset;
    }
  }
</style>