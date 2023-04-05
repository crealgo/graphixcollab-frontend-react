import {styled} from '@mui/material';
import {contentBoxPadding} from '@components/DrawerMenu';

export const TitleBox = styled('div')<{hasBorder?: boolean}>(
	({theme, hasBorder}) => `
	padding: ${contentBoxPadding};

	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	align-items: center;

	${hasBorder ? `border-bottom: solid 1px ${theme.palette.grey[300]};` : ''}
`
);
