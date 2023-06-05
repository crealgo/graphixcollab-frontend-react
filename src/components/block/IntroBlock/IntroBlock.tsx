import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookATimeIcon from '@mui/icons-material/Book';
import { css, styled } from '@mui/material';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { type Action, type SharedBlockProps } from '../../../types/general';
import Logo from '../../atoms/Logo';
import { ActionStack } from '../../base/ActionStack';
import { Block } from '../../base/Block';
import { Carousel, CarouselSlide } from '../../base/Carousel';
import { Container } from '../../base/Container';
import { Heading } from '../../base/Heading';
import { Text } from '../../base/Text';

export type Slide = {
	title: string;
	description: string;
	actions: Action[];
	image: string;
};

export type IntroBlockProps = {
	// color?: 'primary' | 'secondary' | 'grey' | 'none';
	// slides?: Slide[];
	// ImageProps?: ImageProps;
} & ComponentPropsWithoutRef<'div'> &
	SharedBlockProps;

const images = [
	{ src: 'assets/embroidery-denim-min@1280w.webp', alt: 'Embroidery' },
	{ src: 'assets/sash-hs-min@1280w.webp', alt: 'Sashes' },
	{ src: 'assets/embroidery-shirts-min@1280w.webp', alt: 'Embroidery' },
	{ src: 'assets/laughing-group-min@1280w.webp', alt: 'T-Shirts' }
];

const Wrapper = styled('div')`
	position: relative;
	background-color: var(--color-brand-primary-light);
	margin-top: -5rem;

	.IntroBlock-root {
		padding-top: 5rem;
		padding-bottom: 5rem;
	}
`;

const StyledCarousel = styled(Carousel)`
	position: absolute;
	height: 100%;
	width: 100%;
	overflow: hidden;

	opacity: 0.5;
`;

const StyledCarouselSlide = styled(CarouselSlide)`
	height: 100%;
	position: relative;

	/* &::before {
		content: '';
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ;
		z-index: 1;
	} */

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
		/* filter: contrast(1.3) grayscale(0.29) sepia(0.12) saturate(1.1); */
	}

	.Block-root {
		position: absolute;
		width: 100%;
		color: white;
		z-index: 2;

		padding-block: 3rem !important;
		bottom: 0;

		.Container-root {
			line-height: 1;

			.Heading-root {
				color: white;
				text-align: center;

				${({ theme }) => theme.breakpoints.up('lg')} {
					text-align: left;
				}
			}
		}
	}
`;

const Content = styled('div')(
	({ theme }) => css`
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;

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

		.image {
		}

		${theme.breakpoints.up('lg')} {
			grid-template-columns: 1fr 1fr;

			.content {
				padding-inline: 0;
				justify-items: start;
				text-align: left;
			}
		}
	`
);

const StyledText = styled(Text)`
	mark {
		line-height: 1.5;
		background-color: var(--color-brand-cyan-light);
		color: var(--color-text-primary);
	}
`;

export const IntroBlock: FC<IntroBlockProps> = ({ description }) => {
	return (
		<Wrapper>
			{/* <StyledCarousel>
				{images.map(image => (
					<StyledCarouselSlide key={image.alt}>
						<img {...image} />
						<Block>
							<Container>
								<Heading level={2}>{image.alt}</Heading>
							</Container>
						</Block>
					</StyledCarouselSlide>
				))}
			</StyledCarousel> */}
			<Container className="IntroBlock-root">
				<Content>
					<Block className="content">
						<Heading level={1}>
							Welcome to
							<Logo />
						</Heading>
						<Text size="large">{description}</Text>
						<ActionStack
							size="large"
							actions={[
								{
									label: 'Get Started',
									color: 'primary',
									href: '/services',
									endIcon: <ArrowForwardIcon />
								},
								{
									label: 'Book Appointment',
									color: 'text',
									href: '/book-appointment',
									endIcon: <BookATimeIcon />
								}
							]}
						/>
					</Block>
					<div className="image" />
				</Content>
			</Container>
		</Wrapper>
	);
};
