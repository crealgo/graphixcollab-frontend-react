import {type StoryObj, type Meta} from '@storybook/react';
import {generateHeader} from '@graphixcollab/utils/chance';
import {Header, type HeaderProps} from './Header';

export default {
	component: Header,
} as Meta;

export const Default: StoryObj<HeaderProps> = {
	args: generateHeader(),
};
