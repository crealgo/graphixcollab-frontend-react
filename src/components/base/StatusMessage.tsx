import { Warning } from '@mui/icons-material';
import { css, Typography, type SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type ComponentPropsWithoutRef } from 'react';
import { type ComponentType, type FC } from 'react';

type StatusMessageProps = {
	IconComponent?: ComponentType<SvgIconProps>;
	text?: string;
	isContained?: boolean;
	isActionable?: boolean;
} & ComponentPropsWithoutRef<'div'>;
const StatusMessageWrapper = styled('div')<StatusMessageProps>(
	({ isContained, isActionable }) => css`
		${isContained &&
		`
		padding-inline: 1rem;
		padding-block: 0.75rem;

		border-radius: 0.25rem;
		background-color: var(--color-gray-300);
		border: solid 1px var(--color-gray-50);
		outline: solid 1px var(--color-gray-400);
	`}

		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.25rem;

		align-items: center;
		color: var(--color-gray-700);

		${isActionable
			? css`
					cursor: pointer;

					&:hover {
						color: var(--color-brand-primary-main);
					}
			  `
			: null}
	`
);

export const StatusMessage: FC<StatusMessageProps> = ({
	IconComponent = Warning,
	text,
	...props
}) => (
	<StatusMessageWrapper className="StatusMessage-root" {...props}>
		<IconComponent fontSize="small" />
		<Typography
			className="StatusMessage-text"
			variant="body1"
			component="span"
		>
			{text}
		</Typography>
	</StatusMessageWrapper>
);
