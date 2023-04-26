import {type GetStaticProps, type NextPage} from 'next';
import colors from 'tailwindcss/colors';
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
	generateTimelineBlock
} from '../utils/chance';
import {generateBlocks} from '../utils/generateBlocks';

const GraphixCollab: NextPage<PageProps> = ({layout, blocks}) => (
	<DefaultLayout
		pageTitle="Graphix Collab"
		HeaderProps={layout.header}
		BannerProps={layout.banner}
		FooterProps={layout.footer}
	>
		{generateBlocks(blocks)}
	</DefaultLayout>
);

const exampleUrl = 'https://google.com';

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		layout: {
			header: generateHeader(),
			banner: generateBanner(),
			footer: generateFooter()
		},
		blocks: [
			{
				type: 'intro',
				props: {
					...generateIntroBlock(),
					color: colors.cyan[300]
				}
			},
			{
				type: 'featured',
				props: {
					title: 'Featured In',
					companies: [
						{name: 'Dazed', url: exampleUrl},
						{name: 'i-D', url: exampleUrl},
						{name: 'Buffalo Zine', url: exampleUrl},
						{name: 'Gal-dem', url: exampleUrl},
						{name: 'Polyester', url: exampleUrl},
						{name: 'Another Magazine', url: exampleUrl},
						{name: 'i-D', url: exampleUrl}
					]
				}
			},
			{type: 'services', props: generateServicesBlock()},
			{
				type: 'interactiveEstimator',
				props: {
					actions: generateActions()
				}
			},
			{type: 'timeline', props: generateTimelineBlock()},
			// {type: 'fanService', props: generateFanServiceBlock()},
			{type: 'gallery', props: generateGalleryBlock()}
		]
	}
});

export default GraphixCollab;
