import {type StoryObj} from '@storybook/react';
import {generateOptions} from '@graphixcollab/utils/chance.ts';
import {
	InteractiveSelector,
	type InteractiveSelectorProps,
} from './InteractiveSelector';

export default {
	component: InteractiveSelector,
};

export const Default: StoryObj<InteractiveSelectorProps> = {
	args: {
		options: generateOptions(),
	},
};
