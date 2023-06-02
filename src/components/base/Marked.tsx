import { type FC, type ReactNode } from 'react';
import { Dots } from './Dots';
import styled from '@emotion/styled';

type MarkedProps = {
	className?: string;
	children?: ReactNode;
};

const Wrapper = styled.span`
	position: relative;
`;

export const Marked: FC<MarkedProps> = ({ children, className }) => {
	return (
		<Wrapper className={className}>
			{children}
			<Dots />
		</Wrapper>
	);
};
