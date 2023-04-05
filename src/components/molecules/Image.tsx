import { styled } from "@mui/material";
import { ComponentPropsWithRef, FC } from "react";

export type ImageProps = ComponentPropsWithRef<"img">;

const BaseElement: FC<ImageProps> = ({ onLoad: userOnLoad, onError: userOnError, ...props }) => {
	const onLoad: ImageProps["onLoad"] = (event) => {
		console.log("loaded");

		userOnLoad?.(event);
	};

	const onError: ImageProps["onError"] = (event) => {
		console.log("loaded");

		userOnError?.(event);
	};

	return (
		<figure>
			<img onLoad={onLoad} onError={onError} {...props} />
			<figcaption>{"hello"}</figcaption>
		</figure>
	);
};

export const Image = styled(BaseElement)`
	&[loaded] {
	}
`;
