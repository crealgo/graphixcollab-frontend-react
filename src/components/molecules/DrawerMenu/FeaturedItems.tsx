import { FeaturedItem, type FeaturedItemProps } from '@components/DrawerMenu/FeaturedItem';
import { styled } from '@mui/material';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export interface FeaturedItemsProps extends ComponentPropsWithoutRef<'nav'> {
	items?: FeaturedItemProps[];
}

const WrapperNav = styled('nav')`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
`;

export const FeaturedItems = forwardRef<HTMLElement, FeaturedItemsProps>(({className, children, items}, ref) => (
	<WrapperNav ref={ref} className={className}>
		{children ?? items?.map((item, itemIndex) => <FeaturedItem key={itemIndex} {...item} />)}
	</WrapperNav>
));

FeaturedItems.displayName = 'FeaturedItems';
