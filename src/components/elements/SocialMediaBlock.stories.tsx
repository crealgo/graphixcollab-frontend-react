import { StoryObj, type StoryFn } from '@storybook/react';
import { chance, generateActions } from '@utils/chance';
import { SocialMediaBlock, type SocialMediaBlockProps } from '@components/SocialMediaBlock';

export default {
  component: SocialMediaBlock,
};

export const Default: StoryObj<SocialMediaBlockProps> = {
  args: {
    text: chance.twitter(),
    actions: generateActions(),
  },
};
