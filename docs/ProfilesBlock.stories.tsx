import { ProfilesBlock, type ProfilesBlockProps } from '@components/ProfilesBlock';
import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { chance, generateEmployeeGroups } from '@utils/chance';

export default {
  component: ProfilesBlock,
} as Meta;

export const Default: StoryObj<ProfilesBlockProps> = {
  args: {
    title: chance.sentence({ words: 3 }),
    description: chance.sentence(),
    profileGroups: generateEmployeeGroups(),
  },
};
