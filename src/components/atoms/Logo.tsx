import styled from '@emotion/styled';
import { type FC } from 'react';
import { BrandDots } from './BrandDots';

const StyledDiv = styled.div`
	font-family: Inter Tight;
	display: inline-flex;
	font-weight: 700;
	font-size: 1em;
	line-height: inherit;
	position: relative;
`;

const Logo: FC = () => {
	return (
		<StyledDiv role="img" title="Graphix Collab, LLC">
			GraphixCollab
			<BrandDots />
		</StyledDiv>
	);
};

export default Logo;
