import { paramCase } from 'change-case';
import { type FC } from 'react';
import { FileInput, type FileInputProps } from './FileInput';
import { FormControl, type FormControlProps } from './FormControl';
import clsx from 'clsx';

type Props = FileInputProps & FormControlProps;

export const FileInputField: FC<Props> = ({
	label,
	helperText,
	isFullWidth,
	className,
	...props
}) => {
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
			className={clsx('FileInputField-root', className)}
		>
			<FileInput
				{...props}
				multiple
				type="file"
				id={generatedName}
				name={generatedName}
			/>
		</FormControl>
	);
};
