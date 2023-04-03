import "@fontsource/inter";
import MuiGlobalStyles from "@mui/material/GlobalStyles";
import { css } from "@mui/material/styles";
import { FC } from "react";

type GlobalStylesProps = Partial<typeof MuiGlobalStyles>;

export const GlobalStyles: FC<GlobalStylesProps> = (props) => (
	<MuiGlobalStyles
		{...props}
		styles={css`
			:root {
				font-family: Inter;

				--color-primary: #b20838;
				--color-secondary: #fde047;
			}
		`}
	/>
);
