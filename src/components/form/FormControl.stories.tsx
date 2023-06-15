import { type Meta, type StoryObj } from '@storybook/react';
import { type ComponentType } from 'react';
import { Autocomplete } from './Autocomplete';
import { FormControl, type FormControlProps } from './FormControl';
import { Input } from './Input';
import { Select } from './Select';

export default {
	title: 'Form / FormControl'
} as Meta<FormControlProps>;

export const Default: StoryObj = {
	render: (args: any) => {
		const InputComponent = args.controlType as ComponentType;

		return (
			<FormControl {...args}>
				<InputComponent />
			</FormControl>
		);
	},
	args: {
		label: 'Input Label',
		helperText: 'This is helper text',
		controlSize: 'medium'
	},
	argTypes: {
		controlType: {
			control: {
				type: 'select'
			},
			options: ['input', 'textarea', 'select', 'autocomplete'],
			mapping: {
				input: Input,
				autocomplete: () => (
					<Autocomplete>
						<option value="test-things">Test Things</option>
						<option value="test-things-1">Test Things 1</option>
						<option value="test-things-2">Test Things 2</option>
						<option value="test-things-3">Test Things 3</option>
					</Autocomplete>
				),
				select: Select,
				textarea: Input
			},
			labels: {
				input: 'Input',
				autocomplete: 'Autocomplete',
				select: 'Select',
				textarea: 'Textarea'
			}
		},
		controlSize: {
			control: {
				type: 'inline-radio'
			},
			options: ['small', 'medium', 'large']
		}
	}
};
