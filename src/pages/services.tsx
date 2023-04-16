import {type GetStaticProps, type NextPage} from 'next';
import Script from 'next/script';
import {CalloutBlock} from '../components/block/CalloutBlock';
import {FaqBlock} from '../components/block/FaqBlock';
import {InteractiveEstimator} from '../components/block/InteractiveEstimator';
import {PageHeaderBlock} from '../components/block/PageHeaderBlock';
import {ServicesBlock} from '../components/block/ServicesBlock';
import {TimelineBlock} from '../components/block/TimelineBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {
	generateCalloutBlock,
	generateFaqBlock,
	generateFooter,
	generatePageHeaderBlock,
	generateServicesBlock,
} from '../utils/chance';

const ServicesPage: NextPage<any> = props => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageHeaderBlock {...props.PageHeaderBlockProps} title='Services'/>
		<ServicesBlock {...props.ServicesBlockProps}/>
		<TimelineBlock/>
		<InteractiveEstimator/>
		<CalloutBlock {...props.CalloutBlockProps}/>
		<FaqBlock {...props.FaqBlockProps}/>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps = () => ({
	props: {
		FooterProps: generateFooter(),
		PageHeaderBlockProps: generatePageHeaderBlock(),
		ServicesBlockProps: generateServicesBlock(),
		CalloutBlockProps: generateCalloutBlock(),
		FaqBlockProps: generateFaqBlock(),
	},
});

export default ServicesPage;
