import styled from '@emotion/styled';
import {type GetStaticProps, type NextPage} from 'next';
import {Container} from '../components/base/Container';
import {Mark} from '../components/base/Mark';
import {type CalloutBlockProps} from '../components/block/CalloutBlock';
import {EstimatorBlock} from '../components/block/EstimatorBlock';
import {FaqBlock, type FaqBlockProps} from '../components/block/FaqBlock';
import {type FooterBlockProps} from '../components/block/FooterBlock';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps,
} from '../components/block/PageHeaderBlock';
import {
	ServicesBlock,
	type ServicesBlockProps,
} from '../components/block/ServicesBlock';
import {TimelineBlock} from '../components/block/TimelineBlock';
import {PageTitle} from '../components/utility/PageTitle';
import services from '../content/services.json';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {generateFaqBlock, generateFooter} from '../utils/chance';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
	serviceBlocks: ServicesBlockProps[];
	CalloutBlockProps: CalloutBlockProps;
	FaqBlockProps: FaqBlockProps;
};

const StyledImage = styled.img`
	display: inline-flex;
	width: 100%;
	max-width: 512px;
`;

const StyledContainer = styled(Container)`
	position: absolute;
	width: 100%;
	top: 0;
	left: 50%;
	transform: translateX(-50%);

	background: transparent;
	z-index: -1;

	display: none;
	place-content: end;

	top: 98rem;

	@media screen and (min-width: 1200px) {
		display: flex;
	}
`;

const StyledContainer2 = styled(StyledContainer)`
	top: 55rem;
`;

const Page: NextPage<PageProps> = ({
	PageHeaderBlockProps,
	FooterProps,
	serviceBlocks,
	FaqBlockProps,
}) => (
	<DefaultLayout FooterProps={FooterProps}>
		<PageTitle text='Services'/>
		<PageHeaderBlock
			{...PageHeaderBlockProps}
			title={<Mark brand>Our Services</Mark>}
		/>
		{serviceBlocks.map((props, index) => (
			<ServicesBlock key={index} {...props}/>
		))}
		<TimelineBlock/>
		<EstimatorBlock/>
		<FaqBlock {...FaqBlockProps}/>
		<StyledContainer>
			<StyledImage
				src='assets/juicy-girl-is-working-on-laptop-at-a-remote-job-min@512w.webp'
				alt='Services 1'
			/>
		</StyledContainer>
		<StyledContainer2>
			<StyledImage
				src='assets/juicy-web-designer-girl-making-landing-page-with-video-color-palette-and-site-blocks-min@512w.webp'
				alt='Services 2'
			/>
		</StyledContainer2>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		FooterProps: generateFooter(),
		PageHeaderBlockProps: {
			description:
				'We offer a wide range of screen printing services to meet your needs. Whether you\'re looking for custom t-shirts, posters, stickers, or other promotional materials, we have you covered. Here are some of our most popular services. With our state-of-the-art printing technology, experienced team, and commitment to quality, we are your trusted partner for all things printing. Explore our comprehensive range of services below',
			ImageProps: {
				src: 'assets/juicy-team-discussing-the-project-min@512w.webp',
				alt: 'Team Discussing the Project',
			},
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
				services: services.filter(s => s.tags.includes('printing')),
			},
			{
				title: 'Graphic Design Services',
				description:
					'Creation of visual content, such as logos, branding, layouts, illustrations, and digital images',
				services: services.filter(s =>
					s.tags.includes('graphic-design'),
				),
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
