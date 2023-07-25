import {type CSSObject} from '@emotion/react';
import {alpha, type Theme} from '@mui/material';
import {type ButtonProps} from '../components/base/Button';

export type ButtonStyledFuncProps = ButtonProps & {theme: Theme};

export type ButtonStyledFunc = (
	props: ButtonStyledFuncProps
) => string | CSSObject;

export const getButtonColors: ButtonStyledFunc = ({theme, color = 'text'}) =>
	({
		primary: theme.palette.primary.neutral,
		secondary: theme.palette.secondary.neutral,
		tertiary: alpha(theme.palette.common.white, 0.675),
		text: 'transparent',
	}[color]);

export const getButtonTextColors: ButtonStyledFunc = ({
	theme,
	color = 'text',
}) =>
	({
		primary: theme.palette.primary.contrastText,
		secondary: theme.palette.secondary.contrastText,
		tertiary: theme.palette.grey[900],
		text: theme.palette.grey[900],
	}[color]);

export const getButtonHoverColors: ButtonStyledFunc = ({
	theme,
	color = 'text',
}) =>
	({
		primary: theme.palette.primary.dark,
		secondary: theme.palette.secondary.dark,
		tertiary: alpha(theme.palette.common.white, 0.95),
		text: alpha(theme.palette.common.white, 0.25),
	}[color]);

export const getButtonSizes: ButtonStyledFunc = ({size = 'medium'}) =>
	({
		small: {
			height: '2.125rem',
			fontSize: '0.875rem',
			padding: '0px 0.875rem',
		},
		medium: {
			height: '2.5rem',
			fontSize: '1rem',
			padding: '0px 1rem',
		},
		large: {
			height: '2.875rem',
			fontSize: '1.125rem',
			padding: '0px 1.125rem',
		},
	}[size]);
