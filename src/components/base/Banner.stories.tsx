import {type StoryObj, type Meta} from '@storybook/react';
import {generateBanner} from '../../utils/chance';
import {BannerService} from '../service/BannerService';
import {Banner, type BannerProps} from './Banner';

export default {
	component: Banner,
	subcomponents: {BannerService},
} as Meta;

export const Default: StoryObj<BannerProps> = {
	args: generateBanner(),
};
