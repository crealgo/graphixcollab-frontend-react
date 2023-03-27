import { Banner, BannerProps } from "@components/Banner";
import Collapse from "@mui/material/Collapse";
import { FC } from "react";

export interface BannerServiceProps extends BannerProps {
	open?: boolean;
}

export const BannerService: FC<BannerServiceProps> = ({
	open, ...BannerProps
}) => (
	<Collapse in={open}>
		<Banner {...BannerProps} />
	</Collapse>
);
