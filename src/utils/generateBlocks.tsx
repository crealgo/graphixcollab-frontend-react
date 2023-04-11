import { ReactNode, useId } from "react";
import { CalloutBlock } from "../components/elements/CalloutBlock";
import { FanServiceBlock } from "../components/elements/FanServiceBlock";
import { FaqBlock } from "../components/elements/FaqBlock";
import { FeaturedInBlock } from "../components/elements/FeaturedInBlock";
import { GalleryBlock } from "../components/elements/GalleryBlock";
import { InteractiveEstimator } from "../components/elements/InteractiveEstimator";
import { IntroBlock } from "../components/elements/IntroBlock";
import { PageHeaderBlock } from "../components/elements/PageHeaderBlock";
import { PlaceholderBlock } from "../components/elements/PlaceholderBlock";
import { ProfilesBlock } from "../components/elements/ProfilesBlock";
import { ServicesBlock } from "../components/elements/ServicesBlock";
import { ServicesPreviewBlock } from "../components/elements/ServicesPreviewBlock";
import { TimelineBlock } from "../components/elements/TimelineBlock";

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
