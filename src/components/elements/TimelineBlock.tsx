import { Block } from "../molecules/Block";
import { type FC } from "react";
import { Button } from "../molecules/Button";
import { Container } from "../molecules/Container";
import defaultEvents from "../../assets/content/timeline-screen-printing";
import { Heading } from "../molecules/Heading";
import { Select } from "../molecules/Select";
import { MobileTimelineEvent } from "../molecules/MobileTimelineEvent";
import { EventBlockProps, TimelineEvent } from "../molecules/TimelineEvent";
import { Timeline } from "../molecules/Timeline";
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
