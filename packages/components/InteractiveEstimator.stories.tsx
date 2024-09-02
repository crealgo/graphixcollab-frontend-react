import {type StoryObj} from '@storybook/react';
import {generateActions} from '@graphixcollab/utils/chance';
import {
	InteractiveEstimator,
	type InteractiveEstimatorProps,
} from './InteractiveEstimator';

export default {
	component: InteractiveEstimator,
};

export const Default: StoryObj<InteractiveEstimatorProps> = {
	args: {
		actions: generateActions(),
	},
};
