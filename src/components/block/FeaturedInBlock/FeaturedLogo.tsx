import {type FC} from 'react';
import {type FeaturedCompanyInfo} from '../../../content/featured-companies';
import styled from '@emotion/styled';

const StyledFigure = styled.figure`
	display: flex;
	height: inherit;
	width: inherit;
	place-items: center;
	place-content: center;
	margin: 0 0.5rem;
`;

export const FeaturedLogo: FC<FeaturedCompanyInfo> = props => (
	<StyledFigure>
		<img
			style={{
				objectFit: 'contain',
				...props.styleOverrides
			}}
			height="200"
			width="200"
			src={props.image}
			alt={props.name}
		/>
	</StyledFigure>
);
