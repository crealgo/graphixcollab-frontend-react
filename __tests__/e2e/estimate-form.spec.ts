import { test, type Page } from '@playwright/test';
import {
	deliveryMethods,
	materials,
	services
} from '../../src/forms/__data__/serviceOptions';
import { chance } from '../utils/chance';

const testFiles = [
	'__tests__/assets/file_example_GIF_1MB.gif',
	'__tests__/assets/file_example_JPG_1MB.jpg',
	'__tests__/assets/file_example_SVG_30kB.svg',
	'__tests__/assets/file_example_WEBP_1500kB.webp',
	'__tests__/assets/file-example_PDF_1MB.pdf'
];

const setup = async (page: Page) => {
	await page.goto('http://localhost:3000/estimate');
};

const submitForm = async (page: Page) => {
	await page.on('request', request => {
		console.log(request.url());
		console.log(request.postData());
	});

	await page.getByText('Get Estimate').click();
};

test('submit empty form', async ({ page }) => {
	await setup(page);

	await submitForm(page);
});

test('fill out and submit form', async ({ page }) => {
	await setup(page);

	await page.type("[name='name']", chance.name());
	await page.type("[name='email']", chance.email());
	await page.type("[name='phone']", chance.phone());
	await page.selectOption(
		"[name='material']",
		chance.pickone(materials).value
	);
	await page.selectOption("[name='service']", chance.pickone(services).value);

	await page.type(
		"[name='quantity']",
		chance.natural({ min: 10, max: 100 }).toString()
	);

	const testDate = chance.date();
	const testMonth = testDate.getMonth() + 1;
	const testDay = testDate.getDate();
	const testYear = testDate.getFullYear();
	const testDateString = `${testMonth}/${testDay}/${testYear}`;

	await page.type("[name='deadline']", testDateString);

	const randomRadio = chance.pickone(deliveryMethods).label;
	await page.getByLabel(randomRadio).check();

	await page.setInputFiles("[name='artwork']", testFiles);

	await submitForm(page);
});
