import {Menu, MenuItem, Popover, type PopoverOrigin} from '@mui/material';
import {
	useState,
	type ComponentType,
	type FC,
	type MouseEventHandler,
} from 'react';
import {type NavItemOptions} from '@graphixcollab/types/general.d.ts';
import {type ButtonProps} from './Button';
import {NavItem} from './NavItem';

export type NavItemDropdownProps = {
	readonly items?: NavItemOptions[];
	readonly FlyoutComponent?: ComponentType<unknown>;
} & ButtonProps;

export const NavItemDropdown: FC<NavItemDropdownProps> = ({
	FlyoutComponent,
	children,
	items,
}) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | undefined>(
		undefined,
	);
	const open = Boolean(anchorEl);

	const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(undefined);
	};

	const sharedProps = {
		open,
		anchorEl,
		onClose: handleClose,
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left',
		} as PopoverOrigin,
		disableScrollLock: true,
		disablePortal: true,
		transitionDuration: 200,
	};

	return (
		<>
			<NavItem
				hasSubmenu
				selected={open}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{children}
			</NavItem>
			{FlyoutComponent ? (
				<Popover {...sharedProps}>
					<FlyoutComponent/>
				</Popover>
			) : (
				<Menu
					{...sharedProps}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
						sx: {
							minWidth: '10rem',
						},
					}}
				>
					{items?.map((item, itemIndex) => (
						<MenuItem
							key={itemIndex}
							onClick={() => {
								handleClose();
							}}
						>
							{item.label}
						</MenuItem>
					))}
				</Menu>
			)}
		</>
	);
};
