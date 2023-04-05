import {useControlled} from '@mui/material';
import clsx from 'clsx';
import {type FC} from 'react';
import {Image} from '../Image';
import {DotsInput} from './DotsInput';
import {ImageCarouselWrapper} from './ImageCarouselWrapper';

export interface SharedCarouseProps {
	height?: number;
	width?: number;
}

export interface CarouselCardProps extends SharedCarouseProps {
	tilt?: 'left' | 'right';
	interactive?: boolean;
	images: string[];
	autoplay?: boolean;
	currentIndex?: number;
	className?: string;
}

export const ImageCarousel: FC<CarouselCardProps> = ({
	images,
	autoplay,
	currentIndex,
	interactive,
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
			className={'ImageCarousel-root'}
			{...props}
		>
			{images.length
				? images.map((imageSrc, imageIndex) => (
					<Image
						className={clsx('Carousel-image', {
							'Carousel-selected': index === imageIndex
						})}
						key={imageIndex}
						ImageElementProps={{
							src: imageSrc,
							alt: `Carousel Image ${imageIndex}`
						}}
					/>
				))
				: null}
			<DotsInput
				currentIndex={index}
				count={images.length}
				onIndexChange={(index) => {
					setIndex(index);
				}}
			/>
		</ImageCarouselWrapper>
	);
};
