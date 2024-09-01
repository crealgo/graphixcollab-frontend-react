import {Typography} from '@mui/material';
import {css, styled} from '@mui/material/styles';
import clsx from 'clsx';
import {Image, type ImageProps} from './Image';
import {type ComponentPropsWithRef, type FC} from 'react';
import {type ServiceOptions} from '@graphixcollab/types/general';
import {chance} from '@graphixcollab/utils/chance.ts';

type CardProps = {
	readonly image?: {
		src: string;
		alt: string;
	};
} & ServiceOptions &
ComponentPropsWithRef<'a'>;

const CardAnchor = styled('a')(() => {
	const randomRotation = `${chance.bool() ? '' : '-'}${chance.natural({
		min: 2,
		max: 7,
	})}`;

	return css`
		cursor: pointer;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: 7.5rem auto;
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
	title, subtitle, description, className, image, ...props
}) => (
	<CardAnchor className={clsx('Card-root', className)} {...props}>
		<Image {...image} fill='contain'/>
		<div className='content'>
			<Typography variant='caption'>{subtitle}</Typography>
			<Typography variant='h5'>{title}</Typography>
			<Typography variant='caption'>{description}</Typography>
		</div>
	</CardAnchor>
);
