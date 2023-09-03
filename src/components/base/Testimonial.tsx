import {styled} from '@mui/material/styles';
import {Rating} from './Rating';
import {type FC} from 'react';
import type reviews from '../../content/yelp-reviews.json';

export type TestimonialProps = (typeof reviews)[0];

const BaseElement = styled('article')`
	display: flex;
	align-items: start;
	padding: var(--testimonial-container-padding);
	gap: var(--testimonial-container-gap);
	background-color: var(--testimonial-container-background-color);
	border-radius: var(--testimonial-container-border-radius);
	max-width: var(--testimonial-container-max-width);
	box-shadow: var(--testimonial-container-shadow);
	border: var(--input-border-composite);

	.content {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--testimonial-content-gap);
	}

	.image {
		flex: none;
		width: var(--testimonial-image-width);
		height: var(--testimonial-image-height);
		border-radius: var(--shape-rounding-large);
	}

	.quote {
		text-overflow: ellipsis;
		overflow: hidden;

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		white-space: normal;
	}

	/* ${({theme}) => theme.breakpoints.up('md')} {
		flex-direction: row;
	} */
`;

export const Testimonial: FC<TestimonialProps> = props => (
	<BaseElement>
		<img
			className='image'
			src={props.image as string}
			alt={`${props.name as string} Profile Picture`}
		/>
		<div className='content'>
			<q className='quote'>
				{props.text}
			</q>
			<b>
				<small>{props.name}</small>
			</b>
			<Rating readOnly className='rating' value={5}/>
		</div>
	</BaseElement>
);
