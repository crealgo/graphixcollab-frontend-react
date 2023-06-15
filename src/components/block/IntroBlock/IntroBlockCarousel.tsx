import { css, styled } from '@mui/material';
import {
	useRef,
	useState,
	type ComponentPropsWithoutRef,
	type FC
} from 'react';
import IntroImage from '../../../assets/sitting-and-laughing-intro.webp';
import { type Action, type SharedBlockProps } from '../../../types/general';
import { ActionStack } from '../../base/ActionStack';
import { Block } from '../../base/Block';
import { Carousel } from '../../base/Carousel';
import { CarouselSlide } from '../../base/Carousel/CarouselSlide';
import { Container } from '../../base/Container';
import { Heading } from '../../base/Heading';
import { Image } from '../../base/Image';
import { Text } from '../../base/Text';

export type Slide = {
	title: string;
	description: string;
	actions: Action[];
	image: string;
};

export type IntroBlockProps = {
	// color?: 'primary' | 'secondary' | 'grey' | 'none';
	slides?: Slide[];
	// ImageProps?: ImageProps;
} & ComponentPropsWithoutRef<'div'> &
	SharedBlockProps;

const StyledCarousel = styled(Carousel)`
	overflow: visible;
`;

const StyledCarouselSlide = styled(CarouselSlide)`
	padding: 0 2rem;

	&:nth-of-type(1n) .Block-root {
		background-color: var(--color-brand-primary-lighter);
	}

	&:nth-of-type(2n) .Block-root {
		background-color: var(--color-brand-secondary-lighter);
	}

	&:nth-of-type(3n) .Block-root {
		background-color: var(--color-brand-tertiary-lighter);
	}
`;

const Content = styled('div')(
	({ theme }) => css`
		z-index: 1;
		position: relative;
		display: grid;

		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
			align-content: center;
			justify-items: center;
			border-radius: 0.5rem;
			text-align: center;

			.Text-root {
				max-width: ${theme.breakpoints.values.sm}px;
			}
		}

		+ .image {
			display: none;
		}

		${theme.breakpoints.up('lg')} {
			grid-template-columns: repeat(2, 1fr);

			.content {
				justify-items: start;
				text-align: left;
			}

			+ .image {
				margin: unset;
				position: absolute;
				aspect-ratio: 1.1 / 1;
				border-radius: 0.5rem;
				display: block;
				overflow: hidden;
				box-shadow: var(--elevation-5);

				width: auto;
				height: 90%;

				top: 50%;
				transform: translateY(-50%);
				right: -5%;

				img {
					height: 100%;
					width: 100%;
					object-fit: cover;
				}
			}
		}
	`
);

export const IntroBlock: FC<IntroBlockProps> = ({ slides = [] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const blockRef = useRef<HTMLDivElement>(null);

	return (
		<Container className="IntroBlock-root">
			<StyledCarousel>
				{slides?.map((_, index) => (
					<StyledCarouselSlide key={index}>
						<Block ref={blockRef} isRounded>
							<Content>
								<div className="content">
									<Heading level={1}>
										{slides[currentIndex].title}
									</Heading>
									<Text>
										{slides[currentIndex].description}
									</Text>{' '}
									<ActionStack
										size="large"
										actions={slides[currentIndex].actions}
									/>
									<div>
										<button
											type="button"
											onClick={() => {
												if (currentIndex > 0) {
													setCurrentIndex(
														currentIndex - 1
													);
												}
											}}
										>
											Previous
										</button>
										<button
											type="button"
											onClick={() => {
												if (
													currentIndex <
													slides.length - 1
												) {
													setCurrentIndex(
														currentIndex + 1
													);
												}
											}}
										>
											Next
										</button>
									</div>
								</div>
							</Content>
							<div className="image">
								<Image
									src={
										slides[currentIndex].image ??
										IntroImage.src
									}
								/>
							</div>
						</Block>
					</StyledCarouselSlide>
				))}
			</StyledCarousel>
		</Container>
	);
};
