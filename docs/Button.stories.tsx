import {ArrowLeft, ArrowRight} from '@mui/icons-material';
import {type Meta, type Story} from '@storybook/react';
import {Button, type ButtonProps} from '@components/Button';

export default {
	component: Button
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

const iconsMap = {ArrowRight, ArrowLeft};

Default.argTypes = {
	children: {
		defaultValue: 'Button Example',
		control: {type: 'text'}
	},
	color: {
		defaultValue: 'tertiary',
		options: ['primary', 'secondary', 'tertiary'],
		control: {type: 'select'}
	}
};
