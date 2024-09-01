import {type StoryObj} from '@storybook/react';
import {generateGalleryBlock} from '@graphixcollab/utils/chance.ts';
import {GalleryBlock, type GalleryBlockProps} from './GalleryBlock';

export default {
	component: GalleryBlock,
};

export const Default: StoryObj<GalleryBlockProps> = {
	args: generateGalleryBlock(),
};
