import {TextField as BaseTextField, type TextFieldProps as BaseTextFieldProps} from '@mui/material';
import {type FC} from 'react';

export type TextFieldProps = Omit<BaseTextFieldProps, 'variant' | 'size'>;

export const TextField: FC<TextFieldProps> = ({fullWidth, ...props}) => (
	<BaseTextField {...props} variant='outlined' size='small' fullWidth={true} />
);
