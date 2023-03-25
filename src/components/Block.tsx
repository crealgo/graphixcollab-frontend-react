import {css, styled} from '@mui/material';

export interface BlockProps {
	color?: 'primary' | 'secondary' | 'grey';
	component?: 'section' | 'div';
	size?: 'small' | 'medium';
}

export const Block = styled('section')<BlockProps>(({theme, color}) => {
	const blockColor = {
		default: 'transparent',
		primary: theme.palette.primary.light,
		secondary: theme.palette.secondary.light,
		grey: theme.palette.grey[100]
	}[color ?? 'default'];

	return css`
		background-color: ${blockColor};
		position: relative;
		${theme.utils.styles.block};
	`;
});

Block.displayName = 'Block';
