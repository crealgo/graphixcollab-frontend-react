import { FaqBlock, type FaqBlockProps } from '@components/FaqBlock';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateFaqBlock } from '@utils/chance';

export default {
  component: FaqBlock,
} as Meta;

export const Default: StoryObj<FaqBlockProps> = {
  args: generateFaqBlock(),
};
