import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { DualPhoneDisplay, type DualPhoneDisplayProps } from '@components/DualPhoneDisplay';

export default {
  component: DualPhoneDisplay,
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '40rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj<DualPhoneDisplayProps> = {
  args: {},
};
