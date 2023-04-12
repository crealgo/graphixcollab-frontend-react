import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentPropsWithRef } from "react";
import { Size } from "../../types/general";

export interface InputProps extends ComponentPropsWithRef<"input"> {
	inputSize?: Size;
}

export const Input = styled.input<InputProps>(
	({ inputSize = "medium" }) => css`
		border: unset;
		padding: unset;
		outline: unset;
		font-size: 1rem;

		height: var(--height-${inputSize}-input);
		padding-inline: var(--padding-x-${inputSize}-input);

		color: var(--color-text-primary);
		border-radius: var(--bezel-${inputSize}-input);
		box-shadow: var(--shadow-border), var(--shadow-elevation-0);
	`
);
