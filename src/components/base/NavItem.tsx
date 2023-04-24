import {styled} from '@mui/material/styles';
import {type ComponentPropsWithoutRef, type FC, type ReactNode} from 'react';
import {type NavItemOptions} from '../../types/general';
import {colorIterator} from '../../utils/colorIterator';
import {KeyboardArrowDown} from '@mui/icons-material';

export type NavItemProps = {
	icon?: ReactNode;
	hasSubmenu?: boolean;
} & ComponentPropsWithoutRef<'nav'> &
	NavItemOptions;

const variant = 'text';
const size = 'large';

const StyledAnchor = styled('a')`
	text-decoration: unset;
	cursor: pointer;

	display: var(--input-display);
	align-items: var(--input-align-items);

	font-weight: var(--button-font-weight);
	font-size: var(--input-font-size-${size});
	letter-spacing: var(--button-letter-spacing);

	background-color: var(--button-background-color-${variant});
	box-shadow: var(--button-shadow-${variant});
	color: var(--button-text-color-${variant});
	border: var(--button-border-${variant});

	padding-inline: var(--input-spacing-padding-inline-${size});
	line-height: var(--input-height-${size});
	height: var(--input-height-${size});

	& svg {
		height: var(--input-group-action-size-${size});
		width: var(--input-group-action-size-${size});
	}

	&:hover,
	&[aria-current='true'] {
		${colorIterator('text-decoration-color')}
		text-decoration: var(--button-text-decoration-${variant});
		text-underline-offset: var(--button-text-offset-${variant});
		text-decoration-thickness: var(--button-text-thickness-${variant});
	}
`;

export const NavItem: FC<NavItemProps> = ({
	label,
	children,
	selected,
	icon,
	hasSubmenu,
	...props
}) => (
	<StyledAnchor aria-current={selected} {...props}>
		{icon}
		{children ?? label}
		{hasSubmenu && <KeyboardArrowDown />}
	</StyledAnchor>
);
