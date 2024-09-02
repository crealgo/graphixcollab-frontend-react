import {css, styled} from '@mui/material';
import {contentBoxPadding} from './DrawerMenu';

type ContentBoxProps = {
	isColored?: boolean;
	hasBorder?: boolean;
};
export const ContentBox = styled('div')<ContentBoxProps>(
	({isColored, hasBorder}) => css`
		padding: ${contentBoxPadding};
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		${isColored ? 'background-color: var(--color-brand-key-lightest);' : ''}
		${hasBorder ? 'border-bottom: solid 1px var(--color-brand-key-lighter);' : ''}
	`,
);
