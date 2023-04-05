import {css, styled} from '@mui/material';
import {type ComponentPropsWithRef} from 'react';

export interface PhoneProps extends ComponentPropsWithRef<'img'> {
	hasBorder?: boolean;
	elevation?: number;
}

const iphoneCornerRadius = '10%';

export const Phone = styled('img')<PhoneProps>(
	({theme, hasBorder, elevation = 0}) => css`
		box-sizing: border-box;
		width: 100%;
		border-radius: ${iphoneCornerRadius};
		aspect-ratio: 9/19.5;
		background-color: ${theme.palette.grey[300]};

		${hasBorder &&
		css`
			border: solid 0.5rem ${theme.palette.grey[100]};
		`}
		box-shadow: ${theme.shadows[elevation]};
	`
);

Phone.defaultProps = {
	className: 'Phone-root'
};
