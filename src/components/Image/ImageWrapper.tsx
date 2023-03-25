import {css, styled} from '@mui/material';
import {_e} from '@utils/excludePropsFromForwarding';
import {type ImageProps} from '@components/Image';

export interface ImageWrapperProps extends Pick<ImageProps, 'frame'> {
	width?: string;
	height?: string;
}

export const ImageWrapper = styled(
	'div',
	_e('width', 'height', 'frame')
)<ImageWrapperProps>(({width, height, frame, theme}) => {
	const frameBorderRadius = {
		circular: '99999px',
		rounded: '0.25rem',
		squared: '0px'
	}[frame ?? 'squared'];

	return css`
		height: ${height};
		width: ${width};
		aspect-ratio: 1;
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		/* border: solid 1px ${theme.palette.grey[200]}; */

		border-radius: ${frameBorderRadius};
		overflow: hidden;

		background-color: ${theme.palette.grey[200]};

		& > * {
			position: absolute;
		}
	`;
});
