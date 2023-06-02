import {type GetStaticProps, type NextPage} from 'next';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps
} from '../components/block/PageHeaderBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {generateFooter, generatePageHeaderBlock} from '../utils/chance';
import {type FooterBlockProps} from '../components/block/FooterBlock';
import {AppointBookEmbed} from '../components/embed/AppointBookEmbed';
import {PageTitle} from '../components/utility/PageTitle';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
};

const ServicesPage: NextPage<PageProps> = props => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageTitle text="Book Appointment" />
		<PageHeaderBlock title="Book Appointment" />
		<AppointBookEmbed />
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		PageHeaderBlockProps: generatePageHeaderBlock(),
		FooterProps: generateFooter()
	}
});

export default ServicesPage;
