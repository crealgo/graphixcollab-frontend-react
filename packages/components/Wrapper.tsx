import {styled} from '@mui/material';

export const Wrapper = styled('div')(
	({theme}) => `
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;

	${theme.breakpoints.up('sm')} {
		max-width: 25rem;
	}
`,
);
