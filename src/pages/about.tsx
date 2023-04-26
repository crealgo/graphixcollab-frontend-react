import tw from 'twin.macro';
import {FeaturedInBlock} from '../components/block/FeaturedInBlock';
import {DefaultLayout} from '../layouts/DefaultLayout';
import {useState} from 'react';
import Head from 'next/head';

const values = [
	{
		name: 'Be world-class',
		description:
			'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.'
	},
	{
		name: 'Share everything you know',
		description:
			'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.'
	},
	{
		name: 'Always learning',
		description:
			'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.'
	},
	{
		name: 'Be supportive',
		description:
			'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.'
	},
	{
		name: 'Take responsibility',
		description:
			'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.'
	},
	{
		name: 'Enjoy downtime',
		description:
			'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.'
	}
];

const exampleUrl = 'https://google.com';

export const Example = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<DefaultLayout pageTitle="About Us">
			<Head>
				<script src="https://cdn.tailwindcss.com" />
			</Head>
			<div className="relative isolate -z-10">
				<div className="overflow-hidden">
					<div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Our Mission
								</h1>
								<div className="mt-6 lg:w-full lg:max-w-2xl lg:flex-auto">
									<p className="text-xl leading-8 text-gray-600">
										Aliquet nec orci mattis amet quisque
										ullamcorper neque, nibh sem. At arcu,
										sit dui mi, nibh dui, diam eget aliquam.
										Quisque id at vitae feugiat egestas ac.
										Diam nulla orci at in viverra
										scelerisque eget. Eleifend egestas
										fringilla sapien.
									</p>
									<div className="mt-6 max-w-xl text-base leading-7 text-gray-700">
										<p>
											Faucibus commodo massa rhoncus,
											volutpat. Dignissim sed eget risus
											enim. Mattis mauris semper sed amet
											vitae sed turpis id. Id dolor
											praesent donec est. Odio penatibus
											risus viverra tellus varius sit
											neque erat velit. Faucibus commodo
											massa rhoncus, volutpat. Dignissim
											sed eget risus enim. Mattis mauris
											semper sed amet vitae sed turpis id.
										</p>
										<p className="mt-10">
											Et vitae blandit facilisi magna
											lacus commodo. Vitae sapien duis
											odio id et. Id blandit molestie
											auctor fermentum dignissim. Lacus
											diam tincidunt ac cursus in vel.
											Mauris varius vulputate et ultrices
											hac adipiscing egestas. Iaculis
											convallis ac tempor et ut. Ac lorem
											vel integer orci.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
								<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<img
											src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
											alt=""
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Our values
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Lorem ipsum dolor sit amet consect adipisicing elit.
						Possimus magnam voluptatum cupiditate veritatis in
						accusamus quisquam.
					</p>
				</div>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{values.map(value => (
						<div key={value.name}>
							<dt className="font-semibold text-gray-900">
								{value.name}
							</dt>
							<dd className="mt-1 text-gray-600">
								{value.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
			<FeaturedInBlock
				className="my-16"
				companies={[
					{name: 'Dazed', url: exampleUrl},
					{name: 'i-D', url: exampleUrl},
					{name: 'Buffalo Zine', url: exampleUrl},
					{name: 'Gal-dem', url: exampleUrl},
					{name: 'Polyester', url: exampleUrl},
					{name: 'Another Magazine', url: exampleUrl},
					{name: 'i-D', url: exampleUrl}
				]}
			/>
		</DefaultLayout>
	);
};

export default Example;

/**
 Services
 - embroidery
 - direct-to-garment
 - screen-printing
	- tshirts
	- poster(s)
	- other apparel
 - large format printing
 - graphic design (graphix collab)
	- brand strategy (consult) <--
	- photography (consult)
	- consultations
 - vinyl cutting

- UPS Drop-off point

- business promotion
 - business cards
 - flyers
 -

 */
