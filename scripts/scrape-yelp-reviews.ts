import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import Chance from 'chance';

const chance = new Chance();

type Review = {
	id: string;
	name: string;
	image?: string;
	text: string;
};

const urls = [
	'https://www.yelp.com/biz/fashion-greek-usc-los-angeles?rr=5',
	'https://www.yelp.com/biz/fashion-greek-usc-los-angeles?start=10&rr=5',
	'https://www.yelp.com/biz/fashion-greek-usc-los-angeles?start=20&rr=5',
];

const reviews: Review[] = [];

for await (const url of urls) {
	const response = await fetch(url);
	const html = await response.text();

	const $ = cheerio.load(html);

	const rawNames = $('#reviews ul li .user-passport-info').find('a');
	const rawReviews = $('#reviews ul li').find('p');
	const rawImages = $('#reviews ul li').find('img');

	for (let i = 0; i < rawNames.length; i++) {
		reviews.push({
			id: chance.guid({version: 4}),
			name: $(rawNames[i]).text(),
			image: $(rawImages[i]).attr('src'),
			text: $(rawReviews[i]).text(),
		});
	}
}

await fs.writeFile('src/content/yelp-reviews.json', JSON.stringify(reviews, null, 2));
