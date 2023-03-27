import { CalloutBlock } from '@components/CalloutBlock';
import { FanServiceBlock } from '@components/FanServiceBlock';
import { FaqBlock } from '@components/FaqBlock';
import { FeaturedInBlock } from '@components/FeaturedInBlock';
import { GalleryBlock } from '@components/GalleryBlock';
import { ImageContentBlock } from '@components/ImageContentBlock';
import { InteractiveEstimator } from '@components/InteractiveEstimator';
import { IntroBlock } from '@components/IntroBlock';
import { PageHeaderBlock } from '@components/PageHeaderBlock';
import { PlaceholderBlock } from '@components/PlaceholderBlock';
import { ProfilesBlock } from '@components/ProfilesBlock';
import { ServicesBlock } from '@components/ServicesBlock';
import { TimelineBlock } from '@components/TimelineBlock';
import { ReactNode, useId } from 'react';

const blockMap = {
	callout: CalloutBlock,
	fanService: FanServiceBlock,
	faq: FaqBlock,
	featured: FeaturedInBlock,
	gallery: GalleryBlock,
	imageContent: ImageContentBlock,
	interactiveEstimator: InteractiveEstimator,
	intro: IntroBlock,
	pageHeader: PageHeaderBlock,
	placeholder: PlaceholderBlock,
	profile: ProfilesBlock,
	services: ServicesBlock,
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
