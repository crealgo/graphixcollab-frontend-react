import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookATimeIcon from '@mui/icons-material/Book';
import { css, styled } from '@mui/material';
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
	position: relative;
	background-color: var(--color-brand-primary-light);
	margin-top: -5rem;
	padding-block: 5rem;
`;

const Content = styled('div')(
	({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		align-content: center;
		justify-items: center;
		border-radius: 0.5rem;
		text-align: center;

		${theme.breakpoints.up('lg')} {
			padding-inline: 0;
			justify-items: start;
			text-align: left;
		}
	`
);

export const IntroBlock: FC<IntroBlockProps> = ({ description }) => {
	return (
		<Wrapper>
			<Container>
				<Block hasNoHorizontalPadding>
					<Content>
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
					</Content>
				</Block>
			</Container>
		</Wrapper>
	);
};
