import {NavItem} from './NavItem';
import {NavItemDropdown} from './NavItemDropdown';
import {type NavItemOptions} from '../../types/general';
import {css, styled} from '@mui/material';
import {type FC, type PropsWithChildren} from 'react';

const NavItemsWrapper = styled('nav')(
	({theme}) => css`
		gap: 0;
		display: none;

		${theme.breakpoints.up('md')} {
			display: flex;
		}
	`
);

type NavItemsProps = PropsWithChildren<{
	items?: NavItemOptions[];
}>;

export const NavItems: FC<NavItemsProps> = ({items, children}) => (
	<NavItemsWrapper className="NavItems-root">
		{items?.map(({label, subItems, ...itemProps}, itemIndex) =>
			subItems ? (
				<NavItemDropdown
					{...itemProps}
					key={itemIndex}
					items={subItems}
				>
					{label}
				</NavItemDropdown>
			) : (
				<NavItem {...itemProps} key={itemIndex}>
					{label}
				</NavItem>
			)
		)}
		{children}
	</NavItemsWrapper>
);
