import {styled} from '@mui/material';

export const Wrapper = styled('div')(
	({theme}) => `
	width: 100vw;

	${theme.breakpoints.up('sm')} {
		max-width: 25rem;
	}
`
);
