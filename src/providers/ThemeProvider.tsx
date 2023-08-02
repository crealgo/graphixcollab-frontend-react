import {ThemeProvider as DefaultThemeProvider} from '@mui/material';
import {type FC, type PropsWithChildren} from 'react';
import {defaultTheme} from '../configs/themes';
import '../styles/index.scss';

export type ThemeProviderProps = PropsWithChildren<typeof DefaultThemeProvider>;

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = props => (
	<DefaultThemeProvider theme={defaultTheme}>
		{props.children}
	</DefaultThemeProvider>
);
