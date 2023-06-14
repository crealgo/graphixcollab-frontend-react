import { styled } from '@mui/material';
import { IconButtonBase } from '../IconButtonBase';

export const DrawerBoxClose = styled(IconButtonBase)`
	border-radius: 9999px;
	background-color: var(--color-gray-100);
	height: 2rem;

	&:hover {
		background-color: var(--color-gray-300);
	}
`;
