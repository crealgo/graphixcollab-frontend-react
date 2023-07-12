import { type GetStaticProps, type NextPage } from 'next';
import { Block } from '../components/base/Block';
import { Container } from '../components/base/Container';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps
} from '../components/block/PageHeaderBlock';
import { PageTitle } from '../components/utility/PageTitle';
import { ContactForm } from '../forms/ContactForm';
import { DefaultLayout } from '../layouts/DefaultLayout';

type PageProps = {
	pageTitle: string;
	pageHeaderProps: PageHeaderBlockProps;
};

const Page: NextPage<PageProps> = props => {
	return (
		<DefaultLayout>
			<PageTitle text={props.pageTitle} />
			<PageHeaderBlock
				title={props.pageTitle}
				{...props.pageHeaderProps}
			/>
			<Block>
				<Container>
					<ContactForm />
				</Container>
			</Block>
		</DefaultLayout>
	);
};

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
	props: {
		pageTitle: 'Contact Us',
		pageHeaderProps: {
			description: '',
			ImageProps: {
				src: 'assets/juicy-woman-and-a-man-drink-coffee-min@ogw.webp',
				alt: 'Book an Appointment w/ Graphix Collab'
			}
		}
	}
});

export default Page;
