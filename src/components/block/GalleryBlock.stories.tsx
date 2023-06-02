import { type StoryObj } from '@storybook/react';
import { generateGalleryBlock } from '../../utils/chance';
import { GalleryBlock, type GalleryBlockProps } from './GalleryBlock';

export default {
	component: GalleryBlock
};

export const Default: StoryObj<GalleryBlockProps> = {
	args: generateGalleryBlock()
};
