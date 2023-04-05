import { ActionStack } from "@components/ActionStack";
import { Container } from "@components/Container";
import { IconButton } from "@components/IconButton";
import { type IconButtonBaseProps } from "@components/IconButtonBase";
import { type ImageProps } from "@components/Image";
import { type Action } from "@global/generalTypes";
import { Close } from "@mui/icons-material";
import { css, styled } from "@mui/material";
import { useMemo, useRef, type FC, PropsWithChildren, useCallback, useEffect, useLayoutEffect } from "react";
import { Block } from "./Block";
import Marquee from "react-fast-marquee";

export type BannerProps = PropsWithChildren<{
	actions?: Action[];
	onCloseClick?: IconButtonBaseProps["onClick"];
	ImageProps?: ImageProps;
}>;

const StyledBlock = styled(Block)(
	({ theme }) => css`
		display: block;
		position: relative;
		background-color: ${theme.palette.error.light};
		padding-block: 0.5rem !important;
		color: white;

		.Banner-container {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			gap: 1rem;
		}

		.Banner-content {
			display: grid;
			grid-template-columns: auto auto;
			justify-content: center;

			width: 100%;
		}

		.Banner-textContent {
			font-size: 14px;
			font-weight: 500;
			line-height: var(--height-small-input);

			display: inline-block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.Banner-actionStack .Button-root,
		.Banner-closeButton {
			color: white;
		}

		.Banner-closeButton {
			flex: none;
		}
	`
);

const BannerClose = styled(IconButton)`
	height: 1.5rem;
	font-size: 1rem;
`;

export const Banner: FC<BannerProps> = ({ actions, onCloseClick, children }) => {
	const textRef = useRef<HTMLParagraphElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const playMarquee = useMemo(() => {
		if (textRef.current && containerRef.current) {
			console.log(textRef.current, containerRef.current);

			return textRef.current.offsetWidth > containerRef.current.offsetWidth;
		}

		return false;
	}, [textRef, containerRef]);

	const TextWrapper = playMarquee ? Marquee : "span";
	const TextWrapperProps = playMarquee ? Marquee : "span";

	const resolvedTitle = typeof children === "string" ? children : "";

	return (
		<StyledBlock className="Banner-root" title={resolvedTitle}>
			<Container className="Banner-container" ref={containerRef}>
				<div className="Banner-content">
					<span ref={textRef} className="Banner-textContent">
						{children}
					</span>
					{actions?.length && (
						<ActionStack className="Banner-actionStack" size="small" color="text" actions={actions} />
					)}
				</div>
				<BannerClose
					className="Banner-closeButton"
					aria-label="Close Banner"
					color="text"
					Icon={Close}
					onClick={onCloseClick}
				/>
			</Container>
		</StyledBlock>
	);
};
