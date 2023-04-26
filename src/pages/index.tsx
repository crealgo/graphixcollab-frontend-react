import {type GetStaticProps, type NextPage} from 'next';
import {FeaturedInBlock} from '../components/block/FeaturedInBlock';
import {GalleryBlock} from '../components/block/GalleryBlock';
import {InteractiveEstimator} from '../components/block/InteractiveEstimator';
import {IntroBlock} from '../components/block/IntroBlock/IntroBlock';
import {ServicesPreviewBlock} from '../components/block/ServicesPreviewBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {type PageProps} from '../types/general';
import {chance, generateActions, generateServicesBlock} from '../utils/chance';
import galleryImages from '../content/galleryImages.json';

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
			slides: [
				{
					title: 'Welcome to Fashion Greek',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
					actions: [
						{
							label: 'Get Started',
							color: 'primary'
						},
						{
							label: 'Book an appointment',
							color: 'text'
						}
					],
					image: 'https://picsum.photos/200/300'
				},
				...chance.n(
					() => ({
						title: chance.sentence({words: 3}),
						description: chance.paragraph({sentences: 3}),
						actions: [],
						image: 'https://picsum.photos/200/300'
					}),
					3
				)
			]
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
		ServicesPreviewBlockProps: generateServicesBlock(),
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
