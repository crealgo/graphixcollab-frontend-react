import imageSrc from '@assets/sitting-and-laughing-intro.webp';
import { ActionStack } from '@components/ActionStack';
import { Block } from '@components/Block';
import { type ImageProps } from '@components/Image';
import { Text } from '@components/Text';
import { type SharedBlockProps } from '@global/generalTypes';
import { css, styled } from '@mui/material';
import NextImage from 'next/image';
import { type FC } from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';

export interface IntroBlockProps extends SharedBlockProps {
	title?: string;
	description?: string;
	ImageProps?: ImageProps;
}

const OuterWrapper = styled('section')(({ theme }) => css`
	background-color: ${theme.palette.secondary.light};
	padding-top: 2rem;
`);

const InnerWrapper = styled('div')(
	({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		.content {
			display: grid;
			align-content: center;
			grid-template-columns: 1fr;
			gap: 1rem;

			.ActionStack-root {
				margin-top: 0.5rem;
			}
		}

		.image {
			display: flex;
			position: relative;
			/* background-color: blue; */

			.Image-root {
				position: relative;
				width: 100%;
				height: auto;
				right: auto;
				left: auto;
				bottom: 0
			}
		}

		${theme.breakpoints.up('md')} {
			grid-template-columns: 1fr 1.5fr;

			.image .Image-root {
				position: absolute;
				width: 45rem;
			}
		}
	`
);

export const IntroBlock: FC<IntroBlockProps> = ({ ImageProps, title, subtitle, description, actions }) => (
	<OuterWrapper>
		<Container isContained>
			<InnerWrapper>
				<Block className='content' component='div'>
					<Heading level={1}>{title}</Heading>
					<Text>{description}</Text>
					<ActionStack>
						<Button size='large'>{'Get Started'}</Button>
						<Button size='large' color='text'>{'Book an appointment'}</Button>
					</ActionStack>
				</Block>
				<div className="image">
					<NextImage
						className='Image-root'
						src={imageSrc || ''}
						alt='thing'
						quality={100}
					/>
				</div>
			</InnerWrapper>
		</Container>
	</OuterWrapper>
);
