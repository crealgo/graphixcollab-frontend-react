import {Close} from '@mui/icons-material';
import {type Meta, type Story} from '@storybook/react';
import {IconButton, type IconButtonProps} from '@components/IconButton';

export default {
	component: IconButton
} as Meta;

export const Default: Story<IconButtonProps> = (args) => <IconButton {...args} Icon={Close} />;

Default.argTypes = {
	color: {
		defaultValue: 'tertiary',
		options: ['primary', 'secondary', 'tertiary'],
		control: {type: 'select'}
	}
};
