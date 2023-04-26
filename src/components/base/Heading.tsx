import styled from '@emotion/styled';
import {type BaseComponentsProps} from '../../types/base';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import {type FC} from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const HeadingText = styled('span')`
	mark {
		background-color: var(--mark-background-color);
		color: var(--mark-color);
	}
`;

export type HeadingProps = BaseComponentsProps<{
	level?: HeadingLevel;
	contrast?: boolean;
}>;

export const Heading: FC<HeadingProps> = ({
	children,
	contrast,
	className,
	level = 5
}) => (
	<Typography
		className={clsx(className, 'Heading-root', `Heading-h${level}`)}
		variant={level && `h${level}`}
		component={level ? `h${level}` : 'span'}
		color={contrast ? 'white' : undefined}
	>
		<HeadingText>{children}</HeadingText>
	</Typography>
);
