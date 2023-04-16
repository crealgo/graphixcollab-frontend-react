import {MenuItem, TextField, type OutlinedTextFieldProps} from '@mui/material';
import {type FC} from 'react';
import {type OptionValue} from '../../types/general';

export type SelectFieldProps = {
	options: OptionValue[];
} & OutlinedTextFieldProps;

export const SelectField: FC<SelectFieldProps> = ({options, size = 'small', ...props}) => (
	<TextField {...props} select fullWidth size={size}>
		<MenuItem disabled>Choose one:</MenuItem>
		{options?.map((option, optionIndex) => (
			<MenuItem key={optionIndex} value={option.value}>
				{option.label}
			</MenuItem>
		))}
	</TextField>
);
