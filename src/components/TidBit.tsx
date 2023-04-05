import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonBase } from "./ButtonBase";
import { ColorVariants } from "@styles/ColorVariants";
import { FC, PropsWithChildren, ReactNode } from "react";

export type TidBitProps = PropsWithChildren<{
	color?: ColorVariants;
	className?: string;
	icon?: ReactNode;
}>;

export const TidBit = styled(ButtonBase)((props) => {
	const resolvedColor = {
		primary: "#B20838",
		secondary: "#FDE047",
		tertiary: "#FFFFFF",
		text: "#FFFFFF",
	}[props.color ?? "primary"];

	return css`
		--background-color: #ffffff;
		--border-color: #cbd5e1;

		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px 20px 10px ${props.icon ? "14px" : "20px"};
		gap: 4px;

		font-weight: 600;
		letter-spacing: -0.01rem;

		border-radius: 9999px;
		background-color: var(--background-color);
		box-shadow: var(--shadow-border), var(--shadow-elevation-0);

		.TidBit-icon,
		strong {
			color: ${resolvedColor};
		}

		.TidBit-icon {
			display: inline-flex;
			font-size: 24px;
		}
	`;
});
