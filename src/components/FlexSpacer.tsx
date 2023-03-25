import {styled} from '@mui/material';

type FlexSpacerProps = {
	orientation?: 'horizontal' | 'vertical';
};

export const FlexSpacer = styled('div')<FlexSpacerProps>`
	flex-grow: 1;
`;
