export type FeaturedCompanyInfo = {
	type: 'logo' | 'type';
	name: string;
	url?: string;
	image?: string;
	font?: string;
	styleOverrides?: React.CSSProperties;
};

export default <FeaturedCompanyInfo[]>[
	{
		type: 'logo',
		name: 'Melissa King',
		url: 'https://www.chefmelissaking.com/',
		image: '/assets/collabs/melissa-king.png'
	},
	{
		type: 'logo',
		name: "Bob's Liquor Store",
		url: 'https://www.bobsliquorstore.com/',
		image: '/assets/collabs/bobs-liquor-store.webp'
	},
	{
		type: 'logo',
		name: 'Black Beverly Hills',
		url: 'https://www.blackbh.com/',
		image: '/assets/collabs/bbh-gold.webp',
		styleOverrides: {
			transform: 'scale(0.75)'
		}
	},
	{
		type: 'logo',
		name: 'San Gabriel Academy',
		url: 'https://www.sangabrielacademy.org/',
		image: '/assets/collabs/san-gabriel-academy.png',
		styleOverrides: {
			filter: 'invert(1)'
		}
	},
	{
		type: 'logo',
		name: 'Solano Elementary School',
		url: 'https://solano-lausd-ca.schoolloop.com/',
		image: 'assets/collabs/solano-scholars.png',
		styleOverrides: {
			transform: 'scale(1.5)'
		}
	},
	{
		type: 'logo',
		name: '550 Wheels',
		url: 'https://550wheels.com/',
		image: '/assets/collabs/550-wheels.webp'
	},
	{
		type: 'logo',
		name: 'Have It All',
		url: 'https://haveittall.com/',
		image: '/assets/collabs/have-it-tall.webp'
	},
	{
		type: 'logo',
		name: 'Hot 8 Yoga',
		url: 'https://www.hot8yoga.com/',
		image: 'assets/collabs/hot-8-yoga.png'
	},
	{
		type: 'logo',
		name: 'LuluLemon',
		image: 'assets/collabs/lululemon.svg',
		styleOverrides: {
			transform: 'scale(0.675)'
		}
	},
	{
		type: 'logo',
		name: 'AeroVironment',
		url: 'https://www.avinc.com/',
		image: 'assets/collabs/aerovironment.png'
	},
	{
		type: 'type',
		name: 'JON SKYWALKER',
		url: 'https://jonskywalker.com/',
		font: 'https://fonts.googleapis.com/css2?family=Karla&display=swap',
		styleOverrides: {
			color: '#19162e',
			fontFamily: 'Karla, sans-serif',
			fontWeight: 400,
			letterSpacing: '-0.025em'
		}
	}
];
