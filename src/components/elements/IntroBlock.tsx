import imageSrc from "../../assets/sitting-and-laughing-intro.webp";
import { ActionStack } from "../molecules/ActionStack";
import { Block } from "../molecules/Block";
import { type ImageProps } from "../molecules/Image";
import { Text } from "../molecules/Text";
import { type SharedBlockProps } from "../../types/general";
import { SiYelp } from "@icons-pack/react-simple-icons";
import { Chip, css, styled } from "@mui/material";
import { ComponentPropsWithoutRef, type FC } from "react";
import { Button } from "../molecules/Button";
import { Container } from "../molecules/Container";
import { Heading } from "../molecules/Heading";
import { TidBit } from "../molecules/TidBit";

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
					<TidBit href={"#yelp-test"} icon={<SiYelp />}>
						Trusted by <strong>150+ People</strong> on <strong>Yelp</strong>
					</TidBit>
				</div>
			</div>
			<figure className="image">
				<img className="Image-root" src={imageSrc.src} alt="thing" />
			</figure>
		</StyledContainer>
	</Block>
);
