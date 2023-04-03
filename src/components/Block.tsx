import { css, styled } from "@mui/material";
import { ComponentPropsWithoutRef, FC } from "react";

type BaseElementProps = ComponentPropsWithoutRef<"div">;

export interface BlockProps {
	color?: "primary" | "secondary" | "grey";
	rounded?: boolean;
}

const BaseElement: FC<BaseElementProps> = (props) => (
	<div {...props} className={`Block-root ${props.className}`}>
		{props.children}
	</div>
);

export const Block = styled(BaseElement)<BlockProps>((props) => {
	const blockColor = {
		default: "transparent",
		primary: props.theme.palette.primary.light,
		secondary: props.theme.palette.secondary.light,
		grey: props.theme.palette.grey[100],
	}[props.color ?? "default"];

	return css`
		background-color: ${blockColor};
		position: relative;

		border-radius: ${props.rounded ? "0.5rem" : "0rem"};

		padding-block: 4rem;
		padding-inline: 1.5rem;

		${props.theme.breakpoints.up("md")} {
			padding-block: 7rem;
			padding-inline: 2rem;
		}

		${props.theme.breakpoints.up("xl")} {
			padding-inline: 4rem;
		}
	`;
});
