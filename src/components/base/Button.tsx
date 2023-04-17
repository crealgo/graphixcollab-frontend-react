import styled from '@emotion/styled';
import clsx from 'clsx';
import {type FC} from 'react';
import {type ColorVariants} from '../../types/color';
import {_e} from '../../utils/excludePropsFromForwarding';
import {ButtonBase, type ButtonBaseProps} from '../atoms/ButtonBase';

export type ButtonProps = {
	color?: ColorVariants;
} & ButtonBaseProps;

const StyledButton = styled(
	ButtonBase,
	_e('color'),
)<ButtonProps>(({color: variant = 'primary', size = 'medium'}) => `
		background-color: var(--action-${variant}-background-color);
		box-shadow: var(--elevation-0);
		border-radius: 4px;

		font-weight: 500;
		font-size: 14px;
		letter-spacing: -0.01em;
		color: var(--action-${variant}-text-color);

		padding-inline: var(--input-${size}-padding-x);
		height: var(--input-${size}-height);
		line-height: var(--input-${size}-height);
		border: var(--input-${size}-border-composite);
	`);

export const Button: FC<ButtonProps> = ({children, className, color = 'tertiary', ...props}) => (
	<StyledButton {...props} color={color} role='button' className={clsx(className, 'Button-root')}>
		{children}
	</StyledButton>
);
