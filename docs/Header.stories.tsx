import { Header, type HeaderProps } from '@components/Header';
import { type Meta, type Story } from '@storybook/react';
import { generateHeader } from '@utils/chance';

export default {
	component: Header
} as Meta;

export const Default: Story<HeaderProps> = (args) => <Header {...args} />;

Default.args = generateHeader();
