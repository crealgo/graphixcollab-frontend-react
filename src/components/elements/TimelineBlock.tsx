import { Block } from "@components/Block";
import { type FC } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { defaultEvents } from "../assets/data/defaultEvents";
import { Heading } from "./Heading";
import { Select } from "./Select";
import { MobileTimelineEvent } from "./MobileTimelineEvent";
import { EventBlockProps, TimelineEvent } from "./TimelineEvent";
import { Timeline } from "./Timeline";
import { useMediaQuery, useTheme } from "@mui/material";

export const TimelineBlock: FC<{ events?: EventBlockProps[] }> = ({ events = defaultEvents }) => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down("sm"));

	const ResolvedEventComponent = isMobile ? MobileTimelineEvent : TimelineEvent;

	return (
		<Block className="EventBlock-root">
			<Container className="text-center">
				<Heading level={2} className="mb-4">
					See how we work!
				</Heading>
				<div className="flex gap-2 items-center justify-center">
					<span className="mr-2 font-semibold">Pick a process:</span>
					<Select />
					<Button color="secondary">{"Update"}</Button>
				</div>
			</Container>
			<Timeline>
				{events.map((eventDetails, index) => (
					<ResolvedEventComponent key={index} stepNumber={index + 1} {...eventDetails} />
				))}
			</Timeline>
		</Block>
	);
};
