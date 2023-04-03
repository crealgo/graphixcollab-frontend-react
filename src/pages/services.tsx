import { CalloutBlock } from "@components/CalloutBlock";
import { FaqBlock } from "@components/FaqBlock";
import { InteractiveEstimator } from "@components/InteractiveEstimator";
import { PageHeaderBlock } from "@components/PageHeaderBlock";
import { ServicesBlock } from "@components/ServicesBlock";
import { TimelineBlock } from "@components/TimelineBlock";
import { PageProps } from "@global/generalTypes";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { generateCalloutBlock, generateFaqBlock, generatePageHeaderBlock, generateServicesBlock, generateTimelineBlock } from "@utils/chance";
import { NextPage } from "next";

const ServicesPage: NextPage<PageProps> = () => (
	<DefaultLayout>
		<PageHeaderBlock {...generatePageHeaderBlock()} title="Services" />
		<ServicesBlock {...generateServicesBlock()} />
		<TimelineBlock {...generateTimelineBlock()} />
		<InteractiveEstimator />
		<CalloutBlock {...generateCalloutBlock()} />
		<FaqBlock {...generateFaqBlock()} />
	</DefaultLayout>
);

export default ServicesPage;
