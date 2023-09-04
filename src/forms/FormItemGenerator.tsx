import {
	type ComponentType,
	type FC,
	type HTMLInputTypeAttribute,
} from 'react';
import {CheckboxField} from '../components/form/CheckboxField';
import {FileInputField} from '../components/form/FileInputField';
import {RadioField} from '../components/form/RadioField';
import {SelectField} from '../components/form/SelectField';
import {TextAreaField} from '../components/form/TextAreaField';
import {TextField} from '../components/form/TextField';
import {type OptionBag} from '../components/form/types';
import {type useForm} from '../hooks/useForm';
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
					{...props}
					key={itemIndex}
					type={inputType}
					isInvalid={Boolean(formState.errors[itemProps.name!])}
					helperText={
						formState.errors[itemProps.name!]
						?? itemProps.helperText
					}
				/>
			);
		})}
	</>
);
