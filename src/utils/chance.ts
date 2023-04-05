import posterImage from "../assets/screen-printing/poster.jpg";
import silkScreenImage from "../assets/screen-printing/silk-screen.jpg";
import toteImage from "../assets/screen-printing/tote.jpg";
import { type BannerProps } from "../components/molecules/Banner";
import { type FeaturedItemProps } from "../components/molecules/DrawerMenu/FeaturedItem";
import { type GalleryBlockProps } from "../components/elements/GalleryBlock";
import { HeaderProps } from "../components/molecules/Header";
import { type ImageContentBlockProps } from "../components/elements/ImageContentBlock";
import { IntroBlockProps } from "../components/elements/IntroBlock";
import { type PageHeaderBlockProps } from "../components/elements/PageHeaderBlock";
import { type ProfilesBlockProps } from "../components/elements/ProfilesBlock";
// import { type MileStoneValue } from "../components/elements/Timeline/Milestone";
import {
	type Action,
	type Article,
	type Employee,
	type EmployeeGroup,
	type NavItemOptions,
	type OptionValue,
	type Person,
	type PersonGroup,
	type ServiceOptions,
} from "../types/general";
import Chance from "chance";

export const chance = new Chance();

export const generateWord = (): string => chance.word({ capitalize: true, syllables: 3 });

export const generatePerson = (): Person => ({
	avatar: chance.avatar(),
	photo: `https://picsum.photos/200?random=${Math.random()}`,
	name: chance.name(),
	username: chance.twitter(),
});

export const generateEmployee = (): Employee => ({
	...generatePerson(),
	employeeId: chance.guid(),
	jobTitle: chance.profession(),
	interests: chance.n(chance.word, 3),
});

export const generatePersons = (n = 3): Person[] => chance.n(generatePerson, n);

export const generateEmployees = (n = 3): Employee[] => chance.n(generateEmployee, n);

export const generatePersonGroup = (): PersonGroup => ({
	title: chance.sentence({ words: 4 }),
	description: chance.sentence(),
	profiles: generatePersons(10),
});

export const generatePersonGroups = (n = 2): PersonGroup[] => chance.n(generatePersonGroup, n);

export const generateEmployeeGroup = (): EmployeeGroup => ({
	title: "Employee Group",
	description: chance.sentence(),
	profiles: generateEmployees(chance.d10()),
});

export const generateEmployeeGroups = (n = 2): EmployeeGroup[] => chance.n(generateEmployeeGroup, n);

export const generateArticle = (): Article => ({
	author: generatePerson(),
	postDate: chance.date().toString(),
	summary: chance.paragraph(),
	tags: chance.n(chance.word, 3),
	title: chance.sentence({ words: 3 }),
	url: chance.url(),
});

export const generateArticles = (n = 5): Article[] => chance.n(generateArticle, n);

export const generateAction = (): Action => ({
	href: chance.url(),
	label: generateWord(),
	// onClick() {
	// 	console.log('Action Log');
	// }
});

export const generateActions = (n = 3): Action[] => chance.n(generateAction, n);

export const generateImage = (width = 300): string => `https://picsum.photos/${width}?random=${chance.natural()}`;

export const generateImages = (n = 5): string[] => chance.n(() => generateImage(), n);

export const generateFeaturedItem = (): FeaturedItemProps => ({
	label: generateWord(),
	ImageProps: {
		src: generateImage(),
		alt: chance.sentence({
			words: 5,
		}),
	},
});

export const generateFeaturedItems = (n = 4): FeaturedItemProps[] => chance.n(() => generateFeaturedItem(), n);

export const generateOptions = (n = 5): OptionValue[] =>
	chance.n(() => {
		const word = generateWord();

		return {
			label: word,
			value: word,
		};
	}, n);

// export const generateMilestones = (n = 5): MileStoneValue[] => [
// 	{
// 		label: "Design Creation",
// 		description:
// 			"The first step in screen printing is to create the design that will be printed. This design is typically created using graphic design software and is saved as a high-resolution file.",
// 	},
// 	{
// 		label: "Screen Preparation",
// 		description:
// 			"Once the design is created, a mesh screen is prepared by coating it with a light-sensitive emulsion. The emulsion is then allowed to dry, and the design is printed onto a transparent film.",
// 	},
// 	{
// 		label: "Exposure",
// 		description:
// 			"The printed film is placed on the prepared screen and exposed to a bright light. The light hardens the emulsion on the screen, except for the areas where the design has been printed. These areas remain soft and can be washed away later.",
// 	},
// 	{
// 		label: "Washing",
// 		description:
// 			"After exposure, the screen is washed with water, which removes the soft emulsion, leaving the design on the screen.",
// 	},
// 	{
// 		label: "Ink Preparation",
// 		description: "The ink is mixed and prepared according to the color and type of substrate being printed on.",
// 	},
// 	{
// 		label: "Printing",
// 		description:
// 			"The substrate is placed on the printing press, and the screen is placed on top of it. Ink is then poured onto the screen and spread across it using a squeegee. The ink is forced through the mesh and onto the substrate, creating the printed design.",
// 	},
// 	{
// 		label: "Drying and Curing",
// 		description:
// 			"After printing, the substrate is dried and cured to ensure that the ink is fully set and will not smudge or wash away.",
// 	},
// ];

export const generateBanner = (): BannerProps => ({
	children: "⚡️⚡️ It's sash season!! Don't wait too long, spots are filling up.",
	// actions: [
	// 	{
	// 		label: "Book a Time",
	// 	},
	// ],
	ImageProps: {
		src: generateImage(),
	},
});

export const generateNavItem = (sub?: boolean): NavItemOptions => {
	const hasSub = chance.bool();

	return {
		label: generateWord(),
		...(sub &&
			hasSub && {
				subItems: chance.n(() => generateNavItem(false), 5),
			}),
	};
};

export const generateNavItems = (n = 3): NavItemOptions[] => chance.n(() => generateNavItem(true), n);

export const generateHeader = (): HeaderProps => ({
	navigationItems: generateNavItems(),
	// actions: [
	// 	{
	// 		label: 'Contact Us',
	// 		href: 'https://google.com'
	// 	},
	// 	{
	// 		label: 'Book Appointment',
	// 		href: 'https://google.com'
	// 	}
	// ]
});

export const generateFooter = () => ({
	title: "Fashion Greek, USC",
	description: chance.sentence({ words: 15 }),
	meta: chance.n(
		() => ({
			term: chance.sentence({ words: 3 }),
			description: chance.sentence(),
		}),
		3
	),
});

export const generateCalloutBlock = () => ({
	title: chance.sentence({ words: 5 }),
	meta: chance.sentence({ words: 3 }),
	description: chance.sentence(),
	actions: generateActions(2),
});

export const generateTimelineBlock = () => ({
	title: "Our process",
	description:
		"We specialize in creating bold, eye-catching designs that are perfect for t-shirts, posters, stickers, and more. Whether you need a small run of custom t-shirts for your business or a large order of promotional materials for an event, we can help. Here's a glimpse of our process below",
	TimelineProps: {
		milestones: generateMilestones(),
		selectedIndex: 1,
	},
});

export const generateGalleryBlock = (): GalleryBlockProps => ({
	title: "See what we're up to",
	description:
		"With years of experience in the industry, we have the expertise and equipment necessary to produce stunning prints on a wide range of materials, including fabric, paper, metal, glass, and plastic. Follow us for an inside scoop of what's going on behind the scenes.",
	SocialMediaBlockProps: {
		text: "@fashiongreekusc",
		url: chance.url(),
		actions: [
			{
				label: "Follow",
			},
			{
				label: "Share",
			},
		],
	},
	images: Array.from(
		{
			length: 10,
		},
		(_, imageIndex) => ({
			alt: "Dog Picture",
			src: `https://picsum.photos/200?random=${imageIndex}`,
		})
	),
	actions: generateActions(),
});

export const generateProfilesBlock = (): ProfilesBlockProps => ({
	title: "Profiles Page",
	description: chance.sentence(),
	profileGroups: generateEmployeeGroups(),
});

export const generateService = (): ServiceOptions => ({
	title: generateWord(),
	subtitle: generateWord(),
	description: chance.sentence({ words: 20 }),
	imageSrc: generateImage(500),
});

export const generateServices = (): ServiceOptions[] => [
	{
		title: "T-Shirts",
		imageSrc: silkScreenImage,
		description: "Add screen printing, embroidery, or tags to create something unique.",
	},
	{
		title: "Merch",
		imageSrc: posterImage,
		description: "It's the little things that keep a brand sticking around in your customers' minds.",
	},
	{
		title: "Apparel",
		imageSrc: toteImage,
		description: "Make your brand stand out with high-quality blank garments and a stunning print.",
	},
	{
		title: "Embroidery",
		imageSrc: toteImage,
		description: "Create eye-catching products with your designs embroidered or on a patch.",
	},
	{
		title: "Paper",
		imageSrc: toteImage,
		description: "From postcards to business cards and even screen-printed posters.",
	},
];

export const generateServicesBlock = () => ({
	title: "Customize It!",
	subtitle: "Our Services",
	description:
		"We offer a wide range of screen printing services to meet your needs. Whether you're looking for custom t-shirts, posters, stickers, or other promotional materials, we have you covered. Here are some of our most popular services:",
	actions: generateActions(),
	services: generateServices(),
});

export const generateIntroBlock = (): IntroBlockProps => ({
	title: "Clean, High Quality.",
	subtitle: "A Small Caption",
	description:
		"Our team of skilled designers and technicians is dedicated to delivering exceptional customer service and top-notch results. We work closely with our clients to ensure that their vision is brought to life, and we are always happy to provide guidance and advice on design and printing options.",
	actions: [
		{
			label: "Get Started",
		},
		{
			label: "Book an Appointment",
		},
	],
	ImageProps: {
		src: generateImage(400),
	},
});

export const generatePageHeaderBlock = (): PageHeaderBlockProps => ({
	title: "Page Title",
	breadcrumbs: chance.n(
		() => ({
			href: chance.url(),
			label: generateWord(),
		}),
		3
	),
	navigationItems: generateNavItems(),
	navigationType: "anchor-link",
});

export const generateImageContentBlock = (n = 1): ImageContentBlockProps => ({
	title: `Service Detail Block ${n}`,
	subtitle: "A Small Caption",
	description: chance.sentence({ words: 20 }),
	actions: generateActions(),
	imagePosition: "start",
	ImageProps: {
		src: generateImage(400),
	},
});

export const generateFaqs = () => [
	{
		question: "What is screen printing?",
		answer: 'Screen printing is a printing technique that involves using a mesh stencil (or "screen") to transfer ink onto a substrate, such as a t-shirt, poster, or sticker.',
	},
	{
		question: "What types of materials can be screen printed?",
		answer: "Screen printing can be done on a wide variety of materials, including fabric, paper, metal, glass, and plastic.",
	},
	{
		question: "What are the advantages of screen printing?",
		answer: "Screen printing is a versatile and cost-effective printing method that can produce high-quality, long-lasting prints. It can also be used to print on a wide range of materials and is suitable for both large and small production runs.",
	},
	{
		question: "What is the process of screen printing?",
		answer: 'The process of screen printing involves creating a stencil, or "screen" of the design to be printed, which is then placed over the substrate. Ink is then applied to the screen and forced through the mesh onto the substrate using a squeegee. This process can be repeated for multiple colors or layers.',
	},
	{
		question: "What types of designs are suitable for screen printing?",
		answer: "Screen printing is best suited for designs with bold, solid colors or simple, graphic shapes. It is less suitable for designs with fine details or complex gradients.",
	},
	{
		question: "What is the turnaround time for a screen printing order?",
		answer: "Turnaround times for screen printing orders can vary depending on the size of the order and the complexity of the design. Generally, orders can be completed within a few days to a few weeks.",
	},
	{
		question: "Can I provide my own artwork for screen printing?",
		answer: "Yes, most screen printing companies will accept customer-provided artwork. However, it is important to ensure that the artwork meets certain technical specifications to ensure the best possible print quality.",
	},
];

export const generateFaqBlock = () => ({
	title: "Frequently Asked Questions",
	faqs: generateFaqs(),
});

export const generateFanServiceBlock = () => ({
	title: chance.sentence({ words: 3 }),
	description: chance.paragraph({ sentences: 3 }),
	images: generateImages(),
	actions: generateActions(2),
	ActionStackProps: {
		text: chance.sentence(),
	},
});
