import {
	type ComponentType,
	type FC,
	type HTMLInputTypeAttribute,
} from 'react';
import {CheckboxField} from './CheckboxField';
import {FileInputField} from './FileInputField';
import {RadioField} from './RadioField';
import {SelectField} from './SelectField';
import {TextAreaField} from './TextAreaField';
import {TextField} from './TextField';
import {type OptionBag} from './types';
import {type useForm} from './useForm';
import {FormSectionTitle} from './FormSectionTitle';

export type FormItemBag = {
	itemType: 'title' | 'input' | 'select' | 'radio' | 'checkbox' | 'textarea';
	inputType?: HTMLInputTypeAttribute;
	title?: string | null;
	name?: string | null;
	placeholder?: string | null;
	label?: string | null;
	required?: boolean | null;
	span?: number | null;
	min?: number | string;
	max?: number | null;
	options?: OptionBag[] | null;
	defaultValue?: string | number | null;
	helperText?: string | null;
	multiple?: boolean | null;
	displayText?: string | null;
	accept?: string | null;
	rows?: number | null;
};

const itemTypeMap: Record<string, ComponentType<any>> = {
	title: FormSectionTitle,
	checkbox: CheckboxField,
	radio: RadioField,
	select: SelectField,
	textarea: TextAreaField,
};

const inputTypeMap: Record<string, ComponentType<any>> = {
	text: TextField,
	number: TextField,
	date: TextField,
	email: TextField,
	file: FileInputField,
};

const getFormItem = (itemType: string, inputType?: string) => {
	if (itemType === 'input') {
		return inputTypeMap[inputType ?? 'text'];
	}

	if (itemType in itemTypeMap) {
		return itemTypeMap[itemType];
	}

	return inputTypeMap.text;
};

type Props = {
	readonly items: FormItemBag[];
	readonly formState: ReturnType<typeof useForm>;
};

export const FormItemGenerator: FC<Props> = ({items, formState}) => (
	<>
		{items.map((itemProps, itemIndex) => {
			const {itemType, inputType, ...props} = itemProps;

			const FormItem = getFormItem(itemType, inputType);

			return (
				<FormItem
					key={itemIndex}
					type={inputType}
					isInvalid={Boolean(formState.errors[itemProps.name!])}
					helperText={formState.errors[itemProps.name!] ?? itemProps.helperText}
					{...props}
				/>
			);
		})}
	</>
);
