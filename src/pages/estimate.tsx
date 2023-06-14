import { type GetStaticProps, type NextPage } from 'next';
import { Block } from '../components/base/Block';
import { Container } from '../components/base/Container';
import { Estimator } from '../components/block/Estimator';
import { type FooterBlockProps } from '../components/block/FooterBlock';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps
} from '../components/block/PageHeaderBlock';
import { PageTitle } from '../components/utility/PageTitle';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { generateFooter, generatePageHeaderBlock } from '../utils/chance';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
};

const Page: NextPage<PageProps> = props => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageTitle text="Estimate" />
		<PageHeaderBlock
			title="Estimate"
			description="Fill out the required information in the form, including details about the product or service you are interested in, and submit the form. Our team will review your request and provide you with a quote as soon as possible."
			ImageProps={{
				src: 'assets/juicy-woman-and-a-man-drink-coffee-min@ogw.webp',
				alt: 'Book an Appointment w/ Graphix Collab'
			}}
			// add 'contact us' actions
		/>
		<Block>
			<Container>
				<Estimator />
			</Container>
		</Block>
	</DefaultLayout>
);

/*
Add 5 questions
- what items do they want? type, garment
- what is the quantity? what sizes?
- when do they need it by?
- logistics, pick up or ship

in email, open picture of artwork
- what artwork?
*/

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		PageHeaderBlockProps: generatePageHeaderBlock(),
		FooterProps: generateFooter()
	}
});

export default Page;
