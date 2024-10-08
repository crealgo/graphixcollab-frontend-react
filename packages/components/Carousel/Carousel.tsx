import styled from '@emotion/styled';
import autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import {type ReactNode, useEffect, type FC} from 'react';

const Wrapper = styled.div`
	overflow: hidden;
`;

const Container = styled.div`
	display: flex;
	height: 100%;
`;

type CarouselProps = {
	readonly onSlideChange?: () => void;
	readonly className?: string;
	readonly children?: ReactNode;
};

export const Carousel: FC<CarouselProps> = ({
	onSlideChange,
	className,
	children,
}) => {
	const [containerRef, carouselApi] = useEmblaCarousel(
		{
			loop: true,
			containScroll: 'keepSnaps',
		},
		[autoplay()],
	);

	useEffect(() => {
		carouselApi?.on('slidesChanged', () => {
			onSlideChange?.();
		});
	}, [carouselApi, onSlideChange]);

	return (
		<Wrapper ref={containerRef} className={className}>
			<Container>{children}</Container>
		</Wrapper>
	);
};
