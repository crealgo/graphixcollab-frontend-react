import {type Meta, type Story} from '@storybook/react';
import {chance} from '@utils/chance';
import {Label, type LabelProps} from '@components/Label';

export default {
	component: Label
} as Meta;

export const Default: Story<LabelProps> = (args) => <Label {...args} />;

Default.argTypes = {
	variant: {
		control: {type: 'select'},
		options: ['primary', 'secondary', 'grey'],
		defaultValue: 'primary'
	},
	children: {
		control: {type: 'text'},
		defaultValue: chance.word()
	}
};
