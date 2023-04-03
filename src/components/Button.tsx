import { ButtonBase, type ButtonBaseProps } from "@components/ButtonBase";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { _e } from "@utils/excludePropsFromForwarding";
import clsx from "clsx";
import { colord } from "colord";
import { forwardRef } from "react";
import colors from "tailwindcss/colors";

export type ButtonColors = "primary" | "secondary" | "tertiary" | "text";

export interface ButtonProps extends ButtonBaseProps {
	color?: ButtonColors;
}

const StyledButton = styled(
	ButtonBase,
	_e("color")
)<ButtonProps>((props) => {
	const backgroundColor = {
		primary: "#B20838",
		secondary: "#FDE047",
		tertiary: "#FFFFFF",
		text: "transparent",
	}[props.color ?? "primary"];

	const textColor = colord(backgroundColor).isLight() ? colors.slate[900] : colors.slate[50];

	const shadow = props.color === "text" ? "" : "0px 1px 2px rgba(0, 0, 0, 0.05)";

	return css`
		/* Auto layout */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		padding: 4px 8px;
		gap: 4px;

		height: 28px;
		line-height: 28px;

		background-color: ${backgroundColor};
		box-shadow: inset 0px 0px 0px 1px rgba(30, 41, 59, 0.25), ${shadow};
		border-radius: 4px;

		font-weight: 500;
		font-size: 14px
		letter-spacing: -0.01em;
		color: ${textColor};

		&:hover {
			box-shadow: inset 0px 0px 0px 1px rgba(30, 41, 59, 0.5), ${shadow};
		}
	`;
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, color = "tertiary", ...props }, ref) => (
		<StyledButton {...props} color={color} role="button" ref={ref} className={clsx(className, "Button-root")}>
			{children}
		</StyledButton>
	)
);

Button.displayName = "Button";
