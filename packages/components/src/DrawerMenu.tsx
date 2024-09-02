import {DrawerContent} from './DrawerContent';
import {MenuTrigger} from './MenuTrigger';
import {type Action, type NavItemOptions} from '@graphixcollab/types/general.d.ts';
import {Close, Menu} from '@mui/icons-material';
import {Drawer, useControlled, type DrawerProps} from '@mui/material';
import {type FC, type MouseEventHandler} from 'react';

export type DrawerMenuProps = {
	readonly items?: NavItemOptions[];
	readonly actions?: Action[];
} & Pick<DrawerProps, 'open' | 'onClose'>;

export const contentBoxPadding = '1rem';

export const DrawerMenu: FC<DrawerMenuProps> = ({
	items,
	actions,
	open: controlledOpen,
}) => {
	const [open, setOpen] = useControlled({
		controlled: controlledOpen,
		default: false,
		name: 'DrawerMenu Open State',
	});

	const handleOpen: MouseEventHandler<HTMLButtonElement> = () => {
		setOpen(true);
	};

	const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
		setOpen(false);
	};

	return (
		<>
			<MenuTrigger
				size='small'
				className='MenuTrigger-root'
				onClick={handleOpen}
			>
				{open ? <Close/> : <Menu/>}
			</MenuTrigger>
			<Drawer anchor='left' open={open} onClose={handleClose}>
				<DrawerContent
					navigationItems={items}
					actions={actions}
					onCloseButtonClick={handleClose}
				/>
			</Drawer>
		</>
	);
};
