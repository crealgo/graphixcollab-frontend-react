import imageSrc from "@assets/sitting-and-laughing-intro.webp";
import { ActionStack } from "@components/ActionStack";
import { Block } from "@components/Block";
import { type ImageProps } from "@components/Image";
import { Text } from "@components/Text";
import { type SharedBlockProps } from "@global/generalTypes";
import { SiYelp } from "@icons-pack/react-simple-icons";
import { Chip, css, styled } from "@mui/material";
import { ComponentPropsWithoutRef, type FC } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Heading } from "./Heading";

export interface IntroBlockProps extends SharedBlockProps, ComponentPropsWithoutRef<"div"> {
	title?: string;
	description?: string;
	ImageProps?: ImageProps;
}

const StyledContainer = styled(Container)(
	(props) => css`
		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.image {
			display: none;
		}

		${props.theme.breakpoints.up("md")} {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;

			.image {
				display: block;
				position: absolute;
				margin: unset;
				width: 50%;
				height: 100%;
				right: 0;
				bottom: 0;
				background: blue;

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}
			}
		}
	`
);

export const IntroBlock: FC<IntroBlockProps> = ({ title, description, className }) => (
	<Block className={className} color="secondary">
		<StyledContainer>
			<div className="content">
				<Heading level={1}>{title}</Heading>
				<Text>{description}</Text>
				<ActionStack>
					<Button size="large">{"Get Started"}</Button>
					<Button size="large" color="text">
						{"Book an appointment"}
					</Button>
				</ActionStack>
				<br />
				<div>
					<Chip
						color="primary"
						icon={<SiYelp />}
						label={
							<>
								Trust by <b>150+ People</b> on <b>Yelp</b>
							</>
						}
					/>
				</div>
			</div>
			<figure className="image">
				<img className="Image-root" src={imageSrc.src} alt="thing" />
			</figure>
		</StyledContainer>
	</Block>
);
