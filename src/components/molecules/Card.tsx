import { KeyboardArrowRight } from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import { css, styled, useTheme } from "@mui/material/styles";
import { FC, type ComponentPropsWithRef } from "react";
import { useAppState } from "../../hooks/useAppState";
import { type ServiceOptions } from "../../types/general";
import { chance } from "../../utils/chance";
import { colorIterator } from "../../utils/colorIterator";
import { ActionStack } from "./ActionStack";
import { Button } from "./Button";
import { Image, type ImageProps } from "./Image";

interface ServiceCardProps extends ServiceOptions, ComponentPropsWithRef<"a"> {
	ImageProps?: ImageProps;
}

const CardAnchor = styled("a")(({ theme }) => {
	const randomRotation = `${chance.bool() ? "" : "-"}${chance.natural({ min: 2, max: 7 })}`;

	return css`
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1rem;

		.image {
			aspect-ratio: 1;
			position: relative;
			border-radius: 0.5rem;
			overflow: hidden;

			.Image-root {
				z-index: 0;
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				object-fit: cover;

				transition: all 300ms;
			}
		}

		.content {
			display: grid;
			align-content: start;
			grid-template-columns: 1fr;
			gap: 0.5rem;

			.ActionStack {
				margin-top: 0.5rem;
				justify-content: start;
			}
		}

		${colorIterator("background", ".image")}

		${theme.breakpoints.up("sm")} {
			text-align: center;
			grid-template-columns: 1fr;

			.content {
				.ActionStack {
					justify-content: center;
				}
			}

			.image {
				transition: all 200ms;
			}

			&:hover {
				.image {
					transform: translateY(-5px) rotate(${randomRotation}deg);
				}
			}
		}
	`;
});

export const Card: FC<ServiceCardProps> = ({ title, subtitle, description, imageSrc, ImageProps, ...props }) => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down("sm"));
	const { toggleBooking } = useAppState();

	return (
		<CardAnchor {...props}>
			<Image className="image" />
			<div className="content">
				<Typography variant="caption">{subtitle}</Typography>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="caption">{description}</Typography>
				<ActionStack align={isMobile ? "start" : "center"}>
					<Button
						color={isMobile ? "secondary" : "text"}
						size="small"
						endIcon={<KeyboardArrowRight />}
						onClick={() => {
							toggleBooking();
						}}
					>
						{"Book Appointment"}
					</Button>
				</ActionStack>
			</div>
		</CardAnchor>
	);
};
