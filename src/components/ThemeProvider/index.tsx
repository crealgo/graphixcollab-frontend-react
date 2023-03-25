import {CssBaseline, ThemeProvider as DefaultThemeProvider} from '@mui/material';
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import {type ThemeProviderProps} from '@mui/material/styles/ThemeProvider';
import {type FC} from 'react';
import {defaultTheme} from '@configs/themes';

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = (props) => (
	<DefaultThemeProvider theme={defaultTheme}>
		<EmotionThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{props.children}
		</EmotionThemeProvider>
	</DefaultThemeProvider>
);
