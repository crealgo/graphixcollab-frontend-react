import {css, styled} from '@mui/material/styles';
import {forwardRef, type ComponentPropsWithRef} from 'react';
import {type NavItemOptions} from '../../types/general';
import {NavItem} from './NavItem';

type TopNavProps = {
	items?: NavItemOptions[];
	align?: 'start' | 'end';
} & ComponentPropsWithRef<'nav'>;

const defaultAlignment = 'start';

const TopNavWrapper = styled('nav')<TopNavProps>(
	({theme, align = defaultAlignment}) => css`
		display: flex;
		gap: 0.25rem;
		align-items: center;
		justify-content: ${align};
	`
);

export const TopNav = forwardRef<HTMLDivElement, TopNavProps>(
	({children, items, align = defaultAlignment, ...props}, ref) => (
		<TopNavWrapper
			{...props}
			ref={ref}
			className="TopNav-root"
			align={align}
		>
			{children ??
				items?.map((item, itemIndex) => (
					<NavItem key={itemIndex} {...item} />
				))}
		</TopNavWrapper>
	)
);
TopNav.displayName = 'TopNav';
