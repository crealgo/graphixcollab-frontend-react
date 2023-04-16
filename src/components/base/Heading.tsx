import {type BaseComponentsProps} from '../../types/base';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import {type FC} from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = BaseComponentsProps<{
	level?: HeadingLevel;
}>;

export const Heading: FC<HeadingProps> = ({children, className, level, ...props}) => (
	<Typography
		className={clsx(className, 'Heading-root', `Heading-${level ? `h${level}` : 'span'}`)}
		variant={level && `h${level}`}
		component={level ? `h${level}` : 'span'}
	>
		{children}
	</Typography>
);
