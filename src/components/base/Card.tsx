import {KeyboardArrowRight} from '@mui/icons-material';
import {Typography, useMediaQuery} from '@mui/material';
import {css, styled, useTheme} from '@mui/material/styles';
import {type FC, type ComponentPropsWithRef} from 'react';
import {useAppState} from '../../hooks/useAppState';
import {type ServiceOptions} from '../../types/general';
import {chance} from '../../utils/chance';
import {ActionStack} from './ActionStack';
import {Button} from './Button';
import {Image, type ImageProps} from './Image';
import clsx from 'clsx';

type CardProps = {
	image?: {
		src: string;
		alt: string;
	};
} & ServiceOptions &
	ComponentPropsWithRef<'a'>;

const CardAnchor = styled('a')(() => {
	const randomRotation = `${chance.bool() ? '' : '-'}${chance.natural({
		min: 2,
		max: 7
	})}`;

	return css`
		cursor: pointer;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1rem;
		text-align: center;

		img {
			transition: all 200ms;
			width: 100%;
			max-width: 7rem;
			margin-inline: auto;
		}

		.content {
			display: grid;
			align-content: start;
			grid-template-columns: 1fr;
			gap: 0.5rem;

			.ActionStack {
				justify-content: center;
				margin-top: 0.5rem;
				justify-content: start;
			}
		}

		&:hover {
			img {
				transform: translateY(-5px) rotate(${randomRotation}deg);
			}
		}
	`;
});

export const Card: FC<CardProps> = ({
	title,
	subtitle,
	description,
	className,
	image,
	...props
}) => {
	const {breakpoints} = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));
	const {toggleBooking} = useAppState();

	console.log({props});

	return (
		<CardAnchor className={clsx('Card-root', className)} {...props}>
			<img {...image} />
			<div className="content">
				<Typography variant="caption">{subtitle}</Typography>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="caption">{description}</Typography>
				<ActionStack align={isMobile ? 'start' : 'center'}>
					<Button
						color={isMobile ? 'secondary' : 'text'}
						size="small"
						endIcon={<KeyboardArrowRight />}
						onClick={() => {
							toggleBooking();
						}}
					>
						Book Appointment
					</Button>
				</ActionStack>
			</div>
		</CardAnchor>
	);
};
