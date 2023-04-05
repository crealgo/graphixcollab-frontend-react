import { TextField, type TextFieldProps } from '@components/TextField';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';

export default {
  component: TextField,
} as Meta;

export const Default: StoryObj<TextFieldProps> = {
  render: (args) => <TextField {...args} fullWidth={true} />,

  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Text Field Label',
    },
  },
};
