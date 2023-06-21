import { type Meta, type StoryObj } from '@storybook/react';
import { FormControl, type FormControlProps } from './FormControl';
import { Input } from './Input';

export default {
	component: FormControl
} as Meta<FormControlProps>;

export const Default: StoryObj = {
	render: (args: any) => {
		return (
			<FormControl
				label="Name"
				labelFor="person-name"
				helperText="Your full name"
				helperTextId="person-name-helper"
			>
				<Input
					placeholder="John Snow"
					id="person-name"
					name="person-name"
					aria-aria-describedby="person-name-helper"
				/>
			</FormControl>
		);
	},
	args: {
		label: 'Input Label',
		helperText: 'This is helper text',
		controlSize: 'medium'
	},
	argTypes: {
		// controlType: {
		// 	control: {
		// 		type: 'select'
		// 	},
		// options: ['input', 'textarea', 'select', 'autocomplete'],
		// mapping: {
		// 	input: Input,
		// 	autocomplete: () => (
		// 		<Autocomplete>
		// 			<option value="test-things">Test Things</option>
		// 			<option value="test-things-1">Test Things 1</option>
		// 			<option value="test-things-2">Test Things 2</option>
		// 			<option value="test-things-3">Test Things 3</option>
		// 		</Autocomplete>
		// 	),
		// 	select: Select,
		// 	textarea: Input
		// },
		// labels: {
		// 	input: 'Input',
		// 	autocomplete: 'Autocomplete',
		// 	select: 'Select',
		// 	textarea: 'Textarea'
		// }
		// },
		controlSize: {
			control: {
				type: 'inline-radio'
			},
			options: ['small', 'medium', 'large']
		}
	}
};
