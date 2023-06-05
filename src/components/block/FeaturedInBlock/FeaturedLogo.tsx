import { type FC } from 'react';
import { type FeaturedCompanyInfo } from '../../../content/featured-companies';
import styled from '@emotion/styled';

const StyledFigure = styled.figure`
	display: flex;
	height: inherit;
	width: inherit;
	place-items: center;
	place-content: center;
	margin: 0 0.5rem;
`;

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

export const FeaturedLogo: FC<FeaturedCompanyInfo> = props => (
	<StyledFigure>
		<StyledImage
			style={props.styleOverrides}
			src={props.image}
			alt={props.name}
		/>
	</StyledFigure>
);
