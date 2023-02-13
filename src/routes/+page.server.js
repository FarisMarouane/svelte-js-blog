import { getAllArticlesMetadata } from '../../utils/utils';

export function load() {
	const allArticlesMetaData = getAllArticlesMetadata();
	return {
		allArticlesMetaData
	};
}
