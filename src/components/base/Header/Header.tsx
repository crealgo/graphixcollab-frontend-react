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
import {HeaderLogo} from './HeaderLogo';

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
				<HeaderLogo
					className="Logo-root"
					// src='https://fashiongreekusc.square.site/uploads/b/ed0dc040-de8b-11ea-adbe-f1c93472ece4/89a929c7885b56db4508a726fae7f212.png?width=500&optimize=small'
					src={FGUSCLogo.src as string}
				/>
				<NavItems items={items} />
				<FlexSpacer />
				<ActionStack actions={actions} />
				<DrawerMenu items={navigationItems} />
			</HeaderContent>
		</HeaderBar>
	);
};
