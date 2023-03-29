import imageSrc from "@assets/sitting-and-laughing-intro.webp";
import { ActionStack } from "@components/ActionStack";
import { Block } from "@components/Block";
import { type ImageProps } from "@components/Image";
import { Text } from "@components/Text";
import { type SharedBlockProps } from "@global/generalTypes";
import { SiYelp } from "@icons-pack/react-simple-icons";
import { Chip, css, styled } from "@mui/material";
import NextImage from "next/image";
import { type FC } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Heading } from "./Heading";

export interface IntroBlockProps extends SharedBlockProps {
	title?: string;
	color?: string;
	description?: string;
	ImageProps?: ImageProps;
}

const OuterWrapper = styled("section")<{
	color?: string;
}>(
	({ theme, color }) => css`
		background-color: ${color ? color : theme.palette.secondary.light};
		padding-top: 2rem;
	`
);

const InnerWrapper = styled("div")(
	({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		position: relative;

		.content {
			display: grid;
			align-content: center;
			grid-template-columns: 1fr;
			gap: 1rem;
			margin-block: 2rem;

			.ActionStack-root {
				margin-top: 0.5rem;
			}
		}

		.image {
			display: none; // --> flex
			position: relative;
			width: 100%;

			.Image-root {
				position: absolute;
				width: auto;
				height: 108%;
				left: 50%;
				transform: translateX(-50%);
				bottom: 0;
			}
		}

		${theme.breakpoints.up("md")} {
			grid-template-columns: 1.5fr 1fr;

			.image {
				display: flex;
				position: absolute;
				bottom: 0;
				left: 50%;

				.Image-root {
					position: relative;
					width: 100%;
					height: auto;
					left: 50%;
					transform: translateX(-50%);
					bottom: 0;
				}
			}
		}

		${theme.breakpoints.up("lg")} {
			grid-template-columns: 1fr 1.5fr;

			.image {
				position: relative;

				left: unset;
				right: unset;
				bottom: unset;
				top: unset;

				.Image-root {
					position: absolute;
					width: auto;
					height: 108%;
					left: 50%;
					transform: translateX(-50%);
					bottom: 0;
				}
			}
		}
	`
);

const TidBit: FC<unknown> = (props) => {
	return (
		<div>
			{props.icon}
			<props className="icon"></props>
		</div>
	);
};

export const IntroBlock: FC<IntroBlockProps> = ({ title, description, color }) => (
	<OuterWrapper color={color}>
		<Container isContained>
			<InnerWrapper>
				<Block className="content" component="div">
					<Heading level={1}>{title}</Heading>
					<Text>{description}</Text>
					<ActionStack>
						<Button size="large">{"Get Started"}</Button>
						<Button size="large" color="text">
							{"Book an appointment"}
						</Button>
					</ActionStack>
					<br />
					<TidBit />
				</Block>
				<div className="image">
					<NextImage className="Image-root" src={imageSrc || ""} alt="thing" quality={100} />
				</div>
			</InnerWrapper>
		</Container>
	</OuterWrapper>
);
