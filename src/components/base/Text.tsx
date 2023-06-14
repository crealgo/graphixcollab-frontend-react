import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type FC } from 'react';
import { type BaseComponentProps } from '../../types/base';
import { type Size } from '../../types/general';
import { _e } from '../../utils/excludePropsFromForwarding';

type TextProps = BaseComponentProps<{
	className?: string;
	size?: Size;
	spacing?: Size;
	variant?: 'body' | 'caption';
	color?: 'primary' | 'secondary' | 'contrast';
}>;

const BaseElement = styled(
	'p',
	_e('color')
)<TextProps>(
	({ spacing = 'medium', size = 'medium', color = 'primary' }) => css`
		margin: unset;
		color: var(--color-text-${color});
		font-family: var(--type-body-font-family);
		font-weight: var(--type-body-font-weight);
		line-height: var(--type-body-font-leading-${spacing});
		font-size: var(--type-body-font-size-${size});
	`
);

export const Text: FC<TextProps> = ({ children, ...props }) => (
	<BaseElement {...props}>{children}</BaseElement>
);
