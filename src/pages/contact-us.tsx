import {type GetStaticProps, type NextPage} from 'next';
import {Block} from '../components/base/Block';
import {Container} from '../components/base/Container';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps,
} from '../components/block/PageHeaderBlock';
import {PageTitle} from '../components/utility/PageTitle';
import {ContactForm} from '../forms/ContactForm';
import {DefaultLayout} from '../layouts/DefaultLayout';

type PageProps = {
	pageTitle: string;
	pageHeaderProps: PageHeaderBlockProps;
};

const Page: NextPage<PageProps> = props => (
	<DefaultLayout>
		<PageTitle text={props.pageTitle}/>
		<PageHeaderBlock
			color='key'
			title={props.pageTitle}
			{...props.pageHeaderProps}
		/>
		<Block>
			<Container>
				<ContactForm/>
			</Container>
		</Block>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
	props: {
		pageTitle: 'Contact Us',
		pageHeaderProps: {
			description:
				'Need assistance, have questions, or want to share your thoughts? We\'re here for you! Our "Contact Us" page is your direct line to our dedicated team. Reach out today and experience prompt and friendly customer support. We value your feedback and are eager to provide the assistance you need. Don\'t hesitate to get in touch!',
			ImageProps: {
				src: 'assets/juicy-woman-and-a-man-drink-coffee-min@ogw.webp',
				alt: 'Book an Appointment w/ Graphix Collab',
			},
		},
	},
});

export default Page;
