import { css, styled } from '@mui/material';
import { IconButtonBase } from '../IconButtonBase';

export const MenuTrigger = styled(IconButtonBase)(
	({ theme }) => css`
		grid-area: mobile-menu;

		&:hover {
			background-color: ${theme.palette.grey[300]};
		}
	`
);
