import { BaseComponentsProps } from "@global/baseTypes";
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
const markerSize = "3.5rem";
const blockSpacing = "4rem";

const Marker = styled("div")`
	height: ${markerSize};
	width: ${markerSize};

	position: absolute;
	top: ${blockSpacing};

	background-color: #cbd5e1;
	border-radius: 99999px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 1.5rem;
	text-align: center;
	letter-spacing: -0.02em;

	color: #111827;
`;

const EventConnector = styled("div")`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	height: calc(100% + ${connectorThickness});
	width: calc(25% + ${connectorThickness});

	border: dotted ${connectorThickness} #cbd5e1;
`;

const BaseElement: FC<EventBlockProps> = (props) => (
	<li id={props.id} className={props.className}>
		<Marker className="marker">{props.stepNumber ?? 1}</Marker>
		<div className="image"></div>
		<div className="content">
			<div className="title">{props.title}</div>
			<div className="description">{props.description}</div>
			{props.children}
		</div>
		<EventConnector className="connector" />
	</li>
);

export const TimelineEvent = styled(BaseElement)<EventBlockProps>`
	padding-inline: 1rem;
	gap: 5.75rem;

	list-style: none;

	position: relative;
	z-index: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-content: start;

	padding-block: ${blockSpacing};

	.image,
	.content {
		order: 1;
	}

	.image {
		background-color: #cbd5e1;
		border-radius: 1rem;

		min-height: 160px;
	}

	.content {
		.title {
			font-family: Inter;
			font-size: 2.0625rem;
			font-weight: 700;
			line-height: ${markerSize};
			letter-spacing: -0.02em;
			text-align: left;
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

	&:first-of-type {
		.marker {
			left: 50%;
			transform: translateX(-50%);
		}

		.connector {
			border-left-color: transparent;
			border-top-color: transparent;
			left: calc(25% - ${connectorThickness} / 2);
			border-radius: 0 0 5rem 0;
		}
	}

	&:nth-of-type(2n + 2) {
		padding-inline: 3rem;
		gap: 2.25rem;

		.marker {
			transform: translateX(-50%);
		}

		.image {
			order: 2;
		}

		.connector {
			border-right-color: transparent;
			left: calc(-${connectorThickness} / 2);
			border-radius: 5rem 0 0 5rem;
		}
	}

	&:nth-of-type(2n + 3) {
		padding-inline: 1rem;
		gap: 5.75rem;

		.marker {
			left: 50%;
			transform: translateX(-50%);
		}

		.connector {
			border-left-color: transparent;
			left: calc(25% - ${connectorThickness} / 2);
			border-radius: 0 5rem 5rem 0;
		}
	}

	&:last-of-type {
		.connector {
			border-bottom-color: transparent;
			height: calc(${blockSpacing} + ${markerSize});
			top: calc(-${connectorThickness} / 2);
			transform: translateY(0);
		}
	}
`;
