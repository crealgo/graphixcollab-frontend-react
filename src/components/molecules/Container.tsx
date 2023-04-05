import { css, styled } from "@mui/material";
import { _e } from "../../utils/excludePropsFromForwarding";
import { ComponentPropsWithRef, FC } from "react";

type BaseElementProps = ComponentPropsWithRef<"div">;

type ContainerProps = {
	size?: "small" | "medium" | "large";
};

const BaseElement: FC<BaseElementProps> = ({ className, children, ref, ...props }) => (
	<div ref={ref} className={`Container-root ${className}`} {...props}>
		{children}
	</div>
);

export const Container = styled(
	BaseElement,
	_e("size")
)<ContainerProps>(({ theme, size }) => {
	const containerSize = {
		small: theme.breakpoints.values.md,
		medium: theme.breakpoints.values.lg,
		large: theme.breakpoints.values.xl,
	}[size ?? "medium"];

	const containerMaxWidth = size
		? `
			max-width: ${containerSize}px;
		`
		: `
		${theme.breakpoints.up("md")} {
			max-width: ${theme.breakpoints.values.md}px;
		}

		${theme.breakpoints.up("lg")} {
			max-width: ${theme.breakpoints.values.lg}px;
		}

		${theme.breakpoints.up("xl")} {
			max-width: ${theme.breakpoints.values.xl}px;
		}
	`;

	return css`
		width: 100%;
		margin-inline: auto;
		${containerMaxWidth}
	`;
});
