import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { Heading, type HeadingProps } from '@components/Heading';

export default {
  component: Heading,
} as Meta;

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'This is a title',
    level: 1,
  },
};
