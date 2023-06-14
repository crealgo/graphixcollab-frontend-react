import { css } from '@emotion/react';
import { MessageOutlined, SearchOutlined } from '@mui/icons-material';
import { styled } from '@mui/material';
import { useRef, type FC } from 'react';
import reviews from '../../content/yelp-reviews.json';
import { ActionStack } from '../base/ActionStack';
import { Block } from '../base/Block';
import { Carousel, CarouselSlide } from '../base/Carousel';
import { Container } from '../base/Container';
import { Heading } from '../base/Heading';
import { Testimonial } from '../base/Testimonial';
import { Mark } from '../base/Mark';

export type YelpBlockProps = {
	quote?: (typeof reviews)[number];
};

const Content = styled('div')`
	display: grid;
	align-content: center;
	justify-items: center;
	gap: 2rem;

	.Heading-root {
		text-align: center;
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

	padding-block: 3rem !important;
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

	${Array.from({ length: avatarCount }, (_, i) => i).reduce(
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

const StyledCarousel = styled(Carousel)`
	max-width: 35rem;
`;

const StyledCarouselSlide = styled(CarouselSlide)`
	padding: 1rem;
`;

export const YelpBlock: FC<YelpBlockProps> = () => {
	return (
		<Container>
			<ContentWrapper isRounded color="grey">
				<ReviewAvatars>
					{Array.from({ length: avatarCount }, (_, i) => {
						const { user } = reviews[i % reviews.length];
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
						<Mark color="magenta">148</Mark>
						{' happy customers!'}
					</Heading>
					<StyledCarousel>
						{reviews.slice(0, 10).map(quote => (
							<StyledCarouselSlide key={quote.id}>
								<Testimonial {...quote} />
							</StyledCarouselSlide>
						))}
					</StyledCarousel>
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
};
