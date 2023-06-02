import styled from '@emotion/styled';
import { type FC } from 'react';

const StyledDiv = styled.div`
	flex-grow: 1;
`;

// Cleaning Props by re-exporting
export const FlexSpacer: FC = () => <StyledDiv />;
