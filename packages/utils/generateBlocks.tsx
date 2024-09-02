import {type ReactNode, useId} from 'react';
import {CalloutBlock} from '@graphixcollab/components/CalloutBlock';
import {FanServiceBlock} from '@graphixcollab/components/FanServiceBlock';
import {FaqBlock} from '@graphixcollab/components/FaqBlock';
import {FeaturedInBlock} from '@graphixcollab/components/FeaturedInBlock/index';
import {GalleryBlock} from '@graphixcollab/components/GalleryBlock';
import {InteractiveEstimator} from '@graphixcollab/components/InteractiveEstimator';
import {IntroBlock} from '@graphixcollab/components/IntroBlock';
import {PageHeaderBlock} from '@graphixcollab/components/PageHeaderBlock';
import {PlaceholderBlock} from '@graphixcollab/components/PlaceholderBlock';
import {ProfilesBlock} from '@graphixcollab/components/ProfilesBlock';
import {ServicesBlock} from '@graphixcollab/components/ServicesBlock';
import {ServicesPreviewBlock} from '@graphixcollab/components/ServicesPreviewBlock';
import {TimelineBlock} from '@graphixcollab/components/TimelineBlock';

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
