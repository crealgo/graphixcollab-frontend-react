import {paramCase} from 'change-case';
import {forwardRef} from 'react';
import {FormControl, type FormControlProps} from './FormControl';
import {Select, type SelectProps} from './Select';

type Props = Omit<FormControlProps, 'isRequired'> & SelectProps;

export const SelectField = forwardRef<HTMLSelectElement, Props>(
	({label, helperText, ...props}, ref) => {
		const generatedName = paramCase(props.name ?? 'input-name');

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
				<Select
					{...props}
					ref={ref}
					id={generatedName}
					name={generatedName}
				/>
			</FormControl>
		);
	},
);
