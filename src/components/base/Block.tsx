import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {_e} from '../../utils/excludePropsFromForwarding';
import clsx from 'clsx';

type BaseElementProps = ComponentPropsWithoutRef<'div'>;

export type BlockProps = {
	color?: 'primary' | 'secondary' | 'grey';
	rounded?: boolean;
};

const BaseElement: FC<BaseElementProps> = ({className, ...props}) => (
	<div {...props} className={clsx('Block-root', className)}>
		{props.children}
	</div>
);

export const Block = styled(
	BaseElement,
	_e('rounded', 'color'),
)<BlockProps>(props => {
	const blockColor = {
		default: 'transparent',
		primary: props.theme.palette.primary.light,
		secondary: props.theme.palette.secondary.light,
		grey: props.theme.palette.grey[100],
	}[props.color ?? 'default'];

	return css`
		background-color: ${blockColor};
		position: relative;

		padding-block: 4rem;
		padding-inline: 1.5rem;

		${props.theme.breakpoints.up('md')} {
			padding-block: 7rem;
			padding-inline: 2rem;

			border-radius: ${props.rounded ? '0.5rem' : '0rem'};
		}

		${props.theme.breakpoints.up('xl')} {
			padding-inline: 4rem;
		}
	`;
});
