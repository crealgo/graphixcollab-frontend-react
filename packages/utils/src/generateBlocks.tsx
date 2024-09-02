import {type ReactNode, useId} from 'react';
import {CalloutBlock} from '@graphixcollab/components/CalloutBlock.tsx';
import {FanServiceBlock} from '@graphixcollab/components/FanServiceBlock.tsx';
import {FaqBlock} from '@graphixcollab/components/FaqBlock.tsx';
import {FeaturedInBlock} from '@graphixcollab/components/FeaturedInBlock/index.tsx';
import {GalleryBlock} from '@graphixcollab/components/GalleryBlock.tsx';
import {InteractiveEstimator} from '@graphixcollab/components/InteractiveEstimator.tsx';
import {IntroBlock} from '@graphixcollab/components/IntroBlock.tsx';
import {PageHeaderBlock} from '@graphixcollab/components/PageHeaderBlock.tsx';
import {PlaceholderBlock} from '@graphixcollab/components/PlaceholderBlock.tsx';
import {ProfilesBlock} from '@graphixcollab/components/ProfilesBlock.tsx';
import {ServicesBlock} from '@graphixcollab/components/ServicesBlock.tsx';
import {ServicesPreviewBlock} from '@graphixcollab/components/ServicesPreviewBlock.tsx';
import {TimelineBlock} from '@graphixcollab/components/TimelineBlock.tsx';

const blockMap = {
	callout: CalloutBlock,
	fanService: FanServiceBlock,
	faq: FaqBlock,
	featured: FeaturedInBlock,
	gallery: GalleryBlock,
	// ImageContent: ImageContentBlock,
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

export const generateBlocks = (blockArray: BlockOptions[]): ReactNode[] =>
	blockArray.map(block => {
		const Component = blockMap[block.type];

		return Component ? <Component key={useId()} {...block.props}/> : null;
	});
