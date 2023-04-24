import {type GetStaticProps, type NextPage} from 'next';
import {IntroBlock} from '../components/block/IntroBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {type PageProps} from '../types/general';
import {
	generateActions,
	generateGalleryBlock,
	generateIntroBlock,
	generateServicesBlock,
} from '../utils/chance';
import {FeaturedInBlock} from '../components/block/FeaturedInBlock';
import {GalleryBlock} from '../components/block/GalleryBlock';
import {InteractiveEstimator} from '../components/block/InteractiveEstimator';
import {ServicesPreviewBlock} from '../components/block/ServicesPreviewBlock';

const HomePage: NextPage<PageProps> = props => (
	<DefaultLayout>
		<IntroBlock {...props.IntroBlockProps}/>
		<FeaturedInBlock {...props.FeaturedInBlockProps}/>
		<InteractiveEstimator {...props.InteractiveEstimatorProps}/>
		<ServicesPreviewBlock {...props.ServicesPreviewBlockProps}/>
		<GalleryBlock {...props.GalleryBlockProps}/>
	</DefaultLayout>
);

const exampleLink = 'https://google.com';

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		IntroBlockProps: generateIntroBlock(),
		FeaturedInBlockProps: {
			title: 'Featured In',
			companies: [
				{name: 'Dazed', url: exampleLink},
				{name: 'i-D', url: exampleLink},
				{name: 'Buffalo Zine', url: exampleLink},
				{name: 'Gal-dem', url: exampleLink},
				{name: 'Polyester', url: exampleLink},
				{name: 'Another Magazine', url: exampleLink},
				{name: 'i-D', url: exampleLink},
			],
		},
		InteractiveEstimatorProps: {
			actions: generateActions(),
		},
		ServicesPreviewBlockProps: generateServicesBlock(),
		GalleryBlockProps: generateGalleryBlock(),
	},
});

export default HomePage;
