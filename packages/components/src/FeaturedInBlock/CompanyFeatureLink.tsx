import OutBoundIcon from '@mui/icons-material/OpenInNew';
import Tooltip, {
	tooltipClasses,
	type TooltipProps,
} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
import {type ComponentPropsWithoutRef, type FC} from 'react';

const StyledTooltip = styled(({className, ...props}: TooltipProps) => (
	<Tooltip {...props} classes={{popper: className}}/>
))`
	--tooltip-line-height: 0.9rem;

	.${tooltipClasses.tooltip} {
		background-color: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.23);
		color: rgba(0, 0, 0, 0.87);
		box-shadow: var(--elevation-2);
		display: inline-flex;
		place-items: center;
		place-content: center;
		gap: 0.25em;

		.Tooltip-text {
			// light theme
			display: inline-flex;
			vertical-align: middle;
			line-height: auto;
		}
		.Tooltip-icon {
			display: inline-flex;
			font-size: var(--tooltip-line-height);
			line-height: auto;
		}
	}
`;

const StyledAnchor = styled('a')`
	all: unset;

	cursor: pointer;
	box-sizing: border-box;

	display: inline-grid;
	grid-template-columns: 1fr;
	place-content: center;
	place-items: center;

	aspect-ratio: 1 / 1;
	width: 100%;
	max-width: 15rem;
	filter: grayscale(100%);
	opacity: 0.5;
	transition: all 100ms ease-in-out;

	&:hover {
		opacity: 1;
		filter: grayscale(0%);
		transform: translateY(-3px);
	}

	${({theme}) => theme.breakpoints.up('sm')} {
		padding: 1.5rem;
	}
`;

type Props = ComponentPropsWithoutRef<'a'>;

export const CompanyFeatureLink: FC<Props> = ({
	children,
	title,
	...props
}) => {
	const tooltipTitle = (
		<>
			<span className='Tooltip-text'>{title}</span>
			{props.href && <OutBoundIcon className='Tooltip-icon'/>}
		</>
	);

	return (
		<StyledTooltip followCursor title={tooltipTitle}>
			<StyledAnchor {...props}>{children}</StyledAnchor>
		</StyledTooltip>
	);
};
