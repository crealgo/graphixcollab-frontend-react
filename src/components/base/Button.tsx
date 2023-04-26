import clsx from 'clsx';
import {type FC} from 'react';
import {type ColorVariants} from '../../types/color';
import {_e} from '../../utils/excludePropsFromForwarding';
import {ButtonBase, type ButtonBaseProps} from '../atoms/ButtonBase';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonProps = {
	color?: ColorVariants;
} & ButtonBaseProps;

const StyledButton = styled(ButtonBase)<ButtonProps>(
	({color: variant = 'primary', size = 'medium'}) => css`
		border-radius: var(--button-bezel-${size});

		font-weight: var(--button-font-weight);
		font-size: var(--input-font-size-${size});
		letter-spacing: var(--button-letter-spacing);

		background-color: var(--button-background-color-${variant});
		box-shadow: var(--button-shadow-${variant});
		color: var(--button-text-color-${variant});
		border: var(--button-border-${variant});

		text-decoration: var(--button-text-decoration-${variant});
		text-underline-offset: var(--button-text-offset-${variant});
		text-decoration-thickness: var(--button-text-thickness-${variant});

		padding-inline: var(--input-spacing-padding-inline-${size});
		line-height: var(--input-height-${size});
		height: var(--input-height-${size});
	`
);

export const Button: FC<ButtonProps> = ({
	children,
	className,
	color = 'tertiary',
	...props
}) => (
	<StyledButton
		{...props}
		color={color}
		role="button"
		className={clsx(className, 'Button-root')}
	>
		{children}
	</StyledButton>
);
