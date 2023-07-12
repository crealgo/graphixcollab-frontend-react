import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { CheckboxField } from '../../components/form/CheckboxField';
import { FileInputField } from '../../components/form/FileInputField';
import { RadioField } from '../../components/form/RadioField';
import { SelectField } from '../../components/form/SelectField';
import { TextAreaField } from '../../components/form/TextAreaField';
import { TextField } from '../../components/form/TextField';
import { type FieldBag, estimatorFields } from './estimatorFields';
import { FormSectionTitle } from '../FormSectionTitle';

const inputTypeMap = {
	select: SelectField,
	checkbox: CheckboxField,
	radio: RadioField,
	textarea: TextAreaField,
	file: FileInputField,
	default: TextField
} as const;
const resolvedFieldType = (fieldType: FieldBag['type']) => /checkbox|radio|file|select/.test(fieldType)
	? (fieldType as 'checkbox' | 'radio' | 'file' | 'select')
	: 'default';
export const renderFields = (errors: ApiErrorBag, hideTitles = false) => estimatorFields.map((group, groupIndex) => {
	return (
		<Fragment key={groupIndex}>
			{!hideTitles && (
				<Grid item xs={12}>
					<FormSectionTitle
						title={group.legend}
						hasTopGutter={groupIndex > 0} />
				</Grid>
			)}
			{group.fields.map(
				({ helperText, span, ...field }, fieldIndex) => {
					const InputComponent = inputTypeMap[resolvedFieldType(field.type)];

					return (
						<Grid
							key={`${groupIndex}-${fieldIndex}`}
							item
							md={span}
						>
							{/* @ts-expect-error field type clashing */}
							<InputComponent
								{...field}
								isInvalid={Boolean(errors[field.name])}
								helperText={errors[field.name] ?? helperText} />
						</Grid>
					);
				}
			)}
		</Fragment>
	);
});
