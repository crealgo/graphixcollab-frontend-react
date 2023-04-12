import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentPropsWithRef, FC, PropsWithChildren, useId } from "react";
import { Size } from "../../types/general";
import { Input, InputProps } from "./Input";

type OptionValue = {
	label: string;
	value: string;
};

export interface SelectProps extends InputProps, PropsWithChildren {
	inputSize?: Size;
	options?: OptionValue[];
}

// TODO: add dropdown icon 'button'
export const Select: FC<SelectProps> = ({ children, options, ...props }) => {
	const generatedId = useId();
	const listId = `list-${generatedId}`;

	return (
		<>
			<Input list={listId} {...props} />
			<datalist id={listId}>
				{children ??
					options?.map(({ label, value }, optionIndex) => (
						<option key={optionIndex} value={label}>
							{value}
						</option>
					))}
			</datalist>
		</>
	);
};
