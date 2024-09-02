import {Message} from '@mui/icons-material';
import {Box} from '@mui/material';
import {css, styled} from '@mui/material/styles';
import {type FC} from 'react';
import type services from '@graphixcollab/content/services.json';
import {type SharedBlockProps} from '@graphixcollab/types/general';
import {ActionStack} from './ActionStack';
import {Block} from './Block';
import {Button} from './Button';
import {Container} from './Container';
import {Heading} from './Heading';
import {HorizontalCard} from './HorizontalCard';
import {Image, type ImageProps} from './Image';
import {Mark} from './Mark';
import {Text} from './Text';

type Service = (typeof services)[number];

export type ServicesBlockProps = {
	readonly services?: Service[];
	readonly imageTranslate?: string;
	readonly ImageProps?: ImageProps;
} & SharedBlockProps;

export const Content = styled('div')(
	({theme}) => css`
		max-width: ${theme.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`,
);

const StyledBlock = styled(Block)`
	padding-block: 3rem !important;
`;

const Wrapper = styled('div')(
	({theme}) => css`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;

		hgroup {
			display: block;

			h2 {
				max-width: 1200px;
			}
			p {
				max-width: 500px;
			}
		}

		.container {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;

			.ActionStack-root {
				justify-content: center !important;
			}
		}

		.services {
			display: grid;
			grid-template-columns: 1fr;
			column-gap: 1rem;
			row-gap: 1rem;
		}

		${theme.breakpoints.up('sm')} {
			.services {
				column-gap: 3rem;
				row-gap: 4rem;
				grid-template-columns: repeat(2, 1fr);
			}
		}

		${theme.breakpoints.up('lg')} {
			.services {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	`,
);

const StyledImage = styled(Image)<{imageTranslate?: string}>(({
	theme, imageTranslate = '60%',
}) => css`
	position: absolute;
	max-width: 35rem;
	bottom: 0;
	right: 0;
	transform: translateY(${imageTranslate ?? '60%'});
	aspect-ratio: 1/1;
	padding: 5rem;
	display: none;

	/* background: lightgray; */
	/* border-radius: 50%; */


	${theme.breakpoints.up('lg')} {
		display: flex;
	}
`);

export const ServicesBlock: FC<ServicesBlockProps> = ({
	title, description, services, ImageProps, imageTranslate = '60%',
}) => (
	<StyledBlock>
		<Container>
			<Wrapper>
				<hgroup>
					<Heading hasMargin level={2}>
						<Mark brand>{title}</Mark>
					</Heading>
					<Text>{description}</Text>
				</hgroup>
				<div className='services'>
					{services?.map((service, serviceIndex) => (
						<HorizontalCard
							key={serviceIndex}
							title={service.name}
							description={service.summary}
							image={service.image}
							imageColor={service.color}
						/>
					))}
				</div>
				<ActionStack color='secondary'>
					<Box mr={-1} zIndex={1}>
						Looking for something else?
					</Box>
					<Button
						color='text'
						href='/contact'
						endIcon={<Message/>}
					>
						Contact Us
					</Button>
				</ActionStack>
			</Wrapper>
			{ImageProps?.src && (
				<StyledImage {...ImageProps} imageTranslate={imageTranslate}/>
			)}
		</Container>
	</StyledBlock>
);

ServicesBlock.displayName = 'ServicesBlock';
