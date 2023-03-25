import {type Story} from '@storybook/react';
import {generateGalleryBlock} from '@utils/chance';
import {GalleryBlock, type GalleryBlockProps} from '@components/GalleryBlock';

export default {
	component: GalleryBlock
};

export const Default: Story<GalleryBlockProps> = (args) => <GalleryBlock {...args} />;

Default.args = generateGalleryBlock();
