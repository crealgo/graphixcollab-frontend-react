import {type GetStaticProps, type NextPage} from 'next';
import {EstimatorBlock} from '../components/block/EstimatorBlock';
import {FeaturedInBlock} from '../components/block/FeaturedInBlock';
import {GalleryBlock} from '../components/block/GalleryBlock';
import {IntroBlock} from '../components/block/IntroBlock/IntroBlock';
import {ServicesPreviewBlock} from '../components/block/ServicesPreviewBlock';
import {PageTitle} from '../components/utility/PageTitle';
import featuredCompanies from '../content/featured-companies';
import galleryImages from '../content/galleryImages.json';
import services from '../content/services.json';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {type PageProps} from '../types/general';
import {chance, generateActions} from '../utils/chance';

const Page: NextPage<PageProps> = props => (
	<DefaultLayout showYelp>
		<PageTitle text='Home'/>
		<IntroBlock {...props.IntroBlockProps}/>
		<FeaturedInBlock {...props.FeaturedInBlockProps}/>
		<ServicesPreviewBlock {...props.ServicesPreviewBlockProps}/>
		<EstimatorBlock/>
		<GalleryBlock {...props.GalleryBlockProps}/>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		IntroBlockProps: {
			color: 'none',
			title: 'Weclome to Graphix Collab',
			description:
				'We\'re your one-stop shop for all your apparel customization needs. We offer a wide range of services, from garment printing to embroidery.',
		},
		FeaturedInBlockProps: {
			title: 'Featured In',
			companies: featuredCompanies,
		},
		InteractiveEstimatorProps: {
			actions: generateActions(),
		},
		ServicesPreviewBlockProps: {
			title: 'Popular Services',
			services: services.filter(s => s.featured),
		},
		GalleryBlockProps: {
			title: 'See what we\'re up to',
			description:
				'With years of experience in the industry, we have the expertise and equipment necessary to produce stunning prints on a wide range of materials, including fabric, paper, metal, glass, and plastic. Follow us for an inside scoop of what\'s going on behind the scenes.',
			SocialMediaBlockProps: {
				text: '@fashiongreekusc',
				url: chance.url(),
				actions: [
					{
						label: 'Follow',
					},
					{
						label: 'Share',
					},
				],
			},
			images: [...galleryImages],
			actions: generateActions(),
		},
	},
});

/**
- brand assets
- meagan or diana, for brand assets
*/

export default Page;
