import '@fontsource/inter';
import MuiGlobalStyles from '@mui/material/GlobalStyles';
import {css} from '@mui/material/styles';
import {type FC} from 'react';
import tokens from '../../../tokens/build/css/variablesString';

export const GlobalStyles: FC = () => (
	<MuiGlobalStyles
		styles={css`
			${tokens}

			* {
				font-family: Inter;
			}
		`}
	/>
);
