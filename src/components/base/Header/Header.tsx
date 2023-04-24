import {css, styled} from '@mui/material';
import {useRouter} from 'next/router';
import {useMemo, type ComponentPropsWithoutRef, type FC} from 'react';
import FGUSCLogo from '../../../assets/fashiongreek-usc-logo.png';
import {useNavigationItems} from '../../../hooks/useNavigationItems';
import useScrollPosition from '../../../hooks/useScrollPosition';
import {type Action, type NavItemOptions} from '../../../types/general';
import {ActionStack} from '../ActionStack';
import {DrawerMenu} from '../DrawerMenu';
import {FlexSpacer} from '../FlexSpacer';
import {Flyout} from '../Flyout';
import {NavItemDropdown} from '../NavItemDropdown';
import {NavItems} from '../NavItems';
import {HeaderBar} from './HeaderBar';
import {HeaderLogo} from './HeaderLogo';

export type HeaderProps = {
	// logo?: string;
	navigationItems?: NavItemOptions[];
	actions?: Action[];
	// backgroundColor?: 'primary' | 'secondary' | 'white';
	// withHero?: boolean;
} & ComponentPropsWithoutRef<'header'>;

const Content = styled('div')(
	({theme}) => css`
		display: flex;
		align-items: center;
		gap: 1rem;

		font-size: 1rem;

		.NavItems-root {
			display: none;
		}

		.ActionStack-root {
			display: none;
		}

		.MenuTrigger-root {
			display: inline-flex;
		}

		${theme.breakpoints.up('sm')} {
			border-bottom-color: transparent;

			.ActionStack-root {
				display: flex;
			}
		}

		${theme.breakpoints.up('lg')} {
			.NavItems-root {
				display: flex;
			}

			.MenuTrigger-root {
				display: none;
			}
		}
	`
);

export const Header: FC<HeaderProps> = ({
	navigationItems,
	actions,
	className
}) => {
	const items = useNavigationItems();
	const scrollPosition = useScrollPosition();
	const router = useRouter();

	const isScrolled = useMemo(() => scrollPosition > 100, [scrollPosition]);

	const showBrandedHeader = router.pathname === '/';

	return (
		<HeaderBar className={className} isScrolled={isScrolled}>
			<Content>
				<HeaderLogo
					className="Logo-root"
					// src='https://fashiongreekusc.square.site/uploads/b/ed0dc040-de8b-11ea-adbe-f1c93472ece4/89a929c7885b56db4508a726fae7f212.png?width=500&optimize=small'
					src={FGUSCLogo.src as string}
				/>
				<NavItems items={items}>
					<NavItemDropdown FlyoutComponent={Flyout}>
						Mega Menu
					</NavItemDropdown>
				</NavItems>
				<FlexSpacer />
				<ActionStack actions={actions} />
				<DrawerMenu items={navigationItems} />
			</Content>
		</HeaderBar>
	);
};
