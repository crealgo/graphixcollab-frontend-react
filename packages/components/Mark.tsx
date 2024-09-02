import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {type FC} from 'react';
import {BrandDots} from './BrandDots';

type MarkProps = BaseComponentProps & {
	readonly text?: boolean; // eslint-disable-line react/boolean-prop-naming
	readonly color?: ColorVariant;
	readonly brand?: boolean; // eslint-disable-line react/boolean-prop-naming
};

const StyledMark = styled('mark')<MarkProps>(
	({text, brand, color = 'cyan'}) => {
		const sharedCss = css`
			background: unset;
			/* display: inline-flex; */
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
			background: var(--color-brand-${color}-lightest);
		`;
	},
);

export const Mark: FC<MarkProps> = ({children, ...props}) => (
	<StyledMark {...props}>
		{children}
		{props.brand ? <BrandDots/> : null}
	</StyledMark>
);
