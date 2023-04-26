import {GiftIcon} from '@heroicons/react/24/outline';
import {
	BrandingWatermark,
	BrowserUpdated,
	Palette,
	Print
} from '@mui/icons-material';
import Head from 'next/head';
import {useState} from 'react';
import {Block} from '../components/base/Block';
import {Container} from '../components/base/Container';
import {FeaturedInBlock} from '../components/block/FeaturedInBlock';
import {InteractiveEstimator} from '../components/block/InteractiveEstimator';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {Heading} from '../components/base/Heading';
import {ActionStack} from '../components/base/ActionStack';
import {TimelineBlock} from '../components/block/TimelineBlock';

const navigation = [
	{name: 'Product', href: '#'},
	{name: 'Features', href: '#'},
	{name: 'Marketplace', href: '#'},
	{name: 'Company', href: '#'}
];
const features = [
	{
		name: 'Logo Design',
		description:
			"Your logo is the face of your brand. Our expert designers will create a unique and memorable logo that reflects your brand's personality, values, and identity.",
		icon: Palette
	},
	{
		name: 'Branding & Identity',
		description:
			'We help you establish a consistent and cohesive brand identity across all touchpoints, including logo design, color palettes, typography, and visual elements.',
		icon: BrandingWatermark
	},
	{
		name: 'Print Design',
		description:
			'From business cards and brochures to posters and banners, our print design services are tailored to your specific needs, ensuring that your marketing materials leave a lasting impression.',
		icon: Print
	},
	{
		name: 'Packaging Design',
		description:
			'Our packaging designs are not only visually appealing but also functional and engaging, capturing the essence of your product and enticing customers to make a purchase.',
		icon: GiftIcon
	},
	{
		name: 'Web Design',
		description:
			'We create responsive and user-friendly web designs that are visually appealing, easy to navigate, and optimized for performance across all devices.',
		icon: BrowserUpdated
	}
];

const Page = () => {
	return (
		<DefaultLayout>
			<Head>
				<script src="https://cdn.tailwindcss.com" />
			</Head>
			{/* Hero section */}
			<div className="relative pt-14">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
					/>
				</div>
				<div className="py-24">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto text-center">
							<h1 className="text-4xl mx-auto font-bold tracking-tight text-gray-900 sm:text-6xl">
								Welcome to <mark>Graphix Collab</mark>!
							</h1>
							<p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
								We are a <b>creative design studio</b> that
								specializes in bringing your visual ideas to
								life. Our team of skilled and passionate graphic
								designers work collaboratively to create
								stunning visuals that capture attention,
								communicate messages, and elevate your brand to
								new heights. Whether you need a captivating
								logo, eye-catching packaging, or engaging
								marketing materials, we have the expertise and
								creativity to deliver exceptional results.
							</p>
							<ActionStack
								className="mt-10"
								align="center"
								size="large"
								actions={[
									{
										label: 'Get Started',
										color: 'primary',
										href: '#'
									},
									{
										label: 'Learn More',
										href: '#',
										color: 'text'
									}
								]}
							/>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
						}}
					/>
				</div>
			</div>

			<FeaturedInBlock
				title="Featured In"
				companies={[
					{name: 'Dazed', url: 'https://google.com/'},
					{name: 'i-D', url: 'https://google.com/'},
					{name: 'Buffalo Zine', url: 'https://google.com/'},
					{name: 'Gal-dem', url: 'https://google.com/'},
					{name: 'Polyester', url: 'https://google.com/'},
					{name: 'Another Magazine', url: 'https://google.com/'},
					{name: 'i-D', url: 'https://google.com/'}
				]}
			/>

			{/* Feature section */}
			<Block>
				<Container>
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-rose-600">
							Create easier
						</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							We offer a <mark>wide range</mark> of graphic design
							services to meet the diverse needs of{' '}
							<mark>our clients</mark>.
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Quis tellus eget adipiscing convallis sit sit eget
							aliquet quis. Suspendisse eget egestas a elementum
							pulvinar et feugiat blandit at. In mi viverra elit
							nunc.
						</p>
					</div>
					<div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
						<dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<div
									key={feature.name}
									className="relative pl-16"
								>
									<dt className="text-base font-semibold leading-7 text-gray-900">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
											<feature.icon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</Container>
			</Block>

			<InteractiveEstimator />

			<TimelineBlock />

			{/* <Block>
				<Container>
					<Heading>Why Choose Graphix Collab?</Heading>
					<p>
						Unlock the full potential of your brand with Graphix
						Collab's collaborative and creative approach to graphic
						design. Let us bring your visual ideas to life and help
						you make a lasting impression in the market. Contact us
						today to discuss your design needs and explore how we
						can collaborate to create exceptional designs for your
						brand.
					</p>
				</Container>
			</Block> */}
		</DefaultLayout>
	);
};

export default Page;
