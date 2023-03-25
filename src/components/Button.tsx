import { alpha, css, darken, styled } from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { _e } from '@utils/excludePropsFromForwarding';
import { ButtonBase, type ButtonBaseProps } from '@components/ButtonBase';
import { getButtonColors, getButtonTextColors, getButtonHoverColors, getButtonSizes } from '@utils/getButtonStyles';

export type ButtonColors = 'primary' | 'secondary' | 'tertiary' | 'text';

export interface ButtonProps extends ButtonBaseProps {
	color?: ButtonColors;
}

const StyledButton = styled(
	ButtonBase,
	_e('color')
)<ButtonProps>(({ theme, color = 'text', size = 'medium' }) => {
	const backgroundColor = getButtonColors({ theme, color })

	return css`
		font-weight: bold;
		background-color: ${backgroundColor};
		color: ${getButtonTextColors({ theme, color })};
		${color !== 'text' ? `
			// border: solid 1px ${darken(backgroundColor as string, 0.25)};
			box-shadow: ${theme.shadows[2]};
		` : ''};

		${getButtonSizes({ theme, size })}

		&:hover, &:focus-visible {
			background-color: ${getButtonHoverColors({ theme, color })};
		}
	`
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, color = 'tertiary', ...props }, ref) => (
		<StyledButton {...props} color={color} role='button' ref={ref} className={clsx(className, 'Button-root')}>
			{children}
		</StyledButton>
	)
);

Button.displayName = 'Button';
