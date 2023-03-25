import {CircularProgress, styled} from '@mui/material';

export const LoadingState = styled(CircularProgress)`
	opacity: 0.875;
`;

LoadingState.defaultProps = {
	size: 16,
	thickness: 5,
	className: 'LoadingState-root',
	'aria-label': 'Loading...'
};
