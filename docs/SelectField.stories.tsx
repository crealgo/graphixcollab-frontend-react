import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateOptions } from '@utils/chance';
import { SelectField, type SelectFieldProps } from '@components/SelectField';

export default {
  component: SelectField,
} as Meta;

export const Default: StoryObj<SelectFieldProps> = {
  args: {
    label: 'Select Field Label',
    options: generateOptions(),
  },
};
