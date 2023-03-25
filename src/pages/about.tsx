import {ImageContentBlock} from '@components/ImageContentBlock';
import {PageProps} from '@global/generalTypes';
import {DefaultLayout} from '@layouts/DefaultLayout';
import {
	generateBanner,
	generateFooter,
	generateGalleryBlock,
	generateHeader,
	generatePageHeaderBlock,
	generateProfilesBlock
} from '@utils/chance';
import {GetStaticProps, NextPage} from 'next';

const AboutPage: NextPage<PageProps> = ({layout, blocks}) => (
	<DefaultLayout HeaderProps={layout.header} BannerProps={layout.banner} FooterProps={layout.footer}>
		<ImageContentBlock
			title='Our Story'
			description="Our company was founded by a group of friends who shared a love for art and fashion. We started out small, printing t-shirts and posters for local bands and events. As our reputation grew, we expanded our services to include custom orders for businesses and organizations of all kinds. Today, we're proud to be one of the top screen printing companies in our area, and we continue to grow and evolve with each new project."
		/>
		<ImageContentBlock
			imagePosition='end'
			title='Our Approach'
			description="At our core, we believe that screen printing is an art form. That's why we approach each project with creativity and care, striving to produce prints that are both beautiful and durable. We use only the highest-quality inks and materials, and we're always looking for new and innovative techniques to bring our clients' visions to life."
		/>
		<ImageContentBlock
			title='Our Team'
			description="As a company, we value honesty, integrity, and creativity. We believe in treating our clients with respect and transparency, and we're dedicated to building long-term relationships with each and every one of them. We also believe in giving back to our community, and we're proud to support local charities and organizations that align with our values.

				Thank you for considering our screen printing company for your next project. We look forward to working with you!"
		/>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => {
	return {
		props: {
			layout: {
				header: generateHeader(),
				banner: generateBanner(),
				footer: generateFooter()
			},
			blocks: [
				{
					type: 'pageHeader',
					props: {
						...generatePageHeaderBlock(),
						title: 'Meet the Team'
					}
				},
				{type: 'profile', props: generateProfilesBlock()},
				{type: 'gallery', props: generateGalleryBlock()}
			]
		}
	};
};

export default AboutPage;
