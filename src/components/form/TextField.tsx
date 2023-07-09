import { paramCase } from 'change-case';
import { forwardRef, type FC } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { Input, type InputProps } from './Input';

type Props = FormControlProps & InputProps;

export const TextField = forwardRef<HTMLInputElement, Props>(
	({ label, helperText, isFullWidth, ...props }, ref) => {
		const generatedName = paramCase(props.name ?? 'input-name');

		return (
			<FormControl
				isFullWidth
				label={label}
				labelFor={generatedName}
				helperText={helperText}
				helperTextId={`${generatedName}-helper-text`}
				isRequired={props.required}
			>
				<Input
					{...props}
					ref={ref}
					id={generatedName}
					name={generatedName}
				/>
			</FormControl>
		);
	}
);
