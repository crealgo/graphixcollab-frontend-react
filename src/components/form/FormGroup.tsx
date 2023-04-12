import clsx from "clsx";
import { ComponentPropsWithRef, ComponentPropsWithoutRef, FC, useId } from "react";
// import { Size } from "../../../types/general";
import styled from "@emotion/styled";
import { InputProps } from "./Input";
import { AutocompleteProps } from "./Autocomplete";
import { Size } from "../../types/general";

// type ExposedInputProps = Pick<InputProps, "id" | "placeholder" | "ref">;
type BaseElementProps = ComponentPropsWithoutRef<"div">;

export interface FormGroupProps extends BaseElementProps {
	label?: string;
	helperText?: string;
	size?: Size;

	InputProps?: InputProps | AutocompleteProps;
	LabelProps?: ComponentPropsWithRef<"label">;
	HelperTextProps?: ComponentPropsWithRef<"span">;
}

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
	// ref,
	className,
	LabelProps,
	size,
	HelperTextProps,
	children,
	...props
}) => {
	const resolvedId = id ?? useId();

	return (
		<Wrapper className={clsx(className, "FormGroup-root")}>
			{label && (
				<InputLabel className="FormGroup-label" htmlFor={`input-${resolvedId}`} {...LabelProps}>
					{label}
				</InputLabel>
			)}
			{/* TODO: pass props correctly to child type input/select/button/input-group, or return a function with input props */}
			{children}
			{helperText && (
				<InputHelperText id={`helperText-${resolvedId}`} className="FormGroup-helperText" {...HelperTextProps}>
					{helperText}
				</InputHelperText>
			)}
		</Wrapper>
	);
};
