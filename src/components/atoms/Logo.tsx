import styled from '@emotion/styled';
import { type FC } from 'react';
import { BrandDots } from './BrandDots';
import Link from 'next/link';

const StyledDiv = styled(Link)`
	text-decoration: none;
	display: inline-grid;

	color: var(--color-brand-key-main);
	font-family: var(--type-heading-font-family);
	display: inline-flex;
	font-weight: 700;
	font-size: 1em;
	line-height: inherit;
	position: relative;

	&:hover {
		color: var(--color-brand-key-light);
	}

	&:active {
		color: var(--color-brand-key-main);
	}
`;

const Logo: FC = () => {
	return (
		<StyledDiv href="/" role="img" title="Graphix Collab, LLC">
			<span className="Graphix">Graphix</span>
			<span className="Logo-collab">Collab</span>
			<BrandDots />
		</StyledDiv>
	);
};

export default Logo;
