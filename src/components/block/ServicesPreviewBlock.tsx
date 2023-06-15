import { ArrowForward, Message } from '@mui/icons-material';
import { Typography, useMediaQuery, type Theme } from '@mui/material';
import { css, styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { type FC } from 'react';
import type serviceJSON from '../../content/services.json';
import { type SharedBlockProps } from '../../types/general';
import { colorIterator } from '../../utils/colorIterator';
import { ActionStack } from '../base/ActionStack';
import { Block } from '../base/Block';
import { Button } from '../base/Button';
import { Card } from '../base/Card';
import { Container } from '../base/Container';
import { Heading } from '../base/Heading';
import { HorizontalCard } from '../base/HorizontalCard';

export type ServicesPreviewBlockProps = {
	services?: typeof serviceJSON;
	// BlockProps?: BlockProps;
} & SharedBlockProps;

export const Content = styled('div')(
	({ theme }) => css`
		max-width: ${theme.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`
);

const Wrapper = styled('div')(
	({ theme }) => css`
		display: grid;
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

			.service {
				${colorIterator('background', '.image')}
			}
		}

		${theme.breakpoints.up('sm')} {
			.services {
				row-gap: 3rem;
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
	`
);

export const ServicesPreviewBlock: FC<ServicesPreviewBlockProps> = ({
	title,
	subtitle,
	description,
	services
}) => {
	const isDesktop = useMediaQuery<Theme>(theme => theme.breakpoints.up('md'));
	const router = useRouter();

	const CardComponent = isDesktop ? Card : HorizontalCard;

	return (
		<Block>
			<Container>
				<Wrapper>
					<Container size="small">
						<Typography variant="overline">{subtitle}</Typography>
						<Heading level={2}>{title}</Heading>
						<Typography variant="body2">{description}</Typography>
					</Container>
					<div className="services">
						{services?.map(service => (
							<CardComponent
								key={service.id}
								className="service"
								title={service.name}
								description={service.summary}
								image={service.image}
								imageColor={service.color}
							/>
						))}
					</div>
					<Container size="small">
						<ActionStack align="center" color="secondary">
							<Button
								color="secondary"
								href={`${router.basePath}/services`}
								endIcon={<ArrowForward />}
							>
								View All Services
							</Button>
							<Button color="text" endIcon={<Message />}>
								Contact Us
							</Button>
						</ActionStack>
					</Container>
				</Wrapper>
			</Container>
		</Block>
	);
};
