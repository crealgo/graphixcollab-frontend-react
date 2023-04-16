import {type StoryObj, type Meta} from '@storybook/react';
import {chance, generateEmployeeGroups} from '../../utils/chance';
import {ProfilesBlock, type ProfilesBlockProps} from './ProfilesBlock';

export default {
	component: ProfilesBlock,
} as Meta;

export const Default: StoryObj<ProfilesBlockProps> = {
	args: {
		title: chance.sentence({words: 3}),
		description: chance.sentence(),
		profileGroups: generateEmployeeGroups(),
	},
};
