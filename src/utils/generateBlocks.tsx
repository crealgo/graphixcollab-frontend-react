import { ReactNode, useId } from "react";
import { CalloutBlock } from "../components/block/CalloutBlock";
import { FanServiceBlock } from "../components/block/FanServiceBlock";
import { FaqBlock } from "../components/block/FaqBlock";
import { FeaturedInBlock } from "../components/block/FeaturedInBlock";
import { GalleryBlock } from "../components/block/GalleryBlock";
import { InteractiveEstimator } from "../components/block/InteractiveEstimator";
import { IntroBlock } from "../components/block/IntroBlock";
import { PageHeaderBlock } from "../components/block/PageHeaderBlock";
import { PlaceholderBlock } from "../components/block/PlaceholderBlock";
import { ProfilesBlock } from "../components/block/ProfilesBlock";
import { ServicesBlock } from "../components/block/ServicesBlock";
import { ServicesPreviewBlock } from "../components/block/ServicesPreviewBlock";
import { TimelineBlock } from "../components/block/TimelineBlock";

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
