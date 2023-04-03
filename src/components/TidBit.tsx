import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorVariants } from "@styles/ColorVariants";
import { FC, PropsWithChildren, ReactNode } from "react";

export type TidBitProps = PropsWithChildren<{
	color?: ColorVariants;
	className?: string;
	icon?: ReactNode;
}>;
const BaseElement: FC<TidBitProps> = ({ children, icon, className, ...props }) => (
	<div className={`TidBit-root ${className}`} {...props}>
		<span className="TidBit-icon">{icon}</span>
		{children}
	</div>
);
export const TidBit = styled(BaseElement)((props) => {
	const resolvedColor = {
		primary: "#B20838",
		secondary: "#FDE047",
		tertiary: "#FFFFFF",
		text: "#FFFFFF",
	}[props.color ?? "primary"];

	return css`
		--background-color: #ffffff;
		--border-color: #cbd5e1;
		--border: 0px 0px 0px 1px var(--border-color);

		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px 20px 10px ${props.icon ? "14px" : "20px"};
		gap: 4px;

		font-weight: 600;
		letter-spacing: -0.01rem;

		border-radius: 9999px;
		background-color: var(--background-color);
		box-shadow: var(--border);

		.TidBit-icon,
		strong {
			color: ${resolvedColor};
		}

		.TidBit-icon {
			display: inline-flex;
			font-size: 24px;
		}
	`;
});
