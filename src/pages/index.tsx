import {type GetStaticProps, type NextPage} from 'next';
import {FeaturedInBlock} from '../components/block/FeaturedInBlock';
import {GalleryBlock} from '../components/block/GalleryBlock';
import {InteractiveEstimator} from '../components/block/InteractiveEstimator';
import {IntroBlock} from '../components/block/IntroBlock/IntroBlock';
import {ServicesPreviewBlock} from '../components/block/ServicesPreviewBlock';
import galleryImages from '../content/galleryImages.json';
import services from '../content/services.json';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {type PageProps} from '../types/general';
import {chance, generateActions} from '../utils/chance';

const HomePage: NextPage<PageProps> = props => (
	<DefaultLayout>
		<IntroBlock {...props.IntroBlockProps} />
		<FeaturedInBlock {...props.FeaturedInBlockProps} />
		<InteractiveEstimator {...props.InteractiveEstimatorProps} />
		<ServicesPreviewBlock {...props.ServicesPreviewBlockProps} />
		<GalleryBlock {...props.GalleryBlockProps} />
	</DefaultLayout>
);

const exampleLink = 'https://google.com';

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		IntroBlockProps: {
			color: 'none',
			title: 'Weclome to Graphix Collab',
			description:
				"We're your one-stop shop for all your apparel customization needs. We offer a wide range of services, from garment printing to embroidery."
		},
		FeaturedInBlockProps: {
			title: 'Featured In',
			companies: [
				{name: 'Dazed', url: exampleLink},
				{name: 'i-D', url: exampleLink},
				{name: 'Buffalo Zine', url: exampleLink},
				{name: 'Gal-dem', url: exampleLink},
				{name: 'Polyester', url: exampleLink},
				{name: 'Another Magazine', url: exampleLink},
				{name: 'i-D', url: exampleLink}
			]
		},
		InteractiveEstimatorProps: {
			actions: generateActions()
		},
		ServicesPreviewBlockProps: {
			title: 'Popular Services',
			services: services.filter(s => s.featured)
		},
		GalleryBlockProps: {
			title: "See what we're up to",
			description:
				"With years of experience in the industry, we have the expertise and equipment necessary to produce stunning prints on a wide range of materials, including fabric, paper, metal, glass, and plastic. Follow us for an inside scoop of what's going on behind the scenes.",
			SocialMediaBlockProps: {
				text: '@fashiongreekusc',
				url: chance.url(),
				actions: [
					{
						label: 'Follow'
					},
					{
						label: 'Share'
					}
				]
			},
			images: [...galleryImages],
			actions: generateActions()
		}
	}
});

export default HomePage;
