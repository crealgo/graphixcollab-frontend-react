import {css, styled} from '@mui/material';
import {useState, type ComponentPropsWithoutRef, type FC} from 'react';
import {type Action, type SharedBlockProps} from '../../../types/general';
import {ActionStack} from '../../base/ActionStack';
import {Block} from '../../base/Block';
import {Container} from '../../base/Container';
import {Heading} from '../../base/Heading';
import {Text} from '../../base/Text';
import {MultipleSlidesContainer} from './MultipleSlidesContainer';
import {Image} from '../../base/Image';
import IntroImage from '../../../assets/sitting-and-laughing-intro.webp';

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

export const SlideBackground = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 100%;

	border-radius: 0.5rem;

	&:nth-of-type(1n) {
		background-color: var(--color-sequence-0-light);
	}

	&:nth-of-type(2n) {
		background-color: var(--color-sequence-1-light);
		transform: translateX(calc(-100% - 1rem));
	}

	&:nth-of-type(3n) {
		background-color: var(--color-sequence-2-light);
		transform: translateX(calc(100% + 1rem));
	}
`;

const IntroBlockWrapper = styled(Block)`
	&::before {
	}
`;

const Content = styled('div')(
	({theme}) => css`
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

export const IntroBlock: FC<IntroBlockProps> = ({className, slides = []}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const ResolvedContainer =
		slides.length > 1 ? MultipleSlidesContainer : Container;

	return (
		<Container className={className}>
			<IntroBlockWrapper isRounded>
				<SlideBackground />
				<SlideBackground />
				<SlideBackground />
				<SlideBackground />
				<SlideBackground />
				<Content>
					<div className="content">
						<Heading level={1}>
							{slides[currentIndex].title}
						</Heading>
						<Text>{slides[currentIndex].description}</Text>{' '}
						<ActionStack
							size="large"
							actions={slides[currentIndex].actions}
						/>
						<div>
							<button
								type="button"
								onClick={() => {
									if (currentIndex > 0) {
										setCurrentIndex(currentIndex - 1);
									}
								}}
							>
								Previous
							</button>
							<button
								type="button"
								onClick={() => {
									if (currentIndex < slides.length - 1) {
										setCurrentIndex(currentIndex + 1);
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
							(IntroImage.src as string)
						}
					/>
				</div>
			</IntroBlockWrapper>
		</Container>
	);
};
