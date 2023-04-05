import {Warning} from '@mui/icons-material';
import {css, Typography, type SvgIconProps} from '@mui/material';
import {styled} from '@mui/material/styles';
import {type ComponentPropsWithoutRef} from 'react';
import {type ComponentType, type FC} from 'react';

interface StatusMessageProps extends ComponentPropsWithoutRef<'div'> {
	IconComponent?: ComponentType<SvgIconProps>;
	text?: string;
	contained?: boolean;
	actionable?: boolean;
}
const StatusMessageWrapper = styled('div')<StatusMessageProps>(
	({theme, contained, actionable}) => css`
		${contained &&
		`
		padding-inline: 1rem;
		padding-block: 0.75rem;

		border-radius: 0.25rem;
		background-color: ${theme.palette.grey[300]};
		border: solid 1px ${theme.palette.grey[50]};
		outline: solid 1px ${theme.palette.grey[400]};
	`}

		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.25rem;

		align-items: center;
		color: ${theme.palette.grey[700]};

		${actionable
		? css`
			cursor: pointer;

			&:hover {
				color: ${theme.palette.primary.main};
			}
		`
		: null}
	`
);

export const StatusMessage: FC<StatusMessageProps> = ({IconComponent = Warning, text, ...props}) => (
	<StatusMessageWrapper className='StatusMessage-root' {...props}>
		<IconComponent fontSize='small' />
		<Typography className='StatusMessage-text' variant='body1' component='span'>
			{text}
		</Typography>
	</StatusMessageWrapper>
);
