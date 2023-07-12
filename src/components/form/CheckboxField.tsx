import { paramCase } from 'change-case';
import { forwardRef } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { InputGroup } from './InputGroup';
import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput';

type Props = Omit<FormControlProps, 'isRequired'> & Omit<CheckboxInputProps, 'label'>;

export const CheckboxField = forwardRef<HTMLInputElement, Props>(
	(
		{
			label,
			helperText,
			isFullWidth = true,
			options,
			defaultValue,
			...props
		},
		ref
	) => {
		const generatedName = paramCase(props.name ?? 'input-name');

		return (
			<FormControl
				isFieldset
				isFullWidth={isFullWidth}
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
							key={optionIndex}
							ref={ref}
							{...option}
							name={option.value}
							defaultChecked={option.value === defaultValue}
						/>
					))}
				</InputGroup>
			</FormControl>
		);
	}
);
