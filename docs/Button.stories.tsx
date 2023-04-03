import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { Button, type ButtonProps } from '@components/Button';

export default {
  component: Button,
} as Meta;

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    children: {
      defaultValue: 'Button Example',
      control: { type: 'text' },
    },
    color: {
      defaultValue: 'tertiary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
};

const iconsMap = { ArrowRight, ArrowLeft };
