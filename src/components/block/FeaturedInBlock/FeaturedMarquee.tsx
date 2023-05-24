import styled from '@emotion/styled';
import Marquee from 'react-fast-marquee';

export const FeaturedMarquee = styled(Marquee)`
	overflow: hidden;

	.overlay {
		pointer-events: none;
	}
`;
