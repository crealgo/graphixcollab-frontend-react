import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

type ContentGridProps = {
	size?: 'small' | 'medium' | 'large';
	align?: 'left' | 'center';
};

export const ContentGrid = styled(Box)<ContentGridProps>(({ size }) => {
	const gapValue = {
		small: '1rem',
		medium: '2rem',
		large: '3rem'
	}[size ?? 'medium'];

	return {
		display: 'grid',
		gridTemplateColumns: '1fr',
		alignContent: 'start',
		gap: gapValue
	};
});

ContentGrid.defaultProps = {
	className: 'ContentGrid-root'
};
