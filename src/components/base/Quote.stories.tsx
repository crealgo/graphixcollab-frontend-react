import { StoryObj,  } from '@storybook/react';
import { chance } from '../../utils/chance';
import { Quote, type QuoteProps } from './Quote';

export default {
  component: Quote,
};

export const Default: StoryObj<QuoteProps> = {
  args: {
    text: chance.sentence(),
  },
};
