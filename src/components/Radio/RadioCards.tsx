import { css, styled } from "@mui/material";
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

const BaseElement: FC<ComponentPropsWithoutRef<'fieldset'>> = ({
	name, children, ...props
}) => (
	<div {...props} role="radiogroup" aria-labelledby={name}>
		<span hidden id={name}>{'Some Title'}</span>
		{children}
	</div>
)

export const RadioCards = styled(BaseElement)(({theme}) => css`
	border: unset;
	padding: unset;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
/*
	${theme.breakpoints.up('md')} {
		grid-template-columns: repeat(2, 1fr);
	} */
`);
