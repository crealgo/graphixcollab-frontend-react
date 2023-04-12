import { ButtonBase, type ButtonBaseProps } from "./ButtonBase";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { _e } from "../../utils/excludePropsFromForwarding";
import clsx from "clsx";
import { colord } from "colord";
import { FC } from "react";
import colors from "tailwindcss/colors";
import { ColorVariants } from "../../types/color";

export interface ButtonProps extends ButtonBaseProps {
	color?: ColorVariants;
}

const StyledButton = styled(
	ButtonBase,
	_e("color")
)<ButtonProps>((props) => {
	const resolvedColor = {
		primary: {
			value: "#B20838",
			opacity: 1,
		},
		secondary: {
			value: "#FDE047",
			opacity: 1,
		},
		tertiary: {
			value: "#FFFFFF",
			opacity: 1,
		},
		text: {
			value: "#FFFFFF",
			opacity: 0,
		},
	}[props.color ?? "primary"];

	const backgroundColor = colord(resolvedColor.value).alpha(resolvedColor.opacity).toHex();
	const hoveredBackgroundColor = colord(resolvedColor.value).darken(0.035).alpha(resolvedColor.opacity).toHex();
	const activeBackgroundColor = colord(resolvedColor.value).darken(0.075).alpha(resolvedColor.opacity).toHex();

	const textColor = colord(resolvedColor.value).isLight() ? colors.slate[900] : colors.slate[50];

	const size = props.size ?? "medium";

	return css`
		background-color: ${backgroundColor};
		box-shadow: var(--shadow-border), var(--shadow-elevation-0);
		border-radius: 4px;

		font-weight: 500;
		font-size: 14px;
		letter-spacing: -0.01em;
		color: ${textColor};

		padding-inline: var(--padding-x-${size}-input);
		height: var(--height-${size}-input);
		line-height: var(--height-${size}-input);

		${props.color === "text"
			? css`
					box-shadow: unset;
					text-decoration: underline;
					text-underline-offset: 3px;
					text-decoration-thickness: 1.5px;
			  `
			: css``}

		&:hover {
			background-color: ${hoveredBackgroundColor};
		}

		&:active {
			background-color: ${activeBackgroundColor};
		}
	`;
});

export const Button: FC<ButtonProps> = ({ children, className, color = "tertiary", ...props }) => (
	<StyledButton {...props} color={color} role="button" className={clsx(className, "Button-root")}>
		{children}
	</StyledButton>
);
