import { ButtonBase, type ButtonBaseProps } from "@components/ButtonBase";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { _e } from "@utils/excludePropsFromForwarding";
import clsx from "clsx";
import { colord } from "colord";
import { FC } from "react";
import colors from "tailwindcss/colors";
import { ColorVariants } from "../styles/ColorVariants";

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

	const shadow = props.color === "text" ? "" : "0px 1px 2px rgba(0, 0, 0, 0.05)";

	const size = {
		small: css`
			padding: 4px 8px;
			height: 28px;
		`,
		medium: css`
			padding: 8px 12px;
			height: 32px;
		`,
		large: css`
			padding: 10px 14px;
			height: 36px;
		`,
	}[props.size ?? "medium"];

	return css`
		background-color: ${backgroundColor};
		box-shadow: inset 0px 0px 0px 1px rgba(30, 41, 59, 0.25), ${shadow};
		border-radius: 4px;

		font-weight: 500;
		font-size: 14px;
		letter-spacing: -0.01em;
		color: ${textColor};

		${size};

		${props.color === "text"
			? css`
					text-decoration: underline;
					text-underline-offset: 2px;
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
