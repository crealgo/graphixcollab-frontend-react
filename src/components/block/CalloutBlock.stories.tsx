import {type Meta, type StoryObj} from '@storybook/react';
import {generateCalloutBlock} from '../../utils/chance';
import {CalloutBlock, type CalloutBlockProps} from './CalloutBlock';

export default {
	component: CalloutBlock
} as Meta;

export const Default: StoryObj<CalloutBlockProps> = {
	args: generateCalloutBlock()
};
