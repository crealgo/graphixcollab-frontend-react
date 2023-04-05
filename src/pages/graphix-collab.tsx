import { PageProps } from "../types/general";
import { DefaultLayout } from "../layouts/DefaultLayout";
import {
	generateActions,
	generateBanner,
	generateFooter,
	generateGalleryBlock,
	generateHeader,
	generateIntroBlock,
	generatePageHeaderBlock,
	generateServicesBlock,
	generateTimelineBlock,
} from "../utils/chance";
import { generateBlocks } from "../utils/generateBlocks";
import { GetStaticProps, NextPage } from "next";
import colors from "tailwindcss/colors";

const GraphixCollab: NextPage<PageProps> = ({ layout, blocks }) => (
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
				footer: generateFooter(),
			},
			blocks: [
				{
					type: "pageHeader",
					props: {
						...generatePageHeaderBlock(),
						color: colors.cyan[300],
						title: "Graphix Collab",
					},
				},
				{
					type: "intro",
					props: {
						...generateIntroBlock(),
						color: colors.cyan[300],
					},
				},
				{
					type: "featured",
					props: {
						title: "Featured In",
						companies: [
							{ name: "Dazed", url: "https://google.com" },
							{ name: "i-D", url: "https://google.com" },
							{ name: "Buffalo Zine", url: "https://google.com" },
							{ name: "Gal-dem", url: "https://google.com" },
							{ name: "Polyester", url: "https://google.com" },
							{ name: "Another Magazine", url: "https://google.com" },
							{ name: "i-D", url: "https://google.com" },
						],
					},
				},
				{ type: "services", props: generateServicesBlock() },
				{
					type: "interactiveEstimator",
					props: {
						actions: generateActions(),
					},
				},
				{ type: "timeline", props: generateTimelineBlock() },
				// {type: 'fanService', props: generateFanServiceBlock()},
				{ type: "gallery", props: generateGalleryBlock() },
			],
		},
	};
};

export default GraphixCollab;
