import {type StoryObj, type Meta, type StoryFn} from '@storybook/react';
import {CalloutBlock, type CalloutBlockProps} from './CalloutBlock';
import {generateCalloutBlock} from '../../utils/chance';

export default {
	component: CalloutBlock,
} as Meta;

export const Default: StoryObj<CalloutBlockProps> = {
	args: generateCalloutBlock(),
};
