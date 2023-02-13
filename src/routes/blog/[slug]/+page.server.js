import { getAllArticlesMetadata, getArticleFromSlug } from '../../../../utils/utils';
import markdownToHtml from '../../../../utils/markdownToHtml';

export async function load({ params }) {
	const { slug } = params;
	const { content, frontmatter } = getArticleFromSlug(slug);
	const articlesMetadata = getAllArticlesMetadata();

	const htmlContent = await markdownToHtml(content);

	return {
		articleContent: htmlContent,
		frontmatter,
		articlesMetadata: articlesMetadata.map(({ slug, id, title }) => ({
			slug,
			id,
			title
		}))
	};
}
