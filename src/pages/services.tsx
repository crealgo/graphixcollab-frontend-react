import { GetStaticProps, NextPage } from "next";
import { CalloutBlock } from "../components/elements/CalloutBlock";
import { FaqBlock } from "../components/elements/FaqBlock";
import { InteractiveEstimator } from "../components/elements/InteractiveEstimator";
import { PageHeaderBlock } from "../components/elements/PageHeaderBlock";
import { ServicesBlock } from "../components/elements/ServicesBlock";
import { TimelineBlock } from "../components/elements/TimelineBlock";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { PageProps } from "../types/general";
import {
	generateCalloutBlock,
	generateFaqBlock,
	generateFooter,
	generatePageHeaderBlock,
	generateServicesBlock,
} from "../utils/chance";
import Head from "next/head";

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
