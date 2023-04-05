import { BaseComponentsProps } from "../../types/base";
import { styled } from "@mui/material/styles";
import { type FC } from "react";

export interface EventBlockProps extends BaseComponentsProps {
	stepNumber?: number;
	title?: string;
	description?: string;
	imgUrl?: string;
	imgAlt?: string;
}
const connectorThickness = "0.25rem";
const markerSize = "2rem";

const Marker = styled("div")`
	height: ${markerSize};
	width: ${markerSize};

	background-color: var(--color-secondary);
	border-radius: 0.5rem 0 0 0.5rem;

	position: absolute;
	top: 0;
	left: 0;
	transform: translateX(-100%);

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 1rem;
	text-align: center;
	letter-spacing: -0.02em;

	color: #111827;
`;

const EventConnector = styled("div")`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 0;

	height: calc(100%);
	width: 0;
	left: calc(-1 * (${markerSize} + ${connectorThickness}) / 2);

	border-left: dotted ${connectorThickness} #cbd5e1;
`;

const BaseElement: FC<EventBlockProps> = (props) => (
	<li id={props.id} className={props.className}>
		<figure className="image">
			<Marker className="marker">{props.stepNumber ?? 1}</Marker>
		</figure>
		<div className="content">
			<div className="title">{props.title}</div>
			<div className="description">{props.description}</div>
			{props.children}
		</div>
		<EventConnector className="connector" />
	</li>
);

export const MobileTimelineEvent = styled(BaseElement)<EventBlockProps>`
	--image-border-radius: 0.5rem;

	list-style: none;

	position: relative;
	z-index: 0;
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;

	.image,
	.content {
		order: 1;
	}

	.image {
		padding: unset;
		margin: unset;

		display: block;
		width: 100%;
		background-color: #cbd5e1;
		border-radius: 0 var(--image-border-radius) var(--image-border-radius) var(--image-border-radius);

		min-height: 160px;
	}

	.content {
		padding-inline: var(--image-border-radius) 0;
		padding-block: 1rem 3rem;

		.title {
			font-family: Inter;
			font-size: 1.75rem;
			font-weight: 700;
			line-height: ${markerSize};
			letter-spacing: -0.02em;
			text-align: left;

			margin-bottom: 0.5rem;
		}

		.description {
			font-family: Inter;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5rem;
			letter-spacing: 0em;
			text-align: left;
		}
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`;
