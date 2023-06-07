import { FeaturedInBlock } from '../components/block/FeaturedInBlock';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { useState } from 'react';
import Head from 'next/head';
import { Mark } from '../components/base/Mark';
import { Heading } from '../components/base/Heading';
import { Text } from '../components/base/Text';
import { type Theme, Typography, styled, useMediaQuery } from '@mui/material';
import featuredCompanies from '../content/featured-companies';
import { PageTitle } from '../components/utility/PageTitle';
import { Block } from '../components/base/Block';
import { Container } from '../components/base/Container';
import { BlockHeader } from '../components/base/BlockHeader';
import reasonsToChooseUs from '../content/why-us.json';
import { PageHeaderBlock } from '../components/block/PageHeaderBlock';
import { useRouter } from 'next/router';
import { HorizontalCard } from '../components/base/HorizontalCard';
import { Card } from '../components/base/Card';

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

export const About = (props: any) => {
	const isDesktop = useMediaQuery<Theme>(theme => theme.breakpoints.up('md'));

	const CardComponent = isDesktop ? Card : HorizontalCard;

	return (
		<DefaultLayout>
			<PageTitle text="About Us" />
			<PageHeaderBlock
				color="secondary"
				title="Our Services"
				description="Graphix Collab was founded with a vision to provide top-quality printing solutions to businesses of all sizes. Since then, we have grown into a leading printing company, serving clients across various industries and sectors. We have invested in the latest printing technology, expanded our range of services, and built a team of experienced professionals who share our passion for printing."
				ImageProps={{
					src: 'assets/juicy-girl-working-at-home-min@ogw.webp',
					alt: 'About Us Working GIF'
				}}
			/>
			{/* <ContentWrapper className="relative isolate -z-10">
				<Block>
					<Container>
						<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
							<Heading hasMargin level={1}>
								<Mark brand></Mark>
							</Heading>
							<Typography className="mt-6 text-lg leading-8 text-gray-600">

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
			</ContentWrapper> */}
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
						{reasonsToChooseUs.map((value, valueIndex) => (
							<CardComponent
								key={valueIndex}
								className="service"
								title={value.name}
								description={value.description}
								image={{
									src: value.image,
									alt: value.name
								}}
								imageColor="#CCDCFA"
							/>
						))}
					</DetailList>
				</Container>
			</Block>
			<FeaturedInBlock companies={featuredCompanies} />
		</DefaultLayout>
	);
};

export const getStaticProps = () => ({
	props: {
		pageTitle: 'About Us',
		pageDescription:
			'Graphix Collab was founded with a vision to provide top-quality printing solutions to businesses of all sizes. Since then, we have grown into a leading printing company, serving clients across various industries and sectors. We have invested in the latest printing technology, expanded our range of services, and built a team of experienced professionals who share our passion for printing.'
	}
});

export default About;
