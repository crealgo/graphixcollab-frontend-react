import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {type FC} from 'react';
import {_e} from '../../utils/excludePropsFromForwarding';

type TextProps = BaseComponentProps & {
	readonly className?: string;
	readonly size?: Size;
	readonly variant?: 'body' | 'caption';
	readonly color?: 'primary' | 'secondary' | 'contrast';
};

const BaseElement = styled('p', _e('color'))<TextProps>(({
	size = 'medium', color = 'primary',
}) => css`
	margin: unset;
	color: var(--color-text-${color});
	font-family: var(--type-body-font-family);
	font-weight: var(--type-body-font-weight);
	line-height: 175%;
	font-size: var(--type-body-font-size-${size});
`);

export const Text: FC<TextProps> = ({children, ...props}) => (
	<BaseElement {...props}>{children}</BaseElement>
);
