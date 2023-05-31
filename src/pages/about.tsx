import {FeaturedInBlock} from '../components/block/FeaturedInBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {useState} from 'react';
import Head from 'next/head';
import {Marked} from '../components/base/Marked';
import {Heading} from '../components/base/Heading';
import {Text} from '../components/base/Text';
import {Typography, styled} from '@mui/material';
import featuredCompanies from '../content/featured-companies';
import {PageTitle} from '../components/utility/PageTitle';
import {Block} from '../components/base/Block';
import {Container} from '../components/base/Container';
import {BlockHeader} from '../components/base/BlockHeader';
import reasonsToChooseUs from '../content/why-us.json';

const exampleUrl = 'https://google.com';

const ContentWrapper = styled('div')`
	background: var(--color-brand-primary-light);
	margin-top: -5rem;
	padding-block: 10rem 5rem;

	.Heading-root,
	.MuiTypography-root {
		color: var(--color-brand-primary-dark);
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding-block: 5rem 0;
	}
`;

const IntroImages = styled('div')`
	&:nth-of-type(1) {
		padding-top: 8rem;
		margin-left: auto;
		margin-top: 2rem;
		flex: none;
		width: 11rem;

		@media (min-width: 640px) {
			padding-top: 20rem;
			margin-left: 0;
		}

		@media (min-width: 1024px) {
			padding-top: 9rem;
			order: 9999;
		}
		@media (min-width: 1280px) {
			padding-top: 20rem;
			order: 0;
		}
	}

	&:nth-of-type(2) {
		margin-right: auto;
		margin-top: 2rem;
		flex: none;
		width: 11rem;

		@media (min-width: 640px) {
			padding-top: 13rem;
			margin-right: 0;
		}

		@media (min-width: 1024px) {
			padding-top: 9rem;
		}
	}
	&:nth-of-type(3) {
		padding-top: 8rem;
		margin-top: 2rem;
		flex: none;
		width: 11rem;

		@media (min-width: 640px) {
			padding-top: 0;
		}
	}
`;

const IntroImageWrapper = styled('div')`
	position: relative;
`;

const IntroImage = styled('img')`
	object-fit: cover;
	width: 100%;
	border-radius: 0.75rem;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const IntroImageSibling = styled('div')`
	--tw-ring-inset: inset;

	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border-radius: 0.75rem;
	box-shadow: var(--tw-ring-inset) 0 0 0
		calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
	pointer-events: none;
`;

const DetailList = styled('dl')`
	display: grid;
	margin-left: auto;
	margin-right: auto;
	margin-top: 4rem;
	font-size: 1rem;
	line-height: 1.5rem;
	line-height: 1.75rem;
	max-width: 42rem;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	column-gap: 2rem;
	row-gap: 4rem;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 1024px) {
		margin-left: 0;
		margin-right: 0;
		max-width: none;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

const DetailTerm = styled('dt')`
	color: #111827;
	font-weight: 600;
`;

const DetailDefinition = styled('dd')`
	margin-top: 0.25rem;
	color: #4b5563;
`;

export const Example = () => {
	return (
		<DefaultLayout>
			<Head>
				<script src="https://cdn.tailwindcss.com" />
			</Head>
			<PageTitle text="About Us" />
			<ContentWrapper className="relative isolate -z-10">
				<Block>
					<Container>
						<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
							<Heading gutterBottom level={1}>
								<Marked>Our Mission</Marked>
							</Heading>
							<Typography className="mt-6 text-lg leading-8 text-gray-600">
								Fashion Greek, USC was founded with a vision to
								provide top-quality printing solutions to
								businesses of all sizes. Since then, we have
								grown into a leading printing company, serving
								clients across various industries and sectors.
								We have invested in the latest printing
								technology, expanded our range of services, and
								built a team of experienced professionals who
								share our passion for printing.
							</Typography>
						</div>
						<div className="hidden lg:flex justify-end gap-8 sm:justify-start sm:pl-20 lg:pl-0 lg:-my-12">
							<IntroImages>
								<IntroImageWrapper>
									<IntroImage
										src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
									/>
									<IntroImageSibling />
								</IntroImageWrapper>
							</IntroImages>
							<IntroImages>
								<IntroImageWrapper>
									<IntroImage
										src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
									/>
									<IntroImageSibling />
								</IntroImageWrapper>
								<IntroImageWrapper>
									<IntroImage
										src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
										alt=""
									/>
									<IntroImageSibling />
								</IntroImageWrapper>
							</IntroImages>
							<IntroImages>
								<IntroImageWrapper>
									<IntroImage
										src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
										alt=""
									/>
									<IntroImageSibling />
								</IntroImageWrapper>
								<IntroImageWrapper>
									<IntroImage
										src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
									/>
									<IntroImageSibling />
								</IntroImageWrapper>
							</IntroImages>
						</div>
					</Container>
				</Block>
			</ContentWrapper>
			<Block>
				<Container>
					<BlockHeader
						title="Why Choose Us?"
						description="Let us bring your visual ideas to life and help you make
						a lasting impression in the market. Contact us today to
						discuss your design needs and explore how we can
						collaborate to create exceptional designs for your
						brand."
					/>
					<DetailList>
						{reasonsToChooseUs.map(value => (
							<div key={value.name}>
								<img
									src={value.image as string}
									alt={value.name}
								/>
								<DetailTerm>{value.name}</DetailTerm>
								<DetailDefinition>
									{value.description}
								</DetailDefinition>
							</div>
						))}
					</DetailList>
				</Container>
			</Block>
			<FeaturedInBlock className="my-16" companies={featuredCompanies} />
		</DefaultLayout>
	);
};

export default Example;
