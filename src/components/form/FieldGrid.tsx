import { styled } from '@mui/material';

// TODO: add react-hook-form to this component
export const FieldGrid = styled('div')`
	display: grid;
	max-width: 50rem;
	place-items: start;
	gap: 1rem;
	margin-bottom: 3rem;
	grid-template-columns: repeat(6, 1fr);

	> * {
		grid-column: span 6;
	}

	[data-span] {
		grid-column: span attr(data-span);
	}
`;
