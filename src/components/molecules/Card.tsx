import { KeyboardArrowRight } from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import { css, styled, useTheme } from "@mui/material/styles";
import { FC, type ComponentPropsWithRef } from "react";
import { useAppState } from "../../hooks/useAppState";
import { type ServiceOptions } from "../../types/general";
import { chance } from "../../utils/chance";
import { ActionStack } from "./ActionStack";
import { Button } from "./Button";
import { Image, type ImageProps } from "./Image";
import clsx from "clsx";

interface CardProps extends ServiceOptions, ComponentPropsWithRef<"a"> {
	ImageProps?: ImageProps;
}

const CardAnchor = styled("a")(() => {
	const randomRotation = `${chance.bool() ? "" : "-"}${chance.natural({ min: 2, max: 7 })}`;

	return css`
		cursor: pointer;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1rem;
		text-align: center;

		.image {
			aspect-ratio: 1;
			position: relative;
			border-radius: 0.5rem;
			overflow: hidden;
			transition: all 200ms;

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
				justify-content: center;
				margin-top: 0.5rem;
				justify-content: start;
			}
		}

		&:hover {
			.image {
				transform: translateY(-5px) rotate(${randomRotation}deg);
			}
		}
	`;
});

export const Card: FC<CardProps> = ({ title, subtitle, description, className, imageSrc, ImageProps, ...props }) => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down("sm"));
	const { toggleBooking } = useAppState();

	return (
		<CardAnchor className={clsx('Card-root', className)} {...props}>
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
