<script lang="ts">
	import { t } from '$lib/translations';
    import katex from 'katex';
    import 'katex/dist/katex.min.css';
    import '../common.css';

    const katexLogo = katex.renderToString("\\KaTeX");
    const latexLogo = katex.renderToString("\\LaTeX");
</script>

<svelte:head>
    <title>CanvaLaTeX - Trashbin Games</title>
</svelte:head>

<header>
    <h1><div><img src="/images/canva_wordmark_gradient.svg" alt="Canva" /></div>{@html latexLogo}</h1>
    <p>{$t("softwares.canvalatex.tagline")}</p>
</header>
<main>
    <section>
        <h1>Powered by <a href="https://katex.org/" target="_blank" rel="noopener noreferrer">{@html katexLogo}</a></h1>
        <p>
            This software mainly uses {@html katexLogo} and dom-to-image to render the {@html latexLogo} expression
             and create an image of it to import it to your design.
        </p>
    </section>
    <section>
        <h1>Need some support?</h1>
        <a class="linkbtn scale" href="/contact">Contact us</a>
    </section>
    <section id="legal">
        <h1>Legal Stuff</h1>
        <div>
            <a href="/canvalatex/terms">Terms and conditions</a>
            <a href="/canvalatex/privacy-policy">Privacy Policy</a>
        </div>
    </section>
</main>

<style>
    header {
        text-align: center;
        color: black;
        padding: 15vw 0;
    }

    header > h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header > h1 > div {
        display: inline-block;
    }

    header > h1 > div > img {
        width: 3em;
    }

    section {
        background: linear-gradient(to right, #101010, #202020, #101010);
        padding: 10vw 10vh;
    }

    a {
        color: inherit;
    }

    #legal {
        text-align: center;
    }

    #legal div {
        display: flex;
        justify-content: center;
        gap: 2em;
    }
</style>