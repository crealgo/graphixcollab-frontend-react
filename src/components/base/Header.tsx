import {css, styled} from '@mui/material';
import {useRouter} from 'next/router';
import {useMemo, type ComponentPropsWithoutRef, type FC} from 'react';
import {useNavigationItems} from '../../hooks/useNavigationItems';
import useScrollPosition from '../../hooks/useScrollPosition';
import {type Action, type NavItemOptions} from '../../types/general';
import {_e} from '../../utils/excludePropsFromForwarding';
import {ActionStack} from './ActionStack';
import {Block} from './Block';
import {Container} from './Container';
import {DrawerMenu} from './DrawerMenu';
import {FlexSpacer} from './FlexSpacer';
import {Flyout} from './Flyout';
import {NavItemDropdown} from './NavItemDropdown';
import {NavItems} from './NavItems';
import FGUSCLogo from '../../assets/fashiongreek-usc-logo.png';

export type HeaderProps = {
	// logo?: string;
	navigationItems?: NavItemOptions[];
	actions?: Action[];
	// backgroundColor?: 'primary' | 'secondary' | 'white';
	// withHero?: boolean;
} & ComponentPropsWithoutRef<'header'>;

const HeaderWrapper = styled(
	Block,
	_e('isBranded', 'isScrolled'),
)<{
	isScrolled?: boolean;
	isBranded?: boolean;
}>(({theme, isScrolled, isBranded}) => css`
		position: sticky;
		top: 0;
		transition: all 200ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: white;
		border-bottom-color: ${isScrolled ? `${theme.palette.grey[200]}` : 'transparent'};
		z-index: 999;

		padding-block: 0.25rem !important;

		${isBranded ? `background-color: ${isScrolled ? 'white' : theme.palette.secondary.light};` : ''}
	`).withComponent('header');

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
	`,
);

const Logo = styled('img')(
	({theme}) => css`
		grid-area: logo;
		display: flex;
		gap: 1rem;

		height: 4.25rem;
		width: auto;

		align-items: center;
		justify-content: center;

		.MuiTypography-root {
			opacity: 0.5;
		}
	`,
);

export const Header: FC<HeaderProps> = ({navigationItems, actions, className}) => {
	const items = useNavigationItems();
	const scrollPosition = useScrollPosition();
	const router = useRouter();

	const isScrolled = useMemo(() => scrollPosition > 100, [scrollPosition]);

	const showBrandedHeader = router.pathname === '/';

	return (
		<HeaderWrapper isBranded={showBrandedHeader} className={className} isScrolled={isScrolled}>
			<Container>
				<Content>
					<Logo
						className='Logo-root'
						// src='https://fashiongreekusc.square.site/uploads/b/ed0dc040-de8b-11ea-adbe-f1c93472ece4/89a929c7885b56db4508a726fae7f212.png?width=500&optimize=small'
						src={FGUSCLogo.src as string}
					/>
					<NavItems items={items}>
						<NavItemDropdown FlyoutComponent={Flyout}>Mega Menu</NavItemDropdown>
					</NavItems>
					<FlexSpacer/>
					<ActionStack actions={actions}/>
					<DrawerMenu items={navigationItems}/>
				</Content>
			</Container>
		</HeaderWrapper>
	);
};
