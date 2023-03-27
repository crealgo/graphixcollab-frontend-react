import { BaseComponentsProps } from "@global/baseTypes";
import { Box, css, styled } from "@mui/material";
import { _e } from "@utils/excludePropsFromForwarding";

export type ContainerProps = BaseComponentsProps<{
	isContained?: boolean;
	size?: "small" | "medium" | "large";
}>;

export const Container = styled(
	Box,
	_e("isContained")
)<ContainerProps>(({ theme, size, isContained }) => {
	const containerSize = {
		small: theme.breakpoints.values.md,
		medium: theme.breakpoints.values.lg,
		large: theme.breakpoints.values.xl,
	}[size ?? "medium"];

	return css`
		${theme.utils.styles.blockContainer}
		width: 100%;
		margin-inline: auto;

		.Container-root {
			padding: 0 !important;
		}

		${size
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
		`}
	`;
});

Container.defaultProps = {
	className: "Container-root",
};
