import { KeyboardArrowRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, type ComponentPropsWithRef } from "react";
import { useAppState } from "../../hooks/useAppState";
import { colorIterator } from "../../utils/colorIterator";
import { ActionStack, ActionStackProps } from "./ActionStack";
import { Button } from "./Button";
import { Image, type ImageProps } from "./Image";
import clsx from "clsx";

interface CardProps extends ComponentPropsWithRef<"a"> {
	title?: string;
	subtitle?: string;
	description?: string;
	ImageProps?: ImageProps;
	actions?: ActionStackProps["actions"];
}

const CardAnchor = styled("a")`
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
`;

export const HorizontalCard: FC<CardProps> = ({ title, subtitle, description, className, ImageProps, actions, ...props }) => {
	const { toggleBooking } = useAppState();

	return (
		<CardAnchor className={clsx('HorizontalCard-root', className)} {...props}>
			<Image className="image" />
			<div className="content">
				<Typography variant="caption">{subtitle}</Typography>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="caption">{description}</Typography>
				<ActionStack actions={actions}>
					<Button
						color="secondary"
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
