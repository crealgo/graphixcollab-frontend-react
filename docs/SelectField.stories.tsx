import {type Meta, type Story} from '@storybook/react';
import {generateOptions} from '@utils/chance';
import {SelectField, type SelectFieldProps} from '@components/SelectField';

export default {
	component: SelectField
} as Meta;

export const Default: Story<SelectFieldProps> = (args) => <SelectField {...args} />;

Default.args = {
	label: 'Select Field Label',
	options: generateOptions()
};
