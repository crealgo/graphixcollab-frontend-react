import {type StoryObj} from '@storybook/react';
import {generatePerson} from '@graphixcollab/utils/chance';
import {Profile, type ProfileProps} from './Profile';

export default {
	component: Profile,
};

export const Default: StoryObj<ProfileProps> = {
	args: {
		profile: generatePerson(),
	},
};
