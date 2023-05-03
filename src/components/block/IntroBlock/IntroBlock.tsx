import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import IntroImage from '../../../assets/sitting-and-laughing-intro.webp';
import {type Action, type SharedBlockProps} from '../../../types/general';
import {ActionStack} from '../../base/ActionStack';
import {Block} from '../../base/Block';
import {Container} from '../../base/Container';
import {Heading} from '../../base/Heading';
import {Text} from '../../base/Text';
import {Carousel, CarouselSlide} from '../../base/Carousel';
import Logo from '../../atoms/Logo';

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

const images = [
	{src: 'assets/embroidery-denim.jpg', alt: 'Embroidery'},
	{src: 'assets/sash-hs.jpg', alt: 'Sashes'},
	{src: 'assets/laughing-group.jpg', alt: 'T-Shirts'},
	{src: 'assets/embroidery-shirts.avif', alt: 'Embroidery'},
	// {src: 'assets/sash-ucla.jpg', alt: 'Sashes'}
];

const StyledCarousel = styled(Carousel)`
	height: 35rem;
	overflow: hidden;
	width: 100%;
`;

const StyledCarouselSlide = styled(CarouselSlide)`
	height: inherit;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
	}

	.Heading-root {
		position: absolute;
		color: white;

		bottom: 1rem;
		left: 1rem;
		line-height: 1;
	}
`;

const Content = styled('div')(
	({theme}) => css`
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
			padding-inline: 0;

			.Text-root {
				max-width: ${theme.breakpoints.values.sm}px;
			}
		}

		.image {
			background: blue;
			width: 100%;
		}

		${theme.breakpoints.up('lg')} {
			grid-template-columns: 1fr 1fr;

			.content {
				justify-items: start;
				text-align: left;
			}
		}
	`
);

export const IntroBlock: FC<IntroBlockProps> = ({title, description}) => {
	return (
		<Container className="IntroBlock-root">
			<Content>
				<Block className="content">
					<Heading gutterBottom level={1}>
						Welcome to <Logo />
					</Heading>
					<Text>{description}</Text>{' '}
					<ActionStack
						size="large"
						actions={[
							{
								label: 'Get Started',
								color: 'primary'
							},
							{
								label: 'Book Appointment',
								color: 'text'
							}
						]}
					/>
				</Block>
				<div className="image">
					<StyledCarousel>
						{images.map(image => (
							<StyledCarouselSlide key={image.alt}>
								<img {...image} />
								<Heading level={2}>{image.alt}</Heading>
							</StyledCarouselSlide>
						))}
					</StyledCarousel>
				</div>
			</Content>
		</Container>
	);
};
