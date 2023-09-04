import {MessageOutlined, SearchOutlined} from '@mui/icons-material';
import {styled} from '@mui/material';
import {type FC} from 'react';
import reviews from '../../content/yelp-reviews.json';
import {ActionStack} from '../base/ActionStack';
import {Block} from '../base/Block';
import {Carousel, CarouselSlide} from '../base/Carousel';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Mark} from '../base/Mark';
import {Testimonial} from '../base/Testimonial';
import {generatePatternCSS} from '../../utils/generatePatternCSS';

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
	background-image: url(${generatePatternCSS('yellow')})
`;

const StyledCarousel = styled(Carousel)`
	max-width: 40rem;
	width: 100%;
`;

const StyledCarouselSlide = styled(CarouselSlide)`
	padding-inline: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledActionStack = styled(ActionStack)`
	& > * {
		justify-content: center;
	}
`;

export const YelpBlock: FC<YelpBlockProps> = () => (
	<Container>
		<ContentWrapper isClipped isFloating isRounded color='grey'>
			<Content>
				<Heading isCentered level={2}>
					{'We\'ve helped '}
					<Mark color='magenta'>148</Mark>
					{' happy customers!'}
				</Heading>
				<StyledCarousel>
					{reviews.slice(0, 10).map(quote => (
						<StyledCarouselSlide key={quote.id}>
							<Testimonial {...quote}/>
						</StyledCarouselSlide>
					))}
				</StyledCarousel>
			</Content>
			<StyledActionStack
				actions={[
					{
						label: 'Read more reviews',
						href: 'https://www.yelp.com/biz/fashion-greek-usc-los-angeles',
						size: 'large',
						color: 'secondary',
						endIcon: <SearchOutlined/>,
					},
					{
						label: 'Leave a review',
						href: 'https://www.yelp.com/writeareview/biz/-e4TSbHSikunICO8i8wr4Q?return_url=%2Fbiz%2F-e4TSbHSikunICO8i8wr4Q&review_origin=biz-details-war-button',
						size: 'large',
						color: 'text',
						endIcon: <MessageOutlined/>,
					},
				]}
			/>
		</ContentWrapper>
	</Container>
);
