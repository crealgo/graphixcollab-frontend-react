import { paramCase } from 'change-case';
import { type FC } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { Input, type InputProps } from './Input';

type Props = FormControlProps & InputProps;

export const TextField: FC<Props> = ({
	label,
	helperText,
	isFullWidth,
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
		>
			<Input {...props} id={generatedName} name={generatedName} />
		</FormControl>
	);
};
