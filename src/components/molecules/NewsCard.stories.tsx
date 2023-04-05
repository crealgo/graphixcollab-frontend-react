import { NewsCard, type NewsCardsProps } from './NewsCard';
import { StoryObj,  } from '@storybook/react';
import { generateArticle } from '../../utils/chance';

export default {
  component: NewsCard,
};

export const Default: StoryObj<NewsCardsProps> = {
  args: {
    article: generateArticle(),
  },
};
