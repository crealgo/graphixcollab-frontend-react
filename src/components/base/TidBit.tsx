import { css } from '@emotion/react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { type FC, type PropsWithChildren } from 'react';
import { ButtonBase, type ButtonBaseProps } from '../atoms/ButtonBase';

export type TidBitProps = PropsWithChildren<{
	color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	className?: string;
	icon?: ButtonBaseProps['startIcon'];
}> &
	Pick<ButtonBaseProps, 'href' | 'onClick'>;

const BaseElement: FC<TidBitProps> = ({
	className,
	icon,
	children,
	color, // eslint-disable-line @typescript-eslint/no-unused-vars
	...props
}) => (
	<ButtonBase
		type="button"
		className={clsx('TidBit-root', className)}
		startIcon={icon}
		{...props}
	>
		{children}
	</ButtonBase>
);

export const TidBit = styled(BaseElement)<TidBitProps>(
	({ icon, color = 'primary' }) => css`
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
		border: var(--button-border-primary);
		box-shadow: var(--button-shadow-primary);

		.Button-icon {
			color: var(--color-brand-${color}-main);
		}

		.Button-icon {
			display: inline-flex;
			font-size: 24px;
		}
	`
);
