import { css, styled } from '@mui/material';
import { contentBoxPadding } from '.';

type ContentBoxProps = {
	isColored?: boolean;
	hasBorder?: boolean;
};
export const ContentBox = styled('div')<ContentBoxProps>(
	({ theme, isColored, hasBorder }) => css`
		padding: ${contentBoxPadding};
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		${isColored ? `background-color: var(--color-gray-100);` : ''}
		${hasBorder ? `border-bottom: solid 1px var(--color-gray-300);` : ''}
	`
);
