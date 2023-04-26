import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';

const BaseElement: FC<
	ComponentPropsWithoutRef<'div'> & {
		name?: string;
	}
> = ({name, children, ...props}) => (
	<div {...props} role="radiogroup" aria-labelledby={name}>
		<span hidden id={name}>
			Some Title
		</span>
		{children}
	</div>
);

export const BookingOptionGroup = styled(BaseElement)(
	({theme}) => css`
		border: unset;
		padding: unset;

		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;
		/*
	${theme.breakpoints.up('md')} {
		grid-template-columns: repeat(2, 1fr);
	} */
	`
);
