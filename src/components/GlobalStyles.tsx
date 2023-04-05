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

				--shadow-border-color: rgba(30, 41, 59, 0.25);
				--shadow-border: inset 0rem 0rem 0rem 0.0625rem var(--shadow-border-color);

				--shadow-elevation-0: 0px 1px 2px rgba(0, 0, 0, 0.05);

				--shadow-input-color: rgba(0, 0, 0, 0.05);
				--shadow-input: 0rem 0.0625rem 0.125rem var(--shadow-input-color);

				// input shape
				--rounding-small-input: 0.5rem;
				--padding-x-small-input: 0.5rem;
				--padding-y-small-input: 0.25rem;
				--height-small-input: 1.75rem;

				--rounding-medium-input: 0.5rem;
				--padding-x-medium-input: 0.75rem;
				--padding-y-medium-input: 0.5rem;
				--height-medium-input: 2rem;

				--rounding-large-input: 0.5rem;
				--padding-x-large-input: 0.875rem;
				--padding-y-large-input: 0.625rem;
				--height-large-input: 2.25rem;
			}
		`}
	/>
);
