import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import clsx from 'clsx';
import {type ComponentPropsWithRef, type FC} from 'react';
import {useAppState} from '../../hooks/useAppState';
import {colorIterator} from '../../utils/colorIterator';
import {type ActionStackProps} from './ActionStack';

type CardProps = {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: {
		src: string;
		alt: string;
	};
	actions?: ActionStackProps['actions'];
} & ComponentPropsWithRef<'a'>;

const CardAnchor = styled('a')`
	cursor: pointer;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1.5rem;

	img {
		width: 75px;
		height: 75px;
	}

	.content {
		display: grid;
		align-content: start;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 0.5rem;

		.ActionStack-root {
			margin-top: 0.25rem;
			justify-content: start;
		}
	}

	${colorIterator('background', '.image')}
`;

export const HorizontalCard: FC<CardProps> = ({
	title,
	subtitle,
	description,
	className,
	image,
	actions,
	...props
}) => {
	return (
		<CardAnchor
			className={clsx('HorizontalCard-root', className)}
			{...props}
		>
			<img {...image} />
			<div className="content">
				{/* <Typography variant="caption">{subtitle}</Typography> */}
				<Typography className="title" variant="h5">
					{title}
				</Typography>
				<Typography
					className="description"
					color="var(--color-gray-700)"
				>
					{description}
				</Typography>
				{/* <ActionStack actions={actions}>
					<Button
						color="text"
						size="small"
						endIcon={<KeyboardArrowRight />}
						onClick={() => {
							toggleBooking();
						}}
					>
						Book Appointment
					</Button>
				</ActionStack> */}
			</div>
		</CardAnchor>
	);
};
