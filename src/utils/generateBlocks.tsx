import { ReactNode, useId } from "react";
import { CalloutBlock } from "../components/blocks/CalloutBlock";
import { FanServiceBlock } from "../components/blocks/FanServiceBlock";
import { FaqBlock } from "../components/blocks/FaqBlock";
import { FeaturedInBlock } from "../components/blocks/FeaturedInBlock";
import { GalleryBlock } from "../components/blocks/GalleryBlock";
import { InteractiveEstimator } from "../components/blocks/InteractiveEstimator";
import { IntroBlock } from "../components/blocks/IntroBlock";
import { PageHeaderBlock } from "../components/blocks/PageHeaderBlock";
import { PlaceholderBlock } from "../components/blocks/PlaceholderBlock";
import { ProfilesBlock } from "../components/blocks/ProfilesBlock";
import { ServicesBlock } from "../components/blocks/ServicesBlock";
import { ServicesPreviewBlock } from "../components/blocks/ServicesPreviewBlock";
import { TimelineBlock } from "../components/blocks/TimelineBlock";

const blockMap = {
	callout: CalloutBlock,
	fanService: FanServiceBlock,
	faq: FaqBlock,
	featured: FeaturedInBlock,
	gallery: GalleryBlock,
	// imageContent: ImageContentBlock,
	interactiveEstimator: InteractiveEstimator,
	intro: IntroBlock,
	pageHeader: PageHeaderBlock,
	placeholder: PlaceholderBlock,
	profile: ProfilesBlock,
	services: ServicesBlock,
	servicesPreview: ServicesPreviewBlock,
	timeline: TimelineBlock,
} as const;

export type BlockTypes = keyof typeof blockMap;

export type BlockOptions = {
	type: BlockTypes;
	props?: any;
};

export const generateBlocks = (blockArray: BlockOptions[]): ReactNode[] => {
	return blockArray.map((block) => {
		const Component = blockMap[block.type];

		return Component ? <Component key={useId()} {...block.props} /> : null;
	});
};
