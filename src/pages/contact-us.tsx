import {type GetStaticProps, type NextPage} from 'next';
import {Block} from '@graphixcollab/components/Block.tsx';
import {Container} from '@graphixcollab/components/Container.tsx';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps,
} from '@graphixcollab/components/PageHeaderBlock.tsx';
import {PageTitle} from '@graphixcollab/components/PageTitle.tsx';
import {ContactForm} from '@graphixcollab/components/ContactForm.tsx';
import {DefaultLayout} from '@graphixcollab/components/DefaultLayout.tsx';

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
