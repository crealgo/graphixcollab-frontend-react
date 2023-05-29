import {css, styled} from '@mui/material/styles';
import {type Size} from '../../types/general';

type TextProps = {
	size?: Size;
	variant?: 'body' | 'caption';
	contrast?: boolean;
};

export const Text = styled('p')<TextProps>(
	({theme, contrast, variant, size}) => {
		const sizeStyles = {
			small: css`
				font-size: 14px;
			`,
			medium: css`
				font-size: 16px;
			`,
			large: css`
				font-size: 19px;

				${theme.breakpoints.up('md')} {
					font-size: 21px;
				}
			`
		}[size ?? 'medium'];

		const variantColor = {
			body: '#111827',
			caption: '#6b7280'
		}[variant ?? 'body'];

		return css`
			font-family: Inter;
			font-weight: 400;
			margin: 0;
			${sizeStyles}
			line-height: 1.675;
			color: ${contrast ? 'white' : variantColor};
		`;
	}
);

Text.defaultProps = {
	className: 'Text-root'
};
