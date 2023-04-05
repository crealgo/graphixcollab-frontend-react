import { Warning } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { css, styled } from "@mui/material/styles";
import clsx from "clsx";
import { type ComponentPropsWithoutRef, type FC } from "react";
import Marquee from "react-fast-marquee";
import { type Action } from "../../types/general";
import { Block } from "../molecules/Block";
import { Container } from "../molecules/Container";
import { Heading } from "../molecules/Heading";
import { Image, ImageProps } from "../molecules/Image";
import { StatusMessage } from "../molecules/StatusMessage";
import { SocialMediaBlock, type SocialMediaBlockProps } from "./SocialMediaBlock";

export interface GalleryBlockProps extends ComponentPropsWithoutRef<"div"> {
	title?: string;
	description?: string;
	SocialMediaBlockProps?: SocialMediaBlockProps;
	images?: ImageProps[];
	actions?: Action[];
}

const Wrapper = styled(Block)(
	({ theme }) => css`
		.Container-root {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.content {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery {
			width: 100%;
			overflow: hidden;
			margin-top: 2.5rem;

			.GalleryBlock-image {
				margin-inline: 0.25rem;

				${theme.breakpoints.up("md")} {
					width: 300px;
				}
			}
		}
	`
);

export const GalleryBlock: FC<GalleryBlockProps> = ({ className, ...props }) => (
	<Wrapper className={clsx(className, "GalleryBlock-root")}>
		<Container>
			<div className="content">
				<Heading level={2}>{props.title}</Heading>
				<Container size="small">
					<Typography variant="body2">{props.description}</Typography>
				</Container>
				<SocialMediaBlock {...props.SocialMediaBlockProps} />
			</div>
			<div className="gallery">
				{props.images?.length ? (
					<Marquee pauseOnHover>
						{props.images.map((imageProps, imageIndex) => (
							<Image className="GalleryBlock-image" key={imageIndex} {...imageProps} />
						))}
					</Marquee>
				) : (
					<StatusMessage contained IconComponent={Warning} text="No Images Available" />
				)}
			</div>
		</Container>
	</Wrapper>
);
