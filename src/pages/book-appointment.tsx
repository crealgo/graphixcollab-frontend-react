import {type GetStaticProps, type NextPage} from 'next';
import {PageHeaderBlock, type PageHeaderBlockProps} from '../components/block/PageHeaderBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {generateFooter, generatePageHeaderBlock} from '../utils/chance';
import {type FooterBlockProps} from '../components/block/FooterBlock';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
};

const ServicesPage: NextPage<PageProps> = props => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageHeaderBlock navigationType='anchor-link' title='Book Appointment'/>
		{/* Start Square Appointments Embed Code */}
		<script src='https://square.site/appointments/buyer/widget/pgkiyyqcz8g07b/LAR1DB5CED0WQ.js'/>
		{/* End Square Appointments Embed Code */}
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		PageHeaderBlockProps: generatePageHeaderBlock(),
		FooterProps: generateFooter(),
	},
});

export default ServicesPage;
