import {type StoryObj} from '@storybook/react';
import {generatePerson} from '../../utils/chance';
import {Profile, type ProfileProps} from './Profile';

export default {
	component: Profile,
};

export const Default: StoryObj<ProfileProps> = {
	args: {
		profile: generatePerson(),
	},
};
