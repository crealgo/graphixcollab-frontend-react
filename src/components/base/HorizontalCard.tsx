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
	gap: 0.75rem;

	&:hover::before {
		opacity: 0.5;
	}
`;

const CardImageBox = styled.figure`
	margin: unset;

	position: relative;
	padding: 0.25rem;
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
	grid-template-rows: auto;
	gap: 0.25rem;

	.ActionStack-root {
		margin-top: 0.25rem;
		justify-content: start;
	}
`;

export const HorizontalCard: FC<CardProps> = ({
	title, description, className, image, ...props
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
			<Text spacing='small' color='primary'>
				{description}
			</Text>
		</CardContent>
	</CardAnchor>
);
