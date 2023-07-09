import { paramCase } from 'change-case';
import { forwardRef } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { InputGroup } from './InputGroup';
import { RadioInput } from './RadioInput';
import { type SelectProps } from './Select';

// FIXME: fieldset not working

type Props = FormControlProps & SelectProps;

export const RadioField = forwardRef<HTMLInputElement, Props>(
	({ label, helperText, isFullWidth = true, options, ...props }, ref) => {
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
			>
				<InputGroup>
					{options?.map(option => (
						<RadioInput
							key={generatedName}
							ref={ref}
							label={option.label}
							value={option.value}
							type="radio"
							id={option.label}
							meta={option.meta}
							name={generatedName}
						/>
					))}
				</InputGroup>
			</FormControl>
		);
	}
);
