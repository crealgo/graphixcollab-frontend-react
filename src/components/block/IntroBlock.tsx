import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import IntroImage from '../../assets/sitting-and-laughing-intro.webp';
import {type Action, type SharedBlockProps} from '../../types/general';
import {ActionStack} from '../base/ActionStack';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Text} from '../base/Text';

type Slide = {
	title: string;
	description: string;
	actions: Action[];
	image: string;
};

const defaultContent = {
	slides: [
		{

		}
	]
}

export type IntroBlockProps = {
	title?: string;
	description?: string;
	color?: 'primary' | 'secondary' | 'grey';
	slides?: Slide[];
	// ImageProps?: ImageProps;
} & ComponentPropsWithoutRef<'div'> & SharedBlockProps;

const Content = styled(Container)(
	props => css`
		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.image {
			display: none;
		}

		${props.theme.breakpoints.up('md')} {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;

			.image {
				display: block;
				position: absolute;
				margin: unset;
				width: 50%;
				height: 100%;
				right: 0;
				bottom: 0;
				/* background: blue; */

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}
			}
		}
	`,
);

export const IntroBlock: FC<IntroBlockProps> = ({title, description, className, slides = [], color = 'secondary'}) => (
	<Block className={className} color={color}>
		<Container>
			<Content>
				<div className='content'>
					<Heading level={1}>{title}</Heading>
					<Text>{description}</Text>
					<ActionStack
						size='large' actions={[
							{
								label: 'Get Started',
								color: 'primary',
							},
							{
								label: 'Book an appointment',
								color: 'text',
							},
						]}
					/>
				</div>
				<figure className='image'>
					<img
						className='Image-root'
						src={IntroImage.src as string}
						alt='thing'
					/>
				</figure>
			</Content>
		</Container>
	</Block>
);
