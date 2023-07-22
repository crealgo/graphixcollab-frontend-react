import CloseIcon from '@mui/icons-material/Close';
import {type StoryObj, type Meta} from '@storybook/react';
import {IconButton, type IconButtonProps} from './IconButton';

export default {
	component: IconButton,
} as Meta;

export const Default: StoryObj<IconButtonProps> = {
	render: args => <IconButton {...args} Icon={CloseIcon}/>,

	argTypes: {
		color: {
			defaultValue: 'tertiary',
			options: ['primary', 'secondary', 'tertiary'],
			control: {type: 'select'},
		},
	},
};
