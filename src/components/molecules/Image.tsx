import { css, styled } from "@mui/material";
import clsx from "clsx";
import { ComponentPropsWithRef, FC, ReactNode } from "react";

export type ImageProps = ComponentPropsWithRef<"img"> & {
	caption?: ReactNode;
};

const BaseElement: FC<ImageProps> = ({ className, onLoad: userOnLoad, onError: userOnError, caption, ...props }) => {
	const onLoad: ImageProps["onLoad"] = (event) => {
		console.log("loaded");

		userOnLoad?.(event);
	};

	const onError: ImageProps["onError"] = (event) => {
		console.log("loaded");

		userOnError?.(event);
	};

	return (
		<figure className={clsx("Image-root", className)}>
			<div>
				<img className="Image-element" onLoad={onLoad} onError={onError} {...props} />
			</div>
			<figcaption className="Image-caption">{caption}</figcaption>
		</figure>
	);
};

export const Image = styled(BaseElement)(
	({ theme }) => css`
		margin: unset;
		padding: unset;
		border: unset;
		outline: unset;

		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;


		/* FIXME: doesn't work well with caption, needs wrapper around image */

		.Image-element {
			outline: unset;
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 0.25rem;
			aspect-ratio: 1;
			background-color: ${theme.palette.grey[200]};
		}

		&[loaded] {
		}
	`
);
