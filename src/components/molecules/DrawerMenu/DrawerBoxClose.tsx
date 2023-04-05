import {css, styled} from '@mui/material';
import {IconButtonBase} from '../IconButtonBase';

export const DrawerBoxClose = styled(IconButtonBase)(
	({theme}) => css`
		border-radius: 9999px;
		background-color: ${theme.palette.grey[100]};
		height: 2rem;

		&:hover {
			background-color: ${theme.palette.grey[300]};
		}
	`
);
