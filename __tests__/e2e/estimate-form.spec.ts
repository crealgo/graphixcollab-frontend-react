import { test, type Page } from '@playwright/test';
import { materials, services } from '../../src/components/block/Estimator/data';
import { chance } from '../utils/chance';

const testFiles = [
	'playwright/assets/file_example_GIF_1MB.gif',
	'playwright/assets/file_example_JPG_1MB.jpg',
	'playwright/assets/file_example_SVG_30kB.svg',
	'playwright/assets/file_example_WEBP_1500kB.webp',
	'playwright/assets/file-example_PDF_1MB.pdf'
];

const submitForm = async (page: Page) => {
	await page.on('request', request => {
		console.log(request.url());
		console.log(request.postData());
	});

	await page.getByText('Get Estimate').click();
};

test.describe('Estimate Form', () => {
	test('fill out and submit form', async ({ page }) => {
		await page.goto('/estimate');

		await page.setInputFiles("[name='artwork']", testFiles);

		await page.type("[name='name']", chance.name());
		await page.type("[name='email']", chance.email());
		await page.type("[name='phone']", chance.phone());
		await page.selectOption(
			"[name='material']",
			chance.pickone(materials).value
		);
		await page.selectOption(
			"[name='service']",
			chance.pickone(services).value
		);

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

		await submitForm(page);
	});
});
