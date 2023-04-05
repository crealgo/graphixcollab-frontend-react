import { StoryObj, type Meta, type StoryFn } from "@storybook/react";
import { useState } from "react";
import { generateBanner } from "@utils/chance";
import { Banner, type BannerProps } from "@components/Banner";
import { Button } from "@components/Button";
import { BannerService } from "@components/BannerService";

export default {
	component: Banner,
	subcomponents: { BannerService },
} as Meta;

export const Default: StoryObj<BannerProps> = {
	args: generateBanner(),
};

export const BannerServiceExample: StoryObj<BannerProps> = {
	render: (args) => {
		const [open, setOpen] = useState(true);

		const handleOpen = () => {
			setOpen(true);
		};

		const handleClose = () => {
			setOpen(false);
		};

		return (
			<>
				<BannerService open={open}>
					<Banner {...args} onCloseClick={handleClose} />
				</BannerService>
				<br />
				<Button onClick={handleOpen}>Open Banner</Button>
			</>
		);
	},

	args: generateBanner(),
};
