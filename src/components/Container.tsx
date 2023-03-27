import {BaseComponentsProps} from '@global/baseTypes';
import {Box, css, styled} from '@mui/material';
import { _e } from '@utils/excludePropsFromForwarding';

export type ContainerProps = BaseComponentsProps<{
	isContained?: boolean;
	size?: 'small' | 'medium' | 'large'
}>;

export const Container = styled(Box, _e('isContained'))<ContainerProps>(({
	theme, size = 'large', isContained
}) => {

	const containerSize = {
		small: theme.breakpoints.values.md,
		medium: theme.breakpoints.values.lg,
		large: theme.breakpoints.values.xl,
	}[size]

	return css`
		${theme.utils.styles.blockContainer}
		width: 100%;
		max-width: ${isContained ? `${containerSize}px` : 'none'};
		margin-inline: auto;

		.Container-root {
			padding: 0 !important;
		}
	`
});

Container.defaultProps = {
	className: "Container-root"
}
