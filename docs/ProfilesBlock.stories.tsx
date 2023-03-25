import { ProfilesBlock, type ProfilesBlockProps } from '@components/ProfilesBlock';
import { type Meta, type Story } from '@storybook/react';
import { chance, generateEmployeeGroups } from '@utils/chance';

export default {
	component: ProfilesBlock
} as Meta;

export const Default: Story<ProfilesBlockProps> = (args) => <ProfilesBlock {...args} />;

Default.args = {
	title: chance.sentence({words: 3}),
	description: chance.sentence(),
	profileGroups: generateEmployeeGroups()
};
