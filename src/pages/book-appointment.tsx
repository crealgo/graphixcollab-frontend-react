import {type GetStaticProps, type NextPage} from 'next';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps,
} from '../components/block/PageHeaderBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {generateFooter, generatePageHeaderBlock} from '../utils/chance';
import {type FooterBlockProps} from '../components/block/FooterBlock';
import {AppointBookEmbed} from '../components/embed/AppointBookEmbed';
import {PageTitle} from '../components/utility/PageTitle';
import styled from '@emotion/styled';

type PageProps = {
	PageHeaderBlockProps: PageHeaderBlockProps;
	FooterProps: FooterBlockProps;
};

const Spacer = styled.div`
	margin-block: 6rem;
`;

const ServicesPage: NextPage<PageProps> = props => (
	<DefaultLayout FooterProps={props.FooterProps}>
		<PageTitle text='Book Appointment'/>
		<PageHeaderBlock
			color='cyan'
			title='Book Appointment'
			description='Book an appointment to speak with our team! Open doors to a wide range of printing options, from apparel and promotional products to signage and more. Our state-of-the-art equipment and skilled professionals guarantee outstanding results that exceed your expectations.'
			ImageProps={{
				src: 'assets/juicy-woman-and-a-man-drink-coffee-min@ogw.webp',
				alt: 'Book an Appointment w/ Graphix Collab',
			}}
		/>
		<Spacer>
			<AppointBookEmbed/>
		</Spacer>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		PageHeaderBlockProps: generatePageHeaderBlock(),
		FooterProps: generateFooter(),
	},
});

export default ServicesPage;
