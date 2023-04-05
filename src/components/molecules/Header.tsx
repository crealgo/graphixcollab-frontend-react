import { ActionStack } from "./ActionStack";
import { DrawerMenu } from "./DrawerMenu";
import { FlexSpacer } from "./FlexSpacer";
import { Flyout } from "./Flyout";
import { NavItemDropdown } from "./NavItemDropdown";
import { NavItems } from "./NavItems";
import { type Action, type NavItemOptions } from "../../types/general";
import { useAppState } from "../../hooks/useAppState";
import { useNavigationItems } from "../../hooks/useNavigationItems";
import useScrollPosition from "../../hooks/useScrollPosition";
import { css, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo, useRef, type ComponentPropsWithoutRef, type FC } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {
	logo?: string;
	navigationItems?: NavItemOptions[];
	actions?: Action[];
	backgroundColor?: "primary" | "secondary" | "white";
	withHero?: boolean;
}

const HeaderWrapper = styled("header")<{
	isScrolled?: boolean;
	isBranded?: boolean;
}>(({ theme, isScrolled, isBranded }) => {
	return css`
		position: sticky;
		top: 0;
		transition: all 200ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: white;
		border-bottom-color: ${isScrolled ? `${theme.palette.grey[200]}` : "transparent"};
		z-index: 999;

		${isBranded
			? css`
					background-color: ${isScrolled ? "white" : theme.palette.secondary.light};
			  `
			: ""}
	`;
});

const ContainerWrapper = styled(Container)(
	({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 1rem;

		font-size: 1rem;
		padding-block: 1rem;

		.NavItems-root {
			display: none;
		}

		.ActionStack-root {
			display: none;
		}

		.MenuTrigger-root {
			display: inline-flex;
		}

		${theme.breakpoints.up("sm")} {
			border-bottom-color: transparent;

			.ActionStack-root {
				display: flex;
			}
		}

		${theme.breakpoints.up("lg")} {
			.NavItems-root {
				display: flex;
			}

			.MenuTrigger-root {
				display: none;
			}
		}
	`
);

const Logo = styled("div")(
	({ theme }) => css`
		grid-area: logo;
		display: flex;
		gap: 1rem;

		height: 2rem;
		aspect-ratio: 5/1;

		align-items: center;
		justify-content: center;
		background-color: ${theme.palette.grey[200]};

		.MuiTypography-root {
			opacity: 0.5;
		}
	`
);

export const Header: FC<HeaderProps> = ({ navigationItems, actions, className }) => {
	const items = useNavigationItems();
	const scrollPosition = useScrollPosition();
	const router = useRouter();
	const { toggleBooking, toggleContact } = useAppState();

	const isScrolled = useMemo(() => scrollPosition > 100, [scrollPosition]);

	const showBrandedHeader = router.pathname === "/";

	const ref = useRef<HTMLElement>(null);

	return (
		<HeaderWrapper isBranded={showBrandedHeader} className={className} isScrolled={isScrolled}>
			<ContainerWrapper>
				<Logo className="Logo-root">{/* <Typography variant='h4'>{'Logo'}</Typography> */}</Logo>
				<NavItems items={items}>
					<NavItemDropdown FlyoutComponent={Flyout}>{"Mega Menu"}</NavItemDropdown>
				</NavItems>
				<FlexSpacer />
				<ActionStack size="small" actions={actions} color="secondary">
					<Button
						color="text"
						size="small"
						onClick={() => {
							toggleContact();
						}}
					>
						{"Contact Us"}
					</Button>
					<Button
						color="primary"
						size="small"
						onClick={() => {
							toggleBooking();
						}}
					>
						{"Book a Time"}
					</Button>
				</ActionStack>
				<DrawerMenu items={navigationItems} />
			</ContainerWrapper>
		</HeaderWrapper>
	);
};
