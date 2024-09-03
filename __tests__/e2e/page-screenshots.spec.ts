import {test, expect} from '@playwright/test';
import {paramCase} from 'change-case';
import AxeBuilder from '@axe-core/playwright';

const {describe} = test;

const devUrl = 'https://graphixcollab.com';

const pages = [
	'/',
	'/about',
	'/book-appointment',
	'/contact-us',
	'/estimate',
	'/services',
	'/terms/privacy-policy',
	'/terms/terms-and-conditions',
];

describe('Page screenshots', () => {
	for (const path of pages) {
		const pageName = path === '/' ? 'home' : path.replace('/', '');

		test(`${pageName} should be accessible`, async ({page}, {project}) => {
			await page.goto(`${devUrl}${path}`);
			const accessibilityScanResults = await new AxeBuilder({page}).analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});

		// test(`${pageName} page`, async ({page}, {project}) => {
		// 	await page.goto(`${devUrl}${path}`);
		// 	await page.waitForTimeout(2000);

		// 	await expect(page).toHaveScreenshot({
		// 		fullPage: true,
		// 		animations: 'disabled',
		// 	});
		// });
	}
});
