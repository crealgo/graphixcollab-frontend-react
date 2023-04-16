import {Chip, type ChipProps, styled} from '@mui/material';
import {forwardRef} from 'react';

const StyledChip = styled(Chip)`
	padding: 0.125rem 0.25rem;
	border-radius: 0.25rem;
`;

export const Tag = forwardRef<HTMLDivElement, ChipProps>(({children, ...props}, ref) => (
	<StyledChip {...props} ref={ref}/>
));

Tag.defaultProps = {
	size: 'small',
	color: 'primary',
};

Tag.displayName = 'Tag';
