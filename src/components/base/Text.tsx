import {css, styled} from '@mui/material/styles';
import {type Size} from '../../types/general';

type TextProps = {
	size?: Size;
	variant?: 'body' | 'caption';
};

export const Text = styled('p')<TextProps>(({theme, variant, size}) => {
	const sizeStyles = {
		small: css`
			font-size: 14px;
			line-height: 21px;
		`,
		medium: css`
			font-size: 16px;
			line-height: 24px;
		`,
		large: css`
			font-size: 19px;
			line-height: 28px;

			${theme.breakpoints.up('md')} {
				font-size: 21px;
				line-height: 32px;
			}
		`,
	}[size ?? 'medium'];

	const variantStyles = {
		body: css`
			color: #111827;
		`,
		caption: css`
			color: #6b7280;
		`,
	}[variant ?? 'body'];

	return css`
		font-family: Inter;
		font-weight: 400;
		margin: 0;
		${sizeStyles}
		${variantStyles}
	`;
});

Text.defaultProps = {
	className: 'Text-root',
};
