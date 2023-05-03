import {useMemo, type ComponentPropsWithoutRef, type FC} from 'react';
import FGUSCLogo from '../../../assets/fashiongreek-usc-logo.png';
import {useNavigationItems} from '../../../hooks/useNavigationItems';
import useScrollPosition from '../../../hooks/useScrollPosition';
import {type Action, type NavItemOptions} from '../../../types/general';
import {ActionStack} from '../ActionStack';
import {DrawerMenu} from '../DrawerMenu';
import {FlexSpacer} from '../FlexSpacer';
import {NavItems} from '../NavItems';
import {HeaderBar} from './HeaderBar';
import {HeaderContent} from './HeaderContent';
import Logo from '../../atoms/Logo';

export type HeaderProps = {
	// logo?: string;
	navigationItems?: NavItemOptions[];
	actions?: Action[];
	// backgroundColor?: 'primary' | 'secondary' | 'white';
	// withHero?: boolean;
} & ComponentPropsWithoutRef<'header'>;

export const Header: FC<HeaderProps> = ({
	navigationItems,
	actions,
	className
}) => {
	const items = useNavigationItems();
	const scrollPosition = useScrollPosition();

	const isScrolled = useMemo(() => scrollPosition > 100, [scrollPosition]);

	return (
		<HeaderBar className={className} isScrolled={isScrolled}>
		<HeaderContent>
				<Logo />
				<NavItems items={items} />
				<FlexSpacer />
				<ActionStack actions={actions} />
				<DrawerMenu items={navigationItems} />
			</HeaderContent>
		</HeaderBar>
	);
};
