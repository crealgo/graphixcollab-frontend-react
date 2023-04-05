import { GetStaticProps, NextPage } from "next";
import { PageHeaderBlock } from "../components/elements/PageHeaderBlock";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { generateFooter, generatePageHeaderBlock } from "../utils/chance";
import Script from "next/script";

const ServicesPage: NextPage<any> = (props) => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageHeaderBlock navigationType="anchor-link" title="Book Appointment" />
		{/* Start Square Appointments Embed Code */}
		<script src="https://square.site/appointments/buyer/widget/pgkiyyqcz8g07b/LAR1DB5CED0WQ.js" />
		{/* End Square Appointments Embed Code */}
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			PageHeaderBlockProps: generatePageHeaderBlock(),
			FooterProps: generateFooter()
		},
	};
};

export default ServicesPage;
