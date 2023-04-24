import {css, styled} from '@mui/material';
import {_e} from '../../utils/excludePropsFromForwarding';
import {type ComponentPropsWithRef, type FC} from 'react';
import clsx from 'clsx';

type BaseElementProps = ComponentPropsWithRef<'div'>;

type ContainerProps = {
	size?: 'small' | 'medium' | 'large';
};

const BaseElement: FC<BaseElementProps> = ({
	className = '',
	children,
	ref,
	...props
}) => (
	<div ref={ref} className={clsx('Container-root', className)} {...props}>
		{children}
	</div>
);

export const Container = styled(
	BaseElement,
	_e('ref', 'size')
)<ContainerProps>(({theme, size}) => {
	const containerSize = {
		small: theme.breakpoints.values.md,
		medium: theme.breakpoints.values.lg,
		large: theme.breakpoints.values.xl
	}[size ?? 'medium'];

	const containerMaxWidth = size
		? `max-width: ${containerSize}px;`
		: `
			${theme.breakpoints.up('md')} {
				max-width: ${theme.breakpoints.values.md}px;
			}

			${theme.breakpoints.up('lg')} {
				max-width: ${theme.breakpoints.values.lg}px;
			}
		`;

	return css`
		width: 100%;
		margin-inline: auto;
		${containerMaxWidth}
	`;
});
