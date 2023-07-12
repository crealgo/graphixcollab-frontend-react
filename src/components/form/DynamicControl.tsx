import { type FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxField } from './CheckboxField';
import { FileInputField } from './FileInputField';
import { RadioField } from './RadioField';
import { SelectField } from './SelectField';
import { TextField } from './TextField';
import {
	type FieldBag,
	type FormFieldName,
	type FormFields
} from '../block/Estimator/estimatorFields';
import { TextAreaField } from './TextAreaField';

export const DynamicControl: FC<FieldBag> = ({ helperText, ...props }) => {
	const { register, getFieldState } = useFormContext<FormFields>();

	const resolvedFieldType = /checkbox|radio|file|select/.test(props.type)
		? (props.type as 'checkbox' | 'radio' | 'file' | 'select')
		: 'default';

	const ResolvedInputComponent = {
		select: SelectField,
		checkbox: CheckboxField,
		radio: RadioField,
		textarea: TextAreaField,
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
