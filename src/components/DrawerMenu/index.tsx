import {DrawerContent} from '@components/DrawerMenu/DrawerContent';
import {MenuTrigger} from '@components/DrawerMenu/MenuTrigger';
import {type NavItemOptions} from '@global/generalTypes';
import {Close, Menu} from '@mui/icons-material';
import {Drawer, useControlled, type DrawerProps} from '@mui/material';
import {type FC, type MouseEventHandler} from 'react';

export interface DrawerMenuProps extends Pick<DrawerProps, 'open' | 'onClose'> {
	items?: NavItemOptions[];
}

export const contentBoxPadding = '1rem';

export const DrawerMenu: FC<DrawerMenuProps> = ({items, open: controlledOpen, onClose}) => {
	const [open, setOpen] = useControlled({
		controlled: controlledOpen,
		default: false,
		name: 'DrawerMenu Open State'
	});

	const handleOpen: MouseEventHandler<HTMLButtonElement> = () => {
		setOpen(true);
	};

	const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
		setOpen(false);
	};

	return (
		<>
			<MenuTrigger size='small' className='MenuTrigger-root' onClick={handleOpen}>
				{open ? <Close /> : <Menu />}
			</MenuTrigger>
			<Drawer anchor='left' open={open} onClose={handleClose}>
				<DrawerContent navigationItems={items} onCloseButtonClick={handleClose} />
			</Drawer>
		</>
	);
};
