<script lang="ts">
	import { t } from '$lib/translations';
    import katex from 'katex';
    import 'katex/dist/katex.min.css';
    import '../common.css';

    const katexLogo = katex.renderToString("\\KaTeX");
    const latexLogo = katex.renderToString("\\LaTeX");
</script>

<svelte:head>
    <title>LaTeX for Canva - Trashbin Games</title>
    <meta name="title" content="LaTeX for Canva - Trashbin Games" />
	<meta name="description" content="Insert math expressions into your Canva designs." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://trashbingames.vercel.app/latexforcanva" />
	<meta property="og:title" content="LaTeX for Canva - Trashbin Games" />
	<meta property="og:description" content="Insert math expressions into your Canva designs." />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://trashbingames.vercel.app/latexforcanva" />
	<meta property="twitter:title" content="LaTeX for Canva - Trashbin Games" />
	<meta property="twitter:description" content="Insert math expressions into your Canva designs." />
</svelte:head>

<header>
    <h1>{@html latexLogo}<div>for Canva</div></h1>
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
            <a href="/latexforcanva/terms#terms">Terms and conditions</a>
            <a href="/latexforcanva/terms#privacy">Privacy Policy</a>
        </div>
    </section>
</main>

<style>
    header {
        text-align: center;
        color: black;
        padding: 15vh 0;
    }

    header > h1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    header > h1 > div {
        font-size: 1rem;
    }

    section {
        background: linear-gradient(to right, #101010, #202020, #101010);
        padding: 10vh 10vw;
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