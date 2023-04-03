import { defaultTheme } from "@configs/themes";
import { css, CssBaseline, GlobalStyles, ThemeProvider as DefaultThemeProvider } from "@mui/material";
import { PropsWithChildren, type FC } from "react";
import "@fontsource/inter";

const fontStyles = css`
	font-family: "Inter";
`;

export type ThemeProviderProps = PropsWithChildren<typeof DefaultThemeProvider>;

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = (props) => (
	<>
		<GlobalStyles styles={fontStyles} />
		<DefaultThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{props.children}
		</DefaultThemeProvider>
	</>
);
