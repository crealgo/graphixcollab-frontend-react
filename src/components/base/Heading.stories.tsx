import {type StoryObj, type Meta} from '@storybook/react';
import {Heading, type HeadingProps} from './Heading';

export default {
	component: Heading,
} as Meta;

export const Default: StoryObj<HeadingProps> = {
	args: {
		children: 'This is a title',
		level: 1,
	},
};
