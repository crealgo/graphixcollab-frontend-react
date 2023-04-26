import {type StoryObj, type Meta} from '@storybook/react';
import {chance} from '../../utils/chance';
import {Label, type LabelProps} from './Label';

export default {
	component: Label
} as Meta;

export const Default: StoryObj<LabelProps> = {
	argTypes: {
		variant: {
			control: {type: 'select'},
			options: ['primary', 'secondary', 'grey'],
			defaultValue: 'primary'
		},
		children: {
			control: {type: 'text'},
			defaultValue: chance.word()
		}
	}
};
