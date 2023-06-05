import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
	Box,
	css,
	IconButton,
	Link,
	Stack,
	styled,
	Typography
} from '@mui/material';
import { type FC } from 'react';
import { type Term } from '../../types/general';
import { Container } from '../base/Container';
import { Block } from '../base/Block';
import { Input } from '../form/Input';
import { Button } from '../base/Button';
import { MapEmbed } from './MapEmbed';
import { Text } from '../base/Text';

export type FooterBlockProps = {
	title?: string;
	description?: string;
	meta?: Term[];
};

const Column = styled('div')(
	({ theme }) => css`
		display: flex;
		flex-direction: column;
		row-gap: 2rem;

		${theme.breakpoints.up('md')} {
			row-gap: 2rem;
		}
	`
);

const Content = styled('div')(
	({ theme }) => css`
		display: grid;
		row-gap: 3rem;
		column-gap: 1.5rem;
		grid-template-columns: 1fr;

		${theme.breakpoints.up('md')} {
			grid-template-columns: 1fr 1.5fr;
		}
	`
);
const CopyrightBlockWrapper = styled(Block)(
	({ theme }) => css`
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

const footerContent = {
	title: 'Graphix Collab',
	description:
		"As a leading printing-service company, we are dedicated to providing high-quality printing solutions to our clients. With a team of experienced professionals and state-of-the-art printing equipment, we deliver exceptional results that meet and exceed our clients' expectations.",
	sections: {
		// connect: {
		// 	title: 'Connect',
		// 	links: [
		// 		{ label: 'The Process', href: '' },
		// 		{ label: 'Get Samples', href: '' },
		// 		{ label: 'Templates', href: '' },
		// 		{ label: 'Jobs', href: '' }
		// 	]
		// },
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
				{
					label: 'Phone',
					displayName: '+1 (323) 379-3728',
					href: 'tel:323-379-3728'
				},
				{
					label: 'Email',
					displayName: 'fashiongreekusc@gmail.com',
					href: 'mailto:fashiongreekusc@gmail.com'
				},
				{
					label: 'Address',
					displayName: '2626 S Figueroa St A, Los Angeles, CA 90007',
					href: 'https://goo.gl/maps/g3bKdJBYSRZvvmpaA'
				}
			]
		},
		copyright: {
			showSocial: true,
			phrases: [
				'©Copyright 2015-2020, FashionGreek, USC.',
				// TODO: make this a web component
				'Made with ❤️ by Crealgo, LLC. All rights reserved.'
			]
		}
	}
};

const SocialBar: FC<unknown> = () => (
	<Stack gap="0.25rem" direction="row">
		<IconButton size="small">
			<FacebookIcon fontSize="small" />
		</IconButton>
		<IconButton size="small">
			<TwitterIcon fontSize="small" />
		</IconButton>
		<IconButton size="small">
			<InstagramIcon fontSize="small" />
		</IconButton>
	</Stack>
);

const FooterContentBlock = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;

	${({ theme }) => theme.breakpoints.up('md')} {
		padding: 1rem;
	}
`;

const ContactInfoList = styled('ul')`
	display: grid;
	padding-block: 0.75rem;
	gap: 0.75rem;
	padding: unset;
	list-style: none;

	& *:first-of-type {
		font-weight: bold;
	}
`;

export const FooterBlock: FC<FooterBlockProps> = () => (
	<footer>
		<Block hasNoDefaultMargin color="grey">
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
								<Button
									size="large"
									color="secondary"
									endIcon={<QuestionAnswerIcon />}
								>
									Inquire
								</Button>
							</Box>
						</FooterContentBlock>
						{/* <FooterContentBlock>
							<Typography variant="h5">
								{footerContent.sections.connect.title}
							</Typography>
							<Stack
								component="nav"
								flexDirection="row"
								gap="0.5rem"
							>
								{footerContent.sections.connect.links.map(
									(link, index) => (
										<Link key={index} href={link.href}>
											{link.label}
										</Link>
									)
								)}
							</Stack>
						</FooterContentBlock> */}
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
											<Link href={link.href}>
												{link.displayName}
											</Link>
										</li>
									)
								)}
							</ContactInfoList>
						</FooterContentBlock>
					</Column>
				</Content>
			</Container>
		</Block>
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
