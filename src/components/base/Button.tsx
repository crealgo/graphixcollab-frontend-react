import { css } from '@emotion/react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { type FC } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../atoms/ButtonBase';

export type ButtonProps = {
	color?: ColorVariants;
} & ButtonBaseProps;

const StyledButton = styled(ButtonBase)<ButtonProps>(
	({ color = 'primary', size = 'medium' }) => css`
		border-radius: var(--button-bezel-${size});

		font-weight: var(--button-font-weight);
		font-size: var(--input-font-size-${size});
		letter-spacing: var(--button-letter-spacing);

		background-color: var(--button-background-color-${color});
		box-shadow: var(--button-shadow-${color});
		color: var(--button-text-color-${color});
		border: var(--button-border-${color});

		text-decoration: var(--button-text-decoration-${color});
		text-underline-offset: var(--button-text-offset-${color});
		text-decoration-thickness: var(--button-text-thickness-${color});

		padding-inline: var(--input-spacing-padding-inline-${size});
		line-height: var(--input-height-${size});
		height: var(--input-height-${size});
	`
);

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => (
	<StyledButton
		{...props}
		role="button"
		className={clsx(className, 'Button-root')}
	>
		{children}
	</StyledButton>
);
