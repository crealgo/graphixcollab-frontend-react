import { useMemo, type ComponentPropsWithoutRef, type FC } from 'react';
import { useNavigationItems } from '../../../hooks/useNavigationItems';
import useScrollPosition from '../../../hooks/useScrollPosition';
import { type Action } from '../../../types/general';
import { ActionStack } from '../ActionStack';
import { DrawerMenu } from '../DrawerMenu';
import { FlexSpacer } from '../FlexSpacer';
import { NavItems } from '../NavItems';
import { HeaderBar } from './HeaderBar';
import { HeaderContent } from './HeaderContent';
import Logo from '../../atoms/Logo';

export type HeaderProps = {
	actions?: Action[];
} & ComponentPropsWithoutRef<'header'>;

export const Header: FC<HeaderProps> = ({ actions, className }) => {
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
				<DrawerMenu items={items} actions={actions} />
			</HeaderContent>
		</HeaderBar>
	);
};
