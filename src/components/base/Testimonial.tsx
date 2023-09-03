import {styled} from '@mui/material/styles';
import {type FC} from 'react';
import type reviews from '../../content/yelp-reviews.json';

export type TestimonialProps = (typeof reviews)[0];

const BaseElement = styled('article')`
	padding: var(--testimonial-container-padding);
	gap: var(--testimonial-container-gap);
	background-color: var(--testimonial-container-background-color);
	border-radius: var(--testimonial-container-border-radius);
	max-width: var(--testimonial-container-max-width);
	box-shadow: var(--testimonial-container-shadow);
	border: var(--input-border-composite);

	display: grid;
	grid-template-columns: 5rem 1fr;
	align-items: start;

	.content {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--testimonial-content-gap);
	}

	.image {
		width: 100%;
		aspect-ratio: 1/1;
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

		font-size: 18px;
		line-height: 1.5;
	}

	/* ${({theme}) => theme.breakpoints.up('md')} {
		flex-direction: row;
	} */
`;

export const Testimonial: FC<TestimonialProps> = props => (
	<BaseElement>
		<img
			className='image'
			src={props.image}
			alt={`${props.name} Profile Picture`}
		/>
		<div className='content'>
			<q className='quote'>
				{props.text}
			</q>
			<b>
				<small>{props.name}</small>
			</b>
			<img src='assets/yelp/yelp-star-5-min@200.webp' alt=''/>
		</div>
	</BaseElement>
);
