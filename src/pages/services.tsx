import { type GetStaticProps, type NextPage } from 'next';
import { Mark } from '../components/base/Mark';
import { type CalloutBlockProps } from '../components/block/CalloutBlock';
import { FaqBlock, type FaqBlockProps } from '../components/block/FaqBlock';
import { type FooterBlockProps } from '../components/block/FooterBlock';
import { InteractiveEstimator } from '../components/block/InteractiveEstimator';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps
} from '../components/block/PageHeaderBlock';
import {
	ServicesBlock,
	type ServicesBlockProps
} from '../components/block/ServicesBlock';
import { TimelineBlock } from '../components/block/TimelineBlock';
import services from '../content/services.json';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { generateFaqBlock, generateFooter } from '../utils/chance';
import { PageTitle } from '../components/utility/PageTitle';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
	serviceBlocks: ServicesBlockProps[];
	CalloutBlockProps: CalloutBlockProps;
	FaqBlockProps: FaqBlockProps;
};

const ServicesPage: NextPage<PageProps> = ({
	PageHeaderBlockProps,
	FooterProps,
	serviceBlocks,
	FaqBlockProps
}) => (
	<DefaultLayout FooterProps={FooterProps}>
		<PageTitle text="Services" />
		<PageHeaderBlock
			{...PageHeaderBlockProps}
			title={<Mark brand>Our Services</Mark>}
		/>
		{serviceBlocks.map((props, index) => (
			<ServicesBlock key={index} {...props} />
		))}
		<TimelineBlock />
		<InteractiveEstimator />
		<FaqBlock {...FaqBlockProps} />
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		FooterProps: generateFooter(),
		PageHeaderBlockProps: {
			description:
				"We offer a wide range of screen printing services to meet your needs. Whether you're looking for custom t-shirts, posters, stickers, or other promotional materials, we have you covered. Here are some of our most popular services. With our state-of-the-art printing technology, experienced team, and commitment to quality, we are your trusted partner for all things printing. Explore our comprehensive range of services below",
			ImageProps: {
				src: 'assets/juicy-team-discussing-the-project-min@512w.webp',
				alt: 'Team Discussing the Project'
			}
		},
		serviceBlocks: [
			// TODO: DEV
			// {
			// 	title: 'All',
			// 	services
			// },
			{
				title: 'Printing Services',
				description:
					'Printing solutions in various mediums and products such as paper, vinyl, and t-shirts through processes such as offset, digital, screen, and 3D printing.',
				services: services.filter(s => s.tags.includes('printing'))
			},
			{
				title: 'Graphic Design Services',
				description:
					'Creation of visual content, such as logos, branding, layouts, illustrations, and digital images',
				services: services.filter(s =>
					s.tags.includes('graphic-design')
				)
			},
			{
				title: 'Small Business Services',
				services: services.filter(s =>
					s.tags.includes('small-business')
				)
			}
		],
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
