import { snakeCase } from 'change-case';
import { forwardRef, type FC } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { Input, type InputProps } from './Input';

type Props = Omit<FormControlProps, 'isRequired'> & InputProps;

export const TextField = forwardRef<HTMLInputElement, Props>(
	({ label, helperText, ...props }, ref) => {
		const generatedName = snakeCase(props.name ?? 'input-name');

		return (
			<FormControl
				label={label}
				labelFor={generatedName}
				helperText={helperText}
				helperTextId={`${generatedName}-helper-text`}
				isRequired={props.required}
				isInvalid={props.isInvalid}
				isValid={props.isValid}
				isTouched={props.isTouched}
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
