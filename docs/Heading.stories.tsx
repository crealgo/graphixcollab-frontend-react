import {type Meta, type Story} from '@storybook/react';
import {Heading, type HeadingProps} from '@components/Heading';

export default {
	component: Heading
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
	children: 'This is a title',
	level: 1
};
