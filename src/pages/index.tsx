import { Header } from '@components/Header';
import {PageProps} from '@global/generalTypes';
import {DefaultLayout} from '@layouts/DefaultLayout';
import {
	generateActions,
	generateBanner,
	generateFanServiceBlock,
	generateFooter,
	generateGalleryBlock,
	generateHeader,
	generateIntroBlock,
	generateServicesBlock,
	generateTimelineBlock
} from '@utils/chance';
import {generateBlocks} from '@utils/generateBlocks';
import {GetStaticProps, NextPage} from 'next';

const HomePage: NextPage<PageProps> = ({layout, blocks}) => (
	<DefaultLayout BannerProps={layout.banner} FooterProps={layout.footer}>
		{generateBlocks(blocks)}
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => {
	return {
		props: {
			layout: {
				header: generateHeader(),
				banner: generateBanner(),
				footer: generateFooter()
			},
			blocks: [
				{type: 'intro', props: generateIntroBlock()},
				{
					type: 'featured',
					props: {
						title: 'Featured In',
						companies: [
							{name: 'Dazed', url: 'https://google.com'},
							{name: 'i-D', url: 'https://google.com'},
							{name: 'Buffalo Zine', url: 'https://google.com'},
							{name: 'Gal-dem', url: 'https://google.com'},
							{name: 'Polyester', url: 'https://google.com'},
							{name: 'Another Magazine', url: 'https://google.com'},
							{name: 'i-D', url: 'https://google.com'}
						]
					}
				},
				{
					type: 'interactiveEstimator',
					props: {
						actions: generateActions()
					}
				},
				{type: 'services', props: generateServicesBlock()},
				{type: 'timeline', props: generateTimelineBlock()},
				{type: 'fanService', props: generateFanServiceBlock()},
				{type: 'gallery', props: generateGalleryBlock()}
			]
		}
	};
};

export default HomePage;
