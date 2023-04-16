import {iconMap, iconNameArray} from '../../assets/content/icon-map';
import {type StoryObj, type Meta} from '@storybook/react';
import {Button, type ButtonProps} from './Button';

export default {
	component: Button,
} as Meta;

export const Default: StoryObj<ButtonProps> = {
	render: ({children, ...args}) => <Button {...args}>{children}</Button>,
	args: {
		children: 'Example Button',
	},
	argTypes: {
		startIcon: {
			mapping: iconMap,
			options: iconNameArray,
		},
		endIcon: {
			mapping: iconMap,
			options: iconNameArray,
		},
	},
};
