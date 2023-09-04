import {ArrowDownward} from '@mui/icons-material';
import {styled} from '@mui/material/styles';
import {type ComponentPropsWithoutRef, type FC, type ReactNode} from 'react';
import {type NavItemOptions} from '../../types/general';

export type NavItemProps = {
	readonly icon?: ReactNode;
	readonly hasSubmenu?: boolean;
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
	border-radius: var(--button-bezel-${size});

	padding-inline: var(--input-spacing-padding-inline-${size});
	line-height: var(--input-height-${size});
	height: var(--input-height-${size});
	white-space: nowrap;

	& svg {
		height: var(--input-group-action-size-${size});
		width: var(--input-group-action-size-${size});
	}

	&:hover,
	&[aria-current='true'] {
		text-decoration: var(--button-text-decoration-${variant});
		text-underline-offset: var(--button-text-offset-${variant});
		text-decoration-thickness: var(--button-text-thickness-${variant});

		&:nth-of-type(1n) {
			text-decoration-color: var(--sequence-color-0-main);
		}
		&:nth-of-type(2n) {
			text-decoration-color: var(--sequence-color-1-main);
		}
		&:nth-of-type(3n) {
			text-decoration-color: var(--sequence-color-2-main);
		}
		&:nth-of-type(4n) {
			text-decoration-color: var(--sequence-color-3-main);
		}
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
		{hasSubmenu && <ArrowDownward/>}
	</StyledAnchor>
);
