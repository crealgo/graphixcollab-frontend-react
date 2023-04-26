import {colors, styled} from '@mui/material';
import {_e} from '../../../utils/excludePropsFromForwarding';
import {type SharedCarouseProps} from '.';

type CarouseWrapperProps = {
	imageCount?: number;
	currentIndex?: number;
} & SharedCarouseProps;

export const ImageCarouselWrapper = styled(
	'div',
	_e('height', 'width', 'imageCount', 'currentIndex')
)<CarouseWrapperProps>(
	({
		theme,
		imageCount = 0,
		currentIndex = 0,
		height = '100%',
		width = '100%'
	}) => {
		const imageCss: Record<string, unknown> = {};

		for (let i = 0; i <= imageCount; i++) {
			const colorIndex = (100 * (i + 1)) as keyof typeof colors.amber;

			imageCss[`&:nth-of-type(${i + 1})`] = {
				backgroundColor: colors.amber[colorIndex] || 'white',
				transform: `translateX(calc(100% * ${i - currentIndex}))`
			};
		}

		return {
			height,
			width,
			'position': 'relative',
			'overflow': 'hidden',
			'backgroundColor': theme.palette.grey[100],
			'aspectRatio': 1,
			'.Carousel-image': {
				position: 'absolute',
				width: '100%',
				height: '100%',
				transition: 'transform 500ms',
				...imageCss
			},
			'.DotsInput-root': {
				position: 'absolute',
				bottom: '0.5rem',
				left: '50%',
				transform: 'translateX(-50%)'
			}
		};
	}
);
