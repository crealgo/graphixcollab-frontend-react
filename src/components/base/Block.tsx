import {styled} from '@mui/material';
import {css} from 'code-tag';
import clsx from 'clsx';
import {type ComponentPropsWithRef, type FC} from 'react';
import {_e} from '../../utils/excludePropsFromForwarding';

export type BlockProps = {
	/**
	 * Disables the block's inline margin
	 */
	hasNoDefaultMargin?: boolean;
	color?: 'primary' | 'secondary' | 'grey';
	isRounded?: boolean;
} & ComponentPropsWithRef<'div'>;

const StyledDiv = styled(
	'div',
	_e('isRounded', 'color')
)<BlockProps>(({theme, color, hasNoDefaultMargin, isRounded = false}) => {
	const blockColor = {
		default: 'transparent',
		primary: theme.palette.primary.light,
		secondary: theme.palette.secondary.light,
		grey: theme.palette.grey[100]
	}[color ?? 'default'];

	return css`
		background-color: ${blockColor};
		position: relative;

		padding-block: 4rem;
		padding-inline: 1.5rem;

		${theme.breakpoints.up('md')} {
			padding-block: 7rem;
			padding-inline: 2rem;
			margin-inline: ${hasNoDefaultMargin ? 'unset' : '0.5rem'};
			border-radius: ${isRounded ? '0.5rem' : '0rem'};
		}

		${theme.breakpoints.up('xl')} {
			padding-inline: 4rem;
		}
	`;
});

export const Block: FC<BlockProps> = ({className, children, ...props}) => (
	<StyledDiv {...props} className={clsx('Block-root', className)}>
		{children}
	</StyledDiv>
);
