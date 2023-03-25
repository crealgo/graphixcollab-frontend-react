import {css, styled} from '@mui/material';
import {Label} from '@components/Label';

export type MilestoneState = 'previous' | 'current' | 'next';

export type MileStoneValue = {
	label: string;
	description?: string;
};

export const Milestones = styled('ol')`
	width: auto;
	max-width: none;
	list-style: none;
	padding-inline: 0;
	margin: 0;

	display: inline-block;
	white-space: nowrap;

	position: relative;
`;

export const Milestone = styled('li')<{
	state?: MilestoneState;
	selected?: boolean;
}>(
	({theme, state, selected}) => css`
		display: inline-flex;
		width: 20rem;
		flex: none;
		position: relative;

		padding-block: 14rem 8rem;
		padding-inline: 1rem;

		cursor: pointer;

		justify-content: center;

		opacity: ${state === 'previous' ? 0.5 : 1};

		background-color: ${selected ? theme.palette.grey[200] : theme.palette.grey[50]};

		&:hover {
			background-color: ${theme.palette.grey[200]};
		}

		.Label-root {
			position: relative;
			${selected ? css`
				outline: solid 0.2rem ${theme.palette.grey[500]};
				outline-offset: 0.2rem;
			` : css`
				cursor: pointer;

				&:hover {
					outline: solid 0.2rem ${theme.palette.grey[400]};
					outline-offset: 0.2rem;
				}
			`}

			&::after {
				position: absolute;
				top: 0;
				height: 0;
				width: 0;
				left: 50%;
				transform: translateX(-50%) translateY(-100%);
				border: 0.5rem solid transparent;
				border-bottom-color: inherit;
				content: '';
			}
		}

		&::before {
			content: '';
			width: 1px;
			background-color: ${theme.palette.grey[400]};

			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 0;
		}
	`
);

export const MilestoneLabel = styled(Label)`
	z-index: 1;
	bottom: 0;
`;
