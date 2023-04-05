import { ServicesBlock, type ServicesBlockProps } from '@components/ServicesBlock';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateServicesBlock } from '@utils/chance';

export default {
  component: ServicesBlock,
} as Meta;

export const Default: StoryObj<ServicesBlockProps> = {
  args: generateServicesBlock(),
};
