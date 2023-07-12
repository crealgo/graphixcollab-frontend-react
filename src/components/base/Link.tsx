import { styled } from '@mui/material/styles';

export const Link = styled('a')`
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	color: var(--color-brand-magenta-main);

	&:hover {
		text-decoration: underline;
	}
`;
