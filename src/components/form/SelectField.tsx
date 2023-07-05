import { paramCase } from 'change-case';
import { forwardRef, type FC } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { Select, type SelectProps } from './Select';

type Props = FormControlProps & SelectProps;

export const SelectField = forwardRef<HTMLSelectElement, Props>(
	({ label, helperText, isFullWidth, ...props }, ref) => {
		const generatedName = paramCase(props.name ?? 'input-name');

		const requiredIndicator = <span style={{ color: 'red' }}>*</span>;

		const resolvedLabel = label ? (
			<>
				{label}
				{props.required && requiredIndicator}
			</>
		) : undefined;

		return (
			<FormControl
				isFullWidth
				label={resolvedLabel}
				labelFor={generatedName}
				helperText={helperText}
				helperTextId={`${generatedName}-helper-text`}
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
