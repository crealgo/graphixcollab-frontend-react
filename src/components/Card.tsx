import { ActionStack } from '@components/ActionStack';
import { Button } from '@components/Button';
import { type ImageProps } from '@components/Image';
import { type ServiceOptions } from '@global/generalTypes';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Typography, useMediaQuery } from '@mui/material';
import { css, styled, useTheme } from '@mui/material/styles';
import { chance } from '@utils/chance';
import { forwardRef, type ComponentPropsWithRef } from 'react';
import { colorIterator } from '@utils/colorIterator';
import { useAppState } from '@hooks/useAppState';

interface ServiceCardProps extends ServiceOptions, ComponentPropsWithRef<'a'> {
	ImageProps?: ImageProps;
}

const CardAnchor = styled('a')(({ theme }) => {

	const randomRotation = `${chance.bool() ? '' : '-'}${chance.natural({ min: 2, max: 7 })}`;

	return css`
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1rem;

		.image {
			aspect-ratio: 1;
			position: relative;
			border-radius: 0.5rem;
			overflow: hidden;

			.Image-root {
				z-index: 0;
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				object-fit: cover;

				transition: all 300ms;
			}
		}

		.content {
			display: grid;
			align-content: start;
			grid-template-columns: 1fr;
			gap: 0.5rem;

			.ActionStack {
				margin-top: 0.5rem;
				justify-content: start;
			}
		}

		${colorIterator('background', '.image')}

		& > * {
			z-index: 1;
		}

		${theme.breakpoints.up('sm')} {
			text-align: center;
			grid-template-columns: 1fr;

			.content {
				.ActionStack {
					justify-content: center;
				}
			}

			.image {
				transition: all 200ms;
			}

			&:hover {
				.image {
					transform: translateY(-5px) rotate(${randomRotation}deg);
				}
			}
		}
	`
});

export const ServiceCard = forwardRef<HTMLAnchorElement, ServiceCardProps>(
	({ title, subtitle, description, imageSrc, ImageProps, ...props }, ref) => {
		const { breakpoints } = useTheme();
		const isMobile = useMediaQuery(breakpoints.down('sm'));
		const { toggleBooking } = useAppState();

		return (
			<CardAnchor {...props} ref={ref}>
				<div className='image' />
				{/* <NextImage
					className='Image-root'
					src={imageSrc || ''}
					alt='thing'
					quality={100}
					fill
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/> */}
				<div className="content">
					<Typography variant='caption'>{subtitle}</Typography>
					<Typography variant='h5'>{title}</Typography>
					<Typography variant='caption'>{description}</Typography>
					<ActionStack align={isMobile ? 'start' : 'center'}>
						<Button
							color={isMobile ? 'secondary' : 'text'}
							size='small'
							endIcon={<KeyboardArrowRight />}
							onClick={() => {
								toggleBooking();
							}}
						>
							{'Book Appointment'}
						</Button>
					</ActionStack>
				</div>
			</CardAnchor>
		);
	}
);

ServiceCard.displayName = 'ServiceCard';
