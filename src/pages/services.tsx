import {type GetStaticProps, type NextPage} from 'next';
import {CalloutBlock, type CalloutBlockProps} from '../components/block/CalloutBlock';
import {FaqBlock, type FaqBlockProps} from '../components/block/FaqBlock';
import {type FooterBlockProps} from '../components/block/FooterBlock';
import {InteractiveEstimator} from '../components/block/InteractiveEstimator';
import {PageHeaderBlock, type PageHeaderBlockProps} from '../components/block/PageHeaderBlock';
import {ServicesBlock, type ServicesBlockProps} from '../components/block/ServicesBlock';
import {TimelineBlock} from '../components/block/TimelineBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {
	generateCalloutBlock,
	generateFaqBlock,
	generateFooter,
	generatePageHeaderBlock,
	generateServicesBlock,
} from '../utils/chance';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
	ServicesBlockProps: ServicesBlockProps;
	CalloutBlockProps: CalloutBlockProps;
	FaqBlockProps: FaqBlockProps;
};

const ServicesPage: NextPage<PageProps> = props => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageHeaderBlock {...props.PageHeaderBlockProps} title='Services'/>
		<ServicesBlock {...props.ServicesBlockProps}/>
		<TimelineBlock/>
		<InteractiveEstimator/>
		<CalloutBlock {...props.CalloutBlockProps}/>
		<FaqBlock {...props.FaqBlockProps}/>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		FooterProps: generateFooter(),
		PageHeaderBlockProps: generatePageHeaderBlock(),
		ServicesBlockProps: generateServicesBlock(),
		CalloutBlockProps: generateCalloutBlock(),
		FaqBlockProps: generateFaqBlock(),
	},
});

export default ServicesPage;
