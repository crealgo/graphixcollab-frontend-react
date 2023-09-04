import styled from '@emotion/styled';
import {type FC} from 'react';
import type reviews from '../../content/yelp-reviews.json';

export type TestimonialProps = (typeof reviews)[0];

const BaseElement = styled.article`
	padding: var(--testimonial-container-padding);
	background-color: var(--testimonial-container-background-color);
	border-radius: var(--testimonial-container-border-radius);
	max-width: var(--testimonial-container-max-width);
	box-shadow: var(--testimonial-container-shadow);
	border: var(--input-border-composite);

	display: grid;
	grid-template-rows: 1fr;
	gap: 1rem;
`;

const Quote = styled.q`
	text-overflow: ellipsis;
	overflow: hidden;

	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	white-space: normal;

	font-size: 18px;
	line-height: 1.5;
`;

const Meta = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	gap: 0.25rem;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 3.5rem 1fr;
	column-gap: 1rem;
	align-items: center;

	.image {
		width: 100%;
		aspect-ratio: 1/1;
		height: var(--testimonial-image-height);
		border-radius: var(--shape-rounding-large);
	}
`;

export const Testimonial: FC<TestimonialProps> = props => (
	<BaseElement>
		<Quote>{props.text}</Quote>
		<Content>
			<img
				className='image'
				src={props.image || ''}
				alt={`${props.name} Profile Picture`}
			/>
			<Meta>
				<strong>{props.name}</strong>
				<img src='assets/yelp/yelp-star-5-min@200w.webp' width='90px' alt=''/>
			</Meta>
		</Content>
	</BaseElement>
);
