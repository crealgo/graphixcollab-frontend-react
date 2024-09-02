import styled from '@emotion/styled';
import Marquee from 'react-fast-marquee';

export const FeaturedMarquee = styled(Marquee)`
	:root {
		--marquee-item-gap: 1rem;
	}

	overflow: hidden;
	gap: var(--marquee-item-gap);

	.marquee {
		gap: var(--marquee-item-gap);
	}

	.overlay {
		pointer-events: none;
	}
`;

FeaturedMarquee.defaultProps = {
	direction: 'left',
	speed: 10,
	pauseOnHover: true,
};
