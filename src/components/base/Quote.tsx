import { Avatar, Rating, Typography, css, styled, type RatingProps as MuiRatingProps } from '@mui/material';
import clsx from 'clsx';
import { type FC, type HTMLAttributes } from 'react';

interface QuoteWrapperProps extends HTMLAttributes<HTMLDivElement> {
	height?: number;
	width?: number;
}

export interface QuoteProps extends QuoteWrapperProps {
	text?: string;
	RatingProps?: MuiRatingProps;
}

const QuoteWrapper = styled('div')<QuoteWrapperProps>(
	({theme}) => css`
		${theme.utils.styles.card.outlined}

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

		/* &:after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;

			height: 1rem;
			width: 1rem;

			background-color: black;

			transform: translateY(-50%) translateX(100%);
		} */
	`
);

export const Quote: FC<QuoteProps> = ({text, className, RatingProps, ...props}) => (
	<QuoteWrapper {...props} className={clsx(className, 'Quote-root')}>
		<Avatar className='Quote-avatar' />
		<div className='Quote-content'>
			<Typography className='Quote-text' variant='body1'>
				{text}
			</Typography>
			<div className='Quote-ratingBox'>
				<Rating className='Quote-rating' />
			</div>
		</div>
	</QuoteWrapper>
);
