import {styled} from '@mui/material/styles';
import {type FC} from 'react';

export type EventBlockProps = {
	readonly stepNumber?: number;
	readonly title?: string;
	readonly description?: string;
	readonly image?: {
		src: string;
		alt: string;
	};
} & BaseComponentProps;
const connectorThickness = '0.25rem';
const markerSize = '1.75rem';

const Marker = styled('div')`
	height: ${markerSize};
	width: ${markerSize};
	border-radius: 0.5rem 0 0.5rem 0;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 0.875rem;
	text-align: center;
	letter-spacing: -0.02em;

	color: #111827;
`;

const EventConnector = styled('div')`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 0;

	height: calc(100%);
	width: 0;
	left: 0.5rem;

	border-left: dotted ${connectorThickness} #cbd5e1;
`;

const BaseElement: FC<EventBlockProps> = props => (
	<li id={props.id} className={props.className}>
		<figure className='image'>
			<img {...props.image}/>
			<Marker className='marker'>{props.stepNumber ?? 1}</Marker>
		</figure>
		<div className='content'>
			<div className='title'>{props.title}</div>
			<div className='description'>{props.description}</div>
			{props.children}
		</div>
		<EventConnector className='connector'/>
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

	.image {
		overflow: hidden;
		position: relative;
		padding: unset;
		margin: unset;

		display: block;
		width: 100%;
		background-color: #cbd5e1;
		border-radius: var(--image-border-radius);

		min-height: 160px;
		aspect-ratio: 1.75/1;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.content {
		padding-inline: 1.75rem 0;
		padding-block: 1rem 3rem;

		.title {
			font-family: Inter;
			font-size: 1.5rem;
			line-height: 1.125;
			font-weight: 700;
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

	/* sequence */
	&:nth-of-type(1n) {
		.marker {
			background-color: var(--color-brand-cyan-main);
			color: var(--color-brand-cyan-contrast);
		}
	}

	&:nth-of-type(2n) {
		.marker {
			background-color: var(--color-brand-magenta-main);
			color: var(--color-brand-magenta-contrast);
		}
	}

	&:nth-of-type(3n) {
		.marker {
			background-color: var(--color-brand-yellow-main);
			color: var(--color-brand-yellow-contrast);
		}
	}

	&:nth-of-type(4n) {
		.marker {
			background-color: var(--color-brand-key-main);
			color: var(--color-brand-key-contrast);
		}
	}
`;
