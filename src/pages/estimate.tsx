import {type GetStaticProps, type NextPage} from 'next';
import {Block} from '../components/base/Block';
import {Container} from '../components/base/Container';
import {EstimateForm} from '../forms/EstimateForm';
import {type FooterBlockProps} from '../components/block/FooterBlock';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps,
} from '../components/block/PageHeaderBlock';
import {PageTitle} from '../components/utility/PageTitle';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {generateFooter, generatePageHeaderBlock} from '../utils/chance';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
};

const Page: NextPage<PageProps> = props => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageTitle text='Estimate'/>
		<PageHeaderBlock
			title='Estimate'
			color='key'
			description='Fill out the required information in the form, including details about the product or service you are interested in, and submit the form. Our team will review your request and provide you with a quote as soon as possible.'
			ImageProps={{
				src: 'assets/juicy-woman-and-a-man-drink-coffee-min@ogw.webp',
				alt: 'Book an Appointment w/ Graphix Collab',
			}}
			// add 'contact us' actions
		/>
		<Block>
			<Container>
				<EstimateForm/>
			</Container>
		</Block>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		PageHeaderBlockProps: generatePageHeaderBlock(),
		FooterProps: generateFooter(),
	},
});

export default Page;
