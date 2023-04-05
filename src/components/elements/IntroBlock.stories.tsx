import { StoryObj, type StoryFn } from '@storybook/react';
import { generateIntroBlock } from '@utils/chance';
import { IntroBlock, type IntroBlockProps } from '@components/IntroBlock';

export default {
  component: IntroBlock,
};

export const Default: StoryObj<IntroBlockProps> = {
  args: generateIntroBlock(),
};
