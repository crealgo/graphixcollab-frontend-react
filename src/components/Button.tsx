import { ButtonBase, type ButtonBaseProps } from "@components/ButtonBase";
import { css, darken, styled } from "@mui/material";
import { _e } from "@utils/excludePropsFromForwarding";
import { getButtonColors, getButtonHoverColors, getButtonSizes, getButtonTextColors } from "@utils/getButtonStyles";
import clsx from "clsx";
import { forwardRef } from "react";

export type ButtonColors = "primary" | "secondary" | "tertiary" | "text";

export interface ButtonProps extends ButtonBaseProps {
	color?: ButtonColors;
}

const StyledButton = styled(
	ButtonBase,
	_e("color")
)<ButtonProps>(({ theme, color = "text", size = "medium" }) => {
	const backgroundColor = getButtonColors({ theme, color });

	return css`
		/* Variant=Primary, Size=Small */

		box-sizing: border-box;

		/* Auto layout */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 4px 8px;
		gap: 4px;

		position: absolute;
		width: 93px;
		height: 28px;
		left: 20px;
		top: 20px;

		/* brand/primary/main */
		background: #b20838;
		border: 1px solid rgba(30, 41, 59, 0.2);
		/* Button Shadow */
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;

		/* Inside auto layout */
		flex: none;
		order: 0;
		flex-grow: 0;

		/* globals / white */
		background: #ffffff;

		/* Text */

		width: 77px;
		height: 17px;

		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		/* identical to box height */
		letter-spacing: -0.01em;

		/* globals / white */
		color: #ffffff;
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
