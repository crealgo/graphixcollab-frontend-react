import clsx from 'clsx';
import {
	type ComponentPropsWithRef,
	type ComponentPropsWithoutRef,
	type FC,
	useId
} from 'react';
import styled from '@emotion/styled';
import {type InputProps} from './Input';
import {type AutocompleteProps} from './Autocomplete';
import {type Size} from '../../types/general';

// Type ExposedInputProps = Pick<InputProps, "id" | "placeholder" | "ref">;
type BaseElementProps = ComponentPropsWithoutRef<'div'>;

export type FormGroupProps = {
	label?: string;
	helperText?: string;
	size?: Size;

	InputProps?: InputProps | AutocompleteProps;
	LabelProps?: ComponentPropsWithRef<'label'>;
	HelperTextProps?: ComponentPropsWithRef<'span'>;
} & BaseElementProps;

export const Wrapper = styled.div`
	display: inline-grid;
	grid-template-columns: minmax(10rem, 1fr);
	min-width: 10rem;
	gap: 0.25rem;
`;
export const InputLabel = styled.label`
	display: inline-flex;
	color: var(--color-text-primary);
	font-size: 14px;
	line-height: 1rem;
	font-weight: 500;
`;
export const InputHelperText = styled.span`
	font-weight: 500;
	font-size: 0.75rem;
	line-height: 1rem;

	color: var(--color-text-secondary);
`;

export const FormGroup: FC<FormGroupProps> = ({
	label,
	id,
	helperText,
	// Ref,
	className,
	LabelProps,
	size,
	HelperTextProps,
	children,
	...props
}) => {
	const generatedId = useId();
	const resolvedId = id ?? generatedId;

	return (
		<Wrapper className={clsx(className, 'FormGroup-root')}>
			{label && (
				<InputLabel
					className="FormGroup-label"
					htmlFor={`input-${resolvedId}`}
					{...LabelProps}
				>
					{label}
				</InputLabel>
			)}
			{/* TODO: pass props correctly to child type input/select/button/input-group, or return a function with input props */}
			{children}
			{helperText && (
				<InputHelperText
					id={`helperText-${resolvedId}`}
					className="FormGroup-helperText"
					{...HelperTextProps}
				>
					{helperText}
				</InputHelperText>
			)}
		</Wrapper>
	);
};
