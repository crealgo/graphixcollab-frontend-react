import {NewsCard, type NewsCardsProps} from './NewsCard';
import {type StoryObj} from '@storybook/react';
import {generateArticle} from '@graphixcollab/utils/chance.ts';

export default {
	component: NewsCard,
};

export const Default: StoryObj<NewsCardsProps> = {
	args: {
		article: generateArticle(),
	},
};
