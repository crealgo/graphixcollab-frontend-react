import { paramCase } from 'change-case';
import { forwardRef, type FC } from 'react';
import { FileInput, type FileInputProps } from './FileInput';
import { FormControl, type FormControlProps } from './FormControl';
import clsx from 'clsx';

type Props = FileInputProps & FormControlProps;

export const FileInputField = forwardRef<HTMLInputElement, Props>(
	({ label, helperText, isFullWidth, className, ...props }, ref) => {
		const generatedName = paramCase(props.name ?? 'input-name');

		return (
			<FormControl
				isFullWidth
				label={label}
				labelFor={generatedName}
				helperText={helperText}
				helperTextId={`${generatedName}-helper-text`}
				className={clsx('FileInputField-root', className)}
			>
				<FileInput
					{...props}
					ref={ref}
					multiple
					type="file"
					id={generatedName}
					name={generatedName}
				/>
			</FormControl>
		);
	}
);
