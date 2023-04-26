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
import {Heading} from '../base/Heading';
import {Text} from '../base/Text';

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
			grid-template-columns: 1fr 1.5fr;
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
			display: grid;
			gap: 0.5rem;
			grid-template-columns: 1fr;
			align-items: center;

			.leftContent {
				display: grid;
				grid-template-columns: 1fr;
				gap: 0.25rem;
			}

			${theme.breakpoints.up('md')} {
				grid-template-columns: minmax(auto, 1fr) auto;
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

const footerContent = {
	title: 'Fashion Greek, USC',
	description:
		"As a leading printing-service company, we are dedicated to providing high-quality printing solutions to our clients. With a team of experienced professionals and state-of-the-art printing equipment, we deliver exceptional results that meet and exceed our clients' expectations.",
	sections: {
		connect: {
			title: 'Connect',
			links: [
				{label: 'The Process', href: ''},
				{label: 'Get Samples', href: ''},
				{label: 'Templates', href: ''},
				{label: 'Jobs', href: ''}
			]
		},
		getAQuote: {
			title: 'Get a Quote',
			description:
				'Need a quote for your printing project? Contact us today to request a quote. We offer competitive pricing and personalized solutions to meet your printing needs.'
		},
		contact: {
			title: 'Contact Us',
			description:
				"We're here to help! If you have any questions or inquiries about our printing services, feel free to get in touch with us. You can contact us through the following channels:",
			links: [
				{label: 'Phone', href: 'tel:323-379-3728'},
				{label: 'Email', href: 'mailto:fashiongreekusc@gmail.com'},
				{
					label: 'Address',
					href: 'https://goo.gl/maps/6Y5Z9Z2Z2Z2Z2Z2Z2'
				}
			]
		},
		copyright: {
			showSocial: true,
			phrases: [
				'©Copyright 2015-2020, FashionGreek, USC.',
				'Made with ❤️ by Crealgo, LLC. All rights reserved.'
			]
		}
	}
};

const SocialBar: FC<unknown> = () => (
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
);

const FooterContentBlock = styled('div')`
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;
`;

const ContactInfoList = styled('ul')`
	display: grid;
	padding-block: 0.75rem;
	gap: 0.75rem;

	& *:first-child {
		font-weight: bold;
	}
`;

export const FooterBlock: FC<FooterBlockProps> = () => (
	<footer>
		<FooterBlockWrapper hasNoDefaultMargin>
			<Container>
				<Content>
					<Column>
						<FooterContentBlock>
							<Typography gutterBottom variant="h3">
								{footerContent.title}
							</Typography>
							<Text size="medium">
								{footerContent.description}
							</Text>
						</FooterContentBlock>
						<FooterContentBlock>
							<Typography variant="h5">
								{footerContent.sections.getAQuote.title}
							</Typography>
							<Text size="medium">
								{footerContent.description}
							</Text>
							<Box display="flex" gap="0.25rem" mt="0.75rem">
								<Input
									type="text"
									inputSize="large"
									placeholder="your@email.com"
								/>
								<Button size="large" color="secondary">
									Send
								</Button>
							</Box>
						</FooterContentBlock>
						<FooterContentBlock>
							<Typography variant="h5">
								{footerContent.sections.connect.title}
							</Typography>
							<Stack
								component="ul"
								flexDirection="row"
								gap="0.5rem"
							>
								{footerContent.sections.connect.links.map(
									(link, index) => (
										<li key={index}>
											<Link href={link.href}>
												{link.label}
											</Link>
										</li>
									)
								)}
							</Stack>
						</FooterContentBlock>
					</Column>
					<Column>
						<MapEmbed />
						<FooterContentBlock>
							<Typography gutterBottom variant="h3">
								{footerContent.sections.contact.title}
							</Typography>
							<Text size="medium">
								{footerContent.sections.contact.description}
							</Text>
							<ContactInfoList>
								{footerContent.sections.contact.links.map(
									(link, index) => (
										<li key={index}>
											<Text>{link.label}</Text>
											<Text>{link.href}</Text>
										</li>
									)
								)}
							</ContactInfoList>
						</FooterContentBlock>
					</Column>
				</Content>
			</Container>
		</FooterBlockWrapper>
		<CopyrightBlockWrapper hasNoDefaultMargin>
			<Container>
				<div className="leftContent">
					{footerContent.sections.copyright.phrases.map(
						(text, index) => (
							<Typography key={index} variant="caption">
								{text}
							</Typography>
						)
					)}
				</div>
				<div className="rightContent">
					<SocialBar />
				</div>
			</Container>
		</CopyrightBlockWrapper>
	</footer>
);
