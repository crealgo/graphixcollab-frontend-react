import { BannerProps } from "@components/Banner";
import { FooterBlock, FooterBlockProps } from "@components/FooterBlock";
import { Header, HeaderProps } from "@components/Header";
import { PlaceholderBlock } from "@components/PlaceholderBlock";
import { AppStateContextProvider } from "@contexts/AppStateContextProvider";
import { useAppState } from "@hooks/useAppState";
import { css, styled } from "@mui/material/styles";
import { type NextPage } from "next";
import { useEffect, useLayoutEffect, type ReactNode } from "react";

type DefaultLayoutProps = NextPage<{
	children: ReactNode;
	hideHeader?: boolean;
	hideFooter?: boolean;
	HeaderProps?: HeaderProps;
	BannerProps?: BannerProps;
	FooterProps?: FooterBlockProps;
}>;

const BackgroundImage = styled("div")`
	z-index: -1;
	position: absolute;
	opacity: 0.125;

	width: 100%;
	overflow: hidden;
	height: inherit;
`;

const BackgroundImageWrapper = styled("div")<{ flipped?: boolean }>(
	({ theme, flipped }) => css`
		width: 3322px;
		height: auto;

		top: 60%;
		transform: rotate(15deg) ${flipped ? "scaleX(-1)" : ""};

		${theme.breakpoints.up("md")} {
			top: 25%;
			transform: rotate(30deg) ${flipped ? "scaleX(-1)" : ""};
		}
	`
);

export const DefaultLayout: DefaultLayoutProps = ({ HeaderProps, FooterProps, children }) => {
	const { setBannerProps } = useAppState();

	useLayoutEffect(() => {
		setBannerProps({
			title: "⚡️⚡️ Flash Sash Sale!! Come and get yours quick!",
		});
	}, []);

	return (
		<>
			<Header
				navigationItems={[
					{
						label: "Home",
						href: "/",
					},
					{
						label: "About",
						href: "/about",
					},
					{
						label: "Graphix Collab",
						href: "/graphix-collab",
					},
					{
						label: "Services",
						href: "/services",
					},
				]}
				{...HeaderProps}
			/>
			<BackgroundImage className="Motif">
				<BackgroundImageWrapper></BackgroundImageWrapper>
			</BackgroundImage>
			<main id="main-content">{children}</main>
			<PlaceholderBlock name="Yelp Block" />
			<FooterBlock {...FooterProps} />
		</>
	);
};
