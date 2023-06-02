import { useControlled } from '@mui/material';
import clsx from 'clsx';
import { type FC } from 'react';
import { Image } from '../Image';
import { DotsInput } from './DotsInput';
import { ImageCarouselWrapper } from './ImageCarouselWrapper';

export type SharedCarouseProps = {
	height?: number;
	width?: number;
};

export type CarouselCardProps = {
	tilt?: 'left' | 'right';
	// interactive?: boolean;
	images: string[];
	// autoplay?: boolean;
	currentIndex?: number;
	className?: string;
} & SharedCarouseProps;

export const ImageCarousel: FC<CarouselCardProps> = ({
	images,
	// autoplay,
	currentIndex,
	// interactive,
	className,
	...props
}) => {
	const [index, setIndex] = useControlled({
		default: 0,
		controlled: currentIndex,
		name: 'Dots Input Index'
	});

	return (
		<ImageCarouselWrapper
			imageCount={images.length}
			currentIndex={index}
			className={clsx('ImageCarousel-root', className)}
			{...props}
		>
			{images.length
				? images.map((imageSrc, imageIndex) => (
						<Image
							key={imageIndex}
							className={clsx('Carousel-image', {
								'Carousel-selected': index === imageIndex
							})}
							// ImageElementProps={{
							// 	src: imageSrc,
							// 	alt: `Carousel Image ${imageIndex}`
							// }}
						/>
				  ))
				: null}
			<DotsInput
				currentIndex={index}
				count={images.length}
				onIndexChange={index => {
					setIndex(index);
				}}
			/>
		</ImageCarouselWrapper>
	);
};
