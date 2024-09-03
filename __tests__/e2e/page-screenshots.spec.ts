import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

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
	pages.forEach(path => {
		const pageName = path === '/' ? 'home' : path.replace('/', '');

		// test(`${pageName} should be accessible`, async ({page}, {project}) => {
		// 	const accessibilityScanResults = await new AxeBuilder({page}).analyze();

		// 	expect(accessibilityScanResults.violations).toEqual([]);
		// });

		test(`${pageName} page`, async ({page}) => {
			await page.goto(`${devUrl}${path}`);
			await page.waitForLoadState('networkidle');

			await expect(page).toHaveScreenshot({
				fullPage: true,
				animations: 'disabled',
			});
		});
	});
});
