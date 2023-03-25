import {type Meta, type Story} from '@storybook/react';
import {chance} from '@utils/chance';
import {Flyout} from '@components/Flyout';
import {NavItemDropdown, type NavItemDropdownProps} from '@components/NavItemDropdown';

export default {
	component: NavItemDropdown
} as Meta;

export const Default: Story<NavItemDropdownProps> = (args) => <NavItemDropdown {...args} />;

Default.args = {
	children: 'Nav Item Dropdown',
	items: chance.n(() => ({label: chance.word({length: 5})}), 5),
	FlyoutComponent: Flyout
};
