import { type ServiceInformation } from './steps/data';
import { css, styled } from '@mui/material';
import { Fragment, type ComponentPropsWithoutRef, type FC } from 'react';

export type BookingOptionProps = Record<string, unknown> &
	ServiceInformation &
	ComponentPropsWithoutRef<'input'>;

const BaseElement: FC<BookingOptionProps> = ({
	label,
	icon: Icon,
	name,
	...props
}) => (
	<>
		<label htmlFor={name}>{label}</label>
		<input hidden type="radio" id={name} {...props} />
	</>
);

export const TimeSlot = styled(BaseElement)<BookingOptionProps>(
	({ theme }) => css`
		cursor: pointer;

		display: inline-flex;
		background-color: white;

		border-style: solid;
		border-width: 1px;
		border-color: var(--color-gray-400);
		border-radius: 0.25rem;

		padding: 0.25rem 0.5rem;

		transition-property: transform, box-shadow;
		transition-duration: 200ms;

		box-shadow: var(--elevation-1);
		font-size: ${theme.typography.caption.fontSize};

		&:active {
			background-color: var(--color-gray-200) !important;
		}

		&:hover {
			transform: translateY(-5%);
			box-shadow: var(--elevation-3);
		}

		&[aria-checked='true'] {
			pointer-events: none;
			background-color: blue;
		}

		&:focus-visible {
			outline: solid 2px var(--color-gray-800);
			outline-offset: 3px;
		}
	`
);
