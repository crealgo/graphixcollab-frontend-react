import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type Action, type SharedBlockProps} from '../../../types/general';
import Logo from '../../atoms/Logo';
import {ActionStack} from '../../base/ActionStack';
import {Block} from '../../base/Block';
import {Carousel, CarouselSlide} from '../../base/Carousel';
import {Container} from '../../base/Container';
import {Heading} from '../../base/Heading';
import {Text} from '../../base/Text';
import {ArrowRight} from '@mui/icons-material';
import {useRouter} from 'next/router';

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
	// { src: 'assets/embroidery-denim-min@1280w.webp', alt: 'Embroider' },
	{src: 'assets/sash-hs-min@1280w.webp', alt: 'Sashes'},
	{src: 'assets/embroidery-shirts-min@1280w.webp', alt: 'Embroidery'},
	{src: 'assets/laughing-group-min@1280w.webp', alt: 'T-Shirts'},
];

const Wrapper = styled('div')`
	position: relative;
	background-color: var(--color-gray-200);
	margin-top: -5rem;

	.IntroBlock-root {
		padding-top: 5rem;
		padding-bottom: 5rem;
	}
`;

const BackgroundCarousel = styled(Carousel)`
	position: absolute;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

const BackgroundCarouselSlide = styled(CarouselSlide)`
	height: 100%;
	position: relative;

	img {
		width: 100%;
		opacity: 0.25;
		height: 100%;
		object-fit: cover;
		object-position: center center;
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

			.Slide-heading {
				text-align: center;

				${({theme}) => theme.breakpoints.up('lg')} {
					text-align: left;
				}
			}
		}
	}

	&:nth-of-type(1n) .Slide-heading {
		color: var(--color-brand-cyan-dark);
	}

	&:nth-of-type(2n) .Slide-heading {
		color: var(--color-brand-magenta-dark);
	}

	&:nth-of-type(3n) .Slide-heading {
		color: var(--color-brand-yellow-dark);
	}

	&:nth-of-type(4n) .Slide-heading {
		color: var(--color-brand-yellow-dark);
	}
`;

const Content = styled('div')(
	({theme}) => css`
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;

		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 2rem;
			align-content: center;
			justify-items: center;
			border-radius: 0.5rem;
			text-align: center;

			.Text-root {
				max-width: ${theme.breakpoints.values.sm}px;
				background-color: lightblue;
			}

			.ActionStack-root > * {
				display: flex;
				justify-content: center;
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
	`,
);

export const IntroBlock: FC<IntroBlockProps> = ({description}) => {
	const router = useRouter();

	return (
		<Wrapper>
			<BackgroundCarousel>
				{images.map(image => (
					<BackgroundCarouselSlide key={image.alt}>
						<img src={image.src} alt={image.alt}/>
						<Block>
							<Container>
								<Heading className='Slide-heading' level={2}>
									{image.alt}
								</Heading>
							</Container>
						</Block>
					</BackgroundCarouselSlide>
				))}
			</BackgroundCarousel>
			<Container className='IntroBlock-root'>
				<Content>
					<Block className='content'>
						<Heading level={1}>
							Welcome to <Logo/>
						</Heading>
						<Text size='large'>{description}</Text>
						<ActionStack
							size='large'
							actions={[
								{
									label: 'Book Appointment',
									href: `${router.basePath}/book-appointment`,
									color: 'primary',
									endIcon: <ArrowRight/>,
								},
								{
									label: 'Get Started',
									color: 'text',
									href: `${router.basePath}/services`,
									endIcon: <ArrowRight/>,
								},
							]}
						/>
					</Block>
					<div className='image'/>
				</Content>
			</Container>
		</Wrapper>
	);
};
