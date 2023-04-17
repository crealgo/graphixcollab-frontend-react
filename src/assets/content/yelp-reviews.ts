// eslint-disable @typescript-eslint/ban-types

export type YelpReview = {
	id: string;
	userId: string;
	business: Business;
	user: User;
	comment: Comment;
	localizedDate: string;
	localizedDateVisited: null;
	rating: number;
	photos: string[];
	lightboxMediaItems: string[];
	photosUrl: string;
	totalPhotos: number;
	feedback: Feedback;
	isUpdated: boolean;
	businessOwnerReplies: BusinessOwnerReply[] | null;
	appreciatedBy: null;
	previousReviews: null;
	tags: string[];
};

export type Business = {
	id: string;
	alias: string;
	name: string;
	photoSrc: string;
};

export type BusinessOwnerReply = {
	id: string;
	comment: string;
	owner: Owner;
	localizedDate: string;
};

export type Owner = {
	id: string;
	avatarSrc: string;
	avatarSrcSet: string;
	displayName: string;
	role: string;
};

export type Comment = {
	text: string;
	language: 'en';
};

export type Feedback = {
	counts: Counts;
	userFeedback: UserFeedback;
	voterText: null;
};

export type Counts = {
	useful: number;
	funny: number;
	cool: number;
};

export type UserFeedback = {
	useful: boolean;
	funny: boolean;
	cool: boolean;
};

export type User = {
	link: string;
	src: string;
	srcSet: null | string;
	markupDisplayName: string;
	displayLocation: string;
	altText: string;
	userUrl: string;
	partnerAlias: null | string;
	friendCount: number;
	photoCount: number | null;
	reviewCount: number;
	eliteYear: number | null;
};

const businessName = 'All Printing Services';
const businessAlias = 'all-printing-services-encino';
const businessPhoto = 'https://s3-media0.fl.yelpcdn.com/bphoto/AMD81XCAMDZb0-sV0O9yBg/60s.jpg';

const yelpReviews: YelpReview[] = [
	{
		id: 'ybNaWW-lSK9fRTt4rJzvMQ',
		userId: 'h0GaSQBtI6ueEU6ngAeQoQ',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=h0GaSQBtI6ueEU6ngAeQoQ',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/ME2nyoZFEz16hEcCLTdKgw/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/ME2nyoZFEz16hEcCLTdKgw/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/ME2nyoZFEz16hEcCLTdKgw/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/ME2nyoZFEz16hEcCLTdKgw/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/ME2nyoZFEz16hEcCLTdKgw/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/ME2nyoZFEz16hEcCLTdKgw/180s.jpg 3.00x',
			markupDisplayName: 'Sélynne S.',
			displayLocation: 'Mid City, Los Angeles, CA',
			altText: 'Sélynne S.',
			userUrl: '/user_details?userid=h0GaSQBtI6ueEU6ngAeQoQ',
			partnerAlias: null,
			friendCount: 214,
			photoCount: 1,
			reviewCount: 1,
			eliteYear: null,
		},
		comment: {
			text: 'I went to this place yesterday to have some bw pages printed.<br>When i came in, Lisa greeted me and asked me for my name before redirecting me to her coworker which i don&#39;t know the name, but very sweet, to help me with my copies.<br>Lisa told me the price ,  3.10$  so a standard 10 c per page. And i realized that i didn&#39;t have cash (at least i thought so asked her if i could pay with my card yet there is a 10$ minimun. After a few seconds, i realized i had plenty of coins in my bag so i started to grab Everything i had. She saw me struggling a bit even though i was pretty sure i had the entire amount and said &#34;honey, that s ok&#34; and only took 2,50$ from what i had out already.<br>Long story short, first experience and surely a great one!!! No wonder why they have 5 stars on yelp!!!',
			language: 'en',
		},
		localizedDate: '6/19/2019',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=h0GaSQBtI6ueEU6ngAeQoQ',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: [
			{
				id: 'DkdYjkrr8XeVQU-MtlkvGQ',
				comment: 'It is our #1 goal to make our clients happy . We are glad that you liked our services &amp; Thank you &amp; can not wait to see you again !',
				owner: {
					id: 'me40mMCNo8DrYB7P6UNfYA',
					avatarSrc: 'https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/30s.jpg',
					avatarSrcSet: 'https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/ss.jpg 1.33x,https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/90s.jpg 3.00x',
					displayName: 'Nadia F.',
					role: 'Business Owner',
				},
				localizedDate: '6/20/2019',
			},
		],
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: '5TjNYgJAPnQHjNMI-zrqLQ',
		userId: '3TBhJr34PIlndGqIOe1v4Q',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=3TBhJr34PIlndGqIOe1v4Q',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/m6k8ICIwoNznzdmV5Wf1YQ/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/m6k8ICIwoNznzdmV5Wf1YQ/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/m6k8ICIwoNznzdmV5Wf1YQ/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/m6k8ICIwoNznzdmV5Wf1YQ/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/m6k8ICIwoNznzdmV5Wf1YQ/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/m6k8ICIwoNznzdmV5Wf1YQ/180s.jpg 3.00x',
			markupDisplayName: 'Joseph Y.',
			displayLocation: 'Los Angeles, CA',
			altText: 'Joseph Y.',
			userUrl: '/user_details?userid=3TBhJr34PIlndGqIOe1v4Q',
			partnerAlias: null,
			friendCount: 0,
			photoCount: null,
			reviewCount: 7,
			eliteYear: null,
		},
		comment: {
			text: 'All Print is the best in LA County, hands down. Nadia and Lisa are the most kind and accommodating women I know in the business. The work is always exceptional and top notch. Not one mistake after ten years of using their services. Even if they are working on a big studio project, they will stop and treat me like I am the best customer in  the world.<br>If you have an idea for a project, but don&#39;t know how to formulate it on paper, they have graphic artists on hand who will help you visualize your idea. I have had the joy of working with two of them, and their work was superb. <br>I just can&#39;t say enough good about this company. All Print is the standard in the business of printing and graphics. No one compares.<br><br>Joseph Young<br>Rockefeller Holdings',
			language: 'en',
		},
		localizedDate: '1/21/2020',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=3TBhJr34PIlndGqIOe1v4Q',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'rqT0Pngi5ayRboT1eJ9iNA',
		userId: 'XvHgKPEE6K9vwZcT30XGdg',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=XvHgKPEE6K9vwZcT30XGdg',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/E5-wXC4HL1zTDUJFM8Q-HA/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/E5-wXC4HL1zTDUJFM8Q-HA/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/E5-wXC4HL1zTDUJFM8Q-HA/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/E5-wXC4HL1zTDUJFM8Q-HA/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/E5-wXC4HL1zTDUJFM8Q-HA/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/E5-wXC4HL1zTDUJFM8Q-HA/180s.jpg 3.00x',
			markupDisplayName: 'Kenneth R.',
			displayLocation: 'Los Angeles, CA',
			altText: 'Kenneth R.',
			userUrl: '/user_details?userid=XvHgKPEE6K9vwZcT30XGdg',
			partnerAlias: null,
			friendCount: 1,
			photoCount: null,
			reviewCount: 30,
			eliteYear: null,
		},
		comment: {
			text: 'Nadia and All Printing are the best! I&#39;ve had several orders done here over the years, and they&#39;ve all turned out amazing! They treat every order, big or small, like it&#39;s the most important one they have, and no job I&#39;ve brought them, no matter how unusual, was ever a problem. Great work and at a great price. Go here!',
			language: 'en',
		},
		localizedDate: '5/20/2022',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=XvHgKPEE6K9vwZcT30XGdg',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 2,
				funny: 2,
				cool: 1,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'ax_bcWG8JYBn24Ubs1NNaA',
		userId: '-wa9w1K8U-iQb0CM0NGtVg',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=-wa9w1K8U-iQb0CM0NGtVg',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/M-lxNJUkdOiZWEgDfhdqLg/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/M-lxNJUkdOiZWEgDfhdqLg/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/M-lxNJUkdOiZWEgDfhdqLg/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/M-lxNJUkdOiZWEgDfhdqLg/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/M-lxNJUkdOiZWEgDfhdqLg/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/M-lxNJUkdOiZWEgDfhdqLg/180s.jpg 3.00x',
			markupDisplayName: 'Steinberg L.',
			displayLocation: 'Encino, Los Angeles, CA',
			altText: 'Steinberg L.',
			userUrl: '/user_details?userid=-wa9w1K8U-iQb0CM0NGtVg',
			partnerAlias: null,
			friendCount: 106,
			photoCount: 16,
			reviewCount: 39,
			eliteYear: null,
		},
		comment: {
			text: 'I have been using All Printing Services for over 30 years for both personal and business items.  They never let me down, and in fact always provide top quality products with a quick turnaround at reasonable prices.  Nadia, the owner, is exceptional, very personable and always knows what is best.  Their graphic designer Victoria is kind, friendly and very skilled and swift with graphic design and layouts.  All Printing Services is simply the best!',
			language: 'en',
		},
		localizedDate: '6/21/2022',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=-wa9w1K8U-iQb0CM0NGtVg',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'S9QwiArYT20ERER55gn0_Q',
		userId: 'lr_Tpf5FHFjPPt8b8gROtg',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=lr_Tpf5FHFjPPt8b8gROtg',
			src: 'https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png',
			srcSet: null,
			markupDisplayName: 'Cynthia G.',
			displayLocation: 'Van Nuys, Los Angeles, CA',
			altText: 'Cynthia G.',
			userUrl: '/user_details?userid=lr_Tpf5FHFjPPt8b8gROtg',
			partnerAlias: null,
			friendCount: 0,
			photoCount: null,
			reviewCount: 2,
			eliteYear: null,
		},
		comment: {
			text: 'Fast and efficient response for my invitations. <br>Great value as well.<br>Most definitely recommend',
			language: 'en',
		},
		localizedDate: '4/1/2022',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=lr_Tpf5FHFjPPt8b8gROtg',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'rkuF0UgIVCAV-fTYLP0rjQ',
		userId: 'MVHgg_f04MhqsZ6tm7rqhg',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=MVHgg_f04MhqsZ6tm7rqhg',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/e26UkQnLPt-24znVcBiKPA/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/e26UkQnLPt-24znVcBiKPA/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/e26UkQnLPt-24znVcBiKPA/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/e26UkQnLPt-24znVcBiKPA/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/e26UkQnLPt-24znVcBiKPA/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/e26UkQnLPt-24znVcBiKPA/180s.jpg 3.00x',
			markupDisplayName: 'Peggy G.',
			displayLocation: 'Woodland Hills, CA',
			altText: 'Peggy G.',
			userUrl: '/user_details?userid=MVHgg_f04MhqsZ6tm7rqhg',
			partnerAlias: null,
			friendCount: 77,
			photoCount: 1,
			reviewCount: 33,
			eliteYear: null,
		},
		comment: {
			text: 'Nadia and All Printing are the best, Great friendly safe service! Quick estimates and quality work.',
			language: 'en',
		},
		localizedDate: '9/27/2021',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=MVHgg_f04MhqsZ6tm7rqhg',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'GniIOjwbV5E1g7ge53zrow',
		userId: 'fN9MJ2t4dzFV1WpO_CVDqg',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=fN9MJ2t4dzFV1WpO_CVDqg',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/X3ysfq69i1WMV2LbP333wQ/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/X3ysfq69i1WMV2LbP333wQ/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/X3ysfq69i1WMV2LbP333wQ/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/X3ysfq69i1WMV2LbP333wQ/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/X3ysfq69i1WMV2LbP333wQ/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/X3ysfq69i1WMV2LbP333wQ/180s.jpg 3.00x',
			markupDisplayName: 'Danielle D.',
			displayLocation: 'Culver City, CA',
			altText: 'Danielle D.',
			userUrl: '/user_details?userid=fN9MJ2t4dzFV1WpO_CVDqg',
			partnerAlias: null,
			friendCount: 148,
			photoCount: 8,
			reviewCount: 32,
			eliteYear: null,
		},
		comment: {
			text: 'Nadia and her team save my ass every time. They always make the time for last minute printing requests and produce exactly what I need. I have used them for multiple jobs across different companies that I&#39;ve worked for over the years. Every print job feels like I&#39;m working w an extended member of my team. I moved back to the westside and still drive to the valley, they&#39;re that great!',
			language: 'en',
		},
		localizedDate: '6/8/2021',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=fN9MJ2t4dzFV1WpO_CVDqg',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'kFFEhomi2_8bDxoU-bduYQ',
		userId: 'rj9l-1Wzwqe0_4PwGqomww',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=rj9l-1Wzwqe0_4PwGqomww',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/_ncEp_xpZGN60acGH_4PjQ/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/_ncEp_xpZGN60acGH_4PjQ/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/_ncEp_xpZGN60acGH_4PjQ/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/_ncEp_xpZGN60acGH_4PjQ/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/_ncEp_xpZGN60acGH_4PjQ/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/_ncEp_xpZGN60acGH_4PjQ/180s.jpg 3.00x',
			markupDisplayName: 'Kenahn G.',
			displayLocation: 'Los Angeles, CA',
			altText: 'Kenahn G.',
			userUrl: '/user_details?userid=rj9l-1Wzwqe0_4PwGqomww',
			partnerAlias: null,
			friendCount: 624,
			photoCount: 9,
			reviewCount: 35,
			eliteYear: null,
		},
		comment: {
			text: 'Nadia and her team did an incredible job with our prints, even going out of their way to find the right paper to fit our needs. We will definitely work with them again!',
			language: 'en',
		},
		localizedDate: '11/18/2020',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=rj9l-1Wzwqe0_4PwGqomww',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 1,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'EofrfuyLPoT00qIm4G4i3A',
		userId: 'jjax2gEAW0UDb3PGVaPsBg',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=jjax2gEAW0UDb3PGVaPsBg',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/ZPHvMG196LjzNVzl8YTXbQ/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/ZPHvMG196LjzNVzl8YTXbQ/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/ZPHvMG196LjzNVzl8YTXbQ/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/ZPHvMG196LjzNVzl8YTXbQ/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/ZPHvMG196LjzNVzl8YTXbQ/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/ZPHvMG196LjzNVzl8YTXbQ/180s.jpg 3.00x',
			markupDisplayName: 'Sarah A.',
			displayLocation: 'Burbank, CA',
			altText: 'Sarah A.',
			userUrl: '/user_details?userid=jjax2gEAW0UDb3PGVaPsBg',
			partnerAlias: null,
			friendCount: 34,
			photoCount: 290,
			reviewCount: 256,
			eliteYear: 2023,
		},
		comment: {
			text: 'All Printing came through last minute. I needed two copies of an 11x14 vector print and couldn&#39;t find anybody to do it the same day. All printing said it could be ready in an hour and it looked great, was in a protected envelope upon pickup, and was reasonably priced. <br><br>Highly recommend.',
			language: 'en',
		},
		localizedDate: '8/25/2018',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=jjax2gEAW0UDb3PGVaPsBg',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: [
			{
				id: 'GV28JssVY3wXzpKBzbuFhQ',
				comment: 'Thank you for your business &amp; It was our pleasure working with you !',
				owner: {
					id: 'me40mMCNo8DrYB7P6UNfYA',
					avatarSrc: 'https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/30s.jpg',
					avatarSrcSet: 'https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/ss.jpg 1.33x,https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/90s.jpg 3.00x',
					displayName: 'Nadia F.',
					role: 'Business Owner',
				},
				localizedDate: '5/15/2019',
			},
		],
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: '6ELIkS-Gai2qsV2PpyvA8A',
		userId: '7Z6zdltWhbC3JR5r21SznQ',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=7Z6zdltWhbC3JR5r21SznQ',
			src: 'https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png',
			srcSet: null,
			markupDisplayName: 'Adrian C.',
			displayLocation: 'Los Angeles, CA',
			altText: 'Adrian C.',
			userUrl: '/user_details?userid=7Z6zdltWhbC3JR5r21SznQ',
			partnerAlias: null,
			friendCount: 147,
			photoCount: 4,
			reviewCount: 33,
			eliteYear: null,
		},
		comment: {
			text: 'Very professional and knowledgeable. They even put effort into small jobs just to provide you a quote. I was shown mock-ups to know exactly what my stickers would look like with the cuts.',
			language: 'en',
		},
		localizedDate: '6/26/2021',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=7Z6zdltWhbC3JR5r21SznQ',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 0,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: null,
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
	{
		id: 'l563NcCQrejNqexcBFxWPw',
		userId: 'fuetZyX-IkVxH3QEM_ting',
		business: {
			id: 'lkqaz8kVhjXCqKOEKUkStA',
			alias: businessAlias,
			name: businessName,
			photoSrc: businessPhoto,
		},
		user: {
			link: '/user_details?userid=fuetZyX-IkVxH3QEM_ting',
			src: 'https://s3-media0.fl.yelpcdn.com/photo/nr6W9qH3fIcbtxCo7DUL1g/60s.jpg',
			srcSet: 'https://s3-media0.fl.yelpcdn.com/photo/nr6W9qH3fIcbtxCo7DUL1g/ms.jpg 1.67x,https://s3-media0.fl.yelpcdn.com/photo/nr6W9qH3fIcbtxCo7DUL1g/120s.jpg 2.00x,https://s3-media0.fl.yelpcdn.com/photo/nr6W9qH3fIcbtxCo7DUL1g/90s.jpg 1.50x,https://s3-media0.fl.yelpcdn.com/photo/nr6W9qH3fIcbtxCo7DUL1g/168s.jpg 2.80x,https://s3-media0.fl.yelpcdn.com/photo/nr6W9qH3fIcbtxCo7DUL1g/180s.jpg 3.00x',
			markupDisplayName: 'Nicholas A.',
			displayLocation: 'Oceanside, CA',
			altText: 'Nicholas A.',
			userUrl: '/user_details?userid=fuetZyX-IkVxH3QEM_ting',
			partnerAlias: null,
			friendCount: 0,
			photoCount: 3,
			reviewCount: 4,
			eliteYear: null,
		},
		comment: {
			text: 'It was a calm, warm afternoon when my boyfriend received a phone call from a printer saying they could no longer print his desired product at the very last minute. After calling dozens of possible printers, the only one who accepted the challenge and worked with him to get everything settled and squared away was All Printing.<br><br>Without them, we would have been up a creek without a paddle and we are so grateful for Nadia and her team for helping in every way they could. An excellent business, I highly recommend them!',
			language: 'en',
		},
		localizedDate: '5/4/2019',
		localizedDateVisited: null,
		rating: 5,
		photos: [],
		lightboxMediaItems: [],
		photosUrl: '/biz_photos/all-printing-services-encino?userid=fuetZyX-IkVxH3QEM_ting',
		totalPhotos: 0,
		feedback: {
			counts: {
				useful: 2,
				funny: 0,
				cool: 0,
			},
			userFeedback: {
				useful: false,
				funny: false,
				cool: false,
			},
			voterText: null,
		},
		isUpdated: false,
		businessOwnerReplies: [
			{
				id: '9X3v9MairAAv4UOimY-3dA',
				comment: 'It was a pleasure meeting you &amp; Todd . THANK YOU for your business &amp; choosing us for your print needs',
				owner: {
					id: 'me40mMCNo8DrYB7P6UNfYA',
					avatarSrc: 'https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/30s.jpg',
					avatarSrcSet: 'https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/ss.jpg 1.33x,https://s3-media0.fl.yelpcdn.com/buphoto/u8Wm83J5OvxTLiYsHxvrQw/90s.jpg 3.00x',
					displayName: 'Nadia F.',
					role: 'Business Owner',
				},
				localizedDate: '5/15/2019',
			},
		],
		appreciatedBy: null,
		previousReviews: null,
		tags: [],
	},
];

export default yelpReviews;
