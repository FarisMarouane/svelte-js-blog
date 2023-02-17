import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const articlesPath = path.join(process.cwd(), 'data/blog');

export function getArticleFromSlug(slug) {
	const articleDir = path.join(articlesPath, `${slug}.md`);
	const source = fs.readFileSync(articleDir);
	const { content, data } = matter(source);

	return {
		content,
		frontmatter: {
			slug,
			metaDesc: data.metaDesc,
			title: data.title,
			date: data.date,
			readingTime: readingTime(source.toString()).text,
			...data
		}
	};
}

export function getAllArticlesMetadata() {
	const articles = fs.readdirSync(articlesPath);

	return articles.reduce((allArticlesMetadata, currentArticle) => {
		const source = fs.readFileSync(path.join(articlesPath, currentArticle), 'utf-8');
		const { data } = matter(source);

		return [
			{
				...data,
				slug: currentArticle.replace('.md', ''),
				readingTime: readingTime(source).text
			},
			...allArticlesMetadata
		];
	}, []);
}
