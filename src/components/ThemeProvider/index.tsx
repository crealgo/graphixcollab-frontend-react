import { defaultTheme } from "@configs/themes";
import { CssBaseline, ThemeProvider as DefaultThemeProvider } from "@mui/material";
import { PropsWithChildren, type FC } from "react";

export type ThemeProviderProps = PropsWithChildren<typeof DefaultThemeProvider>;

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = (props) => (
	<DefaultThemeProvider theme={defaultTheme}>
		<CssBaseline />
		{props.children}
	</DefaultThemeProvider>
);
