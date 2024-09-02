import {Warning} from '@mui/icons-material';
import {css, Typography, type SvgIconProps} from '@mui/material';
import {styled} from '@mui/material/styles';
import {type ComponentPropsWithoutRef} from 'react';
import {type ComponentType, type FC} from 'react';

type StatusMessageProps = {
	readonly IconComponent?: ComponentType<SvgIconProps>;
	readonly text?: string;
	readonly isContained?: boolean;
	readonly isActionable?: boolean;
} & ComponentPropsWithoutRef<'div'>;
const StatusMessageWrapper = styled('div')<StatusMessageProps>(
	({isContained, isActionable}) => css`
		${isContained
		&& `
		padding-inline: 1rem;
		padding-block: 0.75rem;

		border-radius: 0.25rem;
		background-color: var(--color-brand-key-lighter);
		border: solid 1px var(--color-brand-key-lightest);
		outline: solid 1px var(--color-brand-key-lighter);
	`}

		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.25rem;

		align-items: center;
		color: var(--color-brand-key-darker);

		${isActionable
		? css`
					cursor: pointer;

					&:hover {
						color: var(--color-brand-primary-main);
					}
			  `
		: null}
	`,
);

export const StatusMessage: FC<StatusMessageProps> = ({
	IconComponent = Warning,
	text,
	...props
}) => (
	<StatusMessageWrapper className='StatusMessage-root' {...props}>
		<IconComponent fontSize='small'/>
		<Typography
			className='StatusMessage-text'
			variant='body1'
			component='span'
		>
			{text}
		</Typography>
	</StatusMessageWrapper>
);
