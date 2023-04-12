import { StoryObj } from '@storybook/react';
import { chance, generateActions, generateArticles } from '../../utils/chance';
import { NewsBlock, type NewsBlockWrapperProps } from './NewsBlock';

export default {
  component: NewsBlock,
};

export const Default: StoryObj<NewsBlockWrapperProps> = {
  args: {
    title: chance.sentence(),
    meta: chance.sentence({ words: 3 }),
    actions: generateActions(),
    articles: generateArticles(),
  },
};
