import {type GetStaticProps, type NextPage} from 'next';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {type PageProps} from '../types/general';
import {
	generateActions,
	generateBanner,
	generateFooter,
	generateGalleryBlock,
	generateHeader,
	generateIntroBlock,
	generateServicesBlock,
} from '../utils/chance';
import {generateBlocks} from '../utils/generateBlocks';

const HomePage: NextPage<PageProps> = ({layout, blocks}) => (
	<DefaultLayout BannerProps={layout.banner} FooterProps={layout.footer}>
		{generateBlocks(blocks)}
	</DefaultLayout>
);

const exampleLink = 'https://google.com';

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		layout: {
			header: generateHeader(),
			banner: generateBanner(),
			footer: generateFooter(),
		},
		blocks: [
			{type: 'intro', props: generateIntroBlock()},
			{
				type: 'featured',
				props: {
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
			},
			{
				type: 'interactiveEstimator',
				props: {
					actions: generateActions(),
				},
			},
			{type: 'servicesPreview', props: generateServicesBlock()},
			// { type: "timeline", props: generateTimelineBlock() },
			// {type: 'fanService', props: generateFanServiceBlock()},
			{type: 'gallery', props: generateGalleryBlock()},
		],
	},
});

export default HomePage;
