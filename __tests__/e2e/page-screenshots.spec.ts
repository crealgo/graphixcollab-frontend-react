import {test} from '@playwright/test';
import {paramCase} from 'change-case';

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

pages.forEach(path => {
	const pageName = path === '/' ? 'home' : path.replace('/', '');

	test(`${pageName} page`, async ({page}, {project}) => {
		await page.goto(`${devUrl}${path}`);
		await page.waitForLoadState('networkidle');

		const projectName = paramCase(project.name);

		await page.screenshot({
			fullPage: true,
			path: `__tests__/__snapshots__/${pageName}/${projectName}.png`,
		});
	});
});
