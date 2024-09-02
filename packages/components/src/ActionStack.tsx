import {css, styled} from '@mui/material';
import clsx from 'clsx';
import {type FC, type PropsWithChildren} from 'react';
import {type Action} from '@graphixcollab/types/general.d.ts';
import {Button, type ButtonProps} from './Button';

export type ActionStackProps = PropsWithChildren<{
	readonly prefix?: string;
	readonly text?: string;
	readonly className?: string;
	readonly align?: 'start' | 'center' | 'end';
	readonly max?: number;
	readonly color?: ButtonProps['color'];
	readonly size?: ButtonProps['size'];
	readonly actions?: Action[];
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
				{...actionItemsProps}
				key={actionIndex}
				size={size}
				color={color}
			>
				{label}
			</Button>
		))}
	</Wrapper>
);
