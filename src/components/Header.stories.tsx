import { Header, type HeaderProps } from '@components/Header';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateHeader } from '@utils/chance';

export default {
  component: Header,
} as Meta;

export const Default: StoryObj<HeaderProps> = {
  args: generateHeader(),
};
