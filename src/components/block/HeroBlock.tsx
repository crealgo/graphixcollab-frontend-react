import {animated, useSprings} from '@react-spring/web';
import clsx from 'clsx';
import {type FC, type ReactNode} from 'react';
import {useCarouselIndex} from '../../hooks/useCarouselIndex';
import {ActionStack} from '../base/ActionStack';
import {Heading} from '../base/Heading';
import {Image} from '../base/Image';
import {Text} from '../base/Text';
import {ContentColumn, Divider, Wrapper} from './HeroBlock.styles';

type SlideBag = {
	title: string;
	src: string;
	alt: string;
};

type ActionBag = {
	label: string;
	href?: string;
	action?: string;
	icon?: ReactNode;
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
			<div className='carousel'>
				{springs.map((style, slideIndex) => (
					<animated.div
						key={slideIndex}
						data-sequence-index={slideIndex}
						data-sequence-property='background-color'
						data-sequence-shade='lightest'
						style={{
							transform: style.y.to(y => `translateY(${y}%)`),
						}}
						className={clsx(
							'carousel-slide',
							`carousel-slide-${slideIndex + 1}`,
						)}
					>
						<Image height='100%' width='100%' fill='cover' src={props.slides[slideIndex].src}/>
					</animated.div>
				))}
			</div>
			<div className='container'>
				<ContentColumn className='content'>
					<Heading level={1} className='title'>
						{props.title}
					</Heading>
					<Text size='large'>
						{props.description}
					</Text>
					<Text>
						{carouselIndex}
					</Text>
					<ActionStack className='action-stack' actions={props.actions}/>
					<div>
						<button
							type='button' onClick={() => {
								methods.previous();
							}}
						>Previous
						</button>
						<button
							type='button' onClick={() => {
								methods.next();
							}}
						>Next
						</button>
						<button
							type='button' onClick={() => {
								methods.reset();
							}}
						>Reset
						</button>
					</div>
					<Divider/>
					<div className='carousel-controls'>
						<div className='carousel-controls-titles'>
							{titleSprings.map((style, slideIndex) => (
								<animated.button
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
								</animated.button>
							))}
						</div>
					</div>
				</ContentColumn>
			</div>
		</Wrapper>
	);
};
