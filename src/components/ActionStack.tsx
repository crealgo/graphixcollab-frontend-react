import {Stack, Typography} from '@mui/material';
import {type FC, type PropsWithChildren} from 'react';
import {type Action} from '@global/generalTypes';
import {Button, type ButtonProps} from '@components/Button';

export type ActionStackProps = PropsWithChildren<{
	actions?: Action[];
	prefix?: string;
	text?: string;
	className?: string;
	align?: 'start' | 'center' | 'end';
	max?: number;
}> &
	Pick<ButtonProps, 'size' | 'color'>;

export const ActionStack: FC<ActionStackProps> = ({
	align,
	actions,
	text,
	max = 2,
	children,
	size = 'medium',
	color = 'tertiary'
}) => (
	<div className='ActionStack-root'>
		<Stack gap={'0.5rem'} direction='row' alignItems={'center'} justifyContent={align}>
			{actions?.slice(0, max).map(({label, ...actionItems}, actionIndex) => (
				<Button {...actionItems} size={size} color={color} key={actionIndex}>
					{label}
				</Button>
			))}
			{children}
		</Stack>
		{text && (
			<Typography className='ActionStack-text' variant='body2' marginTop='1rem' maxWidth={'30rem'}>
				{text}
			</Typography>
		)}
	</div>
);
