import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookATimeIcon from '@mui/icons-material/Book';
import { styled } from '@mui/material';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { type Action, type SharedBlockProps } from '../../../types/general';
import Logo from '../../atoms/Logo';
import { ActionStack } from '../../base/ActionStack';
import { Block } from '../../base/Block';
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

// const images = [
// 	{ src: 'assets/embroidery-denim-min@1280w.webp', alt: 'Embroidery' },
// 	{ src: 'assets/sash-hs-min@1280w.webp', alt: 'Sashes' },
// 	{ src: 'assets/embroidery-shirts-min@1280w.webp', alt: 'Embroidery' },
// 	{ src: 'assets/laughing-group-min@1280w.webp', alt: 'T-Shirts' }
// ];

const Wrapper = styled('div')`
	--intro-block-padding-block-start: 5rem;
	--intro-block-padding-block-end: 2.5rem;

	@media screen and (min-width: 768px) {
		--intro-block-padding-block-start: 5rem;
		--intro-block-padding-block-end: 5rem;
	}

	position: relative;
	background-color: var(--color-brand-primary-light);
	margin-top: calc(-1 * var(--intro-block-padding-block-start));
	padding-block-start: var(--intro-block-padding-block-start);
	padding-block-end: var(--intro-block-padding-block-end);
`;

const Content = styled('div')`
	--intro-block-place-items: center;
	--intro-block-text-align: center;

	${({ theme }) => theme.breakpoints.up('lg')} {
		--intro-block-place-items: start;
		--intro-block-text-align: left;
	}

	place-content: center;
	place-items: --intro-block-place-items;
	text-align: --intro-block-text-align;

	max-width: 1200px;

	.IntroBlock-header {
		margin-bottom: 2rem;
	}

	.IntroBlock-text {
		max-width: 600px;
		margin-bottom: 2.5rem;
	}
`;

export const IntroBlock: FC<IntroBlockProps> = ({ description }) => {
	return (
		<Wrapper>
			<Container>
				<Block hasNoHorizontalPadding>
					<Content>
						<Heading className="IntroBlock-header" level={1}>
							Welcome to <Logo />
						</Heading>
						<Text className="IntroBlock-text" size="large">
							{description}
						</Text>
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
					</Content>
				</Block>
			</Container>
		</Wrapper>
	);
};
