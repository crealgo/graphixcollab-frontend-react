import '@fontsource/inter';
import MuiGlobalStyles from '@mui/material/GlobalStyles';
import {css} from '@mui/material/styles';
import {type FC} from 'react';
import colors from 'tailwindcss/colors';
import {colord} from 'colord';

export const GlobalStyles: FC = () => (
	<MuiGlobalStyles
		styles={css`
			:root {
				font-family: Inter;

				/*
					namespace-object-base-modifier

					namespace: system-theme-domain
					object: group-component-element
					base: category-concept-property
					modifier: variant-state-scale-mode
				*/

				/* PRIMARY COLORS */
				/* --brand-color-primary: ${colors.rose[700]}; */
				/* --brand-color-secondary: ${colors.yellow[300]}; */

				/* --text-color-primary: ${colors.slate[900]}; */
				/* --text-color-secondary: ${colors.slate[400]}; */

				/* SHADOWS COLORS */
				/* --shadow-elevation-0: 0px 1px 2px ${colord(colors.slate[900]).alpha(0.05).toHex()}; */

				/* --input-shadow-color: ${colord(colors.slate[800]).alpha(0.5).toHex()}; */
				/* --input-shadow: 0rem 0.0625rem 0.125rem var(--shadow-input-color); */

				/* INPUT STYLES */
				/* --input-border-style: solid; */
				/* --input-border-width: 1px; */
				/* --input-border-color: ${colord(colors.slate[900]).alpha(0.25).toHex()}; */
				/* --input-border: var(--input-border-style) var(--input-border-width) var(--input-border-color); */

				/* --input-bezel-small: 0.25rem;
				--input-padding-x-small: 0.5rem;
				--input-padding-y-small: 0.25rem;
				--input-height-small: 1.75rem;

				--input-bezel-medium: 0.25rem;
				--input-padding-x-medium: 0.75rem;
				--input-padding-y-medium: 0.5rem;
				--input-height-medium: 2rem;

				--input-bezel-large: 0.375rem;
				--input-padding-x-large: 0.875rem;
				--input-padding-y-large: 0.625rem;
				--input-height-large: 2.25rem; */
			}
		`}
	/>
);
