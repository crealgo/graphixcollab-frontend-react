import { paramCase } from 'change-case';
import { forwardRef, type FC } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { Select, type SelectProps } from './Select';

type Props = FormControlProps & SelectProps;

export const SelectField = forwardRef<HTMLSelectElement, Props>(
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
				<Select
					{...props}
					ref={ref}
					id={generatedName}
					name={generatedName}
				/>
			</FormControl>
		);
	}
);
