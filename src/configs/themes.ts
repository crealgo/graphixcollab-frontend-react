import {createTheme, lighten} from '@mui/material/styles';

const defaultFontStack =
	'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const headingFontCss = {
	fontFamily: `Inter, ${defaultFontStack}`,
	letterSpacing: '-0.05rem',
	fontWeight: 600,
	lineHeight: '1.125'
};

const bodyFontCss = {
	fontFamily: `Inter, ${defaultFontStack}`,
	color: '#111827',
	fontWeight: 400
};

const brandColorPrimary = '#B20838';
const brandColorSecondary = '#FFC423';

const {breakpoints, palette, shadows} = createTheme({
	palette: {
		primary: {
			main: brandColorPrimary
		},
		secondary: {
			main: brandColorSecondary,
			light: lighten(brandColorSecondary, 0.375)
		}
	}
});

const {typography} = createTheme({
	typography: {
		allVariants: bodyFontCss,
		h1: {
			fontSize: '3rem',
			fontWeight: 700,
			lineHeight: '1.125',
			letterSpacing: '-0.02em'
			// [breakpoints.up('md')]: {
			// 	fontSize: '4rem',
			// 	lineHeight: '1.125'
			// }
		},
		h2: {
			fontSize: '2.5rem',
			fontWeight: 700,
			lineHeight: '1.125',
			letterSpacing: '-0.02em'
			// [breakpoints.up('md')]: {
			// 	fontSize: '3.8125rem',
			// 	lineHeight: '1.125'
			// }
		},
		h3: {
			fontSize: '2.0625rem',
			fontWeight: 700,
			lineHeight: '1.125',
			letterSpacing: '-0.02em'
			// [breakpoints.up('md')]: {
			// 	fontSize: '2.9375rem',
			// 	lineHeight: '1.125'
			// }
		},
		h4: {
			fontSize: '1.75rem',
			fontWeight: '700',
			lineHeight: '1.125',
			letterSpacing: '-0.02em'
			// [breakpoints.up('md')]: {
			// 	fontSize: '2.25rem',
			// 	lineHeight: '1.125'
			// }
		},
		h5: {
			fontSize: '1.4375rem',
			fontWeight: '700',
			lineHeight: '1.125',
			letterSpacing: '-0.02em'
			// [breakpoints.up('md')]: {
			// 	fontSize: '1.6875rem',
			// 	lineHeight: '1.125'
			// }
		},
		h6: headingFontCss,
		body1: {
			fontSize: '1rem',
			lineHeight: '1.375'
		},
		body2: {
			fontSize: '1.1rem',
			lineHeight: '1.375'
			// [breakpoints.up('md')]: {
			// 	fontSize: '1.3125rem',
			// 	lineHeight: '1.375'
			// }
		},
		caption: {
			fontSize: '0.875rem',
			lineHeight: '1.25',
			color: '#6b7280',
			letterSpacing: 0
		},
		overline: {
			fontSize: '1rem',
			fontWeight: 'bold'
		}
	}
});

const utils = {
	transitions: {
		easeInOut: 'cubic-bezier(0.81, 0, 0.14, 0.96)'
	},
	inheritFont: {
		fontSize: 'inherit',
		fontFamily: 'inherit',
		letterSpacing: 'inherit',
		fontWeight: 'inherit',
		color: 'inherit',
		lineHeight: '1.125'
	},
	absoluteCenter: {
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	},
	styles: {
		block: {
			paddingBlock: '4rem',
			[breakpoints.up('md')]: {
				paddingBlock: '7rem'
			}
		},
		blockContainer: {
			paddingInline: '1.5rem',
			[breakpoints.up('md')]: {
				paddingInline: '2rem'
			},
			[breakpoints.up('xl')]: {
				paddingInline: '4rem'
			}
		},
		card: {
			outlined: {
				backgroundColor: 'white',
				border: `solid 0.0625rem ${palette.grey[200]}`,
				borderRadius: '0.25rem',
				padding: '1rem'
			},
			elevated: {
				backgroundColor: 'white',
				border: `solid 0.0625rem ${palette.grey[200]}`,
				borderRadius: '0.25rem',
				padding: '1rem'
				// boxShadow: shadows[10]
			}
		},
		border: {
			default: `solid 0.0625rem ${palette.grey[200]}`,
			primary: `solid 0.0625rem ${palette.primary.dark}`,
			secondary: `solid 0.0625rem ${palette.secondary.dark}`
		},
		shadows: {
			small: shadows[2],
			medium: shadows[4],
			large: shadows[10],
			xlarge: shadows[15],
			xxlarge: shadows[20]
		}
	}
};

declare module '@mui/material/styles' {
	interface Theme {
		utils: typeof utils;
	}

	interface ThemeOptions {
		utils?: Partial<typeof utils>;
	}
}

// Default theme
export const defaultTheme = createTheme({
	breakpoints,
	palette,
	typography,
	utils,
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: 'contained'
			},
			styleOverrides: {
				root: {
					display: 'inline-flex',
					textTransform: 'unset',
					letterSpacing: '0',
					fontWeight: 'normal',
					fontSize: '0.875rem'
				}
			}
		},
		MuiLink: {
			defaultProps: {
				underline: 'none'
			},
			styleOverrides: {
				root: {
					cursor: 'pointer'
				}
			}
		}
	}
});
