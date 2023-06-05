import { type CSSObject } from '@emotion/react';
import { alpha, type Theme } from '@mui/material';
import { type ButtonProps } from '../components/base/Button';

export type ButtonStyledFuncProps = ButtonProps & { theme: Theme };

export type ButtonStyledFunc = (
	props: ButtonStyledFuncProps
) => string | CSSObject;

export const getButtonSizes: ButtonStyledFunc = ({ theme, size = 'medium' }) =>
	({
		small: {
			height: '2.125rem',
			fontSize: '0.875rem',
			padding: '0px 0.875rem'
		},
		medium: {
			height: '2.5rem',
			fontSize: '1rem',
			padding: '0px 1rem'
		},
		large: {
			height: '2.875rem',
			fontSize: '1.125rem',
			padding: '0px 1.125rem'
		}
	}[size]);
