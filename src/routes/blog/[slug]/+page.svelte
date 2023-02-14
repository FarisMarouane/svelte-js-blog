<script>
	import dayjs from 'dayjs';
	import '@fontsource/montserrat/900.css';

	export let data;
	const { id: currentArticleId } = data.frontmatter;

	let articlesLinks = [];

	for (const articleMetadata of data.articlesMetadata) {
		if (articleMetadata.id + 1 === currentArticleId) {
			articlesLinks.push({
				name: articleMetadata.title,
				path: articleMetadata.slug,
				id: articleMetadata.id
			});
		}

		if (articleMetadata.id - 1 === currentArticleId) {
			articlesLinks.push({
				name: articleMetadata.title,
				path: articleMetadata.slug,
				id: articleMetadata.id
			});
		}
	}
</script>

<!-- const font = Montserrat({ subsets: ['latin'], weight: '900' }); -->

<!-- export function getStaticPaths() {
  const articlesMetadata = getAllArticlesMetadata();

  return {
    paths: articlesMetadata.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
} -->

<svelte:head>
	<title>{data.frontmatter.title}</title>
	<meta name="author" content="Marouane Faris" />
	<meta name="description" content={data.frontmatter.metaDesc} />
	<meta property="og:url" content={`https://www.marouanefaris.dev/blog/${data.frontmatter.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${data.frontmatter.title}`} />
	<meta property="og:description" content={`${data.frontmatter.metaDesc}`} />
</svelte:head>
<main>
	<article>
		<header>
			<h1 class="title">{data.frontmatter.title}</h1>
			<small class="small">
				{dayjs(data.frontmatter.publicationDate).format('MMMM D, YYYY')}
				&nbsp;&bull;&nbsp;
				{data.frontmatter.readingTime}
			</small>
		</header>
		<article>
			{@html data.articleContent}
		</article>
	</article>
</main>

<!-- <ArticleNavigation {currentArticleId} {articlesLinks} /> -->
<style>
	.title {
		font-family: 'Montserrat';
		font-weight: 900;
	}

	.small {
		font-size: 0.8rem;
		line-height: 1.75rem;
		display: block;
		margin-bottom: 1.75rem;
		margin-top: -1.4rem;
	}
</style>
