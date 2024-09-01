import {type StoryObj} from '@storybook/react';
import {generatePerson} from '@graphixcollab/utils/chance.ts';
import {Profile, type ProfileProps} from './Profile';

export default {
	component: Profile,
};

export const Default: StoryObj<ProfileProps> = {
	args: {
		profile: generatePerson(),
	},
};
