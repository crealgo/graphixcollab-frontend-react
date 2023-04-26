import {css, styled} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithRef, type FC} from 'react';
import {_e} from '../../utils/excludePropsFromForwarding';

export type BlockProps = {
	color?: 'primary' | 'secondary' | 'grey';
	isRounded?: boolean;
} & ComponentPropsWithRef<'div'>;

const StyledDiv = styled(
	'div',
	_e('isRounded', 'color')
)<BlockProps>(props => {
	const blockColor = {
		default: 'transparent',
		primary: props.theme.palette.primary.light,
		secondary: props.theme.palette.secondary.light,
		grey: props.theme.palette.grey[100]
	}[props.color ?? 'default'];

	return css`
		background-color: ${blockColor};
		position: relative;

		padding-block: 4rem;
		padding-inline: 1.5rem;

		${props.theme.breakpoints.up('md')} {
			padding-block: 7rem;
			padding-inline: 2rem;

			border-radius: ${props.isRounded ? '0.5rem' : '0rem'};
		}

		${props.theme.breakpoints.up('xl')} {
			padding-inline: 4rem;
		}
	`;
});

export const Block: FC<BlockProps> = ({className, children, ...props}) => (
	<StyledDiv {...props} className={clsx('Block-root', className)}>
		{children}
	</StyledDiv>
);
