import { css, styled } from "@mui/material";
import MuiButtonBase from "@mui/material/ButtonBase";
import { type ComponentPropsWithoutRef, forwardRef, type ReactElement, FC } from "react";
import { type Size } from "@global/generalTypes";
import { _e } from "@utils/excludePropsFromForwarding";

export type ButtonBaseSizes = Size;

export interface ButtonBaseProps extends ComponentPropsWithoutRef<"button"> {
	endIcon?: ReactElement;
	startIcon?: ReactElement;
	href?: string;
	size?: ButtonBaseSizes;
}

const StyledButton = styled(
	MuiButtonBase,
	_e("endIcon", "startIcon", "size")
)<ButtonBaseProps>(
	({ theme }) => css`
		${theme.utils.inheritFont};
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;

		letter-spacing: -0.0156rem;
		white-space: nowrap;

		border-radius: 0.25rem;
	`
);

type ButtonIconProps = {
	start?: boolean;
	end?: boolean;
};

const ButtonIcon = styled(
	"span",
	_e("end", "start")
)<ButtonIconProps>(
	({ start, end }) => `
	display: inline-flex;
	${start ? "margin-left: -0.25rem;" : ""}
	${end ? "margin-right: -0.25rem;" : ""}
`
);

export const ButtonBase: FC<ButtonBaseProps> = ({ children, startIcon, endIcon, onClick, ...props }) => (
	<StyledButton
		{...props}
		role="button"
		onClick={(event) => {
			if (onClick) {
				event.preventDefault();
				onClick(event);
			}
		}}
	>
		{startIcon && (
			<ButtonIcon start className="Button-icon Button-startIcon">
				{startIcon}
			</ButtonIcon>
		)}
		{children}
		{endIcon && (
			<ButtonIcon end className="Button-icon Button-endIcon">
				{endIcon}
			</ButtonIcon>
		)}
	</StyledButton>
);
