import { defaultTheme } from "../configs/themes";
import { CssBaseline, ThemeProvider as DefaultThemeProvider } from "@mui/material";
import { PropsWithChildren, type FC } from "react";
import { GlobalStyles } from "../components/molecules/GlobalStyles";

export type ThemeProviderProps = PropsWithChildren<typeof DefaultThemeProvider>;

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = (props) => (
	<>
		<GlobalStyles />
		<DefaultThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{props.children}
		</DefaultThemeProvider>
	</>
);
