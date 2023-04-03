import { Close } from '@mui/icons-material';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { IconButton, type IconButtonProps } from '@components/IconButton';

export default {
  component: IconButton,
} as Meta;

export const Default: StoryObj<IconButtonProps> = {
  render: (args) => <IconButton {...args} Icon={Close} />,

  argTypes: {
    color: {
      defaultValue: 'tertiary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
};
