import {NavItem} from './NavItem';
import {NavItemDropdown} from './NavItemDropdown';
import {type NavItemOptions} from '@graphixcollab/types/general';
import {css, styled} from '@mui/material';
import {type FC, type PropsWithChildren} from 'react';

const NavItemsWrapper = styled('nav')(
	({theme}) => css`
		gap: 0;
		display: none;

		${theme.breakpoints.up('md')} {
			display: flex;
		}
	`,
);

type NavItemsProps = PropsWithChildren<{
	readonly items?: NavItemOptions[];
}>;

export const NavItems: FC<NavItemsProps> = ({items, children}) => (
	<NavItemsWrapper className='NavItems-root'>
		{items?.map(({label, subItems, ...itemProps}, itemIndex) => subItems ? (
			<NavItemDropdown
				key={itemIndex}
				items={subItems}
				{...itemProps}
			>
				{label}
			</NavItemDropdown>
		) : (
			<NavItem key={itemIndex} {...itemProps}>
				{label}
			</NavItem>
		),
		)}
		{children}
	</NavItemsWrapper>
);
