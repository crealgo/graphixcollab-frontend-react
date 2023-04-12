import {css, styled} from '@mui/material/styles';
import {forwardRef, type ComponentPropsWithRef} from 'react';
import {type NavItemOptions} from '../../types/general';
import {NavItem} from './NavItem';

interface TopNavProps extends ComponentPropsWithRef<'nav'> {
	items?: NavItemOptions[];
	align?: 'start' | 'end';
}

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
		<TopNavWrapper {...props} className={'TopNav-root'} align={align} ref={ref}>
			{children ?? items?.map((item, itemIndex) => <NavItem size='small' key={itemIndex} {...item} />)}
		</TopNavWrapper>
	)
);
TopNav.displayName = 'TopNav';
