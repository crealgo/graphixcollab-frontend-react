import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type FC } from 'react';
import { type BaseComponentsProps } from '../../types/base';
import { Dots } from './Dots';

type MarkProps = BaseComponentsProps<{
	text?: boolean;
	color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	brand?: boolean;
}>;

const StyledMark = styled('mark')<MarkProps>(
	({ text, brand, color = 'cyan' }) => {
		const sharedCss = css`
			background: unset;
			display: inline-flex;
		`;

		if (brand) {
			return css`
				${sharedCss}
				position: relative;
			`;
		}

		if (text) {
			return css`
				${sharedCss}
				color: var(--color-brand-${color}-main);
			`;
		}

		return css`
			${sharedCss}
			background: var(--color-brand-${color}-lighter);
		`;
	}
);

export const Mark: FC<MarkProps> = ({ children, ...props }) => {
	return (
		<StyledMark {...props}>
			{children}
			{props.brand ? <Dots className="Logo-dots" /> : null}
		</StyledMark>
	);
};
