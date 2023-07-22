import {styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';

const BaseElement: FC<
ComponentPropsWithoutRef<'div'> & {
	name?: string;
}
> = ({name, children, ...props}) => (
	<div {...props} role='radiogroup' aria-labelledby={name}>
		<span hidden id={name}>
			Some Title
		</span>
		{children}
	</div>
);

export const TimeSlotGroup = styled(BaseElement)`
	border: dashed 1px var(--color-gray-400);
	background-color: white;
	padding: 1rem;

	display: flex;
	gap: 0.5rem;
`;
