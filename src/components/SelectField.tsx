import {MenuItem, TextField, type OutlinedTextFieldProps} from '@mui/material';
import {type FC} from 'react';
import {type OptionValue} from '@global/generalTypes';

export interface SelectFieldProps extends OutlinedTextFieldProps {
	options: OptionValue[];
}

export const SelectField: FC<SelectFieldProps> = ({options, size = 'small', ...props}) => (
	<TextField {...props} size={size} select fullWidth>
		<MenuItem disabled>Choose one:</MenuItem>
		{options?.map((option, optionIndex) => (
			<MenuItem key={optionIndex} value={option.value}>
				{option.label}
			</MenuItem>
		))}
	</TextField>
);
