import {styled, useMediaQuery, type Theme} from '@mui/material';
import {Block} from '@graphixcollab/components/Block.tsx';
import {BlockHeader} from '@graphixcollab/components/BlockHeader.tsx';
import {Card} from '@graphixcollab/components/Card.tsx';
import {Container} from '@graphixcollab/components/Container.tsx';
import {HorizontalCard} from '@graphixcollab/components/HorizontalCard.tsx';
import {FeaturedInBlock} from '@graphixcollab/components/FeaturedInBlock/index.tsx';
import {PageHeaderBlock} from '@graphixcollab/components/PageHeaderBlock.tsx';
import {PageTitle} from '@graphixcollab/components/PageTitle.tsx';
import featuredCompanies from '@graphixcollab/content/featured-companies.ts';
import reasonsToChooseUs from '@graphixcollab/content/why-us.json';
import {DefaultLayout} from '@graphixcollab/components/DefaultLayout.tsx';

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

export const Page = () => {
	const isDesktop = useMediaQuery<Theme>(theme => theme.breakpoints.up('md'));

	const CardComponent = isDesktop ? Card : HorizontalCard;

	return (
		<DefaultLayout>
			<PageTitle text='About Us'/>
			<PageHeaderBlock
				color='yellow'
				title='About Us'
				description='Graphix Collab was founded with a vision to provide top-quality printing solutions to businesses of all sizes. Since then, we have grown into a leading printing company, serving clients across various industries and sectors. We have invested in the latest printing technology, expanded our range of services, and built a team of experienced professionals who share our passion for printing.'
				ImageProps={{
					src: 'assets/juicy-girl-working-at-home-min@ogw.webp',
					alt: 'About Us Working GIF',
				}}
			/>
			<Block>
				<Container>
					<BlockHeader
						title='Why Choose Us?'
						description='Let us bring your visual ideas to life and help you make
						a lasting impression in the market. Contact us today to
						discuss your design needs and explore how we can
						collaborate to create exceptional designs for your
						brand.'
					/>
					<DetailList>
						{reasonsToChooseUs.map((value, valueIndex) => (
							<CardComponent
								key={valueIndex}
								className='service'
								title={value.name}
								description={value.description}
								image={{
									src: value.image,
									alt: value.name,
								}}
								imageColor='#CCDCFA'
							/>
						))}
					</DetailList>
				</Container>
			</Block>
			<FeaturedInBlock companies={featuredCompanies}/>
		</DefaultLayout>
	);
};

export const getStaticProps = () => ({
	props: {
		pageTitle: 'About Us',
		pageDescription:
			'Graphix Collab was founded with a vision to provide top-quality printing solutions to businesses of all sizes. Since then, we have grown into a leading printing company, serving clients across various industries and sectors. We have invested in the latest printing technology, expanded our range of services, and built a team of experienced professionals who share our passion for printing.',
	},
});

export default Page;
