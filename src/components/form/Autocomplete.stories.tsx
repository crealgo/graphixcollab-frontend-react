import { type Meta, type StoryObj } from '@storybook/react';
import { Autocomplete, type AutocompleteProps } from './Autocomplete';
import { Select } from './Select';

export default {
	component: Autocomplete
} as Meta;

export const Default: StoryObj<AutocompleteProps> = {
	args: {
		// placeholder: 'Start Typing...',
		inputSize: 'medium',
		children: (
			<Select>
				<option value="test">Test Value</option>
				<option value="test-1">Test Value 1</option>
				<option value="test-2">Test Value 2</option>
				<option value="test-3">Test Value 3</option>
			</Select>
		)
	}
};
