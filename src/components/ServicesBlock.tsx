import { Block, type BlockProps } from '@components/Block';
import { ServiceCard } from '@components/ServiceCard';
import { type ServiceOptions, type SharedBlockProps } from '@global/generalTypes';
import { Message, Send } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { css, styled } from '@mui/material/styles';
import { type FC } from 'react';
import { ActionStack } from './ActionStack';
import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';

export interface ServicesBlockProps extends SharedBlockProps {
	services?: ServiceOptions[];
	BlockProps?: BlockProps;
}

export const Content = styled('div')(
	({theme}) => css`
		max-width: ${theme.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`
);

const Wrapper = styled('div')(({theme}) => css`
	display	: grid;
	grid-template-columns: 1fr;
	gap: 3rem;

	.Container-root {
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
		gap: 1rem;
	}

	${theme.breakpoints.up('sm')} {
		.services {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	${theme.breakpoints.up('md')} {
		.services {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	${theme.breakpoints.up('lg')} {
		.services {
			grid-template-columns: repeat(5, 1fr);
		}
	}
`)

export const ServicesBlock: FC<ServicesBlockProps> = ({
	title,
	subtitle,
	description,
	actions,
	services
}) => (
	<Block>
		<Container isContained>
			<Wrapper>
				<Container isContained size='small'>
					<Typography variant='overline'>{subtitle}</Typography>
					<Heading level={1}>{title}</Heading>
					<Typography variant='body2'>{description}</Typography>
				</Container>
				<div className='services'>
					{services?.map((service, serviceIndex) => (
						<ServiceCard {...service} key={serviceIndex} />
					))}
				</div>
				<Container isContained size='small'>
					<ActionStack align='center' color='secondary' >
						<Box mr={-2} zIndex={1}>Looking for something else?</Box>
						<Button color='text' endIcon={<Message />}>{'Contact Us'}</Button>
					</ActionStack>
				</Container>
			</Wrapper>
		</Container>
	</Block>
);

ServicesBlock.displayName = 'ServicesBlock';
