import { styled } from '@mui/material/styles';

export const LinkListItem = styled('li')`
	display: block;
	padding-block: 0.75rem;
	border-bottom: solid 1px var(--color-gray-300);

	&:nth-of-type(1) {
		border-top: solid 1px var(--color-gray-300);
	}
`;
