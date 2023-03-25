import {type Meta, type Story} from '@storybook/react';
import {DrawerMenu, type DrawerMenuProps} from '@components/DrawerMenu';

export default {
	component: DrawerMenu
} as Meta;

export const Default: Story<DrawerMenuProps> = (args) => <DrawerMenu {...args} />;
