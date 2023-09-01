import {alpha, styled} from '@mui/material/styles';
import {animated} from '@react-spring/web';

export const Wrapper = styled('section')`
	--padding-top: calc(var(--header-bar-height-mobile) + var(--section-desktop-padding-block));

	${({theme}) => theme.breakpoints.up('md')} {
		--padding-top: calc(var(--header-bar-height-desktop) + var(--section-desktop-padding-block));
	}

	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	padding-block: var(--padding-top)  var(--section-desktop-padding-block);
	padding-inline: var(--section-desktop-padding-inline);
	background-color: var(--color-background);

	position: relative;
	overflow: hidden;
`;

export const HeroCarousel = styled('div')`
	position: absolute;
	inset: 0;
	z-index: 0;
	box-shadow: inset 5em 1em gold;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-image: radial-gradient(
			circle at 0% 0%,
			${alpha('#ffecf0', 0.9)} 0%,
			${alpha('#def4ff', 0.1)} 100%
		);
	}

	/* background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%); */
`;

export const HeroCarouselSlide = styled(animated.div)`
	position: absolute;
	inset: 0;

	.Image-root {
		opacity: 0.25;
	}
`;

export const CarouselControlTitles = styled('div')`
	display: flex;
	margin-top: 2rem;
	gap: 1rem;
	align-items: center;
	flex-wrap: wrap;
`;

export const CarouselControlTitle = styled(animated.button)`
	border: unset;
	padding: unset;

	font-family: var(--type-heading-font-family);
	font-size: var(--type-heading-font-size-large-3);
	font-weight: var(--type-heading-font-weight);

	display: inline-flex;
	height: 2.75rem;
	line-height: 2.75rem;

	opacity: 0.25;
	background: transparent;
	cursor: pointer;

	&:hover {
		opacity: 1 !important;
	}
`;

export const ContentColumn = styled('div')`
	max-width: 38rem; /* TODO: make this a variable */
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	position: relative;
`;

export const Divider = styled('hr')`
	padding: unset;
	margin: unset;
	border: unset;

	visibility: hidden;
	height: 0px;
`;
