import styled from '@emotion/styled';
import clsx from 'clsx';
import {type ComponentPropsWithRef, type FC} from 'react';
import {type ActionStackProps} from './ActionStack';
import {Heading} from './Heading';
import {Text} from './Text';

type CardProps = {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: {
		src: string;
		alt: string;
	};
	imageColor?: string;
	actions?: ActionStackProps['actions'];
} & ComponentPropsWithRef<'a'>;

const CardAnchor = styled.a`
	cursor: pointer;
	position: relative;
	display: grid;
	place-items: start;
	grid-template-columns: 4.75rem 2fr;
	gap: 1.25rem;

	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 0.25rem;
		height: calc(100% + 1rem);
		width: calc(100% + 1rem);
		background-color: var(--color-brand-key-lightest);
		border-radius: 0.5rem;

		opacity: 0;
	}

	&:hover::before {
		opacity: 0.5;
	}
`;

const CardImageBox = styled.figure`
	margin: unset;

	position: relative;
	padding: 0.5rem;
	background-color: ${({color}) => color};
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	width: 100%;
	place-items: center;
	place-content: center;
`;

const CardImage = styled.img`
	position: relative;
	width: 100%;
	height: auto;
	object-fit: contain;
`;

const CardContent = styled.div`
	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	gap: 0.5rem;

	.ActionStack-root {
		margin-top: 0.25rem;
		justify-content: start;
	}
`;

export const HorizontalCard: FC<CardProps> = ({
	title,
	description,
	className,
	image,
	imageColor,
	...props
}) => (
	<CardAnchor
		className={clsx('HorizontalCard-root', className)}
		{...props}
	>
		<CardImageBox>
			<CardImage {...image}/>
		</CardImageBox>
		<CardContent>
			{/* <Typography variant="caption">{subtitle}</Typography> */}
			<Heading className='title' level={5}>
				{title}
			</Heading>
			<Text spacing='small' color='secondary'>
				{description}
			</Text>
		</CardContent>
	</CardAnchor>
);
