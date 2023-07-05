import { paramCase } from 'change-case';
import { forwardRef, type FC } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { Input, type InputProps } from './Input';

type Props = FormControlProps & InputProps;

export const TextField = forwardRef<HTMLInputElement, Props>(
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
