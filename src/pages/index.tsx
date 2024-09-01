import {type GetStaticProps, type NextPage} from 'next';
import {EstimatorBlock} from '@graphixcollab/components/EstimatorBlock.tsx';
import {FeaturedInBlock} from '@graphixcollab/components/FeaturedInBlock/index.tsx';
import {GalleryBlock} from '@graphixcollab/components/GalleryBlock.tsx';
import {HeroBlock} from '@graphixcollab/components/HeroBlock.tsx';
import {ServicesPreviewBlock} from '@graphixcollab/components/ServicesPreviewBlock.tsx';
import {PageTitle} from '@graphixcollab/components/PageTitle.tsx';
import featuredCompanies from '@graphixcollab/content/featured-companies.ts';
import galleryImages from '@graphixcollab/content/galleryImages.json';
import services from '@graphixcollab/content/services.json';
import {DefaultLayout} from '@graphixcollab/components/DefaultLayout.tsx';
// import {type PageProps} from '@graphixcollab/types/general.tsx'
import {generateActions} from '@graphixcollab/utils/chance.ts';
import Logo from '@graphixcollab/components/Logo.tsx';
import ArrowForward from '@mui/icons-material/ArrowForward';

type PageProps = any;

const Page: NextPage<PageProps> = props => (
	<DefaultLayout showYelp>
		<PageTitle text='Home'/>
		{/* <IntroBlock {...props.IntroBlockProps}/> */}
		<HeroBlock
			title={(
				<>
					Welcome to <Logo/>
				</>
			)}
			description={'We\'re your one-stop shop for all your apparel customization needs. We offer a wide range of services, from garment printing to embroidery.'}
			actions={[
				{
					label: 'Book Appointment',
					href: '/book-appointment',
					color: 'secondary',
					endIcon: <ArrowForward/>,
				},
			]}
			slides={[
				{title: 'Sashes', src: 'assets/sash-hs-min@1280w.webp', alt: 'Sashes'},
				{title: 'Embroidery', src: 'assets/embroidery-shirts-min@1280w.webp', alt: 'Embroidery'},
				{title: 'T-Shirts', src: 'assets/laughing-group-min@1280w.webp', alt: 'T-Shirts'},
			]}
		/>
		<FeaturedInBlock {...props.FeaturedInBlockProps}/>
		<ServicesPreviewBlock {...props.ServicesPreviewBlockProps}/>
		<EstimatorBlock/>
		<GalleryBlock {...props.GalleryBlockProps}/>
	</DefaultLayout>
);

export const getStaticProps: GetStaticProps<PageProps> = () => ({
	props: {
		IntroBlockProps: {
			color: 'none',
			title: 'Weclome to Graphix Collab',
			description:
				'We\'re your one-stop shop for all your apparel customization needs. We offer a wide range of services, from garment printing to embroidery.',
		},
		FeaturedInBlockProps: {
			title: 'Featured In',
			companies: featuredCompanies,
		},
		InteractiveEstimatorProps: {
			actions: generateActions(),
		},
		ServicesPreviewBlockProps: {
			title: 'Popular Services',
			services: services.filter(s => s.featured),
		},
		GalleryBlockProps: {
			title: 'See what we\'re up to',
			description:
				'With years of experience in the industry, we have the expertise and equipment necessary to produce stunning prints on a wide range of materials, including fabric, paper, metal, glass, and plastic. Follow us for an inside scoop of what\'s going on behind the scenes.',
			SocialMediaBlockProps: {
				text: '@fashiongreekusc',
				url: 'https://instagram.com/fashiongreekusc?igshid=MzRlODBiNWFlZA==',
				actions: [
					{
						label: 'Follow Us',
						href: 'https://instagram.com/fashiongreekusc?igshid=MzRlODBiNWFlZA==',
					},
				],
			},
			images: [...galleryImages],
			actions: generateActions(),
		},
	},
});

export default Page;
