<script>
import NavBar from '../../components/navbar.svelte';
import Footer from '../../components/footer.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
</svelte:head>

<NavBar />

<slot></slot>

<Footer />
