import {type StoryObj} from '@storybook/react';
import {chance, generateActions} from '@graphixcollab/utils/chance.ts';
import {
	SocialMediaBlock,
	type SocialMediaBlockProps,
} from './SocialMediaBlock';

export default {
	component: SocialMediaBlock,
};

export const Default: StoryObj<SocialMediaBlockProps> = {
	args: {
		text: chance.twitter(),
		actions: generateActions(),
	},
};
