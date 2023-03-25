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
	generatePageHeaderBlock,
	generateServicesBlock,
	generateTimelineBlock
} from '@utils/chance';
import {generateBlocks} from '@utils/generateBlocks';
import {GetStaticProps, NextPage} from 'next';

const GraphixCollab: NextPage<PageProps> = ({layout, blocks}) => (
	<DefaultLayout HeaderProps={layout.header} BannerProps={layout.banner} FooterProps={layout.footer}>
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
				{
					type: 'pageHeader',
					props: {
						...generatePageHeaderBlock(),
						title: 'Graphix Collab'
					}
				},
				{type: 'intro', props: generateIntroBlock()},
				{
					type: 'placeholder',
					props: {
						name: 'Featured In'
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
				{type: 'fanService', props: generateFanServiceBlock()},
				{type: 'gallery', props: generateGalleryBlock()}
			]
		}
	};
};

export default GraphixCollab;
