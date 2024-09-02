import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type ServiceInformation} from './steps/data';

export type BookingOptionProps = Record<string, unknown> &
ServiceInformation &
ComponentPropsWithoutRef<'input'>;

const BaseElement: FC<BookingOptionProps> = ({label, name, ...props}) => (
	<>
		<label htmlFor={name}>{label}</label>
		<input hidden type='radio' id={name} {...props}/>
	</>
);

export const TimeSlot = styled(BaseElement)<BookingOptionProps>(
	({theme}) => css`
		cursor: pointer;

		display: inline-flex;
		background-color: white;

		border-style: solid;
		border-width: 1px;
		border-color: var(--color-brand-key-lighter);
		border-radius: 0.25rem;

		padding: 0.25rem 0.5rem;

		transition-property: transform, box-shadow;
		transition-duration: 200ms;

		box-shadow: var(--elevation-1);
		font-size: ${theme.typography.caption.fontSize};

		&:active {
			background-color: var(--color-brand-key-lightest) !important;
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
			outline: solid 2px var(--color-brand-key-darker);
			outline-offset: 3px;
		}
	`,
);
