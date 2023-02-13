// import { error } from "@sveltejs/kit";
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import markdownToHtml from '../../../utils/markdownToHtml';

export const prerender = true;

const resumeFileName = 'about_me';

export async function load() {
	const resumeDir = path.join(path.join(process.cwd(), 'data'), `${resumeFileName}.md`);
	const source = fs.readFileSync(resumeDir);
	const { content } = matter(source);

	const htmlContent = await markdownToHtml(content);

	return { htmlContent };
}
