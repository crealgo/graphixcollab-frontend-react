import { ActionStack } from "@components/ActionStack";
import { Container } from "@components/Container";
import { IconButton } from "@components/IconButton";
import { type IconButtonBaseProps } from "@components/IconButtonBase";
import { type ImageProps } from "@components/Image";
import { type Action } from "@global/generalTypes";
import { Close } from "@mui/icons-material";
import { css, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMemo, useRef, type FC } from "react";
import Marquee from "react-fast-marquee";
import { Block } from "./Block";

export type BannerProps = {
	title?: string;
	description?: string;
	actions?: Action[];
	onCloseClick?: IconButtonBaseProps["onClick"];
	ImageProps?: ImageProps;
};

const StyledBlock = styled(Block)(
	({ theme }) => css`
		position: relative;
		background-color: ${theme.palette.error.light};
		padding-block: 0.5rem !important;
	`
);

const ContentContainer = styled(Container)(
	({ theme }) => css`
		display: flex;
		align-items: center;
		white-space: nowrap;
		gap: 1rem;

		.marquee {
			flex-grow: 1;
		}

		.ActionStack-root {
			display: none;
		}

		${theme.breakpoints.up("md")} {
			.ActionStack-root {
				display: flex;
			}
		}
	`
);

const BannerClose = styled(IconButton)`
	height: 1.5rem;
	font-size: 1rem;
`;

export const Banner: FC<BannerProps> = ({ title, description, actions, onCloseClick }) => {
	const textRef = useRef<HTMLParagraphElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const playMarquee = useMemo(() => {
		if (textRef.current && containerRef.current) {
			console.log(textRef.current, containerRef.current);

			return textRef.current.offsetWidth > containerRef.current.offsetWidth;
		}

		return false;
	}, [textRef, containerRef]);

	return (
		<StyledBlock title={`${title ? `${title} | ` : ""}${description ?? ""}`}>
			<ContentContainer>
				{/* <BannerImage {...ImageProps} /> */}
				<Marquee play={playMarquee} gradient={false} pauseOnHover>
					<Typography color="white" variant="caption" ref={textRef}>
						<b>{title}</b> {description}
					</Typography>
				</Marquee>
				<ActionStack size="small" actions={actions}></ActionStack>
				<BannerClose Icon={Close} onClick={onCloseClick} />
			</ContentContainer>
		</StyledBlock>
	);
};
