import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import Chance from 'chance';

type Review = {
	id: string;
	name: string;
	image: string | null;
	text: string;
};

async function main() {
	const chance = new Chance();

	const urls = [
		'https://www.yelp.com/biz/graphix-collab-los-angeles',
	];

	const reviews: Review[] = [];

	for await (const url of urls) {
		const response = await fetch(url);
		const html = await response.text();

		const $ = cheerio.load(html);

		const rawNames = $('#reviews ul li .user-passport-info').find('a');
		const rawReviews = $('#reviews ul li').find('p[class^=comment]');
		const rawImages = $('#reviews ul li a[href^=/user_detail]').find('img');

		for (let i = 0; i < rawNames.length; i++) {
			reviews.push({
				id: chance.guid({version: 4}),
				name: $(rawNames[i]).text(),
				image: $(rawImages[i]).attr('src') ?? null,
				text: $(rawReviews[i]).text(),
			});
		}
	}

	const cleanedReviews = reviews.filter(review => Object.values(review).every(value => !/greek/ig.test(value!)));

	// console.log(cleanedReviews);
	await fs.writeFile('packages/content/yelp-reviews.json', JSON.stringify(cleanedReviews, null, 2));
}

void main();
