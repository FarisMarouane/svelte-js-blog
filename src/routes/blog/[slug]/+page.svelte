<script>
	import dayjs from 'dayjs';

	import ArticleNavigation from '../../../components/ArticleNavigation.svelte';

	export let data;
	let articlesLinks = [];

	$: currentArticleId = data.frontmatter.id;

	$: {
		// re -initialize links
		articlesLinks = [];

		for (const articleMetadata of data.articlesMetadata) {
			// Previous article
			if (articleMetadata.id + 1 === currentArticleId) {
				articlesLinks = [
					...articlesLinks,
					{
						name: articleMetadata.title,
						path: articleMetadata.slug,
						id: articleMetadata.id
					}
				];
			}

			// Following article
			if (articleMetadata.id - 1 === currentArticleId) {
				articlesLinks = [
					...articlesLinks,
					{
						name: articleMetadata.title,
						path: articleMetadata.slug,
						id: articleMetadata.id
					}
				];
			}
		}
	}
</script>

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

<ArticleNavigation {currentArticleId} {articlesLinks} />

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
