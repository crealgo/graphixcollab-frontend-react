import { paramCase } from 'change-case';
import { forwardRef } from 'react';
import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput';
import { FormControl, type FormControlProps } from './FormControl';
import { InputGroup } from './InputGroup';
import { type OptionBag } from './types';

type Props = {
	options?: OptionBag[];
} & Omit<FormControlProps, 'isRequired'> &
	Pick<CheckboxInputProps, 'required' | 'name' | 'defaultValue'>;

export const CheckboxField = forwardRef<HTMLInputElement, Props>(
	({ label, helperText, options, defaultValue, ...props }, ref) => {
		const generatedName = paramCase(props.name ?? 'input-name');

		return (
			<FormControl
				isFieldset
				label={label}
				labelFor={generatedName}
				helperText={helperText}
				helperTextId={`${generatedName}-helper-text`}
				isRequired={props.required}
				isInvalid={props.isInvalid}
				isValid={props.isValid}
				isTouched={props.isTouched}
			>
				<InputGroup>
					{options?.map((option, optionIndex) => (
						<CheckboxInput
							{...props}
							{...option}
							key={optionIndex}
							ref={ref}
							name={option.value}
							defaultChecked={option.value === defaultValue}
						/>
					))}
				</InputGroup>
			</FormControl>
		);
	}
);
