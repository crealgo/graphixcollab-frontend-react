import { NewsCard, type NewsCardsProps } from '@components/NewsCard';
import { type Story } from '@storybook/react';
import { generateArticle } from '@utils/chance';

export default {
	component: NewsCard
};

export const Default: Story<NewsCardsProps> = (args) => <NewsCard {...args} />;

Default.args = {
	article: generateArticle()
};
