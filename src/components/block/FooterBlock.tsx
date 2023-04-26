import {Facebook, Instagram, Twitter} from '@mui/icons-material';
import {
	Box,
	css,
	IconButton,
	Link,
	Stack,
	styled,
	Typography
} from '@mui/material';
import {type FC} from 'react';
import {type Term} from '../../types/general';
import {Container} from '../base/Container';
import {Block} from '../base/Block';
import {Input} from '../form/Input';
import {Button} from '../base/Button';
import {MapEmbed} from './MapEmbed';

export type FooterBlockProps = {
	title?: string;
	description?: string;
	meta?: Term[];
	// copyrightText?: string;
	// extraText?: string;
};

const Column = styled('div')(
	({theme}) => css`
		display: flex;
		flex-direction: column;
		row-gap: 2rem;

		${theme.breakpoints.up('md')} {
			row-gap: 2rem;
		}
	`
);

const Content = styled('div')(
	({theme}) => css`
		display: grid;
		row-gap: 3rem;
		column-gap: 1.5rem;
		grid-template-columns: 1fr;

		${theme.breakpoints.up('md')} {
			grid-template-columns: 1.5fr 1fr 1fr;
		}
	`
);

const FooterBlockWrapper = styled(Block)(
	({theme}) => css`
		background-color: var(--color-gray-100);
		border-bottom: var(--input-border-composite);
		margin-top: 1rem;
	`
);

const CopyrightBlockWrapper = styled(Block)(
	({theme}) => css`
		background-color: var(--color-gray-100);
		padding-block: 2rem !important;

		.Container-root {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			justify-content: center;

			${theme.breakpoints.up('md')} {
				flex-direction: row;
				gap: 1.5rem;
			}
		}
	`
);

const defaultContent = {
	title: 'Fashion Greek, USC',
	description:
		'Your premier custom apparel store! We make customer apparel fast and easy. Designers on-site to help you out with your order. No minimum quantity.',
	meta: [
		{
			term: 'Location',
			description: '2626 S Figueroa St #A, Los Angeles, California 90007'
		},
		{
			term: 'Phone',
			description: '(323) 379-3728'
		},
		{
			term: 'Email',
			description: 'info@fashiongreekusc.com'
		}
	]
};

export const FooterBlock: FC<FooterBlockProps> = ({
	title = defaultContent.title,
	description = defaultContent.description,
	meta = defaultContent.meta
}) => (
	<footer>
		<FooterBlockWrapper hasNoDefaultMargin>
			<Container>
				<Content>
					<Column>
						<div>
							<Typography gutterBottom variant="h3">
								{title}
							</Typography>
							<Typography variant="body1">
								{description}
							</Typography>
						</div>
						<div>
							<Typography variant="subtitle1" color="grey.700">
								Social Media
							</Typography>
							<Stack gap="0.25rem" direction="row">
								<IconButton size="small">
									<Facebook fontSize="small" />
								</IconButton>
								<IconButton size="small">
									<Twitter fontSize="small" />
								</IconButton>
								<IconButton size="small">
									<Instagram fontSize="small" />
								</IconButton>
							</Stack>
						</div>
						<div>
							<Typography variant="subtitle1" color="grey.700">
								Newsletter
							</Typography>
							<Box display="flex" gap="0.25rem">
								<Input
									type="text"
									inputSize="large"
									placeholder="your@email.com"
								/>
								<Button size="large" color="secondary">
									Sign Up
								</Button>
							</Box>
						</div>
					</Column>
					<Column>
						<MapEmbed />
					</Column>
					<Column>
						{meta?.map((term, termIndex) => (
							<div key={termIndex}>
								<Typography
									variant="subtitle1"
									fontWeight={500}
									letterSpacing="-0.0125em"
									color="grey.700"
								>
									{term.term}
								</Typography>
								<Typography>{term.description}</Typography>
							</div>
						))}
					</Column>
				</Content>
			</Container>
		</FooterBlockWrapper>
		<CopyrightBlockWrapper hasNoDefaultMargin>
			<Container>
				<Typography variant="caption">
					<Link>Privacy & Cookie Policy</Link>
				</Typography>
				<Typography variant="caption">
					<Link>Terms of Service</Link>
				</Typography>
				<Typography variant="caption">
					©Copyright 2015-2020, FashionGreek, USC.
				</Typography>
				<Typography variant="caption">
					Made with ❤️ by Crealgo, LLC. All rights reserved.
				</Typography>
			</Container>
		</CopyrightBlockWrapper>
	</footer>
);
