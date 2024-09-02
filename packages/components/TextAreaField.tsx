import {paramCase} from 'change-case';
import {forwardRef} from 'react';
import {FormControl, type FormControlProps} from './FormControl';
import {TextArea, type TextAreaProps} from './TextArea';

type Props = Omit<FormControlProps, 'isRequired'> & TextAreaProps;

export const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
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
				<TextArea
					ref={ref}
					id={generatedName}
					name={generatedName}
					{...props}
				/>
			</FormControl>
		);
	},
);
