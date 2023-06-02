import { Stack, Typography } from '@mui/material';
import { type PropsWithChildren, type FC } from 'react';
import { type Action } from '../../types/general';
import { Button, type ButtonProps } from './Button';

export type ActionStackProps = PropsWithChildren<{
	prefix?: string;
	text?: string;
	className?: string;
	align?: 'start' | 'center' | 'end';
	max?: number;
	color?: ButtonProps['color'];
	size?: ButtonProps['size'];
	actions?: Action[];
}>;

export const ActionStack: FC<ActionStackProps> = ({
	align,
	actions,
	text,
	max = 2,
	className = '',
	children,
	size = 'medium',
	color = 'tertiary'
}) => (
	<div className={`ActionStack-root ${className}`}>
		<Stack
			flexWrap="wrap"
			gap="0.5rem"
			direction="row"
			alignItems="center"
			justifyContent={align}
		>
			{children}
			{actions
				?.slice(0, max)
				.map(({ label, ...actionItemsProps }, actionIndex) => (
					<Button
						key={actionIndex}
						size={size}
						color={color}
						{...actionItemsProps}
					>
						{label}
					</Button>
				))}
		</Stack>
		{text && (
			<Typography
				className="ActionStack-text"
				variant="body2"
				marginTop="1rem"
				maxWidth="30rem"
			>
				{text}
			</Typography>
		)}
	</div>
);
