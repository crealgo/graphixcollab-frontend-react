import { type FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxField } from '../../form/CheckboxField';
import { FileInputField } from '../../form/FileInputField';
import { RadioField } from '../../form/RadioField';
import { SelectField } from '../../form/SelectField';
import { TextField } from '../../form/TextField';
import {
	type FieldBag,
	type FormFieldName,
	type FormFields
} from './estimatorFields';

export const DynamicControl: FC<FieldBag> = ({ helperText, ...props }) => {
	const { register, getFieldState } = useFormContext<FormFields>();

	const resolvedFieldType = /checkbox|radio|file|select/.test(props.type)
		? (props.type as 'checkbox' | 'radio' | 'file' | 'select')
		: 'default';

	const ResolvedInputComponent = {
		select: SelectField,
		checkbox: CheckboxField,
		radio: RadioField,
		file: FileInputField,
		default: TextField
	}[resolvedFieldType];

	const { invalid, error } = getFieldState(props.name as FormFieldName);

	return (
		<ResolvedInputComponent
			isInvalid={invalid}
			helperText={error?.message ?? helperText}
			{...props}
			{...register(props.name as FormFieldName, {
				disabled: props.disabled,
				min: props.min,
				max: props.max,
				required: props.required,
				...props.registerOptions
			})}
		/>
	);
};
