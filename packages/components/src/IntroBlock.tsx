import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type Action, type SharedBlockProps} from '@graphixcollab/types/general';
import Logo from './Logo';
import {ActionStack} from './ActionStack';
import {Block} from './Block';
import {Carousel, CarouselSlide} from './Carousel';
import {Container} from './Container';
import {Heading} from './Heading';
import {Text} from './Text';
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
} & ComponentPropsWithoutRef<'div'> & SharedBlockProps;

const images = [
	// { src: 'assets/embroidery-denim-min@1280w.webp', alt: 'Embroider' },
	{src: 'assets/sash-hs-min@1280w.webp', alt: 'Sashes'},
	{src: 'assets/embroidery-shirts-min@1280w.webp', alt: 'Embroidery'},
	{src: 'assets/laughing-group-min@1280w.webp', alt: 'T-Shirts'},
];

const Wrapper = styled('div')`
	position: relative;
	background-color: var(--color-brand-key-lightest);
	/* margin-top: -5rem; */

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

				${({theme}) => theme.breakpoints.up('md')} {
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

const Content = styled('div')(({theme}) => css`
	display:grid;
	grid-template-columns: 1fr;
	width: 100%;
	max-width: 40rem;
	gap: 1.5rem;
	justify-items: center;
	text-align: center;
	margin-inline: auto;

	${theme.breakpoints.up('md')} {
		justify-items: unset;
		text-align: left;
		margin-inline: 0 auto;
	}
`);

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
			<Block className='content'>
				<Container className='IntroBlock-root'>
					<Content>
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
							]}
						/>
					</Content>
				</Container>
			</Block>
		</Wrapper>
	);
};
