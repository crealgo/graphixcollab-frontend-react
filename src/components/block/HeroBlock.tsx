import {useSprings} from '@react-spring/web';
import clsx from 'clsx';
import {type FC, type ReactNode} from 'react';
import {useCarouselIndex} from '../../hooks/useCarouselIndex';
import {ActionStack} from '../base/ActionStack';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Image} from '../base/Image';
import {Text} from '../base/Text';
import {CarouselControlTitle, CarouselControlTitles, ContentColumn, HeroCarousel, HeroCarouselSlide, Wrapper} from './HeroBlock.styles';
import {type ActionBag} from '../../types/general';

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

export const HeroBlock: FC<HeroBlockProps> = props => {
	const [carouselIndex, methods] = useCarouselIndex(props.slides.length, 0, {
		startImmediately: false,
	});

	const [springs] = useSprings(props.slides.length, (index, controller) => {
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

	const [titleSprings] = useSprings(props.slides.length, (index, controller) => {
		const defaultValue = {
			opacity: 0.25,
			marginInline: '0rem',
			transform: 'scale(1)',
		};

		const currentSpringValues = controller.get() as typeof defaultValue;

		const currentValue = Object.keys(currentSpringValues).length ? currentSpringValues : defaultValue;
		let futureValue = {
			opacity: 1,
			marginInline: '1rem',
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
						<Image height='100%' width='100%' fill='cover' src={props.slides[slideIndex].src}/>
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
								data-sequence-index={slideIndex}
								data-sequence-property='color'
								data-sequence-shade='dark'
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
								{props.slides[slideIndex].title}
							</CarouselControlTitle>
						))}
					</CarouselControlTitles>
				</ContentColumn>
			</Container>
		</Wrapper>
	);
};
