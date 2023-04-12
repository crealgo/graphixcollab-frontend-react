import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { InputProps } from "./Input";

type ExposedInputProps = Pick<InputProps, "ref">;
type BaseElementProps = ComponentPropsWithoutRef<"div">;

export interface InputGroupProps extends BaseElementProps, ExposedInputProps {
	startContent?: ReactNode;
	endContent?: ReactNode;
	InputProps?: InputProps;
}

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

export const InputGroup: FC<InputGroupProps> = ({ startContent, endContent, InputProps, ref, children, ...props }) => (
	<InputElementWrapper {...props}>
		{startContent && <StartContent>{startContent}</StartContent>}
		{children}
		{endContent && <EndContent>{endContent}</EndContent>}
	</InputElementWrapper>
);
