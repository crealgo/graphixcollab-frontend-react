import {type GetStaticProps, type NextPage} from 'next';
import {Block} from '@graphixcollab/components/Block.tsx';
import {Container} from '@graphixcollab/components/Container.tsx';
import {EstimateForm} from '@graphixcollab/components/EstimateForm.tsx';
import {type FooterBlockProps} from '@graphixcollab/components/FooterBlock.tsx';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps,
} from '@graphixcollab/components/PageHeaderBlock.tsx';
import {PageTitle} from '@graphixcollab/components/PageTitle.tsx';
import {DefaultLayout} from '@graphixcollab/components/DefaultLayout.tsx';
import {generateFooter, generatePageHeaderBlock} from '@graphixcollab/utils/chance.ts';

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
