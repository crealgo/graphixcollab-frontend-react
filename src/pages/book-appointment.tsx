import {type GetStaticProps, type NextPage} from 'next';
import {
	PageHeaderBlock,
	type PageHeaderBlockProps,
} from '@graphixcollab/components/PageHeaderBlock';
import {DefaultLayout} from '@graphixcollab/components/DefaultLayout';
import {generateFooter, generatePageHeaderBlock} from '@graphixcollab/utils/chance';
import {type FooterBlockProps} from '@graphixcollab/components/FooterBlock';
import {AppointBookEmbed} from '@graphixcollab/components/AppointBookEmbed';
import {PageTitle} from '@graphixcollab/components/PageTitle';
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
			title='Book A Time'
			description='Book an appointment to speak with our team! Open doors to a wide range of printing options, from apparel and promotional products to signage and more. Our state-of-the-art equipment and skilled professionals guarantee outstanding results that exceed your expectations.'
			ImageProps={{
				fill: 'contain',
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
