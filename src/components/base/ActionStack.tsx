import {css, styled} from '@mui/material';
import clsx from 'clsx';
import {type FC, type PropsWithChildren} from 'react';
import {type Action} from '../../types/general';
import {Button, type ButtonProps} from './Button';

export type ActionStackProps = PropsWithChildren<{
	prefix?: string;
	text?: string;
	className?: string;
	align?: 'start' | 'center' | 'end';
	max?: number;
	color?: ButtonProps['color'];
	size?: ButtonProps['size'];
	actions?: Action[];
}>;

const Wrapper = styled('div')<ActionStackProps>(({theme, align}) => css`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
	align-items: center;

	&.is-center {
		justify-content: center;
	}

	&.is-end {
		justify-content: end;
	}

	&.is-start {
		justify-content: start;
	}

	${theme.breakpoints.up('sm')} {
		display: flex;
		flex-wrap: nowrap;
	}
`);

export const ActionStack: FC<ActionStackProps> = ({
	actions, max = 2, className = '', children, align = 'start',
	size = 'medium', color = 'tertiary',
}) => (
	<Wrapper className={clsx(className, 'ActionStack-root', `is-${align}`)}>
		{children}
		{actions?.slice(0, max).map(({label, ...actionItemsProps}, actionIndex) => (
			<Button
				key={actionIndex}
				size={size}
				color={color}
				{...actionItemsProps}
			>
				{label}
			</Button>
		))}
	</Wrapper>
);
