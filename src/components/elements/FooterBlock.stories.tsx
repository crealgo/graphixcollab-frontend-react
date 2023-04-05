import { FooterBlock, type FooterBlockProps } from '@components/FooterBlock';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateFooter } from '@utils/chance';

export default {
  component: FooterBlock,
} as Meta;

export const Default: StoryObj<FooterBlockProps> = {
  args: generateFooter(),
};
