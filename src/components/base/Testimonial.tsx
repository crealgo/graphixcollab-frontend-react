
import styled from '@emotion/styled';
import {type YelpReview} from '../../content/yelp-reviews';
import {Rating} from './Rating';
import {type FC} from 'react';

export type TestimonialProps = Pick<YelpReview, 'user' | 'comment' | 'rating'>;

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
		text-overflow:ellipsis;
		overflow:hidden;

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		white-space: normal;
	}
`;

export const Testimonial: FC<TestimonialProps> = ({
	user, comment, rating,
}) => (
	<BaseElement>
		<img className='image' src={user.src} srcSet={user.srcSet ?? ''} alt={user.altText}/>
		<div className='content'>
			<q
				/* eslint-disable react/no-danger */
				dangerouslySetInnerHTML={{
					__html: comment.text,
				}}
				/* eslint-enable react/no-danger */
				className='quote'
			/>
			<b><small>{user.markupDisplayName}</small></b>
			<Rating readOnly className='rating' value={rating}/>
		</div>
	</BaseElement>
);
