import { type StoryObj } from '@storybook/react';
import { generateOptions } from '../../utils/chance';
import {
	InteractiveSelector,
	type InteractiveSelectorProps
} from './InteractiveSelector';

export default {
	component: InteractiveSelector
};

export const Default: StoryObj<InteractiveSelectorProps> = {
	args: {
		options: generateOptions()
	}
};
