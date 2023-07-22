import {
	Avatar,
	Rating,
	Typography,
	styled,
	type RatingProps as MuiRatingProps,
} from '@mui/material';
import clsx from 'clsx';
import {type FC, type HTMLAttributes} from 'react';

type QuoteWrapperProps = {
	height?: number;
	width?: number;
} & HTMLAttributes<HTMLDivElement>;

export type QuoteProps = {
	text?: string;
	RatingProps?: MuiRatingProps;
} & QuoteWrapperProps;

const QuoteWrapper = styled('div')<QuoteWrapperProps>`
	position: relative;
	aspect-ratio: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	gap: 1rem;

	overflow: visible;

	.Quote-avatar {
		flex: none;
		width: 3rem;
		height: 3rem;
	}

	.Quote-content {
		flex: 1 1 1rem;
		width: 100%;

		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
`;

export const Quote: FC<QuoteProps> = ({text, className, ...props}) => (
	<QuoteWrapper {...props} className={clsx(className, 'Quote-root')}>
		<Avatar className='Quote-avatar'/>
		<div className='Quote-content'>
			<Typography className='Quote-text' variant='body1'>
				{text}
			</Typography>
			<div className='Quote-ratingBox'>
				<Rating className='Quote-rating'/>
			</div>
		</div>
	</QuoteWrapper>
);
