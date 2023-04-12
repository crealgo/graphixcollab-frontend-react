import { GetStaticProps, NextPage } from "next";
import Script from "next/script";
import { CalloutBlock } from "../components/blocks/CalloutBlock";
import { FaqBlock } from "../components/blocks/FaqBlock";
import { InteractiveEstimator } from "../components/blocks/InteractiveEstimator";
import { PageHeaderBlock } from "../components/blocks/PageHeaderBlock";
import { ServicesBlock } from "../components/blocks/ServicesBlock";
import { TimelineBlock } from "../components/blocks/TimelineBlock";
import { DefaultLayout } from "../layouts/DefaultLayout";
import {
	generateCalloutBlock,
	generateFaqBlock,
	generateFooter,
	generatePageHeaderBlock,
	generateServicesBlock,
} from "../utils/chance";

const ServicesPage: NextPage<any> = (props) => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageHeaderBlock {...props.PageHeaderBlockProps} title="Services" />
		<ServicesBlock {...props.ServicesBlockProps} />
		<TimelineBlock />
		<InteractiveEstimator />
		<CalloutBlock {...props.CalloutBlockProps} />
		<FaqBlock {...props.FaqBlockProps} />
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			FooterProps: generateFooter(),
			PageHeaderBlockProps: generatePageHeaderBlock(),
			ServicesBlockProps: generateServicesBlock(),
			CalloutBlockProps: generateCalloutBlock(),
			FaqBlockProps: generateFaqBlock(),
		},
	};
};

export default ServicesPage;
