import styled from '@emotion/styled';
import useEmblaCarousel, {EmblaOptionsType} from 'embla-carousel-react';
import {useEffect, type FC, type ReactElement} from 'react';
import autoplay from 'embla-carousel-autoplay';

const Wrapper = styled.div`
	overflow: hidden;
`;

const Container = styled.div`
	display: flex;
`;

type CarouselProps = {
	onSlideChange?: () => void;
	className?: string;
	children?: ReactElement | ReactElement[];
};

export const Carousel: FC<CarouselProps> = ({
	onSlideChange,
	className,
	children
}) => {
	const [containerRef, carouselApi] = useEmblaCarousel(
		{
			loop: true
		},
		[autoplay()]
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
