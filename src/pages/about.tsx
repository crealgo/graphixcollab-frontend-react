import { FeaturedInBlock } from "../components/blocks/FeaturedInBlock";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useState } from "react";

const values = [
	{
		name: "Be world-class",
		description:
			"Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
	},
	{
		name: "Share everything you know",
		description:
			"Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
	},
	{
		name: "Always learning",
		description:
			"Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
	},
	{
		name: "Be supportive",
		description:
			"Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
	},
	{
		name: "Take responsibility",
		description:
			"Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
	},
	{
		name: "Enjoy downtime",
		description:
			"Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
	},
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<DefaultLayout>
			{/* Hero section */}
			<div className="relative isolate -z-10">
				{/* <svg
						className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
								width={200}
								height={200}
								x="50%"
								y={-1}
								patternUnits="userSpaceOnUse"
							>
								<path d="M.5 200V.5H200" fill="none" />
							</pattern>
						</defs>
						<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
							<path
								d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
								strokeWidth={0}
							/>
						</svg>
						<rect
							width="100%"
							height="100%"
							strokeWidth={0}
							fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
						/>
					</svg> */}
				{/* <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
						<svg viewBox="0 0 801 1036" aria-hidden="true" className="w-[50.0625rem]">
							<path
								fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
								fillOpacity=".3"
								d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
							/>
							<defs>
								<linearGradient
									id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
									x1="508.179"
									x2="-28.677"
									y1="-116.221"
									y2="1091.63"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#9089FC" />
									<stop offset={1} stopColor="#FF80B5" />
								</linearGradient>
							</defs>
						</svg>
					</div> */}
				<div className="overflow-hidden">
					<div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Our Mission
								</h1>
								<div className="mt-6 lg:w-full lg:max-w-2xl lg:flex-auto">
									<p className="text-xl leading-8 text-gray-600">
										Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit
										dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac.
										Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla
										sapien.
									</p>
									<div className="mt-6 max-w-xl text-base leading-7 text-gray-700">
										<p>
											Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
											Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec
											est. Odio penatibus risus viverra tellus varius sit neque erat velit.
											Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
											Mattis mauris semper sed amet vitae sed turpis id.
										</p>
										<p className="mt-10">
											Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et.
											Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac
											cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
											Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
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

			{/* Content section */}
			{/* <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
						<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<p className="text-xl leading-8 text-gray-600">
									Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
									mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla
									orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
								</p>
								<div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
									<p>
										Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
										mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
										penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo
										massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed
										amet vitae sed turpis id.
									</p>
									<p className="mt-10">
										Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
										blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in
										vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis
										convallis ac tempor et ut. Ac lorem vel integer orci.
									</p>
								</div>
							</div>
							<div className="lg:flex lg:flex-auto lg:justify-center">
								<dl className="w-64 space-y-8 xl:w-80">
									{stats.map((stat) => (
										<div key={stat.label} className="flex flex-col-reverse gap-y-4">
											<dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
											<dd className="text-5xl font-semibold tracking-tight text-gray-900">
												{stat.value}
											</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div> */}

			{/* Image section */}
			{/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
					<img
						src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
						alt=""
						className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
					/>
				</div> */}

			{/* Values section */}
			<div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
						veritatis in accusamus quisquam.
					</p>
				</div>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{values.map((value) => (
						<div key={value.name}>
							<dt className="font-semibold text-gray-900">{value.name}</dt>
							<dd className="mt-1 text-gray-600">{value.description}</dd>
						</div>
					))}
				</dl>
			</div>

			<FeaturedInBlock
				className="my-16"
				title="Featured In"
				companies={[
					{ name: "Dazed", url: "https://google.com" },
					{ name: "i-D", url: "https://google.com" },
					{ name: "Buffalo Zine", url: "https://google.com" },
					{ name: "Gal-dem", url: "https://google.com" },
					{ name: "Polyester", url: "https://google.com" },
					{ name: "Another Magazine", url: "https://google.com" },
					{ name: "i-D", url: "https://google.com" },
				]}
			/>

			{/* Team section */}
			{/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo
							vel facere repellendus ut eos dolores similique.
						</p>
					</div>
					<ul
						role="list"
						className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
					>
						{team.map((person) => (
							<li key={person.name}>
								<img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
								<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
									{person.name}
								</h3>
								<p className="text-sm leading-6 text-gray-600">{person.role}</p>
							</li>
						))}
					</ul>
				</div> */}

			{/* Blog section */}
			{/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
						<p className="mt-2 text-lg leading-8 text-gray-600">
							Vel dolorem qui facilis soluta sint aspernatur totam cumque.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{blogPosts.map((post) => (
							<article
								key={post.id}
								className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
							>
								<img
									src={post.imageUrl}
									alt=""
									className="absolute inset-0 -z-10 h-full w-full object-cover"
								/>
								<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
								<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

								<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
									<time dateTime={post.datetime} className="mr-8">
										{post.date}
									</time>
									<div className="-ml-4 flex items-center gap-x-4">
										<svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
											<circle cx={1} cy={1} r={1} />
										</svg>
										<div className="flex gap-x-2.5">
											<img
												src={post.author.imageUrl}
												alt=""
												className="h-6 w-6 flex-none rounded-full bg-white/10"
											/>
											{post.author.name}
										</div>
									</div>
								</div>
								<h3 className="mt-3 text-lg font-semibold leading-6 text-white">
									<a href={post.href}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
							</article>
						))}
					</div>
				</div> */}

			{/* Footer */}
			{/* <footer className="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
				<nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
					{footerNavigation.main.map((item) => (
						<div key={item.name} className="pb-6">
							<a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-10">
					{footerNavigation.social.map((item) => (
						<a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<p className="mt-10 text-center text-xs leading-5 text-gray-500">
					&copy; 2020 Your Company, Inc. All rights reserved.
				</p>
			</footer> */}
		</DefaultLayout>
	);
}

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
