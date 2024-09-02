import {styled} from '@mui/material';
import {css} from 'code-tag';
import {_e} from '@graphixcollab/utils/excludePropsFromForwarding';
import {type ComponentPropsWithRef, type FC} from 'react';
import clsx from 'clsx';

type BaseElementProps = ComponentPropsWithRef<'div'>;

type ContainerProps = {
	size?: 'small' | 'medium' | 'large';
};

const BaseElement: FC<BaseElementProps> = ({
	className = '', children, ref, ...props
}) => (
	<div ref={ref} className={clsx('Container-root', className)} {...props}>
		{children}
	</div>
);

export const Container = styled(BaseElement, _e('ref', 'size'))<ContainerProps>(({
	theme, size = 'medium',
}) => {
	const containerSize = {
		small: `${theme.breakpoints.values.md}`,
		medium: `${theme.breakpoints.values.lg}`,
		large: `${theme.breakpoints.values.xl}`,
	}[size ?? 'medium'];

	return css`
		width: 100%;
		margin-inline: auto;
		max-width: ${containerSize}px;
	`;
});
