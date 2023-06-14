import { type Meta, type StoryObj } from '@storybook/react';
import { Input, type InputProps } from './Input';

export default {
	component: Input,
	render: args => <Input {...args} />
} as Meta;

export const Default: StoryObj<InputProps> = {
	args: {
		placeholder: 'Start Typing...',
		inputSize: 'medium',
		variant: 'standard'
	}
};
