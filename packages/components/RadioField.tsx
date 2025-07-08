import {paramCase} from 'change-case';
import {forwardRef} from 'react';
import {FormControl, type FormControlProps} from './FormControl';
import {InputGroup} from './InputGroup';
import {RadioInput, type RadioInputProps} from './RadioInput';
import {type OptionBag} from './types';

type Props = {
	readonly options?: OptionBag[];
} & Omit<FormControlProps, 'isRequired'> &
Pick<RadioInputProps, 'required' | 'name' | 'defaultValue'>;

export const RadioField = forwardRef<HTMLInputElement, Props>(
	({label, helperText, options, defaultValue, ...props}, ref) => {
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
						<RadioInput
							key={optionIndex}
							{...props}
							{...option}
							ref={ref}
							type='radio'
							id={option.value}
							defaultChecked={option.value === defaultValue}
							name={generatedName}
						/>
					))}
				</InputGroup>
			</FormControl>
		);
	},
);
