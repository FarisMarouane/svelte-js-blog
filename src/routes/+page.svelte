<script>
	export let data;
	import Footer from '../components/Footer.svelte';
	import ArticlePreview from '../components/ArticlePreview.svelte';
	import Aside from '../components/Aside.svelte';

	const allArticlesMetaData = data.allArticlesMetaData.sort((a, b) => {
		if (a.id < b.id) return -1;
		return 1;
	});
</script>

<svelte:head>
	<title>Marouane Faris</title>
	<meta name="author" content="Marouane Faris" />
	<meta name="description" content="Marouane Faris' Blog. Generated by create next app" />
	<meta property="og:url" content="https://www.marouanefaris.dev/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Marouane Faris' personnal blog" />
	<meta property="og:description" content="Marouane Faris' Blog. Made with Next JS" />
	<meta property="og:image" content="/photo_linkedin.jpeg" />
</svelte:head>

<Aside />
<main>
	{#each allArticlesMetaData as articleMetaData (articleMetaData.id)}
		<ArticlePreview
			title={articleMetaData.title}
			readingTime={articleMetaData.readingTime}
			publicationDate={articleMetaData.date}
			description={articleMetaData.metaDesc}
			slug={articleMetaData.slug}
		/>
	{/each}
</main>
<Footer />
