import {type Meta, type StoryObj} from '@storybook/react';
import {FormControl, type FormControlProps} from './FormControl';
import {Input} from './Input';

export default {
	component: FormControl,
} as Meta<FormControlProps>;

export const Default: StoryObj = {
	render: () => (
		<FormControl
			label='Name'
			labelFor='person-name'
			helperText='Your full name'
			helperTextId='person-name-helper'
		>
			<Input
				placeholder='John Snow'
				id='person-name'
				name='person-name'
				aria-aria-describedby='person-name-helper'
			/>
		</FormControl>
	),
	args: {
		label: 'Input Label',
		helperText: 'This is helper text',
		controlSize: 'medium',
	},
	argTypes: {
		controlSize: {
			control: {
				type: 'inline-radio',
			},
			options: ['small', 'medium', 'large'],
		},
	},
};
