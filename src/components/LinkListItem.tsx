import {css, styled} from '@mui/material/styles';

export const LinkListItem = styled('li')(
	({theme}) => css`
		display: block;
		padding-block: 0.75rem;
		border-bottom: solid 1px ${theme.palette.grey[300]};

		&:nth-of-type(1) {
			border-top: solid 1px ${theme.palette.grey[300]};
		}
	`
);
