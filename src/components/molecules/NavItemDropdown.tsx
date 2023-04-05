import {KeyboardArrowDown} from '@mui/icons-material';
import {Menu, MenuItem, Popover} from '@mui/material';
import {useState, type ComponentType, type FC, type MouseEventHandler} from 'react';
import {type NavItemOptions} from '@global/generalTypes';
import {type ButtonProps} from '@components/Button';
import {NavItem} from '@components/NavItem';

export interface NavItemDropdownProps extends ButtonProps {
	items?: NavItemOptions[];
	FlyoutComponent?: ComponentType<unknown>;
}

export const NavItemDropdown: FC<NavItemDropdownProps> = ({FlyoutComponent, children, items}) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | undefined>(undefined);
	const open = Boolean(anchorEl);

	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(undefined);
	};

	const sharedProps = {
		open,
		anchorEl,
		onClose: handleClose
	};

	return (
		<>
			<NavItem
				endIcon={<KeyboardArrowDown />}
				onClick={handleClick}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
			>
				{children}
			</NavItem>
			{FlyoutComponent ? (
				<Popover
					{...sharedProps}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
				>
					<FlyoutComponent />
				</Popover>
			) : (
				<Menu
					{...sharedProps}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
						sx: {
							minWidth: '10rem'
						}
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
