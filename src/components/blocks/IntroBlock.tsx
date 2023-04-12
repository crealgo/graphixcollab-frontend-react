import { SiYelp } from "@icons-pack/react-simple-icons";
import { css, styled } from "@mui/material";
import { ComponentPropsWithoutRef, type FC } from "react";
import imageSrc from "../../assets/sitting-and-laughing-intro.webp";
import { type SharedBlockProps } from "../../types/general";
import { ActionStack } from "../base/ActionStack";
import { Block } from "../base/Block";
import { Button } from "../base/Button";
import { Container } from "../base/Container";
import { Heading } from "../base/Heading";
import { type ImageProps } from "../base/Image";
import { Text } from "../base/Text";
import { TidBit } from "../base/TidBit";

export interface IntroBlockProps extends SharedBlockProps, ComponentPropsWithoutRef<"div"> {
	title?: string;
	description?: string;
	ImageProps?: ImageProps;
}

const Content = styled(Container)(
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
		<Container>
			<Content>
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
			</Content>
		</Container>
	</Block>
);
