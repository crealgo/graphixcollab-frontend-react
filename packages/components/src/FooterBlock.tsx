import ArrowForward from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {css, IconButton, Stack, styled, Typography} from '@mui/material';
import {type FC} from 'react';
import {type Term} from '@graphixcollab/types/general';
import Logo from './Logo';
import {ActionStack} from './ActionStack';
import {Block} from './Block';
import {Container} from './Container';
import {Link} from './Link';
import {Text} from './Text';
import {MapEmbed} from './MapEmbed';

export type FooterBlockProps = {
	title?: string;
	description?: string;
	meta?: Term[];
};

const footerContent = {
	title: 'Graphix Collab',
	description:
		'As a leading printing-service company, we are dedicated to providing high-quality printing solutions to our clients. With a team of experienced professionals and state-of-the-art printing equipment, we deliver exceptional results that meet and exceed our clients\' expectations.',
	sections: {
		getAQuote: {
			title: '💬 Get a Quote',
			description:
				'Need a quote for your printing project? Contact us today to request a quote. We offer competitive pricing and personalized solutions to meet your printing needs.',
		},
		contact: {
			title: '✉️ Contact Us',
			description:
				'We\'re here to help! If you have any questions or inquiries about our printing services, feel free to get in touch with us. You can contact us through the following channels:',
			links: [
				{
					label: 'Phone',
					displayName: '+1 (323) 379-3728',
					href: 'tel:323-379-3728',
				},
				{
					label: 'Email',
					displayName: 'graphixcollab@gmail.com',
					href: 'mailto:graphixcollab@gmail.com',
				},
				{
					label: 'Address',
					displayName: '2626 S Figueroa St A, Los Angeles, CA 90007',
					href: 'https://goo.gl/maps/g3bKdJBYSRZvvmpaA',
				},
			],
		},
		copyright: {
			showSocial: true,
			phrases: [
				'©Copyright 2015-2020, FashionGreek, USC.',
				// TODO: make this a web component
				'Made with ❤️ by Crealgo, LLC. All rights reserved.',
			],
		},
	},
};

const Footer = styled('footer')`
	margin-top: 4rem;
`;

const Column = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: 3rem;
`;

const Content = styled('div')(({theme}) => css`
	display: grid;
	row-gap: 3rem;
	column-gap: 1.5rem;
	grid-template-columns: 1fr;

	${theme.breakpoints.up('md')} {
		grid-template-columns: 1fr 1.5fr;
	}
`);

const CopyrightBlockWrapper = styled(Block)(({theme}) => css`
	background-color: var(--color-brand-key-lightest);
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
			justify-items: center;
		}

		${theme.breakpoints.up('md')} {
			grid-template-columns: minmax(auto, 1fr) auto;
			flex-direction: row;
			gap: 1.5rem;
		}
	}
`);

const SocialBar: FC<unknown> = () => (
	<Stack gap='0.25rem' direction='row'>
		<IconButton size='small'>
			<FacebookIcon fontSize='small'/>
		</IconButton>
		<IconButton size='small'>
			<TwitterIcon fontSize='small'/>
		</IconButton>
		<IconButton size='small'>
			<InstagramIcon fontSize='small'/>
		</IconButton>
	</Stack>
);

const FooterContentBlock = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: 0.25rem;
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

const StyledBlock = styled(Block)`
	background-color: var(--color-gray-100);
`;

export const FooterBlock: FC<FooterBlockProps> = () => (
	<Footer>
		<StyledBlock hasNoDefaultMargin color='grey'>
			<Container>
				<Content>
					<Column>
						<FooterContentBlock>
							<Typography gutterBottom variant='h3'>
								<Logo/>
							</Typography>
							<Text size='medium'>
								{footerContent.description}
							</Text>
						</FooterContentBlock>
						<FooterContentBlock>
							<Typography variant='h5'>
								{footerContent.sections.getAQuote.title}
							</Typography>
							<Text size='medium'>
								{footerContent.description}
							</Text>
							<br/>
							<ActionStack
								actions={[
									{
										label: 'Get a Quote',
										href: '/estimate',
										endIcon: <ArrowForward/>,
									},
								]}
							/>
						</FooterContentBlock>
						<FooterContentBlock>
							<Typography variant='h5'>🔗 Quick Links</Typography>
							<ContactInfoList>
								<li>
									<Link href='/contact-us'>Contact Us</Link>
								</li>
								<li>
									<Link href='/estimate'>
										Get an Estimate
									</Link>
								</li>
								<li>
									<Link href='/terms/privacy-policy'>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href='/terms/terms-and-conditions'>
										Terms and Conditions
									</Link>
								</li>
							</ContactInfoList>
						</FooterContentBlock>
					</Column>
					<Column>
						<FooterContentBlock>
							<Typography gutterBottom variant='h5'>
								📍 Stop by our office
							</Typography>
							<MapEmbed/>
						</FooterContentBlock>
						<FooterContentBlock>
							<Typography gutterBottom variant='h5'>
								{footerContent.sections.contact.title}
							</Typography>
							<Text size='medium'>
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
									),
								)}
							</ContactInfoList>
						</FooterContentBlock>
					</Column>
				</Content>
			</Container>
		</StyledBlock>
		<CopyrightBlockWrapper hasNoDefaultMargin>
			<Container>
				<div className='leftContent'>
					{footerContent.sections.copyright.phrases.map(
						(text, index) => (
							<Typography key={index} variant='caption'>
								{text}
							</Typography>
						),
					)}
				</div>
				<div className='rightContent'>
					<SocialBar/>
				</div>
			</Container>
		</CopyrightBlockWrapper>
	</Footer>
);
