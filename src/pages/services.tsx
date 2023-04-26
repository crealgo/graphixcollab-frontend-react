import {type GetStaticProps, type NextPage} from 'next';
import {
	CalloutBlock,
	type CalloutBlockProps
} from '../components/block/CalloutBlock';
import {FaqBlock, type FaqBlockProps} from '../components/block/FaqBlock';
import {type FooterBlockProps} from '../components/block/FooterBlock';
import {InteractiveEstimator} from '../components/block/InteractiveEstimator';
import {type PageHeaderBlockProps} from '../components/block/PageHeaderBlock';
import {
	ServicesBlock,
	type ServicesBlockProps
} from '../components/block/ServicesBlock';
import {TimelineBlock} from '../components/block/TimelineBlock';
import services from '../content/services.json';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {
	generateFaqBlock,
	generateFooter,
	generatePageHeaderBlock
} from '../utils/chance';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
	ServicesBlockProps: ServicesBlockProps;
	CalloutBlockProps: CalloutBlockProps;
	FaqBlockProps: FaqBlockProps;
};

const ServicesPage: NextPage<PageProps> = ({
	FooterProps,
	ServicesBlockProps,
	CalloutBlockProps,
	FaqBlockProps
}) => (
	<DefaultLayout pageTitle="Services" FooterProps={FooterProps}>
		<ServicesBlock {...ServicesBlockProps} />
		<TimelineBlock />
		<InteractiveEstimator />
		<CalloutBlock {...CalloutBlockProps} />
		<FaqBlock {...FaqBlockProps} />
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		FooterProps: generateFooter(),
		PageHeaderBlockProps: generatePageHeaderBlock(),
		ServicesBlockProps: {
			title: 'Our Services',
			// subtitle: 'blah',
			description:
				"We offer a wide range of screen printing services to meet your needs. Whether you're looking for custom t-shirts, posters, stickers, or other promotional materials, we have you covered. Here are some of our most popular services. With our state-of-the-art printing technology, experienced team, and commitment to quality, we are your trusted partner for all things printing. Explore our comprehensive range of services below",
			services: services
		},
		CalloutBlockProps: {
			meta: 'Graduation Sashes',
			title: "It's sash season!",
			description:
				"Enhance your college graduation with our personalized sash embroidery! Our custom-designed sashes add elegance and style to your special day. Contact us now to create a keepsake you'll treasure forever!",
			actions: [
				{
					label: 'Book a time',
					color: 'primary'
				},
				{
					label: 'Ask a Question',
					color: 'text'
				}
			]
		},
		FaqBlockProps: generateFaqBlock()
	}
});

export default ServicesPage;
