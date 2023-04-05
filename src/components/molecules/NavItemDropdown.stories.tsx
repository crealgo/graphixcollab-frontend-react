import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { chance } from '@utils/chance';
import { Flyout } from '@components/Flyout';
import { NavItemDropdown, type NavItemDropdownProps } from '@components/NavItemDropdown';

export default {
  component: NavItemDropdown,
} as Meta;

export const Default: StoryObj<NavItemDropdownProps> = {
  args: {
    children: 'Nav Item Dropdown',
    items: chance.n(() => ({ label: chance.word({ length: 5 }) }), 5),
    FlyoutComponent: Flyout,
  },
};
