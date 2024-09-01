import {styled} from '@mui/material';
import {contentBoxPadding} from './DrawerMenu';

export const TitleBox = styled('div')<{hasBorder?: boolean}>(
	({hasBorder}) => `
	padding: ${contentBoxPadding};

	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	align-items: center;
	flex: none;

	${hasBorder ? 'border-bottom: solid 1px var(--color-brand-key-lighter);' : ''}
`,
);
