import WarningIcon from '@mui/icons-material/Warning';
import {styled} from '@mui/material';

export const ErrorState = styled(WarningIcon)`
	opacity: 0.5;
`;

ErrorState.defaultProps = {
	fontSize: 'small',
	className: 'ErrorState-root'
};
