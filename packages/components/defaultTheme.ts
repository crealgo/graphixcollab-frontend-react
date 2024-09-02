import colors from 'tailwindcss/colors';
import {createTheme} from '@mui/material/styles';
import tokens from '@hotcakes/tokens/lib/tokens.json';

const defaultFontStack = [
	'system-ui',
	'Segoe UI',
	'Roboto',
	'Helvetica',
	'Arial',
	'sans-serif',
	'Apple Color Emoji',
	'Segoe UI Emoji',
	'Segoe UI Symbol',
].join(', ');

const {breakpoints, palette} = createTheme({
	palette: {
		primary: {
			main: colors.red[700],
		},
		secondary: {
			main: colors.amber[400],
			light: colors.amber[200],
		},
	},
});

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module '@mui/material/styles' {
	interface Theme {
		tokens: typeof tokens;
	}

	interface ThemeOptions {
		tokens?: Partial<typeof tokens>;
	}
}
/* eslint-enable @typescript-eslint/consistent-type-definitions */

// Default theme
export const defaultTheme = createTheme({
	breakpoints,
	palette,
	typography: {
		allVariants: {
			fontFamily: `Inter, ${defaultFontStack}`,
			color: '#111827',
			fontWeight: 400,
		},
		h1: {
			fontSize: '3rem',
			fontWeight: 700,
			lineHeight: '1.125',
			letterSpacing: '-0.02em',
			[breakpoints.up('md')]: {
				fontSize: '4rem',
			},
		},
		h2: {
			fontSize: '2.5rem',
			fontWeight: 700,
			lineHeight: '1.125',
			letterSpacing: '-0.02em',
		},
		h3: {
			fontSize: '2.0625rem',
			fontWeight: 700,
			lineHeight: '1.125',
			letterSpacing: '-0.02em',
		},
		h4: {
			fontSize: '1.75rem',
			fontWeight: '700',
			lineHeight: '1.125',
			letterSpacing: '-0.02em',
		},
		h5: {
			fontSize: '1.4375rem',
			fontWeight: '700',
			lineHeight: '1.125',
			letterSpacing: '-0.02em',
		},
		h6: {
			fontFamily: `Inter, ${defaultFontStack}`,
			letterSpacing: '-0.05rem',
			fontWeight: 600,
			lineHeight: '1.125',
		},
		body1: {
			fontSize: '1rem',
			lineHeight: '1.375',
		},
		body2: {
			fontSize: '1.1rem',
			lineHeight: '1.375',
		},
		caption: {
			fontSize: '0.875rem',
			lineHeight: '1.25',
			color: '#6b7280',
			letterSpacing: 0,
		},
		overline: {
			fontSize: '1rem',
			fontWeight: 'bold',
		},
	},
	tokens: tokens,
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: 'contained',
			},
			styleOverrides: {
				root: {
					display: 'inline-flex',
					textTransform: 'unset',
					letterSpacing: '0',
					fontWeight: 'normal',
					fontSize: '0.875rem',
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
			styleOverrides: {
				root: {
					cursor: 'pointer',
					'&:hover': {
						filter: 'brightness(0.7)',
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					backgroundColor: 'white',
				},
			},
		},
	},
});
