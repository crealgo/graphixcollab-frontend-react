import styled from '@emotion/styled';
import NextLink from 'next/link';

export const Link = styled(NextLink)`
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	color: var(--color-brand-magenta-main);

	&:hover {
		text-decoration: underline;
	}
`;
