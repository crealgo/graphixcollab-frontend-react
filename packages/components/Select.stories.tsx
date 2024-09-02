import {type Meta, type StoryObj} from '@storybook/react';
import {generateOptions} from '@graphixcollab/utils/chance';
import {Select, type SelectProps} from './Select';

export default {
	component: Select,
} as Meta<SelectProps>;

export const Default: StoryObj<SelectProps> = {
	args: {
		options: generateOptions(),
	},
};
