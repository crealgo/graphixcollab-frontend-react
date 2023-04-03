import { NewsCard, type NewsCardsProps } from '@components/NewsCard';
import { StoryObj, type StoryFn } from '@storybook/react';
import { generateArticle } from '@utils/chance';

export default {
  component: NewsCard,
};

export const Default: StoryObj<NewsCardsProps> = {
  args: {
    article: generateArticle(),
  },
};
