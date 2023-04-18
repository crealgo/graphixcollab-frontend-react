import {type Meta, type StoryObj} from '@storybook/react';
import {FormGroup, type FormGroupProps} from './FormGroup';
import {Autocomplete} from './Autocomplete';

export default {
	component: FormGroup,
} as Meta;

export const Default: StoryObj<FormGroupProps> = {
	render: args => (
		<FormGroup {...args}>
			<Autocomplete>
				<option value='test-things'>Test Things</option>
				<option value='test-things-1'>Test Things 1</option>
				<option value='test-things-2'>Test Things 2</option>
				<option value='test-things-3'>Test Things 3</option>
			</Autocomplete>
		</FormGroup>
	),
	args: {
		label: 'Input Label',
		helperText: 'This is helper text',
	},
};
