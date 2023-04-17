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

const StyledButton = styled(
	ButtonBase,
	_e('color'),
)<ButtonProps>(({color: variant = 'primary', size = 'medium'}) => css`
		border-radius: 4px;

		font-weight: 500;
		font-size: var(--input-font-size-${size});
		letter-spacing: -0.01em;

		background-color: var(--action-background-color-${variant});
		box-shadow: var(--action-shadow-${variant});
		color: var(--action-text-color-${variant});
		border: var(--action-border-${variant});

		text-decoration: var(--action-text-decoration-${variant});
		text-underline-offset: 2px;
		text-decoration-thickness: 2px;

		padding-inline: var(--input-padding-x-${size});
		line-height: var(--input-height-${size});
		height: var(--input-height-${size});
	`);

export const Button: FC<ButtonProps> = ({children, className, color = 'tertiary', ...props}) => (
	<StyledButton {...props} color={color} role='button' className={clsx(className, 'Button-root')}>
		{children}
	</StyledButton>
);
