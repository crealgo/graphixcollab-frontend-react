import {Slide as SlideAnimation, css, styled} from '@mui/material';
import {
	useState,
	type ComponentPropsWithoutRef,
	type FC,
	type ReactElement,
	type RefObject
} from 'react';
import {TransitionGroup} from 'react-transition-group';
import IntroImage from '../../../assets/sitting-and-laughing-intro.webp';
import {type Action, type SharedBlockProps} from '../../../types/general';
import {ActionStack} from '../../base/ActionStack';
import {Block} from '../../base/Block';
import {Container} from '../../base/Container';
import {Heading} from '../../base/Heading';
import {Text} from '../../base/Text';

export type Slide = {
	title: string;
	description: string;
	actions: Action[];
	image: string;
};

export type IntroBlockProps = {
	color?: 'primary' | 'secondary' | 'grey' | 'none';
	slides?: Slide[];
	// ImageProps?: ImageProps;
} & ComponentPropsWithoutRef<'div'> &
	SharedBlockProps;

const IntroBlockWrapper = styled(Block)`
	background-color: var(--color-sequence-0);
	border-radius: 0.5rem;
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
			border-radius: 0.5rem;

			color: white !important;
		}

		+ .image {
			display: none;
		}

		${theme.breakpoints.up('md')} {
			grid-template-columns: repeat(2, 1fr);

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

type SlideContainerProps = {
	key: number;
	nodeRef: RefObject<HTMLDivElement>;
	children: ReactElement;
};

const SlideContainer: FC<SlideContainerProps> = ({key, nodeRef, children}) => (
	<TransitionGroup mode="in-out">
		<SlideAnimation key={key} container={nodeRef.current} direction="up">
			{children}
		</SlideAnimation>
	</TransitionGroup>
);

export const IntroBlock: FC<IntroBlockProps> = ({
	className,
	slides = [],
	color
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<Container>
			<IntroBlockWrapper className={className}>
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
				<figure className="image">
					<img
						className="Image-root"
						src={
							slides[currentIndex].image ??
							(IntroImage.src as string)
						}
						alt="thing"
					/>
				</figure>
			</IntroBlockWrapper>
		</Container>
	);
};
