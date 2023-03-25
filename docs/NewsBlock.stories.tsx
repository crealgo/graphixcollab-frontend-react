import {type Story} from '@storybook/react';
import {chance, generateActions, generateArticles} from '@utils/chance';
import {type NewsBlockWrapperProps, NewsBlock} from '@components/NewsBlock';

export default {
	component: NewsBlock
};

export const Default: Story<NewsBlockWrapperProps> = (args) => <NewsBlock {...args} />;

Default.args = {
	title: chance.sentence(),
	meta: chance.sentence({words: 3}),
	actions: generateActions(),
	articles: generateArticles()
};
