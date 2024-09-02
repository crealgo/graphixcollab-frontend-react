import {styled} from '@mui/material/styles';
import {type FC} from 'react';
import {Image} from './Image';

export type EventBlockProps = {
	readonly stepNumber?: number;
	readonly title?: string;
	readonly description?: string;
	readonly image?: string;
} & BaseComponentProps;

const connectorThickness = '0.25rem';
const markerSize = '1.75rem';
const markerSpacing = '2rem';

const Marker = styled('div')(({theme}) => `
	height: ${markerSize};
	width: ${markerSize};
	border-radius: 0.5rem 0 0.5rem 0;

	position: absolute;
	top: 1rem;
	left: calc(10rem + ${markerSpacing} / 2);

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

	left: 0;

	${theme.breakpoints.up('md')} {
		left: calc(10rem + ${markerSpacing} / 2);
	}
`);

const EventConnector = styled('div')(({theme}) => `
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 0;

	height: calc(100%);
	width: 0;

	border-left: dotted ${connectorThickness} #cbd5e1;

	left: calc(${markerSize} / 2);

	${theme.breakpoints.up('md')} {
		left: calc(10rem + (${markerSpacing} + ${markerSize}) / 2);
	}
`);

const BaseElement: FC<EventBlockProps> = props => (
	<li id={props.id} className={props.className}>
		<Image height='10rem' width='10rem' src={props.image}/>
		<Marker className='marker'>{props.stepNumber ?? 1}</Marker>
		<div className='content'>
			<div className='title'>{props.title}</div>
			<div className='description'>{props.description}</div>
			{props.children}
		</div>
		<EventConnector className='connector'/>
	</li>
);

export const Milestone = styled(BaseElement)<EventBlockProps>(({theme}) => `
	--image-border-radius: 0.5rem;

	list-style: none;

	position: relative;
	z-index: 0;
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	max-width: 40rem;
	margin-inline: auto;

	.Image-root {
		margin-top: 1rem;
		width: 100%;
		background-color: var(--image-background-color);
		border-radius: 1rem;
	}

	.content {
		padding-inline: calc(${markerSize} + 0.5rem) 0;
		padding-block: 1rem 3rem;

		.title {
			font-family: Inter;
			font-size: 1.5rem;
			line-height: ${markerSize};
			font-weight: 700;
			letter-spacing: -0.02em;
			text-align: left;

			margin-bottom: 0.5rem;
		}

		.description {
			font-family: Inter;
			font-size: 1.125rem;
			font-weight: 400;
			line-height: 1.75rem;
			letter-spacing: 0em;
			text-align: left;
		}
	}


	${theme.breakpoints.up('md')} {
		grid-template-columns: 10rem 1fr;
		gap: calc(${markerSpacing} + ${markerSize});

		.content {
			padding-inline: 0;
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
`);
