import {TextField, type TextFieldProps} from '@components/TextField';
import {type Meta, type Story} from '@storybook/react';

export default {
	component: TextField
} as Meta;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} fullWidth={true} />;

Default.argTypes = {
	label: {
		control: {type: 'text'},
		defaultValue: 'Text Field Label'
	}
};
