import { StoryObj, type Meta } from '@storybook/react';
import { generateServicesBlock } from '../../utils/chance';
import { ServicesBlock, type ServicesBlockProps } from './ServicesBlock';

export default {
  component: ServicesBlock,
} as Meta;

export const Default: StoryObj<ServicesBlockProps> = {
  args: generateServicesBlock(),
};
