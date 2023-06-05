import { css, styled } from '@mui/material';
import { type ComponentPropsWithRef } from 'react';

export type PhoneProps = {
	hasBorder?: boolean;
	elevation?: number;
} & ComponentPropsWithRef<'img'>;

const iphoneCornerRadius = '10%';

export const Phone = styled('img')<PhoneProps>(
	({ hasBorder, elevation = 0 }) => css`
		box-sizing: border-box;
		width: 100%;
		border-radius: ${iphoneCornerRadius};
		aspect-ratio: 9/19.5;
		background-color: var(--color-gray-300);

		${hasBorder ? 'border: solid 0.5rem var(--color-gray-100);' : ''}
		box-shadow: var(--elevation-${elevation});
	`
);

Phone.defaultProps = {
	className: 'Phone-root'
};
