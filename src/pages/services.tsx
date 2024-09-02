import {type GetStaticProps, type NextPage} from 'next';
import {Mark} from '@graphixcollab/components/Mark';
import {type CalloutBlockProps} from '@graphixcollab/components/CalloutBlock';
import {EstimatorBlock} from '@graphixcollab/components/EstimatorBlock';
import {FaqBlock, type FaqBlockProps} from '@graphixcollab/components/FaqBlock';
import {type FooterBlockProps} from '@graphixcollab/components/FooterBlock';
import {PageHeaderBlock} from '@graphixcollab/components/PageHeaderBlock';
import {
	ServicesBlock,
	type ServicesBlockProps,
} from '@graphixcollab/components/ServicesBlock';
import {TimelineBlock} from '@graphixcollab/components/TimelineBlock';
import {PageTitle} from '@graphixcollab/components/PageTitle';
import services from '@graphixcollab/content/services.json';
import {DefaultLayout} from '@graphixcollab/components/DefaultLayout';
import {generateFaqBlock, generateFooter} from '@graphixcollab/utils/chance';

type PageProps = {
	FooterProps: FooterBlockProps;
	serviceBlocks: ServicesBlockProps[];
	CalloutBlockProps: CalloutBlockProps;
	FaqBlockProps: FaqBlockProps;
};

const Page: NextPage<PageProps> = ({
	FooterProps,
	serviceBlocks,
	FaqBlockProps,
}) => (
	<DefaultLayout FooterProps={FooterProps}>
		<PageTitle text='Services'/>
		<PageHeaderBlock
			color='magenta'
			title={<Mark brand>Our Services</Mark>}
			description="We offer a wide range of screen printing services to meet your needs. Whether you're looking for custom t-shirts, posters, stickers, or other promotional materials, we have you covered. Here are some of our most popular services. With our state-of-the-art printing technology, experienced team, and commitment to quality, we are your trusted partner for all things printing. Explore our comprehensive range of services below"
			ImageProps={{
				src: 'assets/juicy-team-discussing-the-project-min@512w.webp',
				alt: 'Team Discussing the Project',
			}}
		/>
		{serviceBlocks.map((props, index) => (
			<ServicesBlock key={index} {...props}/>
		))}
		<br/>
		<br/>
		{/* <FaqBlock
			title="What's in an estimate?"
			faqs={[
				{
					question: 'What is the difference between an estimate and a quote?',
					answer: 'An estimate is a rough calculation of the cost of a job. A quote is a firm price for a job.',
				}
			]}
		/> */}
		<TimelineBlock/>
		<EstimatorBlock/>
		<FaqBlock {...FaqBlockProps}/>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		FooterProps: generateFooter(),
		serviceBlocks: [
			{
				title: 'Printing Services',
				description:
					'Printing solutions in various mediums and products such as paper, vinyl, and t-shirts through processes such as offset, digital, screen, and 3D printing.',
				services: services.filter(s => s.tags.includes('printing')),
				imageTranslate: '50%',
				ImageProps: {
					src: 'assets/juicy-girl-is-working-on-laptop-at-a-remote-job-min@512w.webp',
					alt: 'Working Remotely',
				},
			},
			{
				title: 'Graphic Design Services',
				description:
					'Creation of visual content, such as logos, branding, layouts, illustrations, and digital images',
				services: services.filter(s =>
					s.tags.includes('graphic-design'),
				),
				imageTranslate: '70%',
				ImageProps: {
					src: 'assets/juicy-web-designer-girl-making-landing-page-with-video-color-palette-and-site-blocks-min@512w.webp',
					alt: 'Designing on a laptop',
				},
			},
			{
				title: 'Small Business Services',
				services: services.filter(s =>
					s.tags.includes('small-business'),
				),
			},
		],
		CalloutBlockProps: {
			meta: 'Graduation Sashes',
			title: 'It\'s sash season!',
			description:
				'Enhance your college graduation with our personalized sash embroidery! Our custom-designed sashes add elegance and style to your special day. Contact us now to create a keepsake you\'ll treasure forever!',
			actions: [
				{
					label: 'Book a time',
					color: 'primary',
				},
				{
					label: 'Ask a Question',
					color: 'text',
				},
			],
		},
		FaqBlockProps: generateFaqBlock(),
	},
});

export default Page;
