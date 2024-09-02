import {useSprings} from '@react-spring/web';
import clsx from 'clsx';
import {type FC, type ReactNode} from 'react';
import {useCarouselIndex} from './useCarouselIndex';
import {ActionStack} from './ActionStack';
import {Container} from './Container';
import {Heading} from './Heading';
import {Image} from './Image';
import {Text} from './Text';
import {CarouselControlTitle, CarouselControlTitles, ContentColumn, HeroCarousel, HeroCarouselSlide, Wrapper} from './HeroBlock.styles';
import {type ActionBag} from '@graphixcollab/types/general';

type SlideBag = {
	title: string;
	src: string;
	alt: string;
};

export type HeroBlockProps = {
	readonly slides: SlideBag[];
	readonly title: ReactNode;
	readonly description?: ReactNode;
	readonly actions: ActionBag[];
};

export const HeroBlock: FC<HeroBlockProps> = ({slides = [], ...props}) => {
	const [carouselIndex, methods] = useCarouselIndex(slides.length, 0, {
		startImmediately: false,
	});

	const [springs] = useSprings(slides.length, (index, controller) => {
		const defaultValue = 0;

		const currentSpringValues = controller.get();

		const currentValue = currentSpringValues.y ? currentSpringValues.y as number : defaultValue;
		let futureValue = 0;

		if (index !== carouselIndex) {
			futureValue = 100 * Math.sign(index - carouselIndex);
		}

		return {
			from: {
				y: currentValue,
			},
			to: {
				y: futureValue,
			},
		};
	}, [carouselIndex]);

	const [titleSprings] = useSprings(slides.length, (index, controller) => {
		const defaultValue = {
			marginRight: '0rem',
			transform: 'scale(1)',
		};

		const currentSpringValues = controller.get() as typeof defaultValue;

		const currentValue = Object.keys(currentSpringValues).length ? currentSpringValues : defaultValue;
		let futureValue = {
			marginRight: '2rem',
			transform: 'scale(1.125)',
		};

		if (index !== carouselIndex) {
			futureValue = defaultValue;
		}

		return {
			from: currentValue,
			to: futureValue,
		};
	}, [carouselIndex]);

	return (
		<Wrapper className='root'>
			<HeroCarousel>
				{springs.map((style, slideIndex) => (
					<HeroCarouselSlide
						key={slideIndex}
						data-sequence-index={slideIndex}
						data-sequence-property='background-color'
						data-sequence-shade='lightest'
						style={{
							transform: style.y.to(y => `translateY(${y}%)`),
						}}
					>
						<Image height='100%' width='100%' fill='cover' src={slides[slideIndex].src}/>
					</HeroCarouselSlide>
				))}
			</HeroCarousel>
			<Container>
				<ContentColumn className='content'>
					<Heading level={1} className='title'>
						{props.title}
					</Heading>
					<Text size='large'>
						{props.description}
					</Text>
					<ActionStack className='action-stack' size='large' actions={props.actions}/>
					<CarouselControlTitles>
						{titleSprings.map((style, slideIndex) => (
							<CarouselControlTitle
								key={slideIndex}
								aria-current={slideIndex === carouselIndex}
								// data-sequence-index={slideIndex}
								// data-sequence-property='color'
								// data-sequence-shade='dark'
								type='button'
								className={clsx(
									'carousel-control-title',
									`carousel-control-title-${slideIndex + 1}`,
								)}
								style={style}
								onClick={() => {
									methods.to(slideIndex);
								}}
							>
								{slides[slideIndex].title}
							</CarouselControlTitle>
						))}
					</CarouselControlTitles>
				</ContentColumn>
			</Container>
		</Wrapper>
	);
};
