import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateEmployee } from '@utils/chance';
import { ProfileCard, type ProfileCardProps } from '@components/ProfileCard';

export default {
  component: ProfileCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj<ProfileCardProps> = {
  args: {
    profile: generateEmployee(),
  },
};
