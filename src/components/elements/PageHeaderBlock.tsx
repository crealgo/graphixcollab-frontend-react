import { Typography } from "@mui/material";
import { css, styled } from "@mui/material/styles";
import { forwardRef } from "react";
import { type NavItemOptions } from "../../types/general";
import { type BlockProps } from "../molecules/Block";
import { Breadcrumbs, type BreadcrumbOptions } from "../molecules/Breadcrumbs";
import { Container } from "../molecules/Container";
import { Image, type ImageProps } from "../molecules/Image";
import { TopNav } from "../molecules/TopNav";

export interface PageHeaderBlockProps {
	title?: string;
	color?: string;
	breadcrumbs?: BreadcrumbOptions[];
	navigationItems?: NavItemOptions[];
	navigationType: "scroll" | "anchor-link";
	BlockProps?: BlockProps;
	ImageProps?: ImageProps;
}

const Wrapper = styled("div")<{
	color?: string;
}>(
	({ theme, color }) => css`
		padding-block: 2rem;
		background-color: ${color ? color : "transparent"};
	`
);

const Content = styled(Container)(
	({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 2rem;

		.TopNav-root {
			display: none;

			${theme.breakpoints.up("md")} {
				display: flex;
			}
		}
	`
);

const TextContent = styled("div")`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;
`;

export const PageHeaderBlock = forwardRef<HTMLDivElement, PageHeaderBlockProps>(
	({ title, color, breadcrumbs, navigationItems, ImageProps }, ref) => (
		<>
			<Wrapper color={color} ref={ref}>
				<Content>
					<TextContent className="PageHeader-textContent">
						<Breadcrumbs items={breadcrumbs} />
						<Typography variant="h2" component={"h1"}>
							{title}
						</Typography>
					</TextContent>
					<TopNav align="end" items={navigationItems} />
				</Content>
			</Wrapper>
			{ImageProps && <Image {...ImageProps} height="10rem" width="cover" />}
		</>
	)
);

PageHeaderBlock.displayName = "PageHeaderBlock";
