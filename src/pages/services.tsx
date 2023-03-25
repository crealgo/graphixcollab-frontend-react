import {PageProps} from '@global/generalTypes';
import {DefaultLayout} from '@layouts/DefaultLayout';
import {
	generateActions,
	generateBanner,
	generateCalloutBlock,
	generateFaqBlock,
	generateFooter,
	generateHeader,
	generateImageContentBlock,
	generatePageHeaderBlock,
	generateServicesBlock,
	generateTimelineBlock
} from '@utils/chance';
import {generateBlocks} from '@utils/generateBlocks';
import {GetStaticProps, NextPage} from 'next';

const ServicesPage: NextPage<PageProps> = ({layout, blocks}) => (
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
						title: 'Services'
					}
				},
				{
					type: 'imageContent',
					props: generateImageContentBlock()
				},
				{
					type: 'imageContent',
					props: {
						...generateImageContentBlock(),
						imagePosition: 'end'
					}
				},
				{
					type: 'timeline',
					props: generateTimelineBlock()
				},
				{
					type: 'services',
					props: generateServicesBlock()
				},
				{
					type: 'interactiveEstimator',
					props: {
						actions: generateActions()
					}
				},
				{
					type: 'callout',
					props: generateCalloutBlock()
				},
				{
					type: 'interactiveEstimator'
				},
				{
					type: 'faq',
					props: generateFaqBlock()
				}
			]
		}
	};
};

export default ServicesPage;
