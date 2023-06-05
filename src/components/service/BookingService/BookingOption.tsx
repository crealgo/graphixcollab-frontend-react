import { type ServiceInformation } from './steps/data';
import { Heading } from '../../base/Heading';
import { css, styled } from '@mui/material';
import { colorIterator } from '../../../utils/colorIterator';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export type BookingOptionProps = Record<string, unknown> &
	ServiceInformation &
	ComponentPropsWithoutRef<'input'>;

const BaseElement: FC<BookingOptionProps> = ({
	label,
	description,
	icon: Icon,
	// Meta,
	checked,
	className,
	name,
	...props
}) => (
	<div
		{...props}
		role="radio"
		aria-checked={checked ? 'true' : 'false'}
		tabIndex={0}
		aria-labelledby={name}
		className={className}
	>
		{Icon && <Icon className="icon" />}
		<Heading id={name} className="label" level={5}>
			{label}
		</Heading>
		<small className="meta">{description}</small>
	</div>
);

export const BookingOption = styled(BaseElement)<BookingOptionProps>(
	({ theme }) => css`
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr;
		align-content: start;
		justify-items: start;
		gap: 0.5rem;

		border-style: solid;
		border-width: 1px;
		border-left-width: 0.25rem;
		border-color: var(--color-gray-400);
		border-radius: 0.25rem;

		padding: 1rem;

		transition-property: transform, border-color;
		transition-duration: 200ms;

		.icon {
			transition: all 200ms;
			font-size: 2rem;
			color: var(--color-gray-500);
		}

		&:active {
			background-color: var(--color-gray-200) !important;
		}

		&:hover {
			${colorIterator('border-left-color')};
			background-color: white;
			${colorIterator('color', '.icon')};
			transform: translateY(-0.25rem);
		}

		&[aria-checked='true'] {
			pointer-events: none;
			${colorIterator('border-left-color')};
			background-color: white;
			${colorIterator('color', '.icon')};
		}

		&:focus-visible {
			outline: solid 2px var(--color-gray-800);
			outline-offset: 3px;
		}
	`
);
