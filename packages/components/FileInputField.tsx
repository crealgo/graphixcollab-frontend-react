import {paramCase} from 'change-case';
import clsx from 'clsx';
import {forwardRef} from 'react';
import {FileInput, type FileInputProps} from './FileInput';
import {FormControl, type FormControlProps} from './FormControl';

type Props = FileInputProps & FormControlProps;

export const FileInputField = forwardRef<HTMLInputElement, Props>(
	({label, helperText, className, ...props}, ref) => {
		const generatedName = paramCase(props.name ?? 'input-name');

		return (
			<FormControl
				label={label}
				labelFor={generatedName}
				helperText={helperText}
				helperTextId={`${generatedName}-helper-text`}
				className={clsx('FileInputField-root', className)}
				isInvalid={props.isInvalid}
				isValid={props.isValid}
				isTouched={props.isTouched}
			>
				<FileInput
					{...props}
					ref={ref}
					multiple
					type='file'
					id={generatedName}
					name={generatedName}
				/>
			</FormControl>
		);
	},
);
