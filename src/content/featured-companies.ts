export type FeaturedCompanyInfo = {
	type: 'logo' | 'type';
	name: string;
	url?: string;
	image?: string;
	font?: string;
	styleOverrides?: React.CSSProperties;
	mobileStyleOverrides?: React.CSSProperties;
};

export default <FeaturedCompanyInfo[]>[
	{
		type: 'logo',
		name: 'Melissa King',
		url: 'https://www.chefmelissaking.com/',
		image: 'assets/collabs/melissa-king@512w.webp'
	},
	{
		type: 'logo',
		name: "Bob's Liquor Store",
		url: 'https://www.bobsliquorstore.com/',
		image: 'assets/collabs/bobs-liquor-store@512w.webp'
	},
	{
		type: 'logo',
		name: 'Black Beverly Hills',
		url: 'https://www.blackbh.com/',
		image: 'assets/collabs/bbh-gold@512w.webp',
		styleOverrides: {
			transform: 'scale(0.75)'
		}
	},
	{
		type: 'logo',
		name: 'San Gabriel Academy',
		url: 'https://www.sangabrielacademy.org/',
		image: 'assets/collabs/san-gabriel-academy@512w.webp',
		styleOverrides: {
			filter: 'invert(1)'
		}
	},
	{
		type: 'logo',
		name: 'Solano Elementary School',
		url: 'https://solano-lausd-ca.schoolloop.com/',
		image: 'assets/collabs/solano-scholars@512w.webp',
		styleOverrides: {
			transform: 'scale(1.5)'
		}
	},
	{
		type: 'logo',
		name: '550 Wheels',
		url: 'https://550wheels.com/',
		image: 'assets/collabs/550-wheels@512w.webp'
	},
	{
		type: 'logo',
		name: 'Have It All',
		url: 'https://haveittall.com/',
		image: 'assets/collabs/have-it-tall@512w.webp'
	},
	{
		type: 'logo',
		name: 'Hot 8 Yoga',
		url: 'https://www.hot8yoga.com/',
		image: 'assets/collabs/hot-8-yoga@512w.webp'
	},
	{
		type: 'logo',
		name: 'LuluLemon',
		image: 'assets/collabs/lululemon@512w.webp',
		styleOverrides: {
			transform: 'scale(0.675)'
		}
	},
	{
		type: 'logo',
		name: 'AeroVironment',
		url: 'https://www.avinc.com/',
		image: 'assets/collabs/aerovironment@512w.webp'
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
			letterSpacing: '-0.025em',
			fontSize: '1.5rem'
		},
		mobileStyleOverrides: {
			fontSize: '0.9rem'
		}
	}
];
