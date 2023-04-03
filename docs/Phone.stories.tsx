import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { Phone, type PhoneProps } from '@components/Phone';

export default {
  component: Phone,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj<PhoneProps> = {
  argTypes: {
    elevation: {
      control: { type: 'number' },
      defaultValue: 20,
    },
  },
};
