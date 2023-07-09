import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { CheckboxField } from '../../form/CheckboxField';
import { RadioField } from '../../form/RadioField';
import { SelectField } from '../../form/SelectField';
import { TextField } from '../../form/TextField';
import {
	type FieldBag,
	type FormFieldName,
	type FormFields
} from './estimatorFields';

export const DynamicControl: FC<FieldBag> = props => {
	const { register } = useForm<FormFields>();

	const resolvedFieldType = /checkbox|radio|select/.test(props.type)
		? (props.type as 'checkbox' | 'radio' | 'select')
		: 'default';

	const ResolvedInputComponent = {
		select: SelectField,
		checkbox: CheckboxField,
		radio: RadioField,
		default: TextField
	}[resolvedFieldType];

	return (
		<ResolvedInputComponent
			inputSize="large"
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
