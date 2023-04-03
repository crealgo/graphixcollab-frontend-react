import { PageHeaderBlock, type PageHeaderBlockProps } from '@components/PageHeaderBlock';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generatePageHeaderBlock } from '@utils/chance';

export default {
  component: PageHeaderBlock,
} as Meta;

export const Default: StoryObj<PageHeaderBlockProps> = {
  args: generatePageHeaderBlock(),
};
