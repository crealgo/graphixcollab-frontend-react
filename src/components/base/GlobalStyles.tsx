import MuiGlobalStyles from '@mui/material/GlobalStyles';
import { css } from '@mui/material/styles';
import { type FC } from 'react';
import tokens from '../../../tokens/build/css/variablesString';

export const GlobalStyles: FC = () => (
	<MuiGlobalStyles
		styles={css`
			${tokens}

			html {
				font-family: Inter;
			}

			// anything tab-able
			a[href],
			area,
			button:enabled,
			/* link[href], */
			/* object, */
			input:not([type='hidden']):enabled,
			select:enabled,
			textarea:enabled,
			[tabindex],
			[draggable] {
				&:focus-visible {
					outline: var(--color-brand-key-light) dashed 2px;
					outline-offset: 3px;
				}
			}
		`}
	/>
);
