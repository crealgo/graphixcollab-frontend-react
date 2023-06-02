import * as allIcons from '@mui/icons-material';
import { createElement } from 'react';

export const iconMap = Object.entries(allIcons)
	.filter(([iconName]) =>
		/((close|cancel|check)(circle)?|(keyboard)(arrow)(up|down|right|left|previous|next|back|forward))(twotone)/gi.test(
			iconName
		)
	)
	.reduce(
		(prev, [iconName, icon]) => ({
			...prev,
			[iconName]: createElement(icon)
		}),
		{}
	);

export const iconNameArray = Object.keys(iconMap);
