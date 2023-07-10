import { paramCase } from 'change-case';
import { forwardRef } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { InputGroup } from './InputGroup';
import { RadioInput, type RadioInputProps } from './RadioInput';

type Props = FormControlProps & Omit<RadioInputProps, 'label'>;

export const RadioField = forwardRef<HTMLInputElement, Props>(
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
						<RadioInput
							{...props}
							key={optionIndex}
							ref={ref}
							label={option.label}
							value={option.value}
							type="radio"
							id={option.label}
							meta={option.meta}
							name={generatedName}
							defaultChecked={option.value === defaultValue}
						/>
					))}
				</InputGroup>
			</FormControl>
		);
	}
);
