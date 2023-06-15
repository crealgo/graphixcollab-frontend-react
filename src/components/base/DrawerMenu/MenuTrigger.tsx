import { styled } from '@mui/material';
import { IconButtonBase } from '../IconButtonBase';

export const MenuTrigger = styled(IconButtonBase)`
	grid-area: mobile-menu;

	&:hover {
		background-color: var(--color-gray-300);
	}
`;
