import styled from '@emotion/styled';
import {type ComponentPropsWithoutRef, type FC, type ReactNode} from 'react';
import {type InputProps} from './Input';
import {type Size} from '../../types/general';

type ExposedInputProps = Pick<InputProps, 'ref'>;
type BaseElementProps = ComponentPropsWithoutRef<'div'>;

export type InputGroupProps = {
	startContent?: ReactNode;
	endContent?: ReactNode;
	InputProps?: InputProps;
	size?: Size;
} & BaseElementProps &
	ExposedInputProps;

const InputElementWrapper = styled.div`
	display: inline-flex;
	position: relative;
	gap: 0.25rem;
`;

const BaseContentElement = styled.span`
	width: clamp(2rem);
	/* position: absolute; */
	top: 0;
	bottom: 0;
`;

const StartContent = styled(BaseContentElement)`
	left: 0;
`;

const EndContent = styled(BaseContentElement)`
	right: 0;
`;

export const InputGroup: FC<InputGroupProps> = ({
	startContent,
	endContent,
	InputProps,
	ref,
	children,
	...props
}) => (
	<InputElementWrapper {...props}>
		{startContent && <StartContent>{startContent}</StartContent>}
		{children}
		{endContent && <EndContent>{endContent}</EndContent>}
	</InputElementWrapper>
);
