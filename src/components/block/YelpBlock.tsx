import {css} from '@emotion/react';
import {MessageOutlined, SearchOutlined} from '@mui/icons-material';
import {styled} from '@mui/material';
import {type FC} from 'react';
import reviews, {
	sampleReview,
	type YelpReview
} from '../../content/yelp-reviews';
import {ActionStack} from '../base/ActionStack';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Testimonial} from '../base/Testimonial';

export type YelpBlockProps = {
	quote?: YelpReview;
};

const Content = styled('div')`
	display: grid;
	align-content: center;
	justify-items: center;
	gap: 2rem;

	.Heading-root {
		text-align: center;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		transform: translateY(2rem);

		& ~ .ActionStack-root {
			transform: translateY(2rem);
		}
	}
`;

const ContentWrapper = styled(Block)`
	position: relative;
	z-index: 1;
	overflow: hidden;

	display: grid;
	align-content: center;
	justify-items: center;

	gap: 4rem;
`;

const avatarCount = 16;

const ReviewAvatars = styled('div')`
	z-index: -1;
	position: absolute;
	opacity: 0.25;
	top: -35%;
	left: 50%;
	transform: translateX(-50%);

	height: 100%;
	width: 100%;

	min-width: 1400px;
	min-height: 628.73;
`;

const ReviewAvatar = styled('div')`
	border-radius: var(--shape-rounding-full);
	position: absolute;
	background: blue;
	box-shadow: var(--elevation-3);
	overflow: hidden;
	border: 0.25rem solid var(--color-white);
	outline: var(--input-border-composite);

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	${Array.from({length: avatarCount}, (_, i) => i).reduce(
		(aggregate, i) => css`
			${aggregate}
			&:nth-of-type(${i + 1}) {
				width: var(--block-testimonials-avatar-positions-${i}-width);
				height: var(--block-testimonials-avatar-positions-${i}-height);
				left: var(--block-testimonials-avatar-positions-${i}-left);
				transform-origin: center;
				transform: translateX(-10%);
				bottom: var(--block-testimonials-avatar-positions-${i}-bottom);
			}
		`,
		css``
	)}
`;

export const YelpBlock: FC<YelpBlockProps> = ({
	quote = {
		user: sampleReview.user,
		comment: sampleReview.comment,
		rating: sampleReview.rating
	}
}) => (
	<Container>
		<ContentWrapper isRounded color="grey">
			<ReviewAvatars>
				{Array.from({length: avatarCount}, (_, i) => {
					const {user} = reviews[i % reviews.length];

					return (
						<ReviewAvatar key={i}>
							<img
								src={user.src}
								srcSet={user.srcSet ?? ''}
								alt={user.altText}
							/>
						</ReviewAvatar>
					);
				})}
			</ReviewAvatars>
			<Content>
				<Heading level={2}>
					{"We've helped "}
					<mark>148</mark>
					{' happy customers!'}
				</Heading>
				<Testimonial {...quote} />
			</Content>
			<ActionStack
				actions={[
					{
						label: 'Read more reviews',
						href: 'https://www.yelp.com/biz/fashion-greek-usc-los-angeles',
						size: 'large',
						color: 'secondary',
						endIcon: <SearchOutlined />
					},
					{
						label: 'Leave a review',
						href: 'https://www.yelp.com/writeareview/biz/-e4TSbHSikunICO8i8wr4Q?return_url=%2Fbiz%2F-e4TSbHSikunICO8i8wr4Q&review_origin=biz-details-war-button',
						size: 'large',
						color: 'text',
						endIcon: <MessageOutlined />
					}
				]}
			/>
		</ContentWrapper>
	</Container>
);
