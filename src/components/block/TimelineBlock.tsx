import { Block } from "../base/Block";
import { type FC } from "react";
import { Button } from "../base/Button";
import { Container } from "../base/Container";
import defaultEvents from "../../assets/content/timeline-screen-printing";
import { Heading } from "../base/Heading";
import { Select } from "../base/Select";
import { MobileTimelineEvent } from "../base/MobileTimelineEvent";
import { EventBlockProps, TimelineEvent } from "../base/TimelineEvent";
import { Timeline } from "../base/Timeline";
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
