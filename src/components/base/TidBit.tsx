import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {type FC, type PropsWithChildren} from 'react';
import {type ColorVariants} from '../../types/color';
import {ButtonBase, type ButtonBaseProps} from '../atoms/ButtonBase';
import clsx from 'clsx';

export type TidBitProps = PropsWithChildren<{
	color?: ColorVariants;
	className?: string;
	icon?: ButtonBaseProps['startIcon'];
}> &
Pick<ButtonBaseProps, 'href' | 'onClick'>;

const BaseElement: FC<TidBitProps> = ({className, icon, children, ...props}) => (
	<ButtonBase type='button' className={clsx('TidBit-root', className)} startIcon={icon} {...props}>
		{children}
	</ButtonBase>
);

export const TidBit = styled(BaseElement)<TidBitProps>(({icon, color = 'primary'}) => css`
		--background-color: #ffffff;
		--border-color: #cbd5e1;

		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px 20px 10px ${icon ? '14px' : '20px'};
		gap: 4px;

		font-weight: 600;
		letter-spacing: -0.01rem;

		border-radius: 9999px;
		background-color: var(--background-color);
		border: var(--action-border-primary);
		box-shadow: var(--action-shadow-primary);

		.Button-icon, strong {
			color: var(--action-background-color-${color});
		}

		.Button-icon {
			display: inline-flex;
			font-size: 24px;
		}
	`);
