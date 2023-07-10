import { css, styled } from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { _e } from '../../utils/excludePropsFromForwarding';
import {
	getButtonColors,
	getButtonHoverColors,
	getButtonSizes
} from '../../utils/getButtonStyles';
import { IconButtonBase, type IconButtonBaseProps } from './IconButtonBase';
import { type CSSObject } from '@emotion/react';

export type IconButtonProps = {
	color?: ColorVariants;
} & IconButtonBaseProps;

const StyledIconButton = styled(
	IconButtonBase,
	_e('color')
)<IconButtonProps>(
	({ theme, color = 'text', size = 'medium' }) => css`
		font-weight: bold;
		background-color: ${getButtonColors({ theme, color }) as CSSObject};

		${getButtonSizes({ theme, size })}
		padding: 0;

		&:hover,
		&:focus-visible {
			background-color: ${getButtonHoverColors({
				theme,
				color
			}) as CSSObject};
		}
	`
);

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ children, className, color = 'tertiary', ...props }, ref) => (
		<StyledIconButton
			{...props}
			ref={ref}
			color={color}
			role="button"
			className={clsx(className, 'IconButton-root')}
		>
			{children}
		</StyledIconButton>
	)
);

IconButton.displayName = 'IconButton';
