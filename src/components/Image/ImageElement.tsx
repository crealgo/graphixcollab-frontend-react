import {css, styled} from '@mui/material';
import {type ComponentPropsWithRef} from 'react';
import {_e} from '@utils/excludePropsFromForwarding';

export interface ImageElementProps extends ComponentPropsWithRef<'img'> {
	loaded?: boolean;
}

export const ImageElement = styled(
	'img',
	_e('loaded')
)<ImageElementProps>(
	({loaded}) => css`
		position: absolute;
		top: 0;
		left: 0;

		object-fit: cover;
		width: 100%;
		height: 100%;

		/* visibility: ${loaded ? 'visible' : 'hidden'}; */
	`
);
