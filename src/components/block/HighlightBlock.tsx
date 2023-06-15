import { styled, Typography } from '@mui/material';
import { type FC } from 'react';

export type HighlightBlockProps = {
	quote?: string;
	quoter?: string;
};

const HighlightBlockWrapper = styled('div')`
	background-color: var(--color-brand-secondary-main);
	display: flex;
	justify-content: center;

	.HighlightBlock-content {
		display: grid;
		gap: 1rem;
		width: 100%;
		max-width: 900px;
	}
`;

export const HighlightBlock: FC<HighlightBlockProps> = props => (
	<HighlightBlockWrapper>
		<div className="HighlightBlock-content">
			<Typography variant="h4" className="HighlightBlock-quote">
				{props.quote}
			</Typography>
			<Typography variant="body1" className="HighlightBlock-quoter">
				{props.quoter}
			</Typography>
		</div>
	</HighlightBlockWrapper>
);
