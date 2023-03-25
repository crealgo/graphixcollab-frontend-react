import {type Story} from '@storybook/react';
import {generateImageContentBlock} from '@utils/chance';
import {ImageContentBlock, type ImageContentBlockProps} from '@components/ImageContentBlock';

export default {
	component: ImageContentBlock
};

export const Default: Story<ImageContentBlockProps> = (args) => <ImageContentBlock {...args} />;

Default.args = generateImageContentBlock();
