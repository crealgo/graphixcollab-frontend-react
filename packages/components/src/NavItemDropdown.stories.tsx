import {type StoryObj, type Meta} from '@storybook/react';
import {chance} from '@graphixcollab/utils/chance.ts';
import {Flyout} from './Flyout';
import {NavItemDropdown, type NavItemDropdownProps} from './NavItemDropdown';

export default {
	component: NavItemDropdown,
} as Meta;

export const Default: StoryObj<NavItemDropdownProps> = {
	args: {
		children: 'Nav Item Dropdown',
		items: chance.n(() => ({label: chance.word({length: 5})}), 5),
		FlyoutComponent: Flyout,
	},
};
